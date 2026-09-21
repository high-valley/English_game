/* assets/ui/ に置いた画像を自動で探して使う（無ければ従来のデザインのまま）
   ファイル名（拡張子は webp / png）:
     card_frame            … カード枠（全レア度共通）
     card_frame_common / _uncommon / _rare / _epic / _legendary … レア度別の枠（あれば優先）
     home_bg / splash_bg / gacha_bg / app_bg … 各画面の背景
   カード枠は「絵の窓」を純マゼンタ(#FF00FF)で塗っておくと、自動で透明にして窓の位置も検出します。 */
const UI={},UI_FRAME={};
let UI_READY=false;   // 画像の有無が分かるまでは、仮の背景を出さない（ちらつき防止）
const UI_SLOTS=["card_frame","card_frame_common","card_frame_uncommon","card_frame_rare","card_frame_epic","card_frame_legendary","home_bg","splash_bg","gacha_bg","app_bg"];
// カード内の各パーツ位置 [x,y,幅,高さ]（300x400 の座標）。枠画像に合わせて微調整したい時は LAYOUT_OVERRIDE に書く
const LAYOUT={art:[24,22,252,168],star:[12,12,64,64],word:[204,18,78,28],plate:[40,182,220,36],info:[28,231,244,104],lv:[28,348,160,34],rar:[198,344,86,48]};
// 枠画像を使う時だけ適用するパーツ位置（今の card_frame.png に合わせた値）
const LAYOUT_IMG={star:[16,13,67,67],word:[214,19,60,24],plate:[58,188,184,33],rar:[204,344,80,44]};
const LAYOUT_OVERRIDE={};   // 例: {plate:[40,184,220,34],info:[30,230,240,108]}
function uiFrame(r){return UI_FRAME["card_frame_"+String(r).toLowerCase()]||UI_FRAME.card_frame||null}
function uiProbe(slot){return new Promise(res=>{let i=0;const ex=["webp","png"],next=()=>{if(i>=ex.length)return res(null);const u=`assets/ui/${slot}.${ex[i++]}`,im=new Image();im.onload=()=>res(u);im.onerror=next;im.src=u};next()})}
function uiKeyFrame(url){return new Promise(res=>{const im=new Image();im.onerror=()=>res(null);im.onload=()=>{try{
  const W=Math.min(900,im.naturalWidth),H=Math.round(W*im.naturalHeight/im.naturalWidth),c=document.createElement("canvas");c.width=W;c.height=H;
  const x=c.getContext("2d");x.drawImage(im,0,0,W,H);const d=x.getImageData(0,0,W,H),p=d.data;
  for(let i=0;i<p.length;i+=4){const r=p[i],g=p[i+1],b=p[i+2],e=Math.min(r,b)-g;   // マゼンタ（と、その混ざりかけ）→ 透明
    if(e>40&&Math.abs(r-b)<.4*Math.max(r,b)){const t=Math.min(1,(e-40)/70);p[i+3]*=1-t;const k=e*.85;p[i]=Math.max(0,r-k);p[i+2]=Math.max(0,b-k)}}
  const pk=i=>{const r=p[i],g=p[i+1],b=p[i+2];return r>100&&g<.72*r&&b>.38*r&&b<1.35*r};   // 透明部分に接するピンク色の縁を、内側へ削る
  for(let it=0;it<24;it++){const kill=[];
    for(let y=1;y<H-1;y++)for(let xx=1;xx<W-1;xx++){const i=(y*W+xx)*4;if(p[i+3]<40||!pk(i))continue;
      if(p[i-1]<200||p[i+7]<200||p[i-W*4+3]<200||p[i+W*4+3]<200)kill.push(i)}
    if(!kill.length)break;for(const i of kill)p[i+3]=0}
  x.putImageData(d,0,0);
  const s=4,gw=Math.ceil(W/s),gh=Math.ceil(H/s),mk=new Uint8Array(gw*gh),comps=[];   // 透明部分のかたまりを探す
  for(let j=0;j<gh;j++)for(let i=0;i<gw;i++)mk[j*gw+i]=p[((j*s)*W+i*s)*4+3]<40?1:0;
  for(let k=0;k<mk.length;k++){if(mk[k]!==1)continue;const st=[k],o={a:0,x0:gw,y0:gh,x1:0,y1:0};mk[k]=2;
    while(st.length){const q=st.pop(),i=q%gw,j=(q/gw)|0;o.a++;o.x0=Math.min(o.x0,i);o.x1=Math.max(o.x1,i);o.y0=Math.min(o.y0,j);o.y1=Math.max(o.y1,j);
      for(const t of [q-1,q+1,q-gw,q+gw])if(t>=0&&t<mk.length&&mk[t]===1&&!((t%gw===0&&q%gw===gw-1)||(t%gw===gw-1&&q%gw===0))){mk[t]=2;st.push(t)}}
    if(o.a>gw*gh*.004&&o.x0>0&&o.y0>0&&o.x1<gw-1&&o.y1<gh-1)comps.push(o)}
  comps.sort((a,b)=>b.a-a.a);const u=o=>[o.x0*300/gw,o.y0*400/gh,(o.x1-o.x0+1)*300/gw,(o.y1-o.y0+1)*400/gh].map(v=>Math.round(v*10)/10);
  const art=comps[0],info=art&&comps.find(o=>o!==art&&o.y0>art.y1);
  c.toBlob(b=>res({url:URL.createObjectURL(b),art:art?u(art):null,info:info?u(info):null}),"image/png")
 }catch(e){console.warn("枠画像を処理できませんでした（ローカルfile://では不可。公開URLで使えます）",e);res(null)}}; im.src=url})}

// マゼンタ背景の画像 → 透過（アイコン用）。マゼンタが無ければ何もしない
function uiKeyCanvas(im,maxW,forcePeel){
  const W=Math.min(maxW,im.naturalWidth),H=Math.round(W*im.naturalHeight/im.naturalWidth),c=document.createElement("canvas");c.width=W;c.height=H;
  const x=c.getContext("2d");x.drawImage(im,0,0,W,H);const d=x.getImageData(0,0,W,H),p=d.data;let nk=0;
  for(let i=0;i<p.length;i+=4){const r=p[i],g=p[i+1],b=p[i+2],e=Math.min(r,b)-g;
    if(e>40&&Math.abs(r-b)<.4*Math.max(r,b)){nk++;const t=Math.min(1,(e-40)/70);p[i+3]*=1-t;const k=e*.85;p[i]=Math.max(0,r-k);p[i+2]=Math.max(0,b-k)}}
  if(nk>W*H*.002||forcePeel){const pk=i=>{const r=p[i],g=p[i+1],b=p[i+2];return r>100&&g<.72*r&&b>.38*r&&b<1.35*r};
    for(let it=0;it<16;it++){const kill=[];
      for(let y=1;y<H-1;y++)for(let xx=1;xx<W-1;xx++){const i=(y*W+xx)*4;if(p[i+3]<40||!pk(i))continue;
        if(p[i-1]<200||p[i+7]<200||p[i-W*4+3]<200||p[i+W*4+3]<200)kill.push(i)}
      if(!kill.length)break;for(const i of kill)p[i+3]=0}}
  x.putImageData(d,0,0);return{c,x,W,H,p,keyed:nk>W*H*.002}}
const uiBlob=c=>new Promise(r=>c.toBlob(b=>r(URL.createObjectURL(b)),"image/png"));
function uiImg(url){return new Promise(res=>{const im=new Image();im.onload=()=>res(im);im.onerror=()=>res(null);im.src=url})}
async function uiIcon(url){try{const im=await uiImg(url);if(!im)return null;const k=uiKeyCanvas(im,600);if(!k.keyed)return null;   // 透過済みの画像はそのまま使う
  let x0=k.W,y0=k.H,x1=0,y1=0;for(let y=0;y<k.H;y++)for(let x=0;x<k.W;x++)if(k.p[(y*k.W+x)*4+3]>16){x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)}
  if(x1<x0)return null;const pd=Math.round(Math.max(x1-x0,y1-y0)*.04),sx=Math.max(0,x0-pd),sy=Math.max(0,y0-pd),w=Math.min(k.W,x1+pd)-sx,h=Math.min(k.H,y1+pd)-sy,o=document.createElement("canvas");o.width=w;o.height=h;
  o.getContext("2d").drawImage(k.c,sx,sy,w,h,0,0,w,h);return await uiBlob(o)}catch(e){console.warn("アイコンを処理できませんでした",e);return null}}
// アイコンシート（マゼンタ背景に格子状に並べた1枚）を切り分ける。並び順は左→右、上→下
async function uiSheet(url,names,cols){try{const im=await uiImg(url);if(!im)return{};const k=uiKeyCanvas(im,1600,true),s=4,gw=Math.ceil(k.W/s),gh=Math.ceil(k.H/s),mk=new Uint8Array(gw*gh),dl=new Uint8Array(gw*gh);
  for(let j=0;j<gh;j++)for(let i=0;i<gw;i++)mk[j*gw+i]=k.p[((j*s)*k.W+i*s)*4+3]>=40?1:0;
  for(let j=0;j<gh;j++)for(let i=0;i<gw;i++)if(mk[j*gw+i])for(let a=-3;a<=3;a++)for(let b=-3;b<=3;b++){const ii=i+a,jj=j+b;if(ii>=0&&jj>=0&&ii<gw&&jj<gh)dl[jj*gw+ii]=1}
  const comps=[];for(let q0=0;q0<dl.length;q0++){if(dl[q0]!==1)continue;const st=[q0],o={a:0,x0:gw,y0:gh,x1:0,y1:0};dl[q0]=2;
    while(st.length){const q=st.pop(),i=q%gw,j=(q/gw)|0;o.a++;o.x0=Math.min(o.x0,i);o.x1=Math.max(o.x1,i);o.y0=Math.min(o.y0,j);o.y1=Math.max(o.y1,j);
      if(i>0&&dl[q-1]===1){dl[q-1]=2;st.push(q-1)}if(i<gw-1&&dl[q+1]===1){dl[q+1]=2;st.push(q+1)}if(j>0&&dl[q-gw]===1){dl[q-gw]=2;st.push(q-gw)}if(j<gh-1&&dl[q+gw]===1){dl[q+gw]=2;st.push(q+gw)}}
    if(o.a>gw*gh*.0001)comps.push(o)}
  const gap=(a,b)=>Math.hypot(Math.max(0,Math.max(a.x0,b.x0)-Math.min(a.x1,b.x1)),Math.max(0,Math.max(a.y0,b.y0)-Math.min(a.y1,b.y1)));   // 余分なかけらは、近いもの同士を結合
  while(comps.length>names.length){let bi=0,bj=1,bd=1e9;for(let i=0;i<comps.length;i++)for(let j=i+1;j<comps.length;j++){const g=gap(comps[i],comps[j]);if(g<bd){bd=g;bi=i;bj=j}}
    const a=comps[bi],b=comps[bj];a.x0=Math.min(a.x0,b.x0);a.x1=Math.max(a.x1,b.x1);a.y0=Math.min(a.y0,b.y0);a.y1=Math.max(a.y1,b.y1);a.a+=b.a;comps.splice(bj,1)}
  if(comps.length!==names.length){console.warn(`アイコンシート: ${comps.length}個見つかりました（${names.length}個必要）。個別ファイルを使うか、間隔を広げて作り直してください`);return{}}
  comps.sort((a,b)=>(a.y0+a.y1)-(b.y0+b.y1));const out={},rows=[];for(let r=0;r<comps.length;r+=cols)rows.push(comps.slice(r,r+cols).sort((a,b)=>(a.x0+a.x1)-(b.x0+b.x1)));
  const flat=rows.flat();for(let n=0;n<names.length;n++){const o=flat[n],sx=Math.max(0,o.x0*s),sy=Math.max(0,o.y0*s),w=Math.min(k.W,(o.x1+1)*s)-sx,h=Math.min(k.H,(o.y1+1)*s)-sy,side=Math.round(Math.max(w,h)*1.06),cv=document.createElement("canvas");cv.width=cv.height=side;
    cv.getContext("2d").drawImage(k.c,sx,sy,w,h,(side-w)/2,(side-h)/2,w,h);out[names[n]]=await uiBlob(cv)}
  return out}catch(e){console.warn("アイコンシートを処理できませんでした",e);return{}}}
const UI_SHEETS=[["icons/sheet_main",["icon_study","icon_cards","icon_review","icon_gacha","icon_coin","icon_gear"],3],["icons/sheet_small",["stat_words","stat_ok","stat_streak","nav_home","nav_study","nav_gacha","nav_cards","nav_review"],4]];
async function uiInit(cb){   // 背景・アイコンを先に反映（cb）し、そのあと枠画像を処理する
  const found=(await Promise.all(UI_SLOTS.map(async s=>[s,await uiProbe(s)]))).filter(f=>f[1]);
  (await Promise.all(UI_ICONS.map(async n=>[n,await uiProbeIcon(n)]))).forEach(([n,x])=>{if(x)UI_ICO[n]=x});
  found.forEach(([s,x])=>{if(!s.startsWith("card_frame"))UI[s]=x});
  UI_READY=true;if(cb)cb();
  for(const [s,x] of found)if(s.startsWith("card_frame")){const r=await uiKeyFrame(x);if(r)UI_FRAME[s]=r}
}
const bgScene=slot=>{if(!UI_READY)return "";const x=UI[slot]||(slot==="splash_bg"?UI.home_bg:null);return x?`<img class="scene" src="${x}" alt="">`:nightScene()};   // splash_bg が無ければ home_bg を使う
// アイコン画像（assets/ui/icons/名前.png）。無ければ絵文字
const UI_ICONS=["icon_study","icon_cards","icon_review","icon_gacha","icon_coin","icon_gear","stat_words","stat_ok","stat_streak","nav_home","nav_study","nav_gacha","nav_cards","nav_review"];
const UI_ICO={};
function uiProbeIcon(n){return new Promise(res=>{const u=`assets/ui/icons/${n}.png`,im=new Image();im.onload=()=>res(u);im.onerror=()=>res(null);im.src=u})}
const ico=(slot,emoji,cls="")=>UI_ICO[slot]?`<img class="ico ${cls}" src="${UI_ICO[slot]}" alt="">`:`<span class="ico-e ${cls}">${emoji}</span>`;
