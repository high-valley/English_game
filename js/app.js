const EMB=`<svg class="emb" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#141a35" stroke="#d9b45a" stroke-width="3"/><circle cx="50" cy="50" r="36" fill="none" stroke="#d9b45a" stroke-opacity=".35"/><path d="M50 8L58 42L92 50L58 58L50 92L42 58L8 50L42 42Z" fill="#f3cf6a" stroke="#fff3bf"/></svg>`;
const NAV={home:["🏠","ホーム"],study:["📖","勉強"],gacha:["🎰","ガチャ"],cards:["🃏","カード"]};

// 保存データ。保存先への読み書きは js/save.js（アプリ化したら、そちらだけを差し替える）
let S;
// 読み込んだデータ（引き継ぎコードで取り込んだデータも）を、今の形にそろえる
function initSave(o){
  S=o||{coins:100,owned:{},mastery:{}};
  // 単語データを入れ替えた（v2）ので、テスト版のカードと熟練度をリセットする。コインと連続学習は引き継ぐ
  if(S.v!==2)S={coins:S.coins==null?100:S.coins,owned:{},mastery:{},streak:S.streak||0,last:S.last||"",v:2};
  S.streak=S.streak||0;S.last=S.last||"";S.unlockedLevel=S.unlockedLevel||1;S.studyLevel=S.studyLevel||1;S.gachaLevel=S.gachaLevel||S.unlockedLevel;delete S.xp;
  syncLevels()}   // 熟練度から、解放済みのレベルを合わせる
initSave(loadSave());
const $=q=>document.querySelector(q);
function save(){writeSave(S);const e=$("#coins");if(e)e.textContent=S.coins}
function stars(n){return "★".repeat(n)+"☆".repeat(5-n)}
function rarity(){const R=GACHA_RATES[S.gachaLevel||S.unlockedLevel]||GACHA_RATES[1];let x=Math.random()*100,s=0;for(const k of LEVELS){s+=R[k];if(x<s)return k}return "COMMON"}
function draw(){let r=rarity(),p=WORDS.filter(w=>w.rarity===r);return p.length?p[Math.floor(Math.random()*p.length)]:WORDS[Math.floor(Math.random()*WORDS.length)]}
// 単語データにある単語だけを数える（データから消した単語のセーブが残っていても影響しない）
const ownedCount=()=>WORDS.filter(w=>S.owned[w.id]).length;
function icon(w){return w.ic||"✨"}
// small … 図鑑などの小さなカード。縮小版を使い、画面に入るまで読み込まない（500枚を一度に並べるため）
function artHtml(w,cls="card-art-image",small){
  const u=small?CARD_THUMB[w.en]:CARD_IMG[w.en],lz=small?' loading="lazy" decoding="async"':'';
  // 小さいカードは絵を1枚だけ置いて、枠に合わせて切り取る（上下が少し切れる。大事なものは中央の帯に描いてもらっている）。
  // 大きいカードと同じ「ぼかした絵を後ろに敷く」やり方は、500枚並べると重く、iPhone で落ちた
  if(u&&small)return `<img class="mini-art" src="${u}" alt="${w.en}"${lz} onerror="cardImgFail(this,${w.id})">`;
  if(u)return `<div class="fitwrap"><img class="fitbg" src="${u}" alt=""${lz}><img class="${cls}" src="${u}" alt="${w.en}"${lz} onerror="cardImgFail(this,${w.id})"></div>`;
  if(ART_SVG[w.en])return ART_SVG[w.en];
  return `<div class="art">${icon(w)}</div>`}
function cardImgFail(el,id){const w=WORDS.find(x=>x.id===id),wr=el.closest(".fitwrap")||el;if(!el.dataset.t){el.dataset.t=1;const u="assets/"+w.en+".svg?v="+ASSET_V;wr.querySelectorAll("img").forEach(i=>i.src=u);return}if(ART_SVG[w.en]){wr.outerHTML=ART_SVG[w.en];return}const d=document.createElement("div");d.className="art";d.textContent=icon(w);wr.replaceWith(d)}
const P=(x,y,w,h)=>`left:${x/3}%;top:${y/4}%;width:${w/3}%;height:${h/4}%`;
/* 名前プレートに収まる文字の大きさ（cqw）を返す。
   単語は2〜14文字と幅が大きく違い、文字数だけでは幅が決まらない
   （例：accommodate 11文字 の方が responsibility 14文字 より広い）。
   そこで実際に測って決める。avail はプレートで文字に使える幅（cqw）、max は上限 */
const PLATE_FONT='900 100px Georgia,"Times New Roman",serif';
function plateFont(en,avail,max){
  const c=plateFont._c||(plateFont._c=document.createElement("canvas").getContext("2d"));
  c.font=PLATE_FONT;
  const em=c.measureText(en).width/100;   // 文字の大きさ1あたりの幅
  return Math.min(max, avail/em).toFixed(2)}
// プレートの幅（cqw）から、文字に使える幅を出す。btn は発音ボタンのぶん
const plateAvail=(L,btn)=>L.plate[2]/3-(btn?9.2:4.5);
function hl(s,en){return s.replace(new RegExp("\\b("+en+"\\w*)","i"),"<b>$1</b>")}
function speak(t){try{const u=new SpeechSynthesisUtterance(t);u.lang="en-US";speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function cardArt(w,small){return CARD_IMG[w.en]||ART_SVG[w.en]?artHtml(w,undefined,small):`<div class="scn">${small?`<img class="cart" src="${sceneUrl(w.rarity)}" alt="">`:sceneSvg(w.rarity)}<i class="scn-pad"></i><div class="scn-ic">${icon(w)}</div></div>`}
// 絵の無いカードの背景（レアリティごとの風景）。小さいカードでは、SVG をカードごとに埋め込まず、
// レアリティごとに1つの画像にして使い回す（300枚ぶんの SVG を描くと重いため）
const SCENE_URL={};
function sceneUrl(r){return SCENE_URL[r]||(SCENE_URL[r]="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(sceneSvg(r)))}
function cardFace(w){
  const x=CARD_EXTRA[w.en],n=S.owned[w.id]||0,m=S.mastery[w.id]||0,ex=x?x.s:w.ex,tr=x?x.t:w.tr,F=uiFrame(w.rarity),L={...LAYOUT,...(F?LAYOUT_IMG:{}),...(F&&F.art?{art:F.art}:{}),...(F&&F.info?{info:F.info}:{}),...LAYOUT_OVERRIDE};
  return `<div class="cd3 r-${w.rarity}"><div class="cd3-in${F?" imgf":""}">
  <div class="cd3-art" style="${P(...L.art)}">${cardArt(w)}</div>${F?`<img class="cd3-frame" src="${F.url}" alt="">`:CARD_FRAME}
  <div class="cd3-star" style="${P(...L.star)}"><span>${"★".repeat(w.stars)}</span><em>${w.rarity==="LEGENDARY"?"LEGEND":w.rarity==="UNCOMMON"?"UNCOMMON":w.rarity}</em></div>
  <div class="cd3-word" style="${P(...L.word)}">WORD</div>
  <div class="cd3-plate" style="${P(...L.plate)}"><span style="font-size:${plateFont(w.en,plateAvail(L,1),10.4)}cqw">${w.en}</span><button onclick="event.stopPropagation();speak('${w.en}')" aria-label="発音">🔊</button></div>
  <div class="cd3-info${ex.length>68?" xlong":ex.length>46?" long":""}" style="${P(...L.info)}"><div class="cd3-pill">${w.pos}${w.pronunciation?`　/${w.pronunciation}/`:""}</div><div class="cd3-ja">${w.ja}</div><div class="cd3-div"></div><div class="cd3-ex">${hl(ex,w.en)}</div><div class="cd3-tr">${tr}</div></div>
  <div class="cd3-lv" style="${P(...L.lv)}"><b>Lv.${Math.max(1,n)}</b><i><u style="width:${m*20}%"></u></i><span>${m}/5</span></div>
  <div class="cd3-rar" style="${P(...L.rar)}"><svg viewBox="0 0 24 24"><path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" fill="#f1d27a"/></svg><span>×${n}</span></div>
  </div></div>`}

const ymd=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function markStudied(){const t=new Date(),y=new Date(t.getTime()-864e5),T=ymd(t);if(S.last===T)return;S.streak=S.last===ymd(y)?(S.streak||0)+1:1;S.last=T}
function streakNow(o=S){const t=new Date(),y=new Date(t.getTime()-864e5);return o.last===ymd(t)||o.last===ymd(y)?o.streak||0:0}
function toast(t){const e=document.createElement("div");e.className="toast";e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),1800)}
function shuffleOpts(correct,rar){const P=rar?WORDS.filter(w=>w.rarity===rar):WORDS,o=[correct];while(o.length<4){const x=P[Math.floor(Math.random()*P.length)].ja;if(!o.includes(x))o.push(x)}return o.sort(()=>Math.random()-.5)}

/* ホーム */
function home(){
  const owned=ownedCount(),mastered=WORDS.filter(w=>wordMastery(w.id)>=MASTERY_MAX).length,U=S.unlockedLevel,pct=levelPercent(U),pulls=Math.floor(S.coins/GACHA_COST);
  const chips=LEVELS.map((r,i)=>{const n=i+1,cls=n<U||(n===U&&pct>=100)?"ok":n===U?"on":"lock";return `<span class="${cls}">${cls==="lock"?"🔒":"Lv."+n}</span>`}).join("");
  $("#main").innerHTML=`<section class="hm2"><div class="hm2-logo">${UI.logo_title?`<img class="hm2-logoimg" src="${UI.logo_title}" alt="WORD GRIMOIRE">`:`${EMB}<div class="hm2-word"><span>WORD</span><span>GRIMOIRE</span></div>`}</div>
  <div class="hm2-tag">言葉を集めて、<br>世界を広げよう</div>
  <div class="hm2-grid"><div class="hm2-left">
    <div class="hm2-panel orn"><div class="hm2-ct"><span>学習レベル Lv.${U}</span><b>${pct}%</b></div><div class="hm2-cbar"><i style="width:${pct}%"></i></div><div class="hm2-lv">${chips}</div>
      <div class="hm2-stats"><div>${ico("stat_words","📚")}<span>コレクション</span><b>${owned}/${WORDS.length}</b></div><div>${ico("stat_ok","✅")}<span>覚えた</span><b>${mastered}</b></div><div>${ico("stat_streak","🔥")}<span>連続学習</span><b>${streakNow()}日</b></div></div></div>
    <div class="hm2-btns"><button class="hm2-b orn" onclick="showPage('study')">${ico("icon_study","📖","big")}<span>勉強</span></button><button class="hm2-b orn" onclick="showPage('cards')">${ico("icon_cards","🃏","big")}<span>カード</span></button></div>
  </div>
  <button class="hm2-gacha orn" onclick="showPage('gacha')">${pulls?`<em class="hm2-new">引ける！×${pulls}</em>`:""}<div class="hm2-pack">${ico("icon_gacha","🎁","pack")}</div><div class="hm2-plate">ガチャ</div><div class="hm2-price">1回 ${ico("icon_coin","🪙","c")} ${GACHA_COST}コイン</div></button></div>
  <div class="hm2-ver" id="hm2-ver">${verHtml()}</div></section>`;save()}

/* 版の表示と、新しい版の確認。
   マージしても、すぐには新しい版にならないことがある:
   ・GitHub Pages は index.html を最大10分キャッシュさせる（その間は古い index.html → 古い JS が動く）
   ・iPhone の Safari は、アプリに戻ってきてもページを読み直さず、メモリに残った古いページをそのまま続ける
   そこで、ホームの下に今動いている版（ASSET_V）を出し、サイトの index.html を（キャッシュを通さずに）
   取りに行って、より新しい ASSET_V があれば「更新」ボタンを出す。
   ※ ASSET_V は文字列として大きくなる順に付ける（20260924 → 20260924b → 20260925）。小さい版には更新させない */
let NEW_V=null,UPD_AT=0;
function verHtml(){return `ver ${ASSET_V}`+(NEW_V?` <button class="hm2-upd" onclick="applyUpdate()">新しい版 ${NEW_V} に更新</button>`:"")}
async function checkUpdate(){
  if(location.protocol==="file:"||Date.now()-UPD_AT<60000)return;UPD_AT=Date.now();
  try{const r=await fetch(location.pathname+"?check="+Date.now(),{cache:"no-store"});if(!r.ok)return;
    const m=(await r.text()).match(/const ASSET_V="([^"]+)"/);
    if(m&&m[1]>ASSET_V){NEW_V=m[1];const e=$("#hm2-ver");if(e)e.innerHTML=verHtml();refreshStartCache()}}catch(e){}}
// 版を URL に付けて開き直す。URL が変わるので、途中のキャッシュ（ブラウザ・GitHub Pages）を通らず新しい index.html が届く
function applyUpdate(){location.replace(location.pathname+"?v="+encodeURIComponent(NEW_V))}
/* 「?v=」を付けずに開いたときの index.html を、ブラウザのキャッシュごと新しくする。
   更新ボタンで開くのは「index.html?v=新しい版」で、版の確認も「?check=…」と、どちらも別の URL。
   ふだん開く「index.html」（ホーム画面のアイコンが開く URL）のキャッシュは古いまま残るので、
   更新した直後にアプリを閉じて開き直すと、最大10分（GitHub Pages のキャッシュの期間）古い版に戻っていた。
   cache:"reload" はキャッシュを使わずに取りに行き、届いたものでキャッシュを置き換える */
function refreshStartCache(){
  if(location.protocol==="file:")return;
  const dir=location.pathname.replace(/[^/]*$/,"");
  [dir,dir+"index.html"].forEach(u=>fetch(u,{cache:"reload"}).catch(()=>{}))}

/* カード図鑑 */
const FIL=[["ALL","すべて"],["COMMON","コモン"],["UNCOMMON","アンコモン"],["RARE","レア"],["EPIC","エピック"],["LEGENDARY","レジェンド"]];
// レア度ごとの解放数（所持している種類 / そのレア度の全種類）。ALL は全体
function rarityCount(k){const g=k==="ALL"?WORDS:WORDS.filter(w=>w.rarity===k);
  return[g.filter(w=>S.owned[w.id]).length,g.length]}
let CF={r:"ALL",q:""};
// 図鑑・結果一覧の小さいカード。枠画像があれば、カードと同じ枠を縮小して使う（無ければ従来の表示）
function miniLayout(F){return{...LAYOUT,...LAYOUT_IMG,...(F.art?{art:F.art}:{}),...(F.info?{info:F.info}:{}),...LAYOUT_OVERRIDE}}
function miniHtml(w,isNew){
  const F=uiFrame(w.rarity);
  if(!F)return `<button class="mc r-${w.rarity}" onclick="cardDetail(${w.id})"><div class="mc-art">${artHtml(w,"mc-img",1)}</div><div>${w.en}</div><div class="mc-st">${"★".repeat(w.stars)}</div>${isNew?'<em class="gr-new">NEW</em>':""}</button>`;
  const L=miniLayout(F),sz=plateFont(w.en,plateAvail(L,0),9.6);
  return `<button class="mcard r-${w.rarity}" onclick="cardDetail(${w.id})"><div class="cd3"><div class="cd3-in imgf"><div class="cd3-art" style="${P(...L.art)}">${cardArt(w,1)}</div><img class="cd3-frame" src="${F.mini||F.url}" alt="" loading="lazy" decoding="async">
  <div class="cd3-plate" style="${P(...L.plate)}"><span style="font-size:${sz}cqw">${w.en}</span></div><div class="mc3-stars" style="${P(...L.info)}">${"★".repeat(w.stars)}</div>${isNew?'<em class="gr-new">NEW</em>':""}</div></div></button>`}
function miniLockHtml(r){
  const F=uiFrame(r||"COMMON");
  if(!F)return `<div class="mc lock">?</div>`;
  const L=miniLayout(F);
  return `<div class="mcard lock r-${r||"COMMON"}"><div class="cd3"><div class="cd3-in imgf"><div class="cd3-art" style="${P(...L.art)}"><b class="mc3-q">?</b></div><img class="cd3-frame" src="${F.mini||F.url}" alt="" loading="lazy" decoding="async"><div class="cd3-plate" style="${P(...L.plate)}"><span style="font-size:8cqw">？？？</span></div></div></div></div>`}
const mini=w=>S.owned[w.id]?miniHtml(w):miniLockHtml(w.rarity);
/* 検索：英単語と日本語訳の、どちらの部分一致でも hit する
   例）"ap" → apple / grape / map、"りんご" → apple、"テーブル"・"てーぶる" → table
   入力はそろえてから比べる（normQ）：
     ・NFKC で、全角の英数（ａｐ）と半角カタカナ（ｱ）をふつうの字に直す
     ・カタカナ → ひらがな（「テーブル」でも「てーぶる」でも hit する）
     ・英字は小文字に
   ※ かな → 漢字の変換はしない（辞書が必要なため）。「ねこ」では「猫」に hit しない。
     スマホの入力では、変換を確定した「猫」で検索できる */
const normQ=s=>String(s||"").normalize("NFKC").replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60)).toLowerCase().trim();
// 検索用の索引。単語ごとに1回だけそろえておく（1文字打つごとに500語×2項目を変換しないため）
const SEARCH_IX={};WORDS.forEach(w=>{SEARCH_IX[w.id]={en:normQ(w.en),ja:normQ(w.ja)}});
// 一致した位置（英単語・日本語訳のうち、より前で一致したほう）。一致しなければ -1
function matchPos(w,q){const x=SEARCH_IX[w.id]||{en:normQ(w.en),ja:normQ(w.ja)},a=x.en.indexOf(q),b=x.ja.indexOf(q);
  if(a<0&&b<0)return -1;if(a<0)return b;if(b<0)return a;return Math.min(a,b)}
function matchesQuery(w,q){return !q||matchPos(w,q)>=0}
// 一致した位置が先頭に近い単語ほど先。同じ位置なら、アルファベット順（例: "ap" → apple, gap, map）
function sortByQuery(list,q){if(!q)return list;return [...list].sort((a,b)=>matchPos(a,q)-matchPos(b,q)||a.en.localeCompare(b.en))}
/* 一覧・件数・クリアボタンだけを差し替える。検索欄（#cd-q）には触らない。
   ★ iOS の日本語入力では、変換の確定前にも input イベントが飛ぶ。そのとき入力欄を
     作り直すと、新しい欄に value が入ったうえで IME が未確定の文字を入れ直すため、
     「り」と打つと「りり」になる。focus() や setSelectionRange() も変換を壊す。
     そのため、絞り込みでも検索でも入力欄は作り直さない。 */
function cardList(){
  const q=normQ(CF.q);
  const list=sortByQuery(WORDS.filter(w=>(CF.r==="ALL"||w.rarity===CF.r)&&matchesQuery(w,q)),q);
  const c=$("#cd-count"),g=$("#cd-g"),cl=$(".cd-clear");
  if(c)c.textContent=list.length+"件";
  if(g){if(CL.io)CL.io.disconnect();CL={list,n:0,io:null};
    g.innerHTML=list.length?"":`<div class="cd-empty">見つかりませんでした</div>`;cardMore()}
  if(cl)cl.classList.toggle("hide",!CF.q);
}
/* 図鑑は、はじめに CARD_CHUNK 枚だけ並べ、下の目印（.cd-more）が近づいたら続きを足す。
   500枚を一度に作ると、カード画面を開くのが遅く（1.2秒。スマホ相当の CPU）、
   全部持っているデータで一気にスクロールすると iPhone の Safari がページごと落ちた */
const CARD_CHUNK=24;let CL={list:[],n:0,io:null};
function cardMore(){
  const g=$("#cd-g");if(!g)return;
  const old=g.querySelector(".cd-more");if(old){if(CL.io)CL.io.unobserve(old);old.remove()}
  const part=CL.list.slice(CL.n,CL.n+CARD_CHUNK);CL.n+=part.length;
  g.insertAdjacentHTML("beforeend",part.map(mini).join("")+(CL.n<CL.list.length?'<i class="cd-more"></i>':""));
  const m=g.querySelector(".cd-more");if(!m)return;
  if(!CL.io)CL.io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting))cardMore()},{rootMargin:"0px 0px 1200px 0px"});
  CL.io.observe(m)}
function cards(){
  const found=ownedCount();
  $("#main").innerHTML=`<section class="cd"><div class="cd-top orn"><div class="cd-h">${ico("nav_cards","🃏")}<div><h2>カード図鑑</h2><small>${found}/${WORDS.length}種類を発見</small></div></div>
  <div class="cd-search"><input id="cd-q" type="search" enterkeyhint="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="英単語・日本語で検索（例: ap / りんご）" value="${CF.q?CF.q.replace(/"/g,"&quot;"):""}" oninput="cardSearch(this.value)"><button class="cd-clear hide" onclick="cardClear()" aria-label="クリア">✕</button></div>
  <div class="cd-f" id="cd-f">${FIL.map(([k,t])=>{const[o,n]=rarityCount(k);return `<button class="${CF.r===k?"on":""} f-${k}" onclick="cardFilter('${k}')">${k==="ALL"?"":`<i class="gem"></i>`}${t}<b>${o}/${n}</b></button>`}).join("")}</div></div>
  <div class="cd-count" id="cd-count"></div>
  <div class="cd-g" id="cd-g"></div></section>`;
  cardList();
}
// 絞り込みも、押したボタンの見た目を変えるだけにする（入力欄を作り直さない）
function cardFilter(r){CF.r=r;document.querySelectorAll("#cd-f button").forEach((b,i)=>b.classList.toggle("on",FIL[i][0]===r));cardList()}
function cardSearch(v){CF.q=v;cardList()}
// クリアは、入力欄の中身を消す（要素は残す）
function cardClear(){const i=$("#cd-q");if(i){i.value="";i.focus()}CF.q="";cardList()}

function cardDetail(id){
  const w=WORDS.find(x=>x.id===id),n=S.owned[id]||0,m=S.mastery[id]||0,d=document.createElement("div");
  d.className="sheet";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="sheet-in r-${w.rarity}"><div class="sd-card">${cardFace(w)}</div>
  <div class="rv-panel" style="width:100%;animation:none"><div><span>コレクション Lv.${n}</span><b>×${n}</b></div><div><span>熟練度</span><b>${m}/5</b></div></div></div>`;
  document.body.appendChild(d)}

/* 画面切り替え・起動 */
let CUR="home";
function applyUI(){buildNav();const ci=$(".coins .ci");if(ci)ci.innerHTML=ico("icon_coin","🪙");const gi=$("#gear");if(gi&&UI_ICO.icon_gear)gi.innerHTML=ico("icon_gear","⚙");const hl=$("#hdLogo");if(hl&&UI.logo_title&&!hl.querySelector("img"))hl.innerHTML=`<img src="${UI.logo_title}" alt="WORD GRIMOIRE">`;const ap=$(".app");if(UI.app_bg&&ap)ap.style.background=`linear-gradient(#0d1230cc,#060812ee),url('${UI.app_bg}') center top/cover fixed`;const sp=$(".sp");if(sp)sp.innerHTML=splashInner()}
const PAGE_BG={home:"home_bg",study:"study_bg",gacha:"gacha_bg",cards:"cards_bg"};   // 画面ごとの背景。無い分は home_bg に落ちる（ui_images.js の BG_FALLBACK）
/* ホームの背景は、日本時間の 6〜18時は昼の絵（home_bg_day）、18〜6時は夜の絵（home_bg）。
   端末の時計の地域に関係なく日本時間で決める。昼の絵が無ければ、いつも夜の絵 */
const DAY_FROM=6,DAY_TO=18;
const jstHour=()=>new Date(Date.now()+9*3600e3).getUTCHours();
const isDayJST=()=>{const h=jstHour();return h>=DAY_FROM&&h<DAY_TO};
function bgSlot(p){if(p==="home"&&UI.home_bg_day&&isDayJST())return "home_bg_day";return PAGE_BG[p]||"home_bg"}
function setBg(p){let b=$("#bg");if(!b){b=document.createElement("div");b.id="bg";$(".app").prepend(b)}
  const s=bgSlot(p);b.dataset.slot=s;document.body.classList.toggle("is-day",s==="home_bg_day");b.innerHTML=bgScene(s)}
/* 開いたまま 6時・18時をまたいだら、ホームにいるときだけ背景を入れ替える（ふわっと重ねて、古い絵を消す）。
   別の画面にいるときは何もしない（ホームに戻ったときに setBg が正しい絵を出す）。
   1分ごとと、アプリに戻ってきたときに確かめる */
function bgTick(){
  const b=$("#bg");if(CUR!=="home"||!b||!UI_READY)return;
  const s=bgSlot("home");if(b.dataset.slot===s)return;
  const old=[...b.querySelectorAll("img.scene,svg")];b.dataset.slot=s;document.body.classList.toggle("is-day",s==="home_bg_day");
  b.insertAdjacentHTML("beforeend",bgScene(s));const n=b.lastElementChild;
  if(n){n.classList.add("bg-swap");setTimeout(()=>old.forEach(x=>x.remove()),1300)}else old.forEach(x=>x.remove())}
setInterval(bgTick,60000);
function buildNav(){document.querySelectorAll("nav button").forEach(b=>{const p=b.dataset.p,[e,t]=NAV[p];b.innerHTML=`<i>${ico("nav_"+p,e)}</i>${t}`})}
function openSettings(){const d=document.createElement("div");d.className="sheet";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="sheet-in"><h3 style="margin:0 0 12px;color:#f4d477;font-family:Georgia,serif">設定</h3><div class="sd-ex">${saveSummary(S)}</div>
  <div class="xf"><h4>データの引き継ぎ</h4>
   <p>別の端末やブラウザで続きを遊ぶときや、データの控えを残すときに使います。リンクかコードを、LINE・AirDrop・メモなどで送ってください。</p>
   <div class="xf-row"><button class="xf-btn" id="xf-link" disabled>リンクを送る</button><button class="xf-btn" id="xf-copy" disabled>コードをコピー</button></div>
   <textarea class="xf-code" id="xf-out" readonly rows="2" placeholder="コードを作っています…"></textarea>
   <div class="xf-msg" id="xf-msg"></div>
   <h4>受け取ったデータを取り込む</h4>
   <textarea class="xf-code" id="xf-in" rows="2" placeholder="引き継ぎコード（またはリンク）をここに貼り付け"></textarea>
   <button class="xf-btn xf-wide" id="xf-read">取り込む</button>
   <div class="xf-msg" id="xf-err"></div></div>
  <button class="gold-btn" style="margin-bottom:10px" onclick="this.closest('.sheet').remove()">閉じる</button><button class="hm2-reset" onclick="if(confirm('セーブデータをすべて消します。よろしいですか？')){clearSave();location.reload()}">セーブデータをリセット</button></div>`;document.body.appendChild(d);
  // コードは開いたときに作っておく。押してから作ると、iPhone の Safari では共有・コピーが「操作の直後ではない」として断られるため
  const msg=t=>{d.querySelector("#xf-msg").textContent=t};
  makeTransferCode(S).then(code=>{
    const out=d.querySelector("#xf-out"),url=transferLink(code);out.value=code;out.placeholder="";
    const copy=(t,ok)=>{const done=()=>msg(ok),fail=()=>{out.focus();out.select();msg("自動でコピーできませんでした。上の欄を長押ししてコピーしてください。")};
      navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(done,fail):fail()};
    const L=d.querySelector("#xf-link"),C=d.querySelector("#xf-copy");L.disabled=C.disabled=false;
    L.onclick=()=>{if(navigator.share)navigator.share({title:"WORD GRIMOIRE の引き継ぎ",url}).then(()=>msg("送りました。受け取った端末でリンクを開いてください。"),e=>{if(e&&e.name!=="AbortError")copy(url,"リンクをコピーしました。")});
      else copy(url,"リンクをコピーしました。受け取る端末で開いてください。")};
    C.onclick=()=>copy(code,"コードをコピーしました。受け取る端末の「設定」で貼り付けてください。")},
    ()=>msg("引き継ぎコードを作れませんでした。"));
  d.querySelector("#xf-read").onclick=()=>{const e=d.querySelector("#xf-err");e.textContent="";
    readTransferCode(d.querySelector("#xf-in").value).then(o=>{d.remove();confirmImport(o)},x=>{e.textContent=x.message})}}
// 「コイン〇／カード〇種類／連続〇日」。取り込む前に、今のデータと取り込むデータを並べて見せる
function saveSummary(o){const own=WORDS.filter(w=>(o.owned||{})[w.id]).length;return `コイン ${o.coins}　／　カード ${own}種類　／　連続学習 ${streakNow(o)}日`}
function confirmImport(o){const d=document.createElement("div");d.className="sheet";
  d.innerHTML=`<div class="sheet-in"><h3 style="margin:0 0 12px;color:#f4d477;font-family:Georgia,serif">データを取り込みますか？</h3>
   <div class="sd-ex"><span>取り込むデータ</span><br>${saveSummary(o)}</div>
   <div class="sd-ex"><span>この端末の今のデータ（取り込むと消えます）</span><br>${saveSummary(S)}</div>
   <button class="gold-btn" style="margin-bottom:10px" id="xf-ok">上書きして取り込む</button><button class="xf-btn xf-wide" id="xf-no">やめる</button></div>`;
  document.body.appendChild(d);
  d.querySelector("#xf-no").onclick=()=>d.remove();
  d.querySelector("#xf-ok").onclick=()=>{initSave(o);save();location.reload()}}
const PAGES=["home","study","gacha","cards"];
function showPage(p){clearTimeout(STNEXT);CUR=p;PAGES.forEach(x=>document.body.classList.toggle("is-"+x,x===p));setBg(p);document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("on",x.dataset.p===p));({home,study,gacha,cards})[p]();window.scrollTo(0,0)}
buildNav();document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.p)));
const gear=$("#gear");if(gear)gear.onclick=openSettings;
showPage("home");
document.body.classList.add("ui-wait");
const uiRefresh=()=>{document.body.classList.remove("ui-wait");applyUI();if(!$(".gx")&&!$(".sheet"))showPage(CUR)};
setTimeout(()=>{if(!UI_READY){UI_READY=true;uiRefresh()}},2200);
uiInit(uiRefresh).then(()=>{if(Object.keys(UI_FRAME).length)uiRefresh()});
function splashInner(){const r=UI_READY;return `${bgScene("splash_bg")}${r?(UI.logo_emblem?`<img class="sp-emb" src="${UI.logo_emblem}" alt="">`:EMB):""}${r?(UI.logo_title?`<img class="sp-tt" src="${UI.logo_title}" alt="WORD GRIMOIRE">`:`<div class="sp-title">WORD GRIMOIRE</div>`):""}<div class="sp-tag">もっと知る。もっと強くなる。</div><div class="sp-hint">TAP TO START</div>`}
// 更新ボタンで開いた直後。URL から ?v= を消し、ふだん開く URL のキャッシュも新しい版にしておく
if(/[?&]v=/.test(location.search)){history.replaceState(null,"",location.pathname);refreshStartCache()}
// 引き継ぎリンク（#import=…）で開いたとき。# を消してから、取り込むかどうかを聞く。
// 開いているページにリンクを貼って開き直すと、ページは読み直されず # だけが変わるので、hashchange でも見る
function importFromHash(){if(!location.hash.startsWith("#import="))return;const t=location.hash;history.replaceState(null,"",location.pathname+location.search);
  document.querySelectorAll(".sheet").forEach(x=>x.remove());readTransferCode(t).then(confirmImport,e=>alert(e.message))}
importFromHash();window.addEventListener("hashchange",importFromHash);
setTimeout(checkUpdate,3000);
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"){checkUpdate();bgTick()}});
(function splash(){
  try{if(sessionStorage.wqSplash)return;sessionStorage.wqSplash=1}catch(e){}
  const s=document.createElement("div");s.className="sp";
  s.innerHTML=splashInner();
  const close=()=>{s.classList.add("out");setTimeout(()=>s.remove(),700)};
  s.onclick=close;document.body.appendChild(s)})();   // タップで閉じる（自動では閉じない）
