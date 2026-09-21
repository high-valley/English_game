const RATES=[["COMMON",35],["UNCOMMON",30],["RARE",20],["EPIC",10],["LEGENDARY",5]];
const RN={COMMON:"COMMON",UNCOMMON:"UNCOMMON",RARE:"RARE",EPIC:"EPIC",LEGENDARY:"LEGENDARY"};
const EMB=`<svg class="emb" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#141a35" stroke="#d9b45a" stroke-width="3"/><circle cx="50" cy="50" r="36" fill="none" stroke="#d9b45a" stroke-opacity=".35"/><path d="M50 8L58 42L92 50L58 58L50 92L42 58L8 50L42 42Z" fill="#f3cf6a" stroke="#fff3bf"/></svg>`;
const NAV={home:["🏠","ホーム"],study:["📖","勉強"],gacha:["🎰","ガチャ"],cards:["🃏","カード"],review:["🧠","復習"]};

// 保存データ（従来と同じキー。xp は追加項目）
let S=JSON.parse(localStorage.wordQuestDemo||"null")||{coins:100,owned:{},mastery:{}};
// 単語データを入れ替えた（v2）ので、テスト版のカードと熟練度をリセットする。コインと連続学習は引き継ぐ
if(S.v!==2)S={coins:S.coins==null?100:S.coins,owned:{},mastery:{},xp:0,streak:S.streak||0,last:S.last||"",v:2};
S.xp=S.xp||0;S.streak=S.streak||0;S.last=S.last||"";
const $=q=>document.querySelector(q);
function save(){localStorage.wordQuestDemo=JSON.stringify(S);const e=$("#coins");if(e)e.textContent=S.coins}
function stars(n){return "★".repeat(n)+"☆".repeat(5-n)}
function rarity(){let x=Math.random()*100,s=0;for(const [r,w] of RATES){s+=w;if(x<s)return r}return "COMMON"}
function draw(){let r=rarity(),p=WORDS.filter(w=>w.rarity===r);return p.length?p[Math.floor(Math.random()*p.length)]:WORDS[Math.floor(Math.random()*WORDS.length)]}
// 単語データにある単語だけを数える（データから消した単語のセーブが残っていても影響しない）
const ownedCount=()=>WORDS.filter(w=>S.owned[w.id]).length;
function icon(w){return w.ic||"✨"}
function artHtml(w,cls="card-art-image"){
  if(CARD_IMG[w.en])return `<div class="fitwrap"><img class="fitbg" src="${CARD_IMG[w.en]}" alt=""><img class="${cls}" src="${CARD_IMG[w.en]}" alt="${w.en}" onerror="cardImgFail(this,${w.id})"></div>`;
  if(ART_SVG[w.en])return ART_SVG[w.en];
  return `<div class="art">${icon(w)}</div>`}
function cardImgFail(el,id){const w=WORDS.find(x=>x.id===id),wr=el.closest(".fitwrap")||el;if(!el.dataset.t){el.dataset.t=1;const u="assets/"+w.en+".svg";wr.querySelectorAll("img").forEach(i=>i.src=u);return}if(ART_SVG[w.en]){wr.outerHTML=ART_SVG[w.en];return}const d=document.createElement("div");d.className="art";d.textContent=icon(w);wr.replaceWith(d)}
const P=(x,y,w,h)=>`left:${x/3}%;top:${y/4}%;width:${w/3}%;height:${h/4}%`;
function hl(s,en){return s.replace(new RegExp("\\b("+en+"\\w*)","i"),"<b>$1</b>")}
function speak(t){try{const u=new SpeechSynthesisUtterance(t);u.lang="en-US";speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function cardArt(w){return CARD_IMG[w.en]||ART_SVG[w.en]?artHtml(w):`<div class="scn">${sceneSvg(w.rarity)}<i class="scn-pad"></i><div class="scn-ic">${icon(w)}</div></div>`}
function cardFace(w){
  const x=CARD_EXTRA[w.en],n=S.owned[w.id]||0,m=S.mastery[w.id]||0,ex=x?x.s:w.ex,tr=x?x.t:w.tr,F=uiFrame(w.rarity),L={...LAYOUT,...(F?LAYOUT_IMG:{}),...(F&&F.art?{art:F.art}:{}),...(F&&F.info?{info:F.info}:{}),...LAYOUT_OVERRIDE};
  return `<div class="cd3 r-${w.rarity}"><div class="cd3-in${F?" imgf":""}">
  <div class="cd3-art" style="${P(...L.art)}">${cardArt(w)}</div>${F?`<img class="cd3-frame" src="${F.url}" alt="">`:CARD_FRAME}
  <div class="cd3-star" style="${P(...L.star)}"><span>${"★".repeat(w.stars)}</span><em>${w.rarity==="LEGENDARY"?"LEGEND":w.rarity==="UNCOMMON"?"UNCOMMON":w.rarity}</em></div>
  <div class="cd3-word" style="${P(...L.word)}"><svg viewBox="0 0 24 24"><path d="M2 5c4-1.5 7-1 10 1v14c-3-2-6-2.5-10-1zM22 5c-4-1.5-7-1-10 1v14c3-2 6-2.5 10-1z" fill="#f4e4b0"/></svg>WORD</div>
  <div class="cd3-plate" style="${P(...L.plate)}"><span>${w.en}</span><button onclick="event.stopPropagation();speak('${w.en}')" aria-label="発音">🔊</button></div>
  <div class="cd3-info${ex.length>68?" xlong":ex.length>46?" long":""}" style="${P(...L.info)}"><div class="cd3-pill">${w.pos}${w.pronunciation?`　/${w.pronunciation}/`:""}</div><div class="cd3-ja">${w.ja}</div><div class="cd3-div"></div><div class="cd3-ex">${hl(ex,w.en)}</div><div class="cd3-tr">${tr}</div></div>
  <div class="cd3-lv" style="${P(...L.lv)}"><b>Lv.${Math.max(1,n)}</b><i><u style="width:${m*20}%"></u></i><span>${m}/5</span></div>
  <div class="cd3-rar" style="${P(...L.rar)}"><svg viewBox="0 0 24 24"><path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" fill="#f1d27a"/></svg><span>×${n}</span></div>
  </div></div>`}

const ymd=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function markStudied(){const t=new Date(),y=new Date(t.getTime()-864e5),T=ymd(t);if(S.last===T)return;S.streak=S.last===ymd(y)?(S.streak||0)+1:1;S.last=T}
function streakNow(){const t=new Date(),y=new Date(t.getTime()-864e5);return S.last===ymd(t)||S.last===ymd(y)?S.streak||0:0}
function lvInfo(){let xp=S.xp,lv=1,need=10;while(xp>=need){xp-=need;lv++;need=10+(lv-1)*5}return{lv,cur:xp,need}}
function toast(t){const e=document.createElement("div");e.className="toast";e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),1800)}
function shuffleOpts(correct,rar){const P=rar?WORDS.filter(w=>w.rarity===rar):WORDS,o=[correct];while(o.length<4){const x=P[Math.floor(Math.random()*P.length)].ja;if(!o.includes(x))o.push(x)}return o.sort(()=>Math.random()-.5)}

/* ホーム */
function home(){
  const owned=WORDS.filter(w=>S.owned[w.id]).length,mastered=WORDS.filter(w=>(S.mastery[w.id]||0)>=5).length,L=lvInfo(),pulls=Math.floor(S.coins/100);
  $("#main").innerHTML=`<section class="hm2"><div class="hm2-logo">${UI.logo_title?`<img class="hm2-logoimg" src="${UI.logo_title}" alt="WORD GRIMOIRE">`:`${EMB}<div class="hm2-word"><span>WORD</span><span>GRIMOIRE</span></div>`}</div>
  <div class="hm2-tag">言葉を集めて、<br>世界を広げよう</div>
  <div class="hm2-grid"><div class="hm2-left">
    <div class="hm2-panel orn"><div class="hm2-ct"><span>コレクション Lv.${L.lv}</span><b>${owned}/${WORDS.length}</b></div><div class="hm2-cbar"><i style="width:${owned/WORDS.length*100}%"></i></div>
      <div class="hm2-stats"><div>${ico("stat_words","📚")}<span>総単語数</span><b>${WORDS.length}</b></div><div>${ico("stat_ok","✅")}<span>覚えた</span><b>${mastered}</b></div><div>${ico("stat_streak","🔥")}<span>連続学習</span><b>${streakNow()}日</b></div></div></div>
    <div class="hm2-btns"><button class="hm2-b orn" onclick="showPage('study')">${ico("icon_study","📖","big")}<span>勉強</span></button><button class="hm2-b orn" onclick="showPage('cards')">${ico("icon_cards","🃏","big")}<span>カード</span></button><button class="hm2-b orn" onclick="showPage('review')">${ico("icon_review","🧠","big")}<span>復習</span></button></div>
  </div>
  <button class="hm2-gacha orn" onclick="showPage('gacha')">${pulls?`<em class="hm2-new">引ける！×${pulls}</em>`:""}<div class="hm2-pack">${ico("icon_gacha","🎁","pack")}</div><div class="hm2-plate">ガチャ</div><div class="hm2-price">1回 ${ico("icon_coin","🪙","c")} 100コイン</div></button></div></section>`;save()}

/* 勉強 */
let studyWord;
function study(){
  const pool=WORDS.filter(w=>w.rarity==="COMMON");studyWord=pool[Math.floor(Math.random()*pool.length)];const a=shuffleOpts(studyWord.ja,studyWord.rarity);
  $("#main").innerHTML=`<div class="hero"><h1>📖 勉強</h1><div class="muted">正解すると +25コイン</div></div><div class="stat"><div><b>${S.coins}</b>コイン</div><div><b>${ownedCount()}</b>種類</div><div><b>${WORDS.length}</b>単語</div></div><div class="quiz"><div class="muted">この英単語の意味は？</div><div class="q">${studyWord.en}</div><div class="answers">${a.map(x=>`<button onclick="studyAns('${encodeURIComponent(x)}')">${x}</button>`).join("")}</div><div id="res" class="result"></div></div>`;save()}
function studyAns(v){markStudied();const ok=decodeURIComponent(v)===studyWord.ja;$("#res").innerHTML=ok?"🎉 正解！ +25コイン":"❌ 正解は「"+studyWord.ja+"」";if(ok){S.coins+=25;S.xp+=2}save();setTimeout(study,850)}

/* ガチャ */
/* カード図鑑 */
const FIL=[["ALL","すべて"],["COMMON","コモン"],["UNCOMMON","アンコモン"],["RARE","レア"],["EPIC","エピック"],["LEGENDARY","レジェンド"]],PER=12;
let CF={r:"ALL",p:0};
function mini(w){return S.owned[w.id]?`<button class="mc r-${w.rarity}" onclick="cardDetail(${w.id})"><div class="mc-art">${artHtml(w,"mc-img")}</div><div>${w.en}</div><div class="mc-st">${"★".repeat(w.stars)}</div></button>`:`<div class="mc lock">?</div>`}
function cards(){
  const found=WORDS.filter(w=>S.owned[w.id]).length,list=WORDS.filter(w=>CF.r==="ALL"||w.rarity===CF.r),pages=Math.max(1,Math.ceil(list.length/PER));
  CF.p=Math.min(CF.p,pages-1);
  $("#main").innerHTML=`<section class="cd orn"><div class="cd-h">🃏<div><h2>カード図鑑</h2><small>${found}/${WORDS.length}種類を発見</small></div></div>
  <div class="cd-f">${FIL.map(([k,t])=>`<button class="${CF.r===k?"on":""}" onclick="cardFilter('${k}')">${t}</button>`).join("")}</div>
  <div class="cd-g">${list.slice(CF.p*PER,CF.p*PER+PER).map(mini).join("")}</div>
  <div class="cd-p"><button onclick="cardPage(-1)" ${CF.p?"":"disabled"}>‹</button><span>${CF.p+1}/${pages}</span><button onclick="cardPage(1)" ${CF.p<pages-1?"":"disabled"}>›</button></div></section>`}
function cardFilter(r){CF={r,p:0};cards()}
function cardPage(d){CF.p+=d;cards()}
function cardDetail(id){
  const w=WORDS.find(x=>x.id===id),n=S.owned[id]||0,m=S.mastery[id]||0,d=document.createElement("div");
  d.className="sheet";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="sheet-in r-${w.rarity}"><div class="sd-card">${cardFace(w)}</div>
  <div class="rv-panel" style="width:100%;animation:none"><div><span>コレクション Lv.${n}</span><b>×${n}</b></div><div><span>復習熟練度</span><b>${m}/5</b></div></div></div>`;
  document.body.appendChild(d)}

/* 復習 */
function review(){
  const a=WORDS.filter(w=>S.owned[w.id]);
  if(!a.length){$("#main").innerHTML='<div class="hero"><h1>🧠 復習</h1><div class="muted">ガチャでカードを獲得すると復習できます</div></div>';return}
  const w=a[Math.floor(Math.random()*a.length)],o=shuffleOpts(w.ja,w.rarity);
  $("#main").innerHTML=`<div class="hero"><h1>🧠 復習</h1><div class="muted">覚えていたら熟練度アップ</div></div><div class="quiz center">${artHtml(w,"mc-img")}<div class="q">${w.en}</div><div class="answers">${o.map(x=>`<button onclick="reviewAns('${encodeURIComponent(x)}',${w.id})">${x}</button>`).join("")}</div><div id="res" class="result"></div></div>`}
function reviewAns(v,id){
  markStudied();
  const w=WORDS.find(x=>x.id===id),ok=decodeURIComponent(v)===w.ja;
  if(ok){S.mastery[id]=Math.min(5,(S.mastery[id]||0)+1);S.xp+=3}
  $("#res").innerHTML=ok?"🧠 正解！ 熟練度アップ":"❌ 正解は「"+w.ja+"」";save();setTimeout(review,850)}

/* 画面切り替え・起動 */
let CUR="home";
function applyUI(){buildNav();const ci=$(".coins .ci");if(ci)ci.innerHTML=ico("icon_coin","🪙");const gi=$("#gear");if(gi&&UI_ICO.icon_gear)gi.innerHTML=ico("icon_gear","⚙");const ap=$(".app");if(UI.app_bg&&ap)ap.style.background=`linear-gradient(#0d1230cc,#060812ee),url('${UI.app_bg}') center top/cover fixed`;const sp=$(".sp");if(sp)sp.innerHTML=splashInner()}
function setBg(p){let b=$("#bg");if(!b){b=document.createElement("div");b.id="bg";$(".app").prepend(b)}const s=p==="home"?"home_bg":p==="gacha"?(UI.gacha_bg?"gacha_bg":"home_bg"):"";b.innerHTML=s?bgScene(s):""}
function buildNav(){document.querySelectorAll("nav button").forEach(b=>{const p=b.dataset.p,[e,t]=NAV[p];b.innerHTML=`<i>${ico("nav_"+p,e)}</i>${t}`})}
function openSettings(){const d=document.createElement("div");d.className="sheet";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="sheet-in"><h3 style="margin:0 0 12px;color:#f4d477;font-family:Georgia,serif">設定</h3><div class="sd-ex">コイン ${S.coins}　／　カード ${ownedCount()}種類　／　連続学習 ${streakNow()}日</div><button class="gold-btn" style="margin-bottom:10px" onclick="this.closest('.sheet').remove()">閉じる</button><button class="hm2-reset" onclick="if(confirm('セーブデータをすべて消します。よろしいですか？')){localStorage.removeItem('wordQuestDemo');location.reload()}">セーブデータをリセット</button></div>`;document.body.appendChild(d)}
function showPage(p){CUR=p;document.body.classList.toggle("is-home",p==="home");document.body.classList.toggle("is-gacha",p==="gacha");setBg(p);document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("on",x.dataset.p===p));({home,study,gacha,cards,review})[p]();window.scrollTo(0,0)}
buildNav();document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.p)));
const gear=$("#gear");if(gear)gear.onclick=openSettings;
showPage("home");
document.body.classList.add("ui-wait");
const uiRefresh=()=>{document.body.classList.remove("ui-wait");applyUI();if(!$(".gx")&&!$(".sheet"))showPage(CUR)};
setTimeout(()=>{if(!UI_READY){UI_READY=true;uiRefresh()}},2200);
uiInit(uiRefresh).then(()=>{if(Object.keys(UI_FRAME).length)uiRefresh()});
function splashInner(){const r=UI_READY;return `${bgScene("splash_bg")}${r?(UI.logo_emblem?`<img class="sp-emb" src="${UI.logo_emblem}" alt="">`:EMB):""}${r?(UI.logo_title?`<img class="sp-tt" src="${UI.logo_title}" alt="WORD GRIMOIRE">`:`<div class="sp-title">WORD GRIMOIRE</div>`):""}<div class="sp-tag">もっと知る。もっと強くなる。</div><div class="sp-hint">TAP TO START</div>`}
(function splash(){
  try{if(sessionStorage.wqSplash)return;sessionStorage.wqSplash=1}catch(e){}
  const s=document.createElement("div");s.className="sp";
  s.innerHTML=splashInner();
  const close=()=>{s.classList.add("out");setTimeout(()=>s.remove(),700)};
  s.onclick=close;document.body.appendChild(s);setTimeout(close,2600)})();
