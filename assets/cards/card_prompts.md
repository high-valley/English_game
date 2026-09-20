# 豪華カード画像の生成プロンプト

画像生成AIで作った画像は `assets/cards/単語.png`（横長 約 6:5、例 1200x990）で保存し、
`js/card_art.js` の `CARD_IMG` に1行足すと、SVGイラストの代わりに使われます。

例: `const CARD_IMG={apple:"assets/apple_art.png", cat:"assets/cards/cat.png"};`

## 共通スタイル（各プロンプトの末尾に付ける）
fantasy trading card game illustration, ornate golden glow, rich saturated colors, dramatic magical lighting, sparkles and floating particles, deep navy and gold palette, centered subject, highly detailed, painterly, no text, no letters

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
