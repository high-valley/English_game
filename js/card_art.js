/* カード画像とカードゲーム風の一文
   ・CARD_IMG … 生成した画像を使う単語（assets/cards/○○.png を置いて追記）
   ・CARD_EXTRA … その単語を使った一文（s:英文 t:和訳）
   ・ART_SVG … コードで描いたイラスト（画像が無い単語に使われる） */
const CARD_IMG={apple:"assets/cards/apple.png",abandon:"assets/cards/abandon.jpg"};
const CARD_EXTRA={
  apple:{s:"The knight ate a red apple and regained his strength.",t:"騎士は赤いりんごを食べ、力を取り戻した。"},
  cat:{s:"The cat guarded the castle gate all night.",t:"猫は一晩中、城門を守り抜いた。"},
  book:{s:"The wizard opened an ancient book of light.",t:"魔法使いは、光の古書を開いた。"},
  water:{s:"Water from the sacred spring healed the hero.",t:"聖なる泉の水が、勇者を癒やした。"},
  night:{s:"The castle glowed with magic all night.",t:"城は夜通し、魔法の光を放っていた。"},
  strong:{s:"Only the strong can pull the sword from the stone.",t:"強き者だけが、石から剣を抜ける。"},
  dog:{s:"The loyal dog led the knight through the dark forest.",t:"忠実な犬が、騎士を暗い森の外へ導いた。"},
  win:{s:"Only the brave can win the final battle.",t:"勇者だけが、最後の戦いに勝てる。"},
  world:{s:"The dragon soared over the whole world.",t:"ドラゴンは、世界の果てまで舞い上がった。"},
  future:{s:"The oracle saw the future in a crystal.",t:"神託者は、水晶の中に未来を見た。"},
  abandon:{s:"The hero would never abandon his comrades.",t:"勇者は仲間を決して見捨てない。"},
  meaning:{s:"Every ancient rune holds a hidden meaning.",t:"古代のルーンには、すべて隠された意味がある。"}
};
const _sp='<g fill="#fff"><circle cx="24" cy="26" r="1.4" opacity=".9"/><circle cx="172" cy="22" r="1.8" opacity=".8"/><circle cx="150" cy="58" r="1" opacity=".7"/><circle cx="38" cy="82" r="1.2" opacity=".6"/><circle cx="184" cy="112" r="1.3" opacity=".7"/><circle cx="14" cy="130" r="1" opacity=".6"/></g><path d="M60 40l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM160 90l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="#ffe9a0"/>';
const _bg=(id,a,b)=>`<defs><radialGradient id="${id}" cx="50%" cy="48%" r="75%"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient></defs><rect width="200" height="180" fill="url(#${id})"/>${_sp}`;
const _svg=b=>`<svg class="cart" viewBox="0 6 200 150" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${b}</svg>`;
const ART_SVG={
  cat:_svg(_bg("bgCat","#4b3a9a","#0a0d24")+`<circle cx="100" cy="76" r="52" fill="#ffeeb0" opacity=".22"/><circle cx="100" cy="76" r="36" fill="#fff3c4"/>
  <g fill="#0b0a1c"><path d="M78 142C74 114 88 98 100 98s26 16 22 44z"/><circle cx="100" cy="90" r="15"/><path d="M87 80l2-18 9 12zM113 80l-2-18-9 12z"/><path d="M122 140c26 0 32-26 20-34" stroke="#0b0a1c" stroke-width="7" fill="none" stroke-linecap="round"/></g>
  <g fill="#9dff7a"><ellipse cx="94" cy="90" rx="3.2" ry="4"/><ellipse cx="106" cy="90" rx="3.2" ry="4"/></g><g fill="#0b0a1c"><rect x="93.4" y="87" width="1.2" height="6"/><rect x="105.4" y="87" width="1.2" height="6"/></g>
  <g fill="#15113a"><rect y="142" width="200" height="38"/><rect x="0" y="132" width="16" height="12"/><rect x="32" y="132" width="16" height="12"/><rect x="64" y="132" width="16" height="12"/><rect x="120" y="132" width="16" height="12"/><rect x="152" y="132" width="16" height="12"/><rect x="184" y="132" width="16" height="12"/></g>`),
  book:_svg(_bg("bgBook","#7a45c8","#120a33")+`<defs><linearGradient id="beam" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff2b0" stop-opacity=".85"/><stop offset="1" stop-color="#fff2b0" stop-opacity="0"/></linearGradient></defs>
  <path d="M56 122L96 6h8l40 116z" fill="url(#beam)"/><ellipse cx="100" cy="128" rx="74" ry="16" fill="#ffe27a" opacity=".35"/>
  <path d="M32 132c24-8 52-6 68 4 16-10 44-12 68-4v8c-24-8-52-6-68 4-16-10-44-12-68-4z" fill="#7a1f2e" stroke="#e0b850" stroke-width="1.5"/>
  <path d="M100 130C82 120 58 120 38 128V84c20-8 44-8 62 2z" fill="#fff6d6" stroke="#c9973a" stroke-width="2"/><path d="M100 130c18-10 42-10 62-2V84c-20-8-44-8-62 2z" fill="#fff0c4" stroke="#c9973a" stroke-width="2"/>
  <g stroke="#b79a5a" stroke-width="1.3" fill="none"><path d="M48 96c14-4 28-2 42 4M48 106c14-4 28-2 42 4M48 116c14-4 28-2 42 4M110 100c14-6 28-8 42-4M110 110c14-6 28-8 42-4"/></g>
  <g fill="#ffe9a0"><path d="M70 60l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM132 44l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM100 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></g>`),
  water:_svg(_bg("bgWater","#2a86d0","#06122e")+`<defs><linearGradient id="drop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4f7ff"/><stop offset=".5" stop-color="#4fb8f0"/><stop offset="1" stop-color="#1558b8"/></linearGradient></defs>
  <g fill="none" stroke="#8fe1ff" opacity=".6"><ellipse cx="100" cy="144" rx="74" ry="14"/><ellipse cx="100" cy="144" rx="50" ry="9"/><ellipse cx="100" cy="144" rx="26" ry="5"/></g>
  <circle cx="100" cy="100" r="52" fill="#8fe1ff" opacity=".2"/>
  <path d="M100 26S62 80 62 108a38 38 0 0 0 76 0C138 80 100 26 100 26z" fill="url(#drop)" stroke="#e2faff" stroke-width="2"/>
  <path d="M82 98c-2 12 2 22 10 28" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".85"/><g fill="#bdf0ff"><circle cx="40" cy="70" r="4"/><circle cx="162" cy="86" r="3"/><circle cx="150" cy="40" r="2.5"/></g>`),
  night:_svg(_bg("bgNight","#5a38a8","#070a1e")+`<defs><mask id="cres"><rect width="200" height="180" fill="#fff"/><circle cx="120" cy="62" r="34" fill="#000"/></mask></defs>
  <circle cx="100" cy="68" r="56" fill="#ffe9a0" opacity=".18"/><circle cx="98" cy="70" r="38" fill="#ffe9a0" mask="url(#cres)"/>
  <g fill="#0a0a22"><rect x="20" y="134" width="160" height="46"/><rect x="84" y="100" width="32" height="50"/><path d="M80 102l20-36 20 36z"/><rect x="34" y="116" width="22" height="30"/><path d="M30 118l15-26 15 26z"/><rect x="144" y="116" width="22" height="30"/><path d="M140 118l15-26 15 26z"/></g>
  <g fill="#ffd66a"><rect x="96" y="114" width="8" height="14" rx="4"/><rect x="41" y="126" width="8" height="10" rx="4"/><rect x="151" y="126" width="8" height="10" rx="4"/><rect x="90" y="150" width="20" height="30" rx="10"/></g>`),
  strong:_svg(_bg("bgSword","#8a5a2a","#100a22")+`<defs><linearGradient id="blade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9aa6c0"/><stop offset=".5" stop-color="#fff"/><stop offset="1" stop-color="#8090b0"/></linearGradient></defs>
  <circle cx="100" cy="70" r="60" fill="#ffd66a" opacity=".3"/><path d="M100 0L72 100h56z" fill="#ffe9a0" opacity=".18"/>
  <path d="M92 58h16v64l-8 10-8-10z" fill="url(#blade)"/><rect x="97" y="26" width="6" height="24" fill="#7a1f2e"/><circle cx="100" cy="22" r="6" fill="#f3cf6a" stroke="#fff3bf"/><rect x="72" y="48" width="56" height="9" rx="4" fill="#f3cf6a" stroke="#a67a1c"/>
  <path d="M46 180l12-50c20-14 64-14 84 0l12 50z" fill="#4c4c62" stroke="#2a2a3a" stroke-width="2"/><path d="M62 140c14-6 22-6 30-4M118 138c10 0 18 2 24 6" stroke="#6a6a86" stroke-width="2" fill="none"/>`)
};
function heroScene(){
  return `<svg class="scene" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#171a5c"/><stop offset=".5" stop-color="#5b3a9c"/><stop offset=".82" stop-color="#f08a5a"/><stop offset="1" stop-color="#ffd08a"/></linearGradient><radialGradient id="hsun" cx="50%" cy="78%" r="45%"><stop offset="0" stop-color="#ffe9a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffe9a0" stop-opacity="0"/></radialGradient></defs>
  <rect width="400" height="260" fill="url(#hsky)"/><rect width="400" height="260" fill="url(#hsun)"/>
  <g fill="#fff"><circle cx="30" cy="30" r="1.5"/><circle cx="90" cy="18" r="1"/><circle cx="150" cy="44" r="1.3"/><circle cx="250" cy="24" r="1.4"/><circle cx="320" cy="50" r="1.2"/><circle cx="376" cy="20" r="1.6"/><circle cx="60" cy="70" r="1"/><circle cx="350" cy="90" r="1"/></g>
  <g fill="#ffb98a" opacity=".55"><ellipse cx="60" cy="196" rx="90" ry="14"/><ellipse cx="340" cy="188" rx="80" ry="12"/></g>
  <g fill="#241d55"><path d="M36 120h64l-10 22-22 14-22-14z"/><path d="M306 100h60l-9 20-21 12-21-12z"/><rect x="62" y="98" width="10" height="22"/><path d="M60 98l7-14 7 14z"/><rect x="334" y="80" width="10" height="20"/><path d="M332 80l7-13 7 13z"/></g>
  <path d="M120 178h160l-24 40-30 30-26-22-26 22-30-30z" fill="#1d1848"/><ellipse cx="200" cy="178" rx="80" ry="8" fill="#2f5a4a"/>
  <g fill="#181240"><rect x="160" y="140" width="80" height="38"/><rect x="190" y="84" width="20" height="60"/><path d="M186 86l14-34 14 34z"/><rect x="164" y="112" width="16" height="34"/><path d="M160 114l12-26 12 26z"/><rect x="220" y="112" width="16" height="34"/><path d="M216 114l12-26 12 26z"/><rect x="146" y="150" width="12" height="28"/><path d="M143 152l9-18 9 18z"/><rect x="242" y="150" width="12" height="28"/><path d="M239 152l9-18 9 18z"/></g>
  <g fill="#ffd66a"><rect x="197" y="104" width="6" height="10" rx="3"/><rect x="169" y="128" width="6" height="8" rx="3"/><rect x="225" y="128" width="6" height="8" rx="3"/><rect x="190" y="156" width="20" height="22" rx="10"/></g>
  <g fill="none" stroke="#2a1d55" stroke-width="1.6" stroke-linecap="round"><path d="M92 62q5-7 10 0q5-7 10 0M120 48q4-6 8 0q4-6 8 0M300 66q4-6 8 0q4-6 8 0"/></g><g fill="#ffe9a0" opacity=".35"><path d="M200 84L120 0h30zM200 84L250 0h34z"/></g><g fill="#fff" opacity=".85"><ellipse cx="70" cy="240" rx="80" ry="16"/><ellipse cx="200" cy="252" rx="100" ry="16"/><ellipse cx="340" cy="238" rx="80" ry="16"/></g></svg>`}

/* ===== 新カードデザイン：金の飾り枠（viewBox 300x400。中身はHTMLを重ねる） ===== */
const CARD_FRAME=(()=>{
  const G='url(#gd)',curl='<path d="M6 60C6 34 18 20 40 18c12-1 18 6 14 13-3 6-12 6-14 0" fill="none" stroke="'+G+'" stroke-width="2.4" stroke-linecap="round"/><path d="M6 60c0 10 4 16 10 20M20 30c-3-8 2-14 10-14M40 18c8-6 18-6 26-2" fill="none" stroke="'+G+'" stroke-width="1.6" stroke-linecap="round"/><path d="M14 44q-8-4-9-13 9 1 9 13zM30 24q2-9 10-11 0 9-10 11zM58 15q7-5 15-2-5 7-15 2z" fill="'+G+'"/><circle cx="10" cy="10" r="3.2" fill="#3aa0ff" stroke="#fff3bf" stroke-width=".8"/>';
  const cn=['','translate(300 0) scale(-1 1)','translate(0 400) scale(1 -1)','translate(300 400) scale(-1 -1)'].map(t=>`<g transform="${t}">${curl}</g>`).join('');
  let vine='';
  [[13,1],[287,-1]].forEach(([x,d])=>{let p=`M${x} 74`;for(let i=0;i<5;i++)p+=`C${x+d*9} ${88+i*24} ${x-d*9} ${100+i*24} ${x} ${110+i*24}`;
    vine+=`<path d="${p}" fill="none" stroke="${G}" stroke-width="1.6" stroke-linecap="round"/>`;
    for(let i=0;i<5;i++)vine+=`<path d="M${x} ${92+i*24}q${d*9} -3 ${d*11} -11q-${d*10} 1 -${d*11} 11z" fill="${G}" opacity=".9"/>`});
  return `<svg class="cd3-frame" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg"><defs>
  <linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff2b0"/><stop offset=".45" stop-color="#e5b84a"/><stop offset="1" stop-color="#8f6716"/></linearGradient>
  <linearGradient id="pc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf3da"/><stop offset="1" stop-color="#dfcd9f"/></linearGradient></defs>
  <rect x="3" y="3" width="294" height="394" rx="16" fill="none" stroke="${G}" stroke-width="4.5"/><rect x="9" y="9" width="282" height="382" rx="12" fill="none" stroke="#f1d27a" stroke-opacity=".55" stroke-width="1"/>
  ${vine}${cn}
  <rect x="22" y="226" width="256" height="114" rx="14" fill="#0b1029" stroke="${G}" stroke-width="2.2"/><rect x="26.5" y="230.5" width="247" height="105" rx="10" fill="none" stroke="#f1d27a" stroke-opacity=".4" stroke-width=".8"/>
  <path d="M150 224l6 5-6 5-6-5z" fill="#3aa0ff" stroke="#fff3bf" stroke-width=".8"/>
  <rect x="22" y="346" width="172" height="38" rx="19" fill="#0b1029" stroke="${G}" stroke-width="2"/>
  <path d="M218 344h46l20 24-20 24h-46l-20-24z" fill="#0b1029" stroke="${G}" stroke-width="2.2"/>
  <rect x="24" y="22" width="252" height="168" rx="6" fill="none" stroke="${G}" stroke-width="3"/><rect x="27" y="25" width="246" height="162" rx="4" fill="none" stroke="#fff3bf" stroke-opacity=".35" stroke-width=".8"/>
  <path d="M14 200q4-20 26-20h220q22 0 26 20-4 20-26 20H40q-22 0-26-20z" fill="url(#pc)" stroke="${G}" stroke-width="2.6"/><path d="M22 200q4-14 20-14h216q16 0 20 14-4 14-20 14H42q-16 0-20-14z" fill="none" stroke="#b58a2a" stroke-opacity=".5" stroke-width=".8"/>
  <path d="M150 174l7 6-7 6-7-6z" fill="#3aa0ff" stroke="#fff3bf" stroke-width=".9"/><path d="M12 200l6-5 6 5-6 5zM276 200l6-5 6 5-6 5z" fill="#3aa0ff" stroke="#fff3bf" stroke-width=".8"/>
  <path d="M31.6 12H56.4L76 31.6V56.4L56.4 76H31.6L12 56.4V31.6Z" fill="#0b1029" stroke="${G}" stroke-width="2.6"/><path d="M33 17H55L71 33V55L55 71H33L17 55V33Z" fill="none" stroke="#f1d27a" stroke-opacity=".45" stroke-width=".8"/>
  <rect x="204" y="18" width="78" height="28" rx="14" fill="#0b1029" stroke="${G}" stroke-width="2.2"/>
  <circle cx="150" cy="17" r="15" fill="#0b1029" stroke="${G}" stroke-width="2.6"/><path d="M150 4l3.4 10L164 17l-10.6 3L150 30l-3.4-10L136 17l10.6-3z" fill="${G}"/><circle cx="150" cy="17" r="2.2" fill="#0b1029"/>
  </svg>`})();
const SCN_PAL={COMMON:["#3d5fa8","#8fb4e8","#ffd9a0"],UNCOMMON:["#1f6b6b","#6fd0b0","#ffe9a0"],RARE:["#2a4fbf","#7db8ff","#ffe0a0"],EPIC:["#4b2a9a","#c07be8","#ffc0a0"],LEGENDARY:["#8a1f2a","#ff8a5a","#ffe08a"]};
function sceneSvg(r){const [a,b,c]=SCN_PAL[r]||SCN_PAL.COMMON;
  return `<svg class="cart" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sk${r}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".6" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient><radialGradient id="sn${r}" cx=".7" cy=".66" r=".5"><stop offset="0" stop-color="#fff8d0" stop-opacity=".95"/><stop offset="1" stop-color="#fff8d0" stop-opacity="0"/></radialGradient><linearGradient id="wt${r}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${a}"/></linearGradient></defs>
  <rect width="300" height="200" fill="url(#sk${r})"/><rect width="300" height="200" fill="url(#sn${r})"/>
  <g fill="#fff" opacity=".4"><ellipse cx="70" cy="38" rx="52" ry="9"/><ellipse cx="112" cy="47" rx="40" ry="7"/><ellipse cx="236" cy="28" rx="46" ry="8"/><ellipse cx="180" cy="60" rx="34" ry="6"/></g>
  <path d="M0 132l40-20 40 16 50-24 60 26 50-20 60 18v72H0z" fill="#3a4d8a" opacity=".5"/>
  <g fill="#241d55" opacity=".9"><rect x="204" y="112" width="70" height="26"/><rect x="214" y="86" width="10" height="30"/><path d="M212 88l7-24 7 24z"/><rect x="234" y="98" width="14" height="20"/><path d="M232 100l9-18 9 18z"/><rect x="256" y="104" width="10" height="14"/><path d="M254 106l7-14 7 14z"/></g>
  <rect y="136" width="300" height="64" fill="url(#wt${r})"/><path d="M196 138h60l-16 62h-30z" fill="#fff4c0" opacity=".3"/>
  <path d="M0 200v-46q40-12 72 8 30 14 50 38z" fill="#1c2a30"/><path d="M0 154q40-12 72 8 6 3 12 8-40-14-84-4z" fill="#3f6b48"/></svg>`}
