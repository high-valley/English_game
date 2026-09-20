const RATES=[["COMMON",35],["UNCOMMON",30],["RARE",20],["EPIC",10],["LEGENDARY",5]];
const RN={COMMON:"COMMON",UNCOMMON:"UNCOMMON",RARE:"RARE",EPIC:"EPIC",LEGENDARY:"LEGENDARY"};
const ICONS=["🍎","📖","🐈","🐕","💧","🍽️","🏠","🏫","🤝","👨‍👩‍👧","🚗","🚆","🏙️","🌏","☀️","🌙","⏰","💰","💼","🎮","🎵","🎬","📱","💻","🚪","🚪","🪟","🪑","🪑","🛣️","🌅","🌆","😊","😢","🐘","🐜","👍","👎","✨","🧩","🌸","⭐","🔀","🟰","🆕","🏚️","⚡","🐢","💪","❤️","🏃","👋","🍴","🥤","😴","🌞","🚶","🏃","📚","✍️","🗣️","👂","👀","💡","🤔","🙋","🛠️","❤️","💖","🔨","🤲","🎁","📦","🔧","🔎","🆘","🔓","🔒","🚀","🏁","🎓","📝","🧠","🌫️","☝️","🔄","🧪","🏆","💥","❓","💬","💡","⚠️","🎯","🔮","🌍","🗣️","🔤","📚","🏚️"];
const EMB=`<svg class="emb" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#141a35" stroke="#d9b45a" stroke-width="3"/><circle cx="50" cy="50" r="36" fill="none" stroke="#d9b45a" stroke-opacity=".35"/><path d="M50 8L58 42L92 50L58 58L50 92L42 58L8 50L42 42Z" fill="#f3cf6a" stroke="#fff3bf"/></svg>`;
const NAV={home:["🏠","ホーム"],study:["📖","勉強"],gacha:["🎰","ガチャ"],cards:["🃏","カード"],review:["🧠","復習"]};

// 保存データ（従来と同じキー。xp は追加項目）
let S=JSON.parse(localStorage.wordQuestDemo||"null")||{coins:100,owned:{},mastery:{}};
S.xp=S.xp||0;
const $=q=>document.querySelector(q);
function save(){localStorage.wordQuestDemo=JSON.stringify(S);const e=$("#coins");if(e)e.textContent=S.coins}
function stars(n){return "★".repeat(n)+"☆".repeat(5-n)}
function rarity(){let x=Math.random()*100,s=0;for(const [r,w] of RATES){s+=w;if(x<s)return r}return "COMMON"}
function draw(){let r=rarity(),p=WORDS.filter(w=>w.rarity===r);return p.length?p[Math.floor(Math.random()*p.length)]:WORDS[Math.floor(Math.random()*WORDS.length)]}
function icon(w){return ICONS[w.id-1]||"✨"}
function artHtml(w,cls="card-art-image"){
  if(CARD_IMG[w.en])return `<img class="${cls}" src="${CARD_IMG[w.en]}" alt="${w.en}" onerror="cardImgFail(this,${w.id})">`;
  if(ART_SVG[w.en])return ART_SVG[w.en];
  return `<div class="art">${icon(w)}</div>`}
function cardImgFail(el,id){const w=WORDS.find(x=>x.id===id);if(!el.dataset.t){el.dataset.t=1;el.src="assets/"+w.en+".svg";return}const d=document.createElement("div");d.className="art";d.textContent=icon(w);el.replaceWith(d)}
function cardFace(w){const x=CARD_EXTRA[w.en];return `<div class="cf r-${w.rarity}"><div class="cf-badge">${w.rarity}<span>${stars(w.stars)}</span></div><div class="cf-frame orn"><div class="cf-art">${artHtml(w)}</div><div class="cf-plate"><div class="cf-en">${w.en}</div><div class="cf-ja">${w.ja}</div><div class="cf-pos">${w.pos}</div><div class="cf-ex">${w.ex}<br><span>${w.tr}</span></div></div>${x?`<div class="cf-flavor">“${x.s}”<span>${x.t}</span></div>`:""}</div></div>`}
function lvInfo(){let xp=S.xp,lv=1,need=10;while(xp>=need){xp-=need;lv++;need=10+(lv-1)*5}return{lv,cur:xp,need}}
function toast(t){const e=document.createElement("div");e.className="toast";e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),1800)}
function shuffleOpts(correct){const o=[correct];while(o.length<4){const x=WORDS[Math.floor(Math.random()*WORDS.length)].ja;if(!o.includes(x))o.push(x)}return o.sort(()=>Math.random()-.5)}

/* ホーム */
function home(){
  const owned=WORDS.filter(w=>S.owned[w.id]).length,mastered=Object.values(S.mastery).filter(x=>x>=5).length,L=lvInfo();
  $("#main").innerHTML=`<section class="hm"><div class="hm-hero orn">${heroScene()}${EMB}<div class="hm-cap"><div class="hm-title">WORD QUEST</div><div class="hm-sub">英語を集め、覚える。</div></div></div>
  <div class="hm-lv"><b>Lv.${L.lv}</b><div class="hm-bar"><i style="width:${L.cur/L.need*100}%"></i></div><span>${L.cur}/${L.need}</span></div>
  <div class="hm-stats"><div><b>🪙 ${S.coins}</b>コイン</div><div><b>🃏 ${owned}/${WORDS.length}</b>コレクション</div><div><b>🧠 ${mastered}</b>マスター</div></div>
  <button class="hm-btn" onclick="showPage('study')"><i class="ic">📖</i><span>勉強<small>学んでコインを獲得</small></span></button>
  <div class="hm-row"><button class="hm-btn" onclick="showPage('gacha')"><i class="ic">🎰</i><span>ガチャ<small>カードを引く</small></span></button><button class="hm-btn" onclick="showPage('cards')"><i class="ic">🃏</i><span>カード<small>図鑑を見る</small></span></button></div>
  <button class="hm-btn" onclick="showPage('review')"><i class="ic">🧠</i><span>復習<small>集めたカードを覚える</small></span></button></section>`;save()}

/* 勉強 */
let studyWord;
function study(){
  studyWord=WORDS[Math.floor(Math.random()*Math.min(55,WORDS.length))];const a=shuffleOpts(studyWord.ja);
  $("#main").innerHTML=`<div class="hero"><h1>📖 勉強</h1><div class="muted">正解すると +25コイン</div></div><div class="stat"><div><b>${S.coins}</b>コイン</div><div><b>${Object.keys(S.owned).length}</b>種類</div><div><b>${WORDS.length}</b>単語</div></div><div class="quiz"><div class="muted">この英単語の意味は？</div><div class="q">${studyWord.en}</div><div class="answers">${a.map(x=>`<button onclick="studyAns('${encodeURIComponent(x)}')">${x}</button>`).join("")}</div><div id="res" class="result"></div></div>`;save()}
function studyAns(v){const ok=decodeURIComponent(v)===studyWord.ja;$("#res").innerHTML=ok?"🎉 正解！ +25コイン":"❌ 正解は「"+studyWord.ja+"」";if(ok){S.coins+=10000;S.xp+=2}save();setTimeout(study,850)}

/* ガチャ */
function gacha(){
  $("#main").innerHTML=`<section class="gp orn"><div class="gp-title"><i class="ic">🎰</i>ガチャ</div><div class="gp-sub">勉強してコインを貯めてカードを引こう</div>
  <div class="gp-pack" onclick="pull()"><img src="assets/pack.svg" alt="WORD QUEST パック"></div>
  <div class="gp-price">1回 🪙 100コイン</div>
  <div class="rates orn"><div class="rates-h">レアリティ排出率</div><div class="rates-row">${RATES.map(([r,p])=>`<div class="r-${r}"><i class="gem"></i>${r}<b>${p}%</b></div>`).join("")}</div></div>
  <button class="gold-btn" onclick="pull()">🎁 1回引く</button></section>`;save()}
function shards(){let h="";for(let i=0;i<16;i++)h+=`<i class="shard" style="--a:${i*22.5}deg;--d:${120+Math.random()*90}px"></i>`;return h}
function pull(){
  if($(".gx"))return;
  if(S.coins<100){toast("コインが足りません。まず勉強しよう！");return}
  S.coins-=100;const w=draw(),before=S.owned[w.id]||0;S.owned[w.id]=before+1;S.xp+=5;save(); // 演出中に閉じてもカードは失われない
  const g=document.createElement("div");g.className="gx";
  g.innerHTML=`<div class="gx-stage"><div class="gx-glow"></div><img class="gx-pack" src="assets/pack.svg" alt=""></div>`;
  document.body.appendChild(g);const st=g.firstChild;
  setTimeout(()=>st.classList.add("charge"),700);
  setTimeout(()=>{st.classList.remove("charge");st.classList.add("open");st.insertAdjacentHTML("beforeend",shards())},1600);
  setTimeout(()=>{st.className="gx-stage";st.innerHTML=`<div class="gx-glow big"></div><img class="gx-back" src="assets/card_back.svg" alt=""><div class="gx-tap">« TAP TO OPEN »</div>`;st.onclick=()=>reveal(g,st,w,before)},2300)}
function reveal(g,st,w,before){
  st.onclick=null;st.classList.add("flip");
  setTimeout(()=>{g.innerHTML=`<div class="rv r-${w.rarity}">${cardFace(w)}<div class="rv-new">${before===0?"NEW!":"GET!"}</div></div>
  <div class="rv-panel"><div><span>コレクション Lv.${S.owned[w.id]}</span><b>×${S.owned[w.id]}</b></div><div><span>復習熟練度</span><b>${S.mastery[w.id]||0}/5</b></div></div>
  <button class="gold-btn" onclick="closeGx()">OK</button>`},450)}
function closeGx(){const g=$(".gx");if(g)g.remove();gacha()}

/* カード図鑑 */
const FIL=[["ALL","すべて"],["COMMON","コモン"],["UNCOMMON","アンコモン"],["RARE","レア"],["EPIC","エピック"],["LEGENDARY","レジェンド"]],PER=12;
let CF={r:"ALL",p:0};
function mini(w){return S.owned[w.id]?`<button class="mc r-${w.rarity}" onclick="cardDetail(${w.id})"><div class="mc-art">${artHtml(w,"mc-img")}</div><div>${w.en}</div><div class="mc-st">${"★".repeat(w.stars)}</div></button>`:`<div class="mc lock">?</div>`}
function cards(){
  const found=WORDS.filter(w=>S.owned[w.id]).length,list=WORDS.filter(w=>CF.r==="ALL"||w.rarity===CF.r),pages=Math.max(1,Math.ceil(list.length/PER));
  CF.p=Math.min(CF.p,pages-1);
  $("#main").innerHTML=`<section class="cd"><div class="cd-h">🃏<div><h2>カード図鑑</h2><small>${found}/${WORDS.length}種類を発見</small></div></div>
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
  const w=a[Math.floor(Math.random()*a.length)],o=shuffleOpts(w.ja);
  $("#main").innerHTML=`<div class="hero"><h1>🧠 復習</h1><div class="muted">覚えていたら熟練度アップ</div></div><div class="quiz center">${artHtml(w,"mc-img")}<div class="q">${w.en}</div><div class="answers">${o.map(x=>`<button onclick="reviewAns('${encodeURIComponent(x)}',${w.id})">${x}</button>`).join("")}</div><div id="res" class="result"></div></div>`}
function reviewAns(v,id){
  const w=WORDS.find(x=>x.id===id),ok=decodeURIComponent(v)===w.ja;
  if(ok){S.mastery[id]=Math.min(5,(S.mastery[id]||0)+1);S.xp+=3}
  $("#res").innerHTML=ok?"🧠 正解！ 熟練度アップ":"❌ 正解は「"+w.ja+"」";save();setTimeout(review,850)}

/* 画面切り替え・起動 */
function showPage(p){document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("on",x.dataset.p===p));({home,study,gacha,cards,review})[p]();window.scrollTo(0,0)}
document.querySelectorAll("nav button").forEach(b=>{const [i,t]=NAV[b.dataset.p];b.innerHTML=`<i>${i}</i>${t}`;b.addEventListener("click",()=>showPage(b.dataset.p))});
showPage("home");
(function splash(){
  try{if(sessionStorage.wqSplash)return;sessionStorage.wqSplash=1}catch(e){}
  const s=document.createElement("div");s.className="sp";
  s.innerHTML=`${heroScene()}${EMB}<div class="sp-title">WORD QUEST</div><div class="sp-tag">もっと知る。もっと強くなる。</div><div class="sp-hint">TAP TO START</div>`;
  const close=()=>{s.classList.add("out");setTimeout(()=>s.remove(),700)};
  s.onclick=close;document.body.appendChild(s);setTimeout(close,2600)})();
