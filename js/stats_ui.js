/* 勉強データの画面（ホームの学習レベルのパネル全体をタップで開く重ね画面）。
   ・熟練度・カード・品詞は、今までのセーブだけで出せる
   ・正答率・苦手な単語・日ごとの学習量は、勉強の記録（stat / days / statFrom。game.js の recordAnswer）から出す。
     記録は入れた版（2026-10-07）から数えるので、それより前の学習は入っていない
   ・下のタブは増やさない。勉強画面（1画面に収めている）にも足さない */
const STAT_DAYS=30;      // 学習量のグラフに出す日数
const WEAK_MIN_NG=2;     // 苦手な単語：この回数以上まちがえた語
const WEAK_SHOW=10;      // 苦手な単語：出す数
const POS_ORDER=["名詞","動詞","形容詞","副詞"];

const pctOf=(a,b)=>b?Math.round(a*100/b):null;
const pctTxt=p=>p==null?"—":p+"%";
// 単語データにある単語だけを数える（消した単語の記録が残っていても数えない）
function statSum(ws){let ok=0,ng=0;for(const w of ws){const s=S.stat[w.id];if(s){ok+=s[0];ng+=s[1]}}return{ok,ng,n:ok+ng}}
function weakWords(){
  return WORDS.map(w=>{const s=S.stat[w.id]||[0,0];return{w,ok:s[0],ng:s[1],p:s[0]/(s[0]+s[1]||1)}})
    .filter(x=>x.ng>=WEAK_MIN_NG).sort((a,b)=>a.p-b.p||b.ng-a.ng).slice(0,WEAK_SHOW)}
function recentDays(){const out=[],t=new Date();for(let i=STAT_DAYS-1;i>=0;i--){const d=new Date(t.getFullYear(),t.getMonth(),t.getDate()-i),k=ymd(d),v=S.days[k]||[0,0];out.push({k,d,n:v[0],ok:v[1]})}return out}
const mdTxt=d=>`${d.getMonth()+1}/${d.getDate()}`;

function openStats(){
  const all=statSum(WORDS),mastered=WORDS.filter(w=>wordMastery(w.id)>=MASTERY_MAX).length,days=recentDays();
  const max=Math.max(1,...days.map(x=>x.n)),studied=days.filter(x=>x.n).length,sum30=days.reduce((a,x)=>a+x.n,0);
  const since=S.statFrom?`${S.statFrom.replace(/-/g,"/")} から記録`:"記録はまだありません（勉強すると、ここから数えます）";
  // 直近30日の棒グラフ。棒をタップすると、その日の問題数と正答率を下の行に出す
  const bars=days.map((x,i)=>`<button class="sx-bar${x.n?"":" z"}" data-i="${i}" aria-label="${mdTxt(x.d)} ${x.n}問"><i style="height:${x.n?Math.max(4,Math.round(x.n*100/max)):0}%"></i></button>`).join("");
  const lv=LEVELS.map((r,i)=>{const n=i+1,ws=levelWords(n),st=statSum(ws),m=levelMastered(n),p=levelPercent(n),lock=n>S.unlockedLevel;
    return `<div class="sx-lv${lock?" lock":""}"><div class="sx-lvh"><b>Lv.${n}</b><span class="r-${r}">${r}</span><em>${lock?"🔒 未解放":p+"%"}</em></div>
      <div class="sx-track"><i style="width:${p}%"></i></div>
      <div class="sx-lvn"><span>覚えた <b>${m}</b>/${ws.length}</span><span>正答率 <b>${pctTxt(pctOf(st.ok,st.n))}</b>${st.n?`<small>（${st.n}問）</small>`:""}</span></div></div>`}).join("");
  const mcount=[0,1,2,3,4,5].map(k=>WORDS.filter(w=>wordMastery(w.id)===k).length);
  const mrow=mcount.map((c,k)=>`<div><span>${k===MASTERY_MAX?"★"+k:k}</span><b>${c}</b></div>`).join("");
  const pos=POS_ORDER.map(p=>{const ws=WORDS.filter(w=>w.pos===p);if(!ws.length)return"";const m=ws.filter(w=>wordMastery(w.id)>=MASTERY_MAX).length;
    return `<div class="sx-pos"><span>${p}</span><div class="sx-track"><i style="width:${pctOf(m,ws.length)}%"></i></div><b>${m}<small>/${ws.length}</small></b></div>`}).join("");
  const weak=weakWords(),weakHtml=weak.length?weak.map(x=>`<button class="sx-weak" onclick="cardDetail(${x.w.id})"><span class="sx-we">${x.w.en}</span><span class="sx-wj">${x.w.ja}</span><span class="sx-wp"><b>${Math.round(x.p*100)}%</b><small>○${x.ok} ×${x.ng}</small></span></button>`).join("")
    :`<p class="sx-none">まだありません。${WEAK_MIN_NG}回以上まちがえた単語が、正答率の低い順に出ます。</p>`;
  const d=document.createElement("div");d.className="sheet";d.onclick=e=>{if(e.target===d)d.remove()};
  d.innerHTML=`<div class="sheet-in sx"><h3>勉強データ</h3><div class="sx-since">${since}</div>
  <div class="sx-tiles"><div><span>覚えた単語</span><b>${mastered}<small>/${WORDS.length}</small></b></div><div><span>正答率</span><b>${pctTxt(pctOf(all.ok,all.n))}</b><small>${all.n}問</small></div><div><span>連続学習</span><b>${streakNow()}<small>日</small></b></div></div>
  <div class="xf"><h4>直近${STAT_DAYS}日の学習量</h4>
   <div class="sx-chart"><div class="sx-max">${max>1||sum30?max+"問":""}</div><div class="sx-bars">${bars}</div><div class="sx-axis"><span>${mdTxt(days[0].d)}</span><span>今日</span></div></div>
   <div class="sx-day" id="sx-day">${sum30?`${STAT_DAYS}日間で ${sum30}問・${studied}日勉強しました。棒をタップすると、その日の数が出ます。`:"まだ記録がありません。"}</div></div>
  <div class="xf"><h4>レベルごとの進み具合</h4>${lv}</div>
  <div class="xf"><h4>熟練度ごとの語数</h4><div class="sx-m">${mrow}</div><p class="sx-note">★${MASTERY_MAX} が「覚えた」。正解するたびに1つ上がります。</p></div>
  <div class="xf"><h4>品詞ごとの覚えた数</h4>${pos}</div>
  <div class="xf"><h4>苦手な単語</h4>${weakHtml}</div>
  <button class="gold-btn" onclick="this.closest('.sheet').remove()">閉じる</button></div>`;
  document.body.appendChild(d);
  const info=d.querySelector("#sx-day");
  d.querySelectorAll(".sx-bar").forEach(b=>b.onclick=()=>{const x=days[+b.dataset.i];
    d.querySelectorAll(".sx-bar.on").forEach(e=>e.classList.remove("on"));b.classList.add("on");
    info.textContent=`${mdTxt(x.d)}（${"日月火水木金土"[x.d.getDay()]}）　${x.n?`${x.n}問・正解 ${x.ok}（${pctOf(x.ok,x.n)}%）`:"勉強していません"}`})}
