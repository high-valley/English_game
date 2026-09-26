/* セーブデータの保存・読み込みと、端末をまたぐ引き継ぎコード。

   保存先（今は localStorage）に触るのは、このファイルの SAVE_STORE だけにする。
   App Store 向けにアプリ化（Capacitor）したら、SAVE_STORE の中身だけを差し替える
   （アプリ内の保存や iCloud のキー値ストア）。ゲーム側は loadSave / writeSave / clearSave しか使わない。

   引き継ぎコードの形式（SPEC.md §8）:
     WG1.<z|p>.<本体>.<検査>
       WG1  … 形式の版。中身を変えるときは WG2 にして、古い版も読めるようにしておく
       z/p  … 本体を圧縮したか（z: deflate-raw / p: 圧縮なし。圧縮できない環境のため）
       本体 … セーブデータの JSON を base64url にしたもの（URL にそのまま入る文字だけ）
       検査 … 圧縮前の JSON の CRC32（16進8桁）。途中で切れた・書き換わったコードを取り込まないため
   引き継ぎリンクは <サイトの URL>#import=<コード>。# より後はサーバーに送られない */
const SAVE_KEY="wordQuestDemo";
const SAVE_STORE={
  get(){try{return localStorage.getItem(SAVE_KEY)}catch(e){return null}},
  set(v){try{localStorage.setItem(SAVE_KEY,v)}catch(e){}},
  clear(){try{localStorage.removeItem(SAVE_KEY)}catch(e){}}};
function loadSave(){try{return JSON.parse(SAVE_STORE.get()||"null")}catch(e){return null}}
function writeSave(o){SAVE_STORE.set(JSON.stringify(o))}
function clearSave(){SAVE_STORE.clear()}

const XFER_VER="WG1";
const CRC_T=(()=>{const t=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}return t})();
function crc32(b){let c=0xFFFFFFFF;for(let i=0;i<b.length;i++)c=CRC_T[(c^b[i])&255]^(c>>>8);return((c^0xFFFFFFFF)>>>0).toString(16).padStart(8,"0")}
function b64uEnc(b){let s="";for(let i=0;i<b.length;i+=0x8000)s+=String.fromCharCode.apply(null,b.subarray(i,i+0x8000));return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}
function b64uDec(s){const t=atob(s.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((s.length+3)%4));const b=new Uint8Array(t.length);for(let i=0;i<t.length;i++)b[i]=t.charCodeAt(i);return b}
const pipeBytes=async(b,tr)=>new Uint8Array(await new Response(new Blob([b]).stream().pipeThrough(tr)).arrayBuffer());

// セーブデータ → 引き継ぎコード
async function makeTransferCode(o){
  const raw=new TextEncoder().encode(JSON.stringify(o));
  let mode="p",body=raw;
  if(typeof CompressionStream!=="undefined"){try{body=await pipeBytes(raw,new CompressionStream("deflate-raw"));mode="z"}catch(e){body=raw}}
  return `${XFER_VER}.${mode}.${b64uEnc(body)}.${crc32(raw)}`}
function transferLink(code){return `${location.origin}${location.pathname}#import=${code}`}

// 引き継ぎコード（またはリンク）→ セーブデータ。だめなときは、画面に出せる文の Error を投げる
async function readTransferCode(text){
  let s=String(text||"").trim();
  const k=s.indexOf("#import=");if(k>=0)s=s.slice(k+8);
  try{s=decodeURIComponent(s)}catch(e){}
  s=s.replace(/\s+/g,"");
  const p=s.split(".");
  if(p.length!==4||!/^WG\d+$/.test(p[0]))throw new Error("引き継ぎコードの形が正しくありません。コードを最後までコピーできているか確かめてください。");
  if(p[0]!==XFER_VER)throw new Error("新しい版で作られたコードです。ホームの「新しい版に更新」から、アプリを最新にしてください。");
  let raw;
  try{
    const body=b64uDec(p[2]);
    if(p[1]==="z"){
      if(typeof DecompressionStream==="undefined")throw new Error("この端末のブラウザでは、このコードを読めません。OS を最新にしてからお試しください。");
      raw=await pipeBytes(body,new DecompressionStream("deflate-raw"))}
    else if(p[1]==="p")raw=body;
    else throw 0}
  catch(e){if(e instanceof Error&&/ブラウザ/.test(e.message))throw e;throw new Error("引き継ぎコードが途中で切れているか、壊れています。もう一度コピーしてください。")}
  if(crc32(raw)!==p[3])throw new Error("引き継ぎコードが途中で切れているか、壊れています。もう一度コピーしてください。");
  let o;try{o=JSON.parse(new TextDecoder().decode(raw))}catch(e){o=null}
  if(!o||typeof o!=="object"||typeof o.coins!=="number"||typeof o.owned!=="object"||typeof o.mastery!=="object"||!o.owned||!o.mastery)
    throw new Error("引き継ぎコードの中身が読めませんでした。");
  return o}
