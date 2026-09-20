# 豪華カード画像の生成プロンプト

## 画像の比率について
- **プロンプトの文章だけでは比率は保証されません。** 比率は画像生成AIの「サイズ／アスペクト比」設定で決まります。
  - Midjourney：末尾に `--ar 3:2`
  - ChatGPT / Gemini など：設定に比率の選択があればそこで 3:2（横長）を選ぶ。無ければ文章で頼み、出てきた画像のサイズを確認する
  - 目安のサイズ：1800x1200（3:2）
- ゲーム側のカード画像枠は **3:2（横長）** です。
- 3:2 以外の画像でも、**切り抜かず全体を表示**します（余白は、ぼかした同じ画像で埋めます）。ただし3:2が最もきれいです。
- 被写体は**画面の中央**に置くよう頼んでください（共通スタイルに入れてあります）。
- 枠や文字はゲーム側で付けるので、画像には入れません。

## 使い方
`assets/cards/単語.png` に保存し、`js/card_art.js` の `CARD_IMG` に1行足すと、SVGイラストの代わりに使われます。

例: `const CARD_IMG={apple:"assets/apple_art.png", cat:"assets/cards/cat.png"};`

## 共通スタイル（各プロンプトの末尾に付ける）
fantasy trading card game illustration, ornate golden glow, rich saturated colors, dramatic magical lighting, sparkles and floating particles, deep navy and gold palette, subject centered with generous margin, 3:2 landscape composition, highly detailed, painterly, no text, no letters, no border, no frame

## 単語ごとの場面（英文に沿った絵）
| 単語 | カードの英文 | プロンプト（共通スタイルを追加） |
|---|---|---|
| apple | The knight ate a red apple and regained his strength. | a knight in silver armor holding a glossy red apple, golden healing light swirling around him, enchanted orchard at dusk |
| cat | The cat guarded the castle gate all night. | a black cat with glowing green eyes sitting on a castle gate wall, huge full moon behind, starry night |
| book | The wizard opened an ancient book of light. | a wizard opening a giant ancient glowing book, beams of light and floating runes rising from the pages, dark library |
| water | Water from the sacred spring healed the hero. | a sacred spring of glowing turquoise water in a hidden cave, a wounded hero being healed by shimmering droplets |
| night | The castle glowed with magic all night. | a floating castle glowing with golden magic under a crescent moon, night sky full of stars |
| strong | Only the strong can pull the sword from the stone. | a legendary sword embedded in a mossy stone, radiant golden beams, hero's hand reaching for the hilt |
| dog | The loyal dog led the knight through the dark forest. | a loyal golden dog with a glowing lantern guiding a knight through a misty enchanted forest |
| win | Only the brave can win the final battle. | a triumphant hero raising a glowing sword on a battlefield at sunrise, banners and golden light |
| world | The dragon soared over the whole world. | a majestic dragon flying above a glowing fantasy world with floating islands and oceans |
| future | The oracle saw the future in a crystal. | a mystic oracle gazing into a glowing crystal ball showing visions of a golden city |
| abandon | The hero would never abandon his comrades. | a hero standing back to back with his comrades against a dark storm, one hand holding a torch |
| meaning | Every ancient rune holds a hidden meaning. | a wall of ancient glowing runes, one rune shining bright gold, mystical temple |
