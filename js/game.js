/* ゲームのルール（画面に依存しない部分）。セーブデータ S と WORDS、config.js の設定を使う */
const WRONG={};   // 間違えた単語（正解するまで、出やすくする。セーブしない）
const lvRarity=lv=>LEVELS[lv-1];
const levelWords=lv=>WORDS.filter(w=>w.rarity===lvRarity(lv));
const wordMastery=id=>Math.min(MASTERY_MAX,S.mastery[id]||0);
const levelPoints=lv=>levelWords(lv).reduce((a,w)=>a+wordMastery(w.id),0);
const levelPercent=lv=>Math.min(100,Math.floor(levelPoints(lv)*100/CLEAR_POINTS));
const levelMastered=lv=>levelWords(lv).filter(w=>wordMastery(w.id)>=MASTERY_MAX).length;
const ratesFor=lv=>{const R=GACHA_RATES[lv]||GACHA_RATES[1];return LEVELS.map(k=>[k,R[k]])};
const currentRates=()=>ratesFor(S.gachaLevel||S.unlockedLevel);
// クリアしたレベルの次を解放する。解放したレベル（無ければ0）と、全レベルクリアの初回かどうかを返す
function syncLevels(){
  let up=0,all=false;
  for(let lv=1;lv<LEVELS.length;lv++)if(levelPercent(lv)>=100&&S.unlockedLevel<=lv){const wasMax=S.gachaLevel>=S.unlockedLevel;S.unlockedLevel=lv+1;up=lv+1;if(wasMax)S.gachaLevel=S.unlockedLevel}
  if(levelPercent(LEVELS.length)>=100&&!S.allClear){S.allClear=true;all=true}
  return{up,all}}
// 出題：熟練度が低い単語ほど出やすい。間違えた単語はさらに出やすい。直前の単語は避ける
function pickWord(lv,lastId){
  const ws=levelWords(lv);if(!ws.length)return WORDS[0];
  const wt=w=>{let x=(MASTERY_MAX-wordMastery(w.id)+1)**2;if(WRONG[w.id])x*=3;if(w.id===lastId&&ws.length>1)x=0;return x};
  const tot=ws.reduce((a,w)=>a+wt(w),0);let r=Math.random()*tot;
  for(const w of ws){r-=wt(w);if(r<0)return w}return ws[0]}
// 4択：正解＋同じレベルの単語の意味を3つ
function makeOptions(w){
  const same=WORDS.filter(x=>x.rarity===w.rarity&&x.ja!==w.ja),P=same.length>=3?same:WORDS.filter(x=>x.ja!==w.ja),o=[w.ja];
  while(o.length<4){const x=P[Math.floor(Math.random()*P.length)].ja;if(!o.includes(x))o.push(x)}
  return o.sort(()=>Math.random()-.5)}
function answerCorrect(w,lv){S.mastery[w.id]=Math.min(MASTERY_MAX,(S.mastery[w.id]||0)+1);S.coins+=LEVEL_COIN[lv]||25;delete WRONG[w.id]}
function answerWrong(w){WRONG[w.id]=1}
