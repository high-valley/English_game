/* 勉強画面（レベル制）とレベルアップ演出 */
let STQ=null,STLOCK=false,STNEXT=0;
const dots=id=>"●".repeat(wordMastery(id))+"○".repeat(MASTERY_MAX-wordMastery(id));
const progText=lv=>`熟練度ポイント ${Math.min(CLEAR_POINTS,levelPoints(lv))} / ${CLEAR_POINTS}　覚えた ${levelMastered(lv)} / ${levelWords(lv).length}`;
function setStudyLevel(n){if(n>S.unlockedLevel)return;S.studyLevel=n;STQ=null;study()}
function study(){
  clearTimeout(STNEXT);S.studyLevel=Math.min(S.studyLevel||1,S.unlockedLevel);const lv=S.studyLevel,w=pickWord(lv,STQ&&STQ.id),pct=levelPercent(lv);
  STQ=w;STLOCK=false;
  $("#main").innerHTML=`<section class="st2"><div class="st2-tabs">${LEVELS.map((r,i)=>{const n=i+1,lock=n>S.unlockedLevel,done=levelPercent(n)>=100;return `<button class="${n===lv?"on":""}${lock?" lock":""}" ${lock?"disabled":`onclick="setStudyLevel(${n})"`}>${lock?"🔒":""}Lv.${n}${done?" ✓":""}</button>`}).join("")}</div>
  <div class="st2-prog orn"><div class="st2-pt"><b>${ico("icon_study","\u{1F4D6}")} LEVEL ${lv}</b><span class="st2-coin">正解 +${LEVEL_COIN[lv]||25} ${ico("icon_coin","\u{1FA99}","c")}</span><span id="st-pct">${pct}%</span></div><div class="st2-bar"><i id="st-bar" style="width:${pct}%"></i></div><small id="st-sub">${progText(lv)}</small></div>
  <div class="st2-card orn"><div class="st2-hint">この英単語の意味は？</div><div class="st2-q">${w.en}</div><div class="st2-ipa">/${w.pronunciation||""}/ <button onclick="speak('${w.en}')" aria-label="発音">🔊</button></div><div class="st2-m" id="st-m">熟練度 ${dots(w.id)}</div>
  <div class="st2-ans">${makeOptions(w).map(o=>`<button data-v="${encodeURIComponent(o)}" onclick="studyAns(this)">${o}</button>`).join("")}</div><div class="st2-res" id="st-res"></div></div></section>`;save()}
function studyAns(btn){
  if(STLOCK)return;STLOCK=true;markStudied();
  const w=STQ,lv=S.studyLevel,ok=decodeURIComponent(btn.dataset.v)===w.ja;
  document.querySelectorAll(".st2-ans button").forEach(b=>{b.disabled=true;if(decodeURIComponent(b.dataset.v)===w.ja)b.classList.add("ok")});
  if(!ok)btn.classList.add("ng");
  let r={up:0,all:false};
  if(ok){answerCorrect(w,lv);r=syncLevels()}else answerWrong(w);
  save();
  $("#st-pct").textContent=levelPercent(lv)+"%";$("#st-bar").style.width=levelPercent(lv)+"%";$("#st-sub").textContent=progText(lv);$("#st-m").textContent="熟練度 "+dots(w.id);
  $("#st-res").innerHTML=(ok?`<b>正解！</b> +${LEVEL_COIN[lv]||25}コイン`:`<b>不正解</b>　正解は「${w.ja}」`)+`<small>${w.ex}<br>${w.tr}</small>`;
  if(r.up||r.all){setTimeout(()=>{if(CUR==="study")lvUp(r)},800);return}
  const go=()=>{clearTimeout(STNEXT);study()};STNEXT=setTimeout(go,ok?1100:1700);setTimeout(()=>{const c=$(".st2-card");if(c&&STLOCK)c.onclick=go},80)}   // 画面をタップすると、すぐ次へ
function lvUp(r){
  const n=r.up,d=document.createElement("div");d.className="lvup";
  const rates=currentRates().map(([k,p])=>`<div class="r-${k}${p?"":" z"}"><i class="gem"></i>${k}<b>${p}%</b></div>`).join("");
  d.innerHTML=`<i class="lvup-rays"></i><div class="lvup-in">${r.up?`<div class="lvup-t">LEVEL UP!</div><div class="lvup-n">Lv.${n}</div><div class="lvup-s">Lv.${n-1} クリア！ Lv.${n} が解放されました</div><div class="lvup-s">ガチャの排出率が更新されました</div><div class="lvup-s">正解のコインが +${LEVEL_COIN[n]||25} に増えました</div><div class="rates-row">${rates}</div>`:`<div class="lvup-t">ALL CLEAR!</div><div class="lvup-n">全レベルクリア</div><div class="lvup-s">おめでとうございます！ これからも自由に勉強できます</div>`}
  <button class="gold-btn" onclick="closeLvUp('gacha')">🎰 ガチャへ</button><button class="lvup-sub" onclick="closeLvUp('study')">勉強を続ける</button></div>`;
  document.body.appendChild(d)}
function closeLvUp(p){const d=$(".lvup");if(d)d.remove();showPage(p)}
