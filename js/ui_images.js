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
const LAYOUT_OVERRIDE={};   // 例: {plate:[40,184,220,34],info:[30,230,240,108]}
function uiFrame(r){return UI_FRAME["card_frame_"+String(r).toLowerCase()]||UI_FRAME.card_frame||null}
function uiProbe(slot){return new Promise(res=>{let i=0;const ex=["webp","png"],next=()=>{if(i>=ex.length)return res(null);const u=`assets/ui/${slot}.${ex[i++]}`,im=new Image();im.onload=()=>res(u);im.onerror=next;im.src=u};next()})}
function uiKeyFrame(url){return new Promise(res=>{const im=new Image();im.onerror=()=>res(null);im.onload=()=>{try{
  const W=Math.min(900,im.naturalWidth),H=Math.round(W*im.naturalHeight/im.naturalWidth),c=document.createElement("canvas");c.width=W;c.height=H;
  const x=c.getContext("2d");x.drawImage(im,0,0,W,H);const d=x.getImageData(0,0,W,H),p=d.data;
  for(let i=0;i<p.length;i+=4){const r=p[i],g=p[i+1],b=p[i+2],m=Math.min(r,b)-g;   // マゼンタ → 透明
    if(m>120&&r>140&&b>140)p[i+3]=0;else if(m>70&&r>110&&b>110){p[i+3]*=(120-m)/50;p[i]=p[i+2]=g+(Math.max(r,b)-g)*.25}}
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
