/* assets/ui/ に置いた画像を自動で探して使う（無ければ従来のデザインのまま）
   ファイル名（拡張子は webp / png）:
     card_frame            … カード枠（全レア度共通）
     card_frame_common / _uncommon / _rare / _epic / _legendary … レア度別の枠（あれば優先）
     home_bg / splash_bg / gacha_bg / app_bg … 各画面の背景
   カード枠は「絵の窓」を純マゼンタ(#FF00FF)で塗っておくと、自動で透明にして窓の位置も検出します。 */
const UI={},UI_FRAME={};
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
async function uiInit(){
  const found=(await Promise.all(UI_SLOTS.map(async s=>[s,await uiProbe(s)]))).filter(f=>f[1]);
  for(const [s,u] of found){if(s.startsWith("card_frame")){const r=await uiKeyFrame(u);if(r)UI_FRAME[s]=r}else UI[s]=u}
  return found.length}
const bgScene=slot=>UI[slot]?`<img class="scene" src="${UI[slot]}" alt="">`:heroScene();
