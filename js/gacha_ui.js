/* ガチャ画面と開封演出（app.js から分離）
   使う画像（assets/ui/ に置くと自動で使われる。無ければ従来の表示）:
     gacha_bg … ガチャ画面と演出の背景 / gacha_pack … パック / card_back … カード裏面 / magic_circle … 魔法陣 */
let GM="one",GN=10;
const maxN=()=>Math.max(1,Math.min(100,Math.floor(S.coins/GACHA_COST)));
const RORD=LEVELS;
const RCOL={COMMON:"#9fb4dc",UNCOMMON:"#3ecf7a",RARE:"#3aa0ff",EPIC:"#b26bff",LEGENDARY:"#ffb43a"};
const packSrc=()=>UI.gacha_pack||"assets/pack.svg",backSrc=()=>UI.card_back||"assets/card_back.svg";
function circleSvg(){
  if(UI.magic_circle)return `<img class="mcirc" src="${UI.magic_circle}" alt="">`;
  let t="",p="";for(let i=0;i<24;i++){const a=i*15*Math.PI/180,r1=i%2?90:86;t+=`<line x1="${100+Math.sin(a)*r1}" y1="${100-Math.cos(a)*r1}" x2="${100+Math.sin(a)*96}" y2="${100-Math.cos(a)*96}"/>`}
  for(let i=0;i<8;i++){const a=i*45*Math.PI/180,b=(i*45+135)*Math.PI/180;p+=`<line x1="${100+Math.sin(a)*70}" y1="${100-Math.cos(a)*70}" x2="${100+Math.sin(b)*70}" y2="${100-Math.cos(b)*70}"/>`}
  return `<svg class="mcirc" viewBox="0 0 200 200"><g fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="100" cy="100" r="97"/><circle cx="100" cy="100" r="84" stroke-dasharray="1.5 4"/><circle cx="100" cy="100" r="70"/><circle cx="100" cy="100" r="46" stroke-opacity=".7"/>${t}${p}<path d="M100 40l8 52 52 8-52 8-8 52-8-52-52-8 52-8z" stroke-opacity=".8"/></g></svg>`}

/* ---------- ガチャ画面 ---------- */
function gacha(){
  GN=Math.min(GN,maxN());const multi=GM==="multi";
  $("#main").innerHTML=`<section class="gp2"><div class="gp2-head"><h2>ガチャ</h2><p>勉強してコインを貯めてカードを引こう</p></div>
  <div class="gp2-stage" onclick="pullBtn()"><div class="gx-circle on">${circleSvg()}</div><i class="gp2-glow"></i><img class="gp2-pack" src="${packSrc()}" alt="パック"></div>
  <div class="gp2-panel orn"><div class="gm-tabs"><button class="${multi?"":"on"}" onclick="setGM('one')">1回</button><button class="${multi?"on":""}" onclick="setGM('multi')">まとめて</button></div>
  ${multi?`<div class="gm-box"><div class="gm-step"><button onclick="gnSet(GN-10)">−10</button><button onclick="gnSet(GN-1)">−</button><input id="gn" type="number" inputmode="numeric" min="1" max="${maxN()}" value="${GN}" oninput="gnSet(this.value,1)"><button onclick="gnSet(GN+1)">＋</button><button onclick="gnSet(GN+10)">＋10</button></div><div class="gm-quick"><button onclick="gnSet(10)">10回</button><button onclick="gnSet(50)">50回</button><button onclick="gnSet(999)">最大 ${maxN()}回</button></div></div>`:""}
  <div class="gp-price" id="gp-price"></div>
  <div class="gp2-rc">現在 Lv.${S.unlockedLevel} の排出率（勉強でレベルを上げると更新）</div><div class="rates-row">${currentRates().map(([r,p])=>`<div class="r-${r}${p?"":" z"}"><i class="gem"></i>${r}<b>${p}%</b></div>`).join("")}</div></div>
  <button class="gold-btn" id="gp-btn" onclick="pullBtn()"></button></section>`;gnLabel();save()}
function gnLabel(){const n=GM==="multi"?GN:1;$("#gp-price").innerHTML=n===1?`1回 🪙 ${GACHA_COST}コイン`:`${n}回 🪙 ${n*GACHA_COST}コイン<small>　所持 🪙 ${S.coins}</small>`;$("#gp-btn").textContent=`🎁 ${n}回引く`}
function setGM(m){GM=m;gacha()}
function gnSet(v,typing){GN=Math.max(1,Math.min(maxN(),parseInt(v)||1));const i=$("#gn");if(i&&!typing)i.value=GN;gnLabel()}
function pullBtn(){GM==="multi"&&GN>1?pullMulti(GN):pull()}

/* ---------- 開封演出 ----------
   暗転 → 魔法陣 → パック出現 → 揺れる → 光が漏れる → 開く → カードが飛び出す → （タップで）回転 → 表面 → レアリティ表示 */
function shards(n){let h="";for(let i=0;i<n;i++)h+=`<i class="shard" style="--a:${i*360/n}deg;--d:${110+Math.random()*100}px"></i>`;return h}
function sparks(n){let h="";for(let i=0;i<n;i++)h+=`<i class="gx-spark" style="left:${Math.random()*100}%;--dl:${Math.random()*1.4}s;--dr:${1.6+Math.random()*1.6}s;--sz:${2+Math.random()*4}px"></i>`;return h}
function packAnim(rar,done){
  const lv=Math.max(0,RORD.indexOf(rar)),g=document.createElement("div");g.className="gx";g.dataset.lv=lv;
  g.style.setProperty("--rc",RCOL[rar]);g.style.setProperty("--gl",(14+lv*12)+"px");
  const bg=UI.gacha_bg||UI.home_bg;if(bg)g.style.background=`linear-gradient(#0a0e2277,#04050cdd),url('${bg}') center/cover`;
  g.innerHTML=`<button class="gx-skip">SKIP ›</button><div class="gx-flash"></div><div class="gx-stage"><div class="gx-rays"></div><div class="gx-circle">${circleSvg()}</div><i class="gx-glow"></i>
  <div class="gx-pk"><img class="pk-body" src="${packSrc()}" alt=""><img class="pk-top" src="${packSrc()}" alt=""><i class="pk-seam"></i></div><img class="gx-cb" src="${backSrc()}" alt=""></div>`;
  document.body.appendChild(g);
  const st=g.querySelector(".gx-stage"),pk=g.querySelector(".gx-pk"),T=[],at=(ms,f)=>T.push(setTimeout(f,ms)),ex=lv>=3?600:0;let ended=false;
  const end=()=>{if(ended)return;ended=true;done(g,st)};
  requestAnimationFrame(()=>g.classList.add("dark"));
  at(300,()=>st.classList.add("circle"));
  at(1000,()=>pk.classList.add("drop"));
  at(1900,()=>pk.classList.add("shake1"));
  at(2500+ex/2,()=>{pk.classList.remove("shake1");pk.classList.add("shake2");st.classList.add("leak")});
  at(3200+ex,()=>{st.classList.add("open");st.insertAdjacentHTML("beforeend",shards(16+lv*8)+(lv>=1?sparks(10+lv*8):""));if(lv>=4)g.classList.add("shaking")});
  at(4000+ex,end);
  g.querySelector(".gx-skip").onclick=e=>{e.stopPropagation();T.forEach(clearTimeout);st.classList.add("skipped","open");end()}}
function pull(){
  if($(".gx"))return;
  if(S.coins<GACHA_COST){toast("コインが足りません。まず勉強しよう！");return}
  S.coins-=GACHA_COST;const w=draw(),before=S.owned[w.id]||0;S.owned[w.id]=before+1;save(); // 演出中に閉じてもカードは失われない
  packAnim(w.rarity,(g,st)=>{st.insertAdjacentHTML("beforeend",`<div class="gx-tap">« TAP TO OPEN »</div>`);st.onclick=()=>reveal(g,st,w,before)})}
function pullMulti(n){
  if($(".gx"))return;
  if(S.coins<GACHA_COST*n){toast(`コインが足りません（必要 ${GACHA_COST*n}）`);return}
  S.coins-=GACHA_COST*n;const res=[];
  for(let i=0;i<n;i++){const w=draw(),before=S.owned[w.id]||0;S.owned[w.id]=before+1;res.push({w,isNew:before===0})}
  save();res.sort((a,b)=>b.w.stars-a.w.stars);
  packAnim(res[0].w.rarity,g=>setTimeout(()=>showResults(g,res,n),700))}
function showResults(g,res,n){
  const cnt={};res.forEach(r=>cnt[r.w.rarity]=(cnt[r.w.rarity]||0)+1);const nw=res.filter(r=>r.isNew).length;
  g.innerHTML=`<div class="gr"><div class="gr-title">✨ ${n}回ガチャ結果 ✨</div>
  <div class="gr-sum">${LEVELS.map(r=>cnt[r]?`<span class="r-${r}"><i class="gem"></i>${cnt[r]}</span>`:"").join("")}<b>NEW ${nw}</b></div>
  <div class="gr-grid">${res.map(r=>miniHtml(r.w,r.isNew)).join("")}</div>
  <div class="gr-note">タップでカードを拡大</div><button class="gold-btn" onclick="closeGx()">OK</button></div>`}
function reveal(g,st,w,before){
  st.onclick=null;st.classList.add("flip");const lv=RORD.indexOf(w.rarity);
  setTimeout(()=>{g.innerHTML=`<div class="gx-flash on"></div><div class="gx-banner">${lv>=2?"✦ ":""}${w.rarity}${lv>=2?" ✦":""}</div><div class="rv r-${w.rarity}" data-lv="${lv}">${lv>=2?'<i class="rv-rays"></i>':""}${cardFace(w)}<div class="rv-new">${before===0?"NEW!":"GET!"}</div></div>
  <div class="rv-panel"><div><span>コレクション Lv.${S.owned[w.id]}</span><b>×${S.owned[w.id]}</b></div><div><span>熟練度</span><b>${S.mastery[w.id]||0}/5</b></div></div>
  <button class="gold-btn" onclick="closeGx()">OK</button>${lv>=3?sparks(24):""}`},450)}
function closeGx(){const g=$(".gx");if(g)g.remove();gacha()}
