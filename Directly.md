English_game/
├─ index.html
├─ SPEC.md                 仕様書
├─ TODO.md                 次のタスク
├─ card_image_prompts.md   カード画像のプロンプト（100語）
├─ css/
│   ├─ style.css           元のスタイル（リポジトリ側）
│   └─ upgrade.css         追加・上書きのスタイル
├─ js/
│   ├─ words.js            単語データ（先頭にIDのルール）
│   ├─ app.js              ホーム・勉強・カード・復習・セーブ
│   ├─ gacha_ui.js         ガチャ画面と開封演出
│   ├─ card_art.js         カード画像の対応、SVGイラスト
│   └─ ui_images.js        assets/ui の画像の自動読み込み
└─ assets/
    ├─ pack.svg / card_back.svg   （リポジトリ側。差し替え予定）
    ├─ cards/              apple.webp, cat.webp
    └─ ui/
        ├─ card_frame.webp / home_bg.webp / logo_title.webp
        │  logo_emblem.webp / favicon.png
        ├─ icons/          icon_*, stat_*, nav_*
        ├─ README.md / gacha_prompts.md / icon_prompts.md
        └─ _layout_guide.png / _layout_labeled.png
