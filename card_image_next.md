# 次に作るカード画像

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ 全500語のうち、これから作るのは **7語**（画像がまだ無い語と、作り直しの語）。ここにはその先頭 **7語** を出しています。

**次に作る5件：temporary / transparent / volatile / accordingly / approximately**

## 使い方
1. 上から順に、``` で囲まれたプロンプトを**そのまま**画像生成AIに入れる（1件＝1枚。3:2の横長）。ChatGPT なら、すぐ下の「まとめて渡す」の枠で5件を1回で渡せる
2. できた絵が「例文（日本語）」のとおりかを確かめる
3. 絵を `assets/cards/単語.webp` にして、`js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` を実行し直すと、作り終えた分が外れて次の分が先頭に来る

順番はレアリティの低い順 → 図鑑の並び順（id順）。`python3 tools/prompt_for.py --next 5` が出す5件と同じです。

## ChatGPT にまとめて渡す（次の5件）
下の枠を丸ごとコピーして ChatGPT に送る。1枚描いて止まるので、確かめたら「次」と送る（5枚目まで繰り返す）。

1. **temporary**（一時的な）… 水につかった道で、縄と板の一時的な橋が旅人たちを向こう岸へ渡す。  
2. **transparent**（透明な）… 水晶の宮殿で、女王が星のように光る海の上の透明な床を歩く。  
3. **volatile**（不安定な）… 嵐の中、荒れやすい海が小さな船を大波の間で揺さぶる。  
4. **accordingly**（それに応じて）… 城壁の上で、斥候がハーピーを見つけ、射手たちはそれに応じて弓を上に向ける。  
5. **approximately**（およそ）… 山道で、道しるべが、空の都までおよそ三日だと示している。  

```
Please create 5 illustrations for a card game, one picture per card, in the order below. Draw ONLY ONE picture per reply: draw picture 1 now, then stop. Each time I reply "次", draw the next picture. Every picture is separate and independent: never put several cards into one image (no grid, no collage, no split panels, no side-by-side). Draw each picture only from its own card's description: never borrow characters, animals, creatures or places from any other card in this list, whether it comes earlier or later. Before drawing each picture, write only that card's "Scene:" sentence in your reply (not the whole description), then draw using the card's full description exactly as written - do not shorten it, summarize it or draw only from the card's word. Every picture is a 3:2 wide landscape image (1536x1024).

[1/5] temporary
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: At the flooded road, a temporary bridge of ropes and planks carries the travelers across. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame

[2/5] transparent
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: In the crystal palace, the queen walks across a transparent floor above the starry sea. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame

[3/5] volatile
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: In the storm, the volatile sea throws the small ship between huge waves. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame

[4/5] accordingly
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: On the castle wall, the scout spots harpies, and the archers aim their bows upward accordingly. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame

[5/5] approximately
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: On the mountain road, a signpost shows that the sky city is approximately three days away. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.5 LEGENDARY（この一覧に7語）

### 1. temporary（一時的な）　id 494
例文（日本語）: 水につかった道で、縄と板の一時的な橋が旅人たちを向こう岸へ渡す。  
例文（英語）: At the flooded road, a temporary bridge of ropes and planks carries the travelers across.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: At the flooded road, a temporary bridge of ropes and planks carries the travelers across. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. transparent（透明な）　id 495
例文（日本語）: 水晶の宮殿で、女王が星のように光る海の上の透明な床を歩く。  
例文（英語）: In the crystal palace, the queen walks across a transparent floor above the starry sea.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: In the crystal palace, the queen walks across a transparent floor above the starry sea. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. volatile（不安定な）　id 496
例文（日本語）: 嵐の中、荒れやすい海が小さな船を大波の間で揺さぶる。  
例文（英語）: In the storm, the volatile sea throws the small ship between huge waves.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: In the storm, the volatile sea throws the small ship between huge waves. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. accordingly（それに応じて）　id 497　敵役: harpy
例文（日本語）: 城壁の上で、斥候がハーピーを見つけ、射手たちはそれに応じて弓を上に向ける。  
例文（英語）: On the castle wall, the scout spots harpies, and the archers aim their bows upward accordingly.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: On the castle wall, the scout spots harpies, and the archers aim their bows upward accordingly. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. approximately（およそ）　id 498
例文（日本語）: 山道で、道しるべが、空の都までおよそ三日だと示している。  
例文（英語）: On the mountain road, a signpost shows that the sky city is approximately three days away.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: On the mountain road, a signpost shows that the sky city is approximately three days away. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. simultaneously（同時に）　id 499
例文（日本語）: 塔の上で、二頭の竜が反対側から同時に炎を吐く。  
例文（英語）: Above the tower, two dragons breathe fire simultaneously from opposite sides.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: Above the tower, two dragons breathe fire simultaneously from opposite sides. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. subsequently（その後）　id 500　敵役: basilisk
例文（日本語）: 洞窟で、勇者が鏡でバジリスクの目をくらませ、その後、巣を封じる。  
例文（英語）: In the cave, the hero blinds the basilisk with a mirror and subsequently seals its lair.
```
masterpiece grand legendary painted fantasy illustration, mythic scale, a huge glowing magic circle, divine radiant light breaking through the sky, swirling golden and starry particles, extremely detailed, cinematic. This is a legendary card, the highest tier, 5 of 5: the most awe-inspiring picture of the whole set, grander in scale and light than any other tier. Scene: In the cave, the hero blinds the basilisk with a mirror and subsequently seals its lair. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. basilisks are long scaled lizards with a crested head and bright yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

