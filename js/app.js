
const RATES=[["COMMON",35],["UNCOMMON",30],["RARE",20],["EPIC",10],["LEGENDARY",5]];
const ICONS=["🍎","📖","🐈","🐕","💧","🍽️","🏠","🏫","🤝","👨‍👩‍👧","🚗","🚆","🏙️","🌏","☀️","🌙","⏰","💰","💼","🎮","🎵","🎬","📱","💻","🚪","🚪","🪟","🪑","🪑","🛣️","🌅","🌆","😊","😢","🐘","🐜","👍","👎","✨","🧩","🌸","⭐","🔀","🟰","🆕","🏚️","⚡","🐢","💪","❤️","🏃","👋","🍴","🥤","😴","🌞","🚶","🏃","📚","✍️","🗣️","👂","👀","💡","🤔","🙋","🛠️","❤️","💖","🔨","🤲","🎁","📦","🔧","🔎","🆘","🔓","🔒","🚀","🏁","🎓","📝","🧠","🌫️","☝️","🔄","🧪","🏆","💥","❓","💬","💡","⚠️","🎯","🔮","🌍","🗣️","🔤","📚","🏚️"];
let S=JSON.parse(localStorage.wordQuestDemo||"null")||{coins:100,owned:{},mastery:{}};
function save(){localStorage.wordQuestDemo=JSON.stringify(S);document.querySelector("#coins").textContent=S.coins}
function stars(n){return "★".repeat(n)+"☆".repeat(5-n)}
function rarity(){let x=Math.random()*100,s=0;for(const [r,w] of RATES){s+=w;if(x<s)return r}}
function draw(){let r=rarity(),p=WORDS.filter(x=>x.rarity===r);return p[Math.floor(Math.random()*p.length)]}
function card(w){let n=S.owned[w.id]||0,m=S.mastery[w.id]||0;return `<div class="card"><div class="rarity">${w.rarity}</div><div class="stars">${stars(w.stars)}</div><div class="art">${ICONS[w.id-1]||"✨"}</div><div class="word">${w.en}</div><div class="ja">${w.ja}</div><div class="info">${w.pos}<br>${w.ex}<br>${w.tr}</div><div class="info">コレクション Lv.${Math.max(1,n)}　×${n}</div><div class="track"><div class="bar" style="width:${m*20}%"></div></div><div class="info">復習熟練度 ${m}/5</div></div>`}

function home(){
  const owned=WORDS.filter(w=>S.owned[w.id]).length;
  const mastered=Object.values(S.mastery).filter(x=>x>=5).length;
  document.querySelector("#main").innerHTML=`
  <section class="home">
    <div class="home-ornament top">✦　✧　✦</div>
    <div class="home-title">WORD QUEST</div>
    <div class="home-subtitle">英語を集め、覚える。</div>
    <div class="home-emblem"><div class="emblem-ring">🃏</div></div>
    <div class="home-stats">
      <div><span>🪙</span><b>${S.coins}</b><small>COINS</small></div>
      <div><span>🃏</span><b>${owned}/100</b><small>COLLECTION</small></div>
      <div><span>🧠</span><b>${mastered}</b><small>MASTERED</small></div>
    </div>
    <div class="home-menu">
      <button class="home-main" onclick="showPage('study')"><strong>📚 勉 強</strong><small>学んでコインを獲得</small></button>
      <div class="home-row">
        <button onclick="showPage('gacha')"><span>🎰</span><strong>ガチャ</strong><small>カードを引く</small></button>
        <button onclick="showPage('cards')"><span>🃏</span><strong>カード</strong><small>図鑑を見る</small></button>
      </div>
      <button class="home-main secondary-home" onclick="showPage('review')"><strong>🧠 復 習</strong><small>集めたカードを覚える</small></button>
    </div>
    <div class="home-ornament bottom">──── ✦ ────</div>
  </section>`;
}

let studyWord;
function study(){studyWord=WORDS[Math.floor(Math.random()*55)];let a=[studyWord.ja];while(a.length<4){let x=WORDS[Math.floor(Math.random()*55)].ja;if(!a.includes(x))a.push(x)}a.sort(()=>Math.random()-.5);document.querySelector("#main").innerHTML=`<div class="hero"><h1>📚 勉強</h1><div class="muted">正解すると +25コイン</div></div><div class="stat"><div><b>${S.coins}</b>コイン</div><div><b>${Object.keys(S.owned).length}</b>種類</div><div><b>100</b>単語</div></div><div class="quiz"><div class="muted">この英単語の意味は？</div><div class="q">${studyWord.en}</div><div class="answers">${a.map(x=>`<button onclick="studyAns('${encodeURIComponent(x)}')">${x}</button>`).join("")}</div><div id="res" class="result"></div></div>`;save()}
function studyAns(v){let ok=decodeURIComponent(v)===studyWord.ja;document.querySelector("#res").innerHTML=ok?"🎉 正解！ +25コイン":"❌ 正解は「"+studyWord.ja+"」";if(ok)S.coins+=25;save();setTimeout(study,850)}
function gacha(){document.querySelector("#main").innerHTML=`<div class="hero"><h1>🎰 ガチャ</h1><div class="muted">勉強してコインを貯めてカードを引こう</div></div><div class="gacha center"><div style="font-size:60px">🎰</div><h2>WORD CARD GACHA</h2><p>1回 100コイン</p><p class="small muted">デモ用の高レア寄り設定<br>COMMON 35% / UNCOMMON 30% / RARE 20% / EPIC 10% / LEGENDARY 5%</p><button class="btn" onclick="pull()">✨ 1回引く</button><div id="out"></div></div>`;save()}
function pull(){if(S.coins<100){alert("コインが足りません。まず勉強しよう！");return}S.coins-=100;let w=draw();S.owned[w.id]=(S.owned[w.id]||0)+1;save();document.querySelector("#out").innerHTML=`<div style="margin-top:18px">${card(w)}</div>`}
function cards(){let a=WORDS.filter(w=>S.owned[w.id]);document.querySelector("#main").innerHTML=`<div class="hero"><h1>🃏 カード図鑑</h1><div class="muted">${a.length}/100種類を発見</div></div>${a.length?`<div class="grid">${a.map(card).join("")}</div>`:`<div class="quiz center">まだカードがありません。<br>勉強してガチャを引こう！</div>`}`}
function review(){let a=WORDS.filter(w=>S.owned[w.id]);if(!a.length){document.querySelector("#main").innerHTML='<div class="hero"><h1>🧠 復習</h1><div class="muted">ガチャでカードを獲得すると復習できます</div></div>';return}let w=a[Math.floor(Math.random()*a.length)],o=[w.ja];while(o.length<4){let x=WORDS[Math.floor(Math.random()*WORDS.length)].ja;if(!o.includes(x))o.push(x)}o.sort(()=>Math.random()-.5);document.querySelector("#main").innerHTML=`<div class="hero"><h1>🧠 復習</h1><div class="muted">覚えていたら熟練度アップ</div></div><div class="quiz"><div class="art">${ICONS[w.id-1]||"✨"}</div><div class="q">${w.en}</div><div class="answers">${o.map(x=>`<button onclick="reviewAns('${encodeURIComponent(x)}',${w.id})">${x}</button>`).join("")}</div><div id="res" class="result"></div></div>`}
function reviewAns(v,id){let w=WORDS.find(x=>x.id===id),ok=decodeURIComponent(v)===w.ja;if(ok)S.mastery[id]=Math.min(5,(S.mastery[id]||0)+1);document.querySelector("#res").innerHTML=ok?"🧠 正解！ 熟練度アップ":"❌ 正解は「"+w.ja+"」";save();setTimeout(review,850)}
function showPage(page){
  document.querySelectorAll("nav button").forEach(x=>x.classList.toggle("on",x.dataset.p===page));
  ({home,study,gacha,cards,review})[page]();
}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>showPage(b.dataset.p));
showPage("home");
