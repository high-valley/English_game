/* ゲームの設定（数値はここに集める） */
const LEVELS=["COMMON","UNCOMMON","RARE","EPIC","LEGENDARY"];   // Lv.1〜Lv.5 に対応するレアリティ
const MASTERY_MAX=5;      // 単語の熟練度の上限
const CLEAR_POINTS=100;   // レベルのクリアに必要な熟練度ポイント（単語が増えても、これで固定）
const GACHA_COST=100;     // ガチャ1回のコイン
const LEVEL_COIN={1:25,2:25,3:25,4:25,5:25};   // 正解1回のコイン。将来：レベルが上がるほど増やす
// ガチャの排出率（%）。到達した最高レベルの行を使う
const GACHA_RATES={
  1:{COMMON:90,UNCOMMON:9,RARE:1,EPIC:0,LEGENDARY:0},
  2:{COMMON:65,UNCOMMON:25,RARE:9,EPIC:1,LEGENDARY:0},
  3:{COMMON:45,UNCOMMON:30,RARE:20,EPIC:5,LEGENDARY:0},
  4:{COMMON:30,UNCOMMON:30,RARE:25,EPIC:12,LEGENDARY:3},
  5:{COMMON:25,UNCOMMON:25,RARE:25,EPIC:18,LEGENDARY:7}};
Object.entries(GACHA_RATES).forEach(([lv,r])=>{const t=LEVELS.reduce((a,k)=>a+r[k],0);if(t!==100)console.warn("排出率の合計が100ではありません: Lv."+lv,t)});
