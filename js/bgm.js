/* BGM。画面ごとに曲を変える（SPEC.md §9.5）。
   ・曲は assets/bgm/。tools/make_bgm.py で音の大きさ（-16 LUFS）と形式をそろえ、bake_assets.py が版を一覧に書く
   ・画面を切り替えるときは、前の曲を下げながら、少し遅れて次の曲を上げる（クロスフェード）。
     曲ごとに止めた位置を覚えていて、その画面に戻ると続きから流れる
   ・音量は Web Audio の GainNode で変える。iPhone の Safari は <audio> の volume を変えられない（常に 1）ため
   ・ブラウザは、画面に触れる前に音を出させない。最初のタップ（起動画面の TAP TO START）で鳴らし始める。
     タップの処理の中で play() しないと iPhone で断られるので、切り替えも showPage の中で同期して呼ぶ
   ・アプリを裏に回したら止め、戻ってきたら続きから流す（Safari は裏でも <audio> を鳴らし続けるため）
   ・マナーモード（消音スイッチ）のときは鳴らさない。ほかのアプリの音楽も止めない（audioSession "ambient"）
   ・発音（speak）の間は、BGM を下げて英語を聞き取りやすくする
   ・オン・オフと音量は設定。セーブの S.bgm（無ければオン）と S.bgmVol（0〜100、無ければ BGM_VOL_DEF） */
const BGM_TRACKS={home:"home",study:"study",gacha:"gacha",cards:"card"};
// 音量。設定のつまみ（0〜100）を2乗して GainNode の値にする（耳は音の大きさを対数で感じるので、まっすぐ比例させると
// つまみの下半分でほとんど聞こえず、上半分で変化がない）。はじめの 80 は 0.64 で、つまみを付ける前の 0.7 とほぼ同じ。
// 100 で 1.0（曲そのものの大きさ。曲は -16 LUFS・ピーク -1.5dB にそろえてあるので、これ以上は上げない）
const BGM_VOL_DEF=80;
const bgmVolPct=()=>S&&Number.isFinite(S.bgmVol)?S.bgmVol:BGM_VOL_DEF;
const bgmVol=()=>(bgmVolPct()/100)**2;
const BGM_DUCK=0.3;      // 発音の間は、この割合まで下げる
const BGM_OUT=0.8,BGM_IN=1.6,BGM_GAP=0.3;   // 切り替え: 前の曲を0.8秒で下げ、0.3秒おいて次の曲を1.6秒で上げる
const BGM={ctx:null,ch:{},cur:null,page:null,started:false,blocked:false,duck:false,duckT:0};
try{if(navigator.audioSession)navigator.audioSession.type="ambient"}catch(e){}

const bgmUrl=n=>(typeof UI_MANIFEST!=="undefined"&&UI_MANIFEST.bgm&&UI_MANIFEST.bgm[n])||`assets/bgm/${n}.mp3?v=${ASSET_V}`;
const bgmOn=()=>!S||S.bgm!==false;
function bgmCh(n){
  if(BGM.ch[n])return BGM.ch[n];
  const a=new Audio();a.loop=true;a.preload="auto";a.setAttribute("playsinline","");a.src=bgmUrl(n);
  const c={a,g:null,v:0,fadeT:0,stopT:0};
  if(BGM.ctx){try{c.g=BGM.ctx.createGain();c.g.gain.value=0;BGM.ctx.createMediaElementSource(a).connect(c.g).connect(BGM.ctx.destination)}catch(e){c.g=null}}
  if(!c.g)a.volume=0;
  return BGM.ch[n]=c}
// 音量を v まで、delay 秒おいて dur 秒かけて変える
function bgmFade(c,v,dur,delay=0){
  c.v=v;clearInterval(c.fadeT);
  if(c.g){const t=BGM.ctx.currentTime,g=c.g.gain,now=g.value;
    g.cancelScheduledValues(t);g.setValueAtTime(now,t);g.setValueAtTime(now,t+delay);g.linearRampToValueAtTime(v,t+delay+Math.max(dur,.01));return}
  // Web Audio が無いときは volume を少しずつ変える（iPhone 以外）
  const a=c.a,from=a.volume,t0=performance.now()+delay*1000;
  c.fadeT=setInterval(()=>{const k=Math.min(1,Math.max(0,(performance.now()-t0)/(dur*1000||1)));a.volume=from+(v-from)*k;if(k>=1)clearInterval(c.fadeT)},40)}
const bgmTarget=()=>bgmVol()*(BGM.duck?BGM_DUCK:1);
function bgmPlay(c){if(!c.a.paused)return;c.a.play().catch(()=>{BGM.blocked=true})}
// 今の画面・設定・アプリが見えているかに合わせて、流す曲を決める
function bgmSync(){
  const vis=document.visibilityState==="visible";
  const want=BGM.started&&vis&&bgmOn()?BGM_TRACKS[BGM.page]||null:null;
  if(want===BGM.cur)return;
  const prev=BGM.cur&&BGM.ch[BGM.cur];BGM.cur=want;
  if(prev){
    clearTimeout(prev.stopT);
    if(!vis){bgmFade(prev,0,0);prev.a.pause()}   // 裏に回したときは、すぐ止める（裏ではタイマーが遅れる）
    else{bgmFade(prev,0,BGM_OUT);prev.stopT=setTimeout(()=>{if(BGM.ch[BGM.cur]!==prev)prev.a.pause()},BGM_OUT*1000+100)}}
  if(want){const c=bgmCh(want);clearTimeout(c.stopT);bgmPlay(c);bgmFade(c,bgmTarget(),BGM_IN,prev&&vis?BGM_GAP:0)}}
function bgmPage(p){BGM.page=p;bgmSync()}
function bgmSet(on){S.bgm=!!on;save();bgmSync()}
// 音量のつまみ。動かしている間は今の曲にすぐ反映し（keep=false）、指を離したときにセーブする（keep=true）
function bgmSetVol(v,keep){S.bgmVol=Math.max(0,Math.min(100,Math.round(+v||0)));
  const c=BGM.cur&&BGM.ch[BGM.cur];if(c)bgmFade(c,bgmTarget(),.08);if(keep)save()}
// 発音の間だけ下げる。終わりの知らせが来ない端末があるので、最長でも ms で戻す
function bgmDuck(on,ms=4000){
  clearTimeout(BGM.duckT);BGM.duck=on;if(on)BGM.duckT=setTimeout(()=>bgmDuck(false),ms);
  const c=BGM.cur&&BGM.ch[BGM.cur];if(c)bgmFade(c,bgmTarget(),on?.15:.6)}
// 画面に触れたら鳴らし始める。iPhone で止められた再生（戻ってきたときなど）も、ここでやり直す
function bgmUnlock(){
  if(!BGM.started){BGM.started=true;
    try{const AC=window.AudioContext||window.webkitAudioContext;if(AC)BGM.ctx=new AC()}catch(e){BGM.ctx=null}}
  if(BGM.ctx&&BGM.ctx.state!=="running")BGM.ctx.resume().catch(()=>{});
  if(BGM.blocked){BGM.blocked=false;const c=BGM.cur&&BGM.ch[BGM.cur];if(c)bgmPlay(c)}
  bgmSync()}
["touchend","click","keydown"].forEach(e=>document.addEventListener(e,bgmUnlock));
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==="visible"&&BGM.ctx&&BGM.ctx.state!=="running")BGM.ctx.resume().catch(()=>{});
  bgmSync()});
window.addEventListener("pagehide",()=>{Object.values(BGM.ch).forEach(c=>c.a.pause());BGM.cur=null});
