/* カード画像とカードゲーム風の一文
   ・CARD_IMG … 生成した画像を使う単語（assets/cards/○○.png を置いて追記）
   ・CARD_EXTRA … その単語を使った一文（s:英文 t:和訳）
   ・ART_SVG … コードで描いたイラスト（画像が無い単語に使われる） */
const CARD_IMG={apple:"assets/apple_art.png"};
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
  <g fill="#fff" opacity=".85"><ellipse cx="70" cy="240" rx="80" ry="16"/><ellipse cx="200" cy="252" rx="100" ry="16"/><ellipse cx="340" cy="238" rx="80" ry="16"/></g></svg>`}
