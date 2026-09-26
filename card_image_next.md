# 次に作るカード画像

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ 全500語のうち、画像がまだ無いのは **288語**。ここにはその先頭 **288語** を出しています。

**次に作る5件：responsibility / effective / available / achieve / compare**

## 使い方
1. 上から順に、``` で囲まれたプロンプトを**そのまま**画像生成AIに入れる（1件＝1枚。3:2の横長）
2. できた絵が「例文（日本語）」のとおりかを確かめる
3. 絵を `assets/cards/単語.webp` にして、`js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` を実行し直すと、作り終えた分が外れて次の分が先頭に来る

順番はレアリティの低い順 → 図鑑の並び順（id順）。`python3 tools/prompt_for.py --next 5` が出す5件と同じです。


## Lv.3 RARE（この一覧に90語）

### 1. responsibility（責任）　id 51
例文（日本語）: にぎやかな市場で、いちばん上の姉が三人の弟たちの面倒を見る責任を負う。  
例文（英語）: At the busy market, the eldest sister takes responsibility for her three little brothers.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the busy market, the eldest sister takes responsibility for her three little brothers. The responsibility itself is the main subject of the picture: large and clearly visible. If the responsibility is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. effective（効果的な）　id 52　敵役: wraith
例文（日本語）: 古い礼拝堂で、司祭の聖水が効き、レイスたちが消えていく。  
例文（英語）: In the old chapel, the priest's holy water is effective, and the wraiths fade away.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the old chapel, the priest's holy water is effective, and the wraiths fade away. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. wraiths are hooded shapes of black smoke with no face, only two pale burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. available（利用できる）　id 53
例文（日本語）: 混み合った宿で、宿の主人がまだ空いているただ一つの部屋を指さす。  
例文（英語）: At the crowded inn, the innkeeper points to the only room still available.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the crowded inn, the innkeeper points to the only room still available. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. achieve（達成する）　id 54
例文（日本語）: 玉座の間で、女王から剣を授かり、若い騎士は夢をかなえる。  
例文（英語）: In the throne room, the young knight achieves her dream as the queen hands her a sword.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the throne room, the young knight achieves her dream as the queen hands her a sword. Make the sentence's action (achieve) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. compare（比べる）　id 55
例文（日本語）: 市場の店先で、商人が二本の剣を注意深く比べる。  
例文（英語）: At his stall in the market, the merchant compares two swords carefully.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At his stall in the market, the merchant compares two swords carefully. Make the sentence's action (compare) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. describe（描写する）　id 56　敵役: serpent
例文（日本語）: 酒場で、年老いた船乗りが目を丸くした子どもたちに巨大な海蛇のことを語る。  
例文（英語）: In the tavern, an old sailor describes a giant sea serpent to wide-eyed children.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the tavern, an old sailor describes a giant sea serpent to wide-eyed children. Make the sentence's action (describe) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. giant serpents are thick-coiled snakes with dark green scales and cold yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. influence（影響）　id 57　敵役: werewolf
例文（日本語）: 暗い森の中で、満月が人狼たちに強い影響を与える。  
例文（英語）: In the dark forest, the full moon has a strong influence on the werewolves.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the dark forest, the full moon has a strong influence on the werewolves. The influence itself is the main subject of the picture: large and clearly visible. If the influence is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. purpose（目的）　id 58　敵役: pirate
例文（日本語）: 崖の上の高い見張り塔の目的は、海賊船を見つけることだ。  
例文（英語）: The purpose of the tall watchtower on the cliff is to spot pirate ships.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The purpose of the tall watchtower on the cliff is to spot pirate ships. The purpose itself is the main subject of the picture: large and clearly visible. If the purpose is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. popular（人気のある）　id 59
例文（日本語）: 村の広場で、人気の人形劇に子どもたちが大勢集まる。  
例文（英語）: In the village square, the popular puppet show draws a big crowd of children.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the village square, the popular puppet show draws a big crowd of children. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. challenge（挑戦）　id 60　敵役: ogre
例文（日本語）: 闘技場で、若き勇者が巨大なオーガの挑戦を受ける。  
例文（英語）: At the arena, the young hero accepts the giant ogre's challenge.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the arena, the young hero accepts the giant ogre's challenge. The challenge itself is the main subject of the picture: large and clearly visible. If the challenge is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club, wearing rough hide clothes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. treasure（宝物）　id 261　敵役: pirate
例文（日本語）: 島で、海賊たちがヤシの木の下に金色の宝物を埋める。  
例文（英語）: On the island, the pirates bury a golden treasure under a palm tree.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the island, the pirates bury a golden treasure under a palm tree. The treasure itself is the main subject of the picture: large and clearly visible. If the treasure is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 12. mystery（謎）　id 262
例文（日本語）: 雪の中庭で、二人の若い従者が光る足跡の謎を調べる。  
例文（英語）: In the snowy courtyard, two young squires study the mystery of the glowing footprints.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the snowy courtyard, two young squires study the mystery of the glowing footprints. The mystery itself is the main subject of the picture: large and clearly visible. If the mystery is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 13. secret（秘密）　id 263
例文（日本語）: 書庫で、古い本棚の裏の秘密の扉が開く。  
例文（英語）: In the library, a secret door opens behind the old bookshelf.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the library, a secret door opens behind the old bookshelf. The secret itself is the main subject of the picture: large and clearly visible. If the secret is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 14. wisdom（知恵）　id 264
例文（日本語）: 村人たちが、古い木の精の知恵を聞くために山を登る。  
例文（英語）: Villagers climb the mountain to hear the wisdom of the ancient tree spirit.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Villagers climb the mountain to hear the wisdom of the ancient tree spirit. The wisdom itself is the main subject of the picture: large and clearly visible. If the wisdom is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 15. victory（勝利）　id 265　敵役: troll
例文（日本語）: 戦場で、兵士たちが倒れたトロルの王を前に、勝利の旗を掲げる。  
例文（英語）: On the battlefield, the soldiers raise their banners in victory over the fallen troll king.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the battlefield, the soldiers raise their banners in victory over the fallen troll king. The victory itself is the main subject of the picture: large and clearly visible. If the victory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes, wearing a ragged fur loincloth. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 16. power（力）　id 266
例文（日本語）: 滝の力が、水車小屋の大きな車輪を回す。  
例文（英語）: The power of the waterfall turns the great wheel of the mill.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The power of the waterfall turns the great wheel of the mill. The power itself is the main subject of the picture: large and clearly visible. If the power is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 17. memory（記憶）　id 267
例文（日本語）: 屋根裏部屋で、おばあさんが子どものころの人形を抱き、思い出にほほえむ。  
例文（英語）: In the attic, an old woman smiles at a memory as she holds her childhood doll.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the attic, an old woman smiles at a memory as she holds her childhood doll. The memory itself is the main subject of the picture: large and clearly visible. If the memory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 18. journey（旅路）　id 268
例文（日本語）: 港から、船が嵐の海を越える長い旅に出る。  
例文（英語）: From the harbour, the ship begins its long journey across the stormy sea.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: From the harbour, the ship begins its long journey across the stormy sea. The journey itself is the main subject of the picture: large and clearly visible. If the journey is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 19. leader（指導者）　id 269　敵役: werewolf
例文（日本語）: 岩の尾根で、人狼の群れの指導者が月に向かって吠える。  
例文（英語）: On the rocky ridge, the leader of the werewolf pack howls at the moon.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the rocky ridge, the leader of the werewolf pack howls at the moon. The leader itself is the main subject of the picture: large and clearly visible. If the leader is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 20. promise（約束）　id 270
例文（日本語）: 古いカシの木の下で、二人の子どもが小指をからめて約束をする。  
例文（英語）: Under the old oak tree, two children make a promise with linked little fingers.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Under the old oak tree, two children make a promise with linked little fingers. The promise itself is the main subject of the picture: large and clearly visible. If the promise is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 21. danger（危険）　id 271　敵役: basilisk
例文（日本語）: 岩の道で、隠れたバジリスクが旅人たちにとって命にかかわる危険となる。  
例文（英語）: On the rocky path, a hidden basilisk is a deadly danger to the travelers.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the rocky path, a hidden basilisk is a deadly danger to the travelers. The danger itself is the main subject of the picture: large and clearly visible. If the danger is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. basilisks are long scaled lizards with a crested head and bright yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 22. energy（エネルギー）　id 272
例文（日本語）: 書斎で、青いエネルギーが魔法使いの手のまわりに集まる。  
例文（英語）: In the study, blue energy gathers around the mage's hands.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the study, blue energy gathers around the mage's hands. The energy itself is the main subject of the picture: large and clearly visible. If the energy is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 23. nature（自然）　id 273
例文（日本語）: 草原で、少女がシカやウサギに囲まれ、自然の静かな美しさの中に座っている。  
例文（英語）: In the meadow, a girl sits among deer and rabbits in the quiet beauty of nature.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the meadow, a girl sits among deer and rabbits in the quiet beauty of nature. The nature itself is the main subject of the picture: large and clearly visible. If the nature is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 24. peace（平和）　id 274
例文（日本語）: 戦いのあと平和が戻り、谷では農夫たちが古い戦場を耕している。  
例文（英語）: After the war, peace returns and farmers plow the old battlefield in the valley.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: After the war, peace returns and farmers plow the old battlefield in the valley. The peace itself is the main subject of the picture: large and clearly visible. If the peace is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 25. freedom（自由）　id 275
例文（日本語）: 逃げ出した馬たちが、開けた平原を自由に駆けていく。  
例文（英語）: Escaped horses gallop in freedom across the open plain.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Escaped horses gallop in freedom across the open plain. The freedom itself is the main subject of the picture: large and clearly visible. If the freedom is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 26. knowledge（知識）　id 276
例文（日本語）: 書斎で、若い見習いが話す本から知識を得る。  
例文（英語）: In the study, a young apprentice gains knowledge from a talking book.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the study, a young apprentice gains knowledge from a talking book. The knowledge itself is the main subject of the picture: large and clearly visible. If the knowledge is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 27. history（歴史）　id 277
例文（日本語）: 王国の歴史が、宮殿の大きな石の壁に刻まれている。  
例文（英語）: The history of the kingdom is carved into the great stone wall of the palace.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The history of the kingdom is carved into the great stone wall of the palace. The history itself is the main subject of the picture: large and clearly visible. If the history is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 28. tradition（伝統）　id 278
例文（日本語）: 谷の村人たちが、春の古い伝統として五月柱のまわりを踊る。  
例文（英語）: In the valley, the villagers dance around the maypole, an old spring tradition.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the valley, the villagers dance around the maypole, an old spring tradition. The tradition itself is the main subject of the picture: large and clearly visible. If the tradition is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 29. culture（文化）　id 279
例文（日本語）: 山のすみかで、ドワーフたちが彫刻をほどこした石の広間と色あざやかな旗で自分たちの文化を見せる。  
例文（英語）: In their mountain home, the dwarves show their culture with carved stone halls and bright banners.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In their mountain home, the dwarves show their culture with carved stone halls and bright banners. The culture itself is the main subject of the picture: large and clearly visible. If the culture is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 30. science（科学）　id 280
例文（日本語）: 天文台で、学者たちが真ちゅうの望遠鏡を使い、科学の力で星を調べる。  
例文（英語）: In the observatory, scholars use science to study the stars through a brass telescope.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the observatory, scholars use science to study the stars through a brass telescope. The science itself is the main subject of the picture: large and clearly visible. If the science is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 31. speed（速さ）　id 281　敵役: harpy
例文（日本語）: ハーピーたちが、恐ろしい速さで崖の上から急降下する。  
例文（英語）: The harpies dive at terrible speed over the cliffs.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The harpies dive at terrible speed over the cliffs. The speed itself is the main subject of the picture: large and clearly visible. If the speed is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 32. evidence（証拠）　id 282　敵役: werewolf
例文（日本語）: 農場で、騎士が人狼の証拠を見つける。納屋の扉に残った大きな爪あとだ。  
例文（英語）: At the farm, the knight finds evidence of the werewolf: huge claw marks on the barn door.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the farm, the knight finds evidence of the werewolf: huge claw marks on the barn door. The evidence itself is the main subject of the picture: large and clearly visible. If the evidence is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 33. expert（専門家）　id 283
例文（日本語）: 川辺のぬかるみで、竜の専門家が巨大な足跡を測る。  
例文（英語）: In the mud by the river, an expert on dragons measures a huge footprint.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the mud by the river, an expert on dragons measures a huge footprint. The expert itself is the main subject of the picture: large and clearly visible. If the expert is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 34. ability（能力）　id 284　敵役: bat, vampire
例文（日本語）: ヴァンパイアは、コウモリに変わる能力を持つ。  
例文（英語）: A vampire has the ability to turn into a bat.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A vampire has the ability to turn into a bat. The ability itself is the main subject of the picture: large and clearly visible. If the ability is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. bats are small and fuzzy with dark violet fur, large round ears and big round eyes, charming. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 35. advantage（利点）　id 285　敵役: ogre
例文（日本語）: 高い城壁の上の射手たちは、下にいるオーガたちより有利な立場にいる。  
例文（英語）: On the high wall, the archers have an advantage over the ogres below.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the high wall, the archers have an advantage over the ogres below. The advantage itself is the main subject of the picture: large and clearly visible. If the advantage is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club, wearing rough hide clothes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 36. damage（損害）　id 286　敵役: pirate
例文（日本語）: 港で、海賊の火矢が漁船に大きな損害を与える。  
例文（英語）: In the harbour, the pirates' fire arrows cause heavy damage to the fishing boats.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the harbour, the pirates' fire arrows cause heavy damage to the fishing boats. The damage itself is the main subject of the picture: large and clearly visible. If the damage is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 37. community（地域社会）　id 287　敵役: ogre
例文（日本語）: オーガの襲撃のあと、村では地域の人々みんなが力を合わせて水車小屋を建て直す。  
例文（英語）: In the village, the whole community works together to rebuild the mill after the ogre attack.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the village, the whole community works together to rebuild the mill after the ogre attack. The community itself is the main subject of the picture: large and clearly visible. If the community is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club, wearing rough hide clothes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 38. effort（努力）　id 288
例文（日本語）: 少年が、大変な努力で古い墓の重い石の扉を押し開ける。  
例文（英語）: With great effort, the boy pushes open the heavy stone door of the old tomb.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With great effort, the boy pushes open the heavy stone door of the old tomb. The effort itself is the main subject of the picture: large and clearly visible. If the effort is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 39. invention（発明）　id 289
例文（日本語）: 発明家の最新の発明が、工房の上に浮かんでいる。  
例文（英語）: The inventor's newest invention floats above the workshop.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The inventor's newest invention floats above the workshop. The invention itself is the main subject of the picture: large and clearly visible. If the invention is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 40. truth（真実）　id 290
例文（日本語）: 法廷で、証人が真実を話すと魔法の石が光る。  
例文（英語）: In the courtroom, a magic stone glows when the witness tells the truth.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the courtroom, a magic stone glows when the witness tells the truth. The truth itself is the main subject of the picture: large and clearly visible. If the truth is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 41. rule（規則）　id 291
例文（日本語）: 学院で、校長が扉の上に刻まれた規則を指さす。  
例文（英語）: At the academy, the head teacher points to the rule carved above the door.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the academy, the head teacher points to the rule carved above the door. The rule itself is the main subject of the picture: large and clearly visible. If the rule is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 42. region（地域）　id 292
例文（日本語）: 山のふもとの北の地域一帯を、雪と暗い松林が覆っている。  
例文（英語）: Snow and dark pine forests cover the whole northern region below the mountains.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Snow and dark pine forests cover the whole northern region below the mountains. The region itself is the main subject of the picture: large and clearly visible. If the region is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 43. discover（発見する）　id 293
例文（日本語）: 探検家たちは、氷の下に隠された都市を発見する。  
例文（英語）: Explorers discover a hidden city beneath the ice.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Explorers discover a hidden city beneath the ice. Make the sentence's action (discover) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 44. destroy（破壊する）　id 294　敵役: golem
例文（日本語）: 川の上で、石のゴーレムが古い木の橋を壊す。  
例文（英語）: Over the river, a stone golem destroys the old wooden bridge.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Over the river, a stone golem destroys the old wooden bridge. Make the sentence's action (destroy) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. golems are broad figures built of cut stone blocks, with glowing runes in the seams. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 45. hide（隠す）　id 295　敵役: vampire
例文（日本語）: ヴァンパイアたちは、日が出ている間、地下墓所に隠れる。  
例文（英語）: Vampires hide in the crypt while the sun is up.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Vampires hide in the crypt while the sun is up. Make the sentence's action (hide) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 46. reveal（明かす）　id 296
例文（日本語）: 海岸で、朝日が崖の面に隠された扉を照らし出す。  
例文（英語）: On the coast, the morning sun reveals a hidden door in the cliff face.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the coast, the morning sun reveals a hidden door in the cliff face. Make the sentence's action (reveal) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 47. survive（生き残る）　id 297
例文（日本語）: 凍った山で、小さな花が岩の割れ目で生き抜いている。  
例文（英語）: On the frozen mountain, a tiny flower survives in a crack of the rock.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the frozen mountain, a tiny flower survives in a crack of the rock. Make the sentence's action (survive) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 48. create（生み出す）　id 298
例文（日本語）: 庭で、その芸術家が光から生きた花を生み出す。  
例文（英語）: In the garden, the artist creates living flowers from light.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the garden, the artist creates living flowers from light. Make the sentence's action (create) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 49. gather（集まる）　id 299　敵役: wraith
例文（日本語）: 真夜中、レイスたちが古戦場の上に集まる。  
例文（英語）: At midnight, wraiths gather over the old battlefield.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At midnight, wraiths gather over the old battlefield. Make the sentence's action (gather) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. wraiths are hooded shapes of black smoke with no face, only two pale burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 50. imagine（想像する）　id 300
例文（日本語）: 草原に寝ころんで、少年が雲の中の城を思い浮かべる。  
例文（英語）: Lying in the meadow, a boy imagines castles in the clouds.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Lying in the meadow, a boy imagines castles in the clouds. Make the sentence's action (imagine) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 51. explore（探検する）　id 301
例文（日本語）: 若い勇者たちが、湖の底に沈んだ船を探検する。  
例文（英語）: The young heroes explore a sunken ship at the bottom of the lake.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young heroes explore a sunken ship at the bottom of the lake. Make the sentence's action (explore) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 52. defend（防衛する）　id 302　敵役: ogre
例文（日本語）: 川で、騎士たちがオーガの一団から橋を守る。  
例文（英語）: At the river, the knights defend the bridge against the ogre warband.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the river, the knights defend the bridge against the ogre warband. Make the sentence's action (defend) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club, wearing rough hide clothes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 53. attract（引きつける）　id 303　敵役: troll
例文（日本語）: 農場で、甘いはちみつが腹ぺこのトロルを巣箱へ引き寄せる。  
例文（英語）: On the farm, sweet honey attracts a hungry troll to the beehives.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the farm, sweet honey attracts a hungry troll to the beehives. Make the sentence's action (attract) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes, wearing a ragged fur loincloth. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 54. avoid（避ける）　id 304
例文（日本語）: 崖の近くで、小舟がとがった岩をよける。  
例文（英語）: Near the cliffs, the little boat avoids the sharp rocks.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Near the cliffs, the little boat avoids the sharp rocks. Make the sentence's action (avoid) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 55. belong（属する）　id 305
例文（日本語）: 王の広間の壁にかかるこの金の剣は、初代の王のものだ。  
例文（英語）: On the wall of the royal hall, this golden sword belongs to the first king.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the wall of the royal hall, this golden sword belongs to the first king. Make the sentence's action (belong) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 56. cause（引き起こす）　id 306
例文（日本語）: 乾いた納屋では、ひとつの火花が大きな火事を引き起こすことがある。  
例文（英語）: In the dry barn, a single spark can cause a great fire.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the dry barn, a single spark can cause a great fire. Make the sentence's action (cause) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 57. collect（集める）　id 307
例文（日本語）: 子どもたちは、川辺で光る石を集める。  
例文（英語）: The children collect shining stones by the river.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The children collect shining stones by the river. Make the sentence's action (collect) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 58. connect（つなぐ）　id 308
例文（日本語）: 空の上で、長い橋が二つの浮かぶ島をつないでいる。  
例文（英語）: In the sky, a long bridge connects the two floating islands.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the sky, a long bridge connects the two floating islands. Make the sentence's action (connect) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 59. contain（含む）　id 309　敵役: witch
例文（日本語）: 魔女の店で、ガラスの瓶に不思議な光る植物が入っている。  
例文（英語）: In the witch's shop, the glass jars contain strange glowing plants.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the witch's shop, the glass jars contain strange glowing plants. Make the sentence's action (contain) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. witches are gaunt women in a dark green robe and a wide pointed hat, with a crooked staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 60. control（操る）　id 310
例文（日本語）: 噴水のそばで、若い魔法使いが水を操り、踊らせることを覚える。  
例文（英語）: By the fountain, the young mage learns to control the water and make it dance.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: By the fountain, the young mage learns to control the water and make it dance. Make the sentence's action (control) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 61. depend（頼る）　id 311
例文（日本語）: 日照りの夏、村人たちは水を古い井戸に頼っている。  
例文（英語）: In the dry summer, the villagers depend on the old well for water.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the dry summer, the villagers depend on the old well for water. Make the sentence's action (depend) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 62. exist（存在する）　id 312
例文（日本語）: 銀の森の奥深くには、まだユニコーンがいるという。  
例文（英語）: Some say unicorns still exist deep in the silver forest.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Some say unicorns still exist deep in the silver forest. Make the sentence's action (exist) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 63. expect（期待する）　id 313
例文（日本語）: 祭りで、観客たちは背の高い優勝者が弓の大会に勝つと予想している。  
例文（英語）: At the fair, the crowd expects the tall champion to win the archery contest.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the fair, the crowd expects the tall champion to win the archery contest. Make the sentence's action (expect) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 64. notice（気づく）　id 314　敵役: basilisk
例文（日本語）: 彼女は、枯れた井戸のそばでバジリスクの鱗に気づく。  
例文（英語）: She notices a basilisk's scales beside the dry well.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She notices a basilisk's scales beside the dry well. Make the sentence's action (notice) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. basilisks are long scaled lizards with a crested head and bright yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 65. offer（差し出す）　id 315
例文（日本語）: 市場で、商人が魔法の指輪に銀貨を差し出す。  
例文（英語）: At the market, the merchant offers a silver coin for the magic ring.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the market, the merchant offers a silver coin for the magic ring. Make the sentence's action (offer) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 66. prepare（準備する）　id 316　敵役: werewolf
例文（日本語）: 広場で、村人たちが人狼の夜に向けて銀の矢とたいまつを準備する。  
例文（英語）: In the square, the villagers prepare silver arrows and torches for the werewolf night.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the square, the villagers prepare silver arrows and torches for the werewolf night. Make the sentence's action (prepare) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 67. prevent（防ぐ）　id 317　敵役: goblin
例文（日本語）: 村のまわりの高いいばらの垣根が、ゴブリンたちが入り込むのを防ぐ。  
例文（英語）: Around the village, a tall wall of thorns prevents the goblins from getting in.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Around the village, a tall wall of thorns prevents the goblins from getting in. Make the sentence's action (prevent) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. goblins are lean and wiry, a head shorter than a man, with sage-green skin, long ears that stick out sideways, a large hooked nose, yellow eyes and sharp teeth, in ragged brown cloth and scraps of leather, barefoot, menacing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 68. recognize（見分ける）　id 318
例文（日本語）: 農場で、年老いた犬が十年ぶりに主人に気づく。  
例文（英語）: At the farm, the old dog recognizes its master after ten years.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the farm, the old dog recognizes its master after ten years. Make the sentence's action (recognize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 69. recover（回復する）　id 319　敵役: troll
例文（日本語）: 修道院のベッドで、騎士がトロルの一撃からゆっくりと回復していく。  
例文（英語）: In a bed at the monastery, the knight slowly recovers from the troll's blow.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In a bed at the monastery, the knight slowly recovers from the troll's blow. Make the sentence's action (recover) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes, wearing a ragged fur loincloth. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 70. refuse（断る）　id 320
例文（日本語）: 川で、頑固なロバが木の橋を渡るのをいやがる。  
例文（英語）: At the river, the stubborn donkey refuses to cross the wooden bridge.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the river, the stubborn donkey refuses to cross the wooden bridge. Make the sentence's action (refuse) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 71. release（解き放つ）　id 321
例文（日本語）: 庭で、勇者が金のかごから鳥を放つ。  
例文（英語）: In the garden, the hero releases the bird from the golden cage.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the garden, the hero releases the bird from the golden cage. Make the sentence's action (release) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 72. solve（解く）　id 322　敵役: golem
例文（日本語）: 墓の中で、若い魔法使いが石のゴーレムのなぞを解くと、ゴーレムが道をあける。  
例文（英語）: In the tomb, the young wizard solves the riddle of the stone golem, and it steps aside.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the tomb, the young wizard solves the riddle of the stone golem, and it steps aside. Make the sentence's action (solve) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. golems are broad figures built of cut stone blocks, with glowing runes in the seams. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 73. ancient（古代の）　id 323
例文（日本語）: 古代の記号が、洞くつの壁で光っている。  
例文（英語）: Ancient symbols glow on the walls of the cave.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Ancient symbols glow on the walls of the cave. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 74. mysterious（神秘的な）　id 324
例文（日本語）: 神秘的な旅人が、真夜中に村へやって来る。  
例文（英語）: A mysterious traveler arrives in the village at midnight.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A mysterious traveler arrives in the village at midnight. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 75. powerful（強力な）　id 325　敵役: vampire
例文（日本語）: 暗い城に住むヴァンパイア卿は、この地でもっとも強力な存在だ。  
例文（英語）: In his dark castle, the vampire lord is the most powerful creature in this land.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In his dark castle, the vampire lord is the most powerful creature in this land. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 76. valuable（貴重な）　id 326　敵役: pirate
例文（日本語）: 海賊たちが、王の宝物庫から貴重な宝石を盗む。  
例文（英語）: The pirates steal a valuable jewel from the royal vault.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates steal a valuable jewel from the royal vault. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 77. curious（好奇心の強い）　id 327　敵役: kobold
例文（日本語）: 台所で、好奇心の強いコボルトが魔法使いのぐつぐつ煮える大鍋をのぞき込む。  
例文（英語）: In the kitchen, a curious kobold peeks into the wizard's bubbling cauldron.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the kitchen, a curious kobold peeks into the wizard's bubbling cauldron. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. kobolds are small lizard folk, knee-high, with scaled green, blue or orange skin, big round eyes, a short snout and a ragged hooded cloak, charming. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 78. enormous（巨大な）　id 328　敵役: troll
例文（日本語）: 山の中で、巨大なトロルが狭い山道をふさいでいる。  
例文（英語）: In the mountains, an enormous troll blocks the narrow pass.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the mountains, an enormous troll blocks the narrow pass. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes, wearing a ragged fur loincloth. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 79. familiar（見慣れた）　id 329
例文（日本語）: 道の先に、旅人は見慣れた我が家の屋根を見つける。  
例文（英語）: At the end of the road, the traveler sees the familiar roof of his home.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the end of the road, the traveler sees the familiar roof of his home. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 80. generous（寛大な）　id 330
例文（日本語）: 宮殿の門で、気前のよい王が飢えた旅人みんなに食べ物を与える。  
例文（英語）: At the palace gate, the generous king gives food to every hungry traveler.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the palace gate, the generous king gives food to every hungry traveler. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 81. honest（正直な）　id 331
例文（日本語）: 市場で、正直な商人が落とし物の財布を小さな女の子に返す。  
例文（英語）: At the market, the honest merchant returns the lost purse to a little girl.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the market, the honest merchant returns the lost purse to a little girl. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 82. ordinary（ふつうの）　id 332
例文（日本語）: テーブルの上で、ふつうに見える石が夜になると明るく光る。  
例文（英語）: On the table, an ordinary-looking stone glows brightly at night.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the table, an ordinary-looking stone glows brightly at night. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 83. rare（まれな）　id 333
例文（日本語）: 山の頂で、まれな花が百年にたった一度だけ咲く。  
例文（英語）: On the mountain top, a rare flower blooms only once in a hundred years.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: On the mountain top, a rare flower blooms only once in a hundred years. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 84. serious（真剣な）　id 334
例文（日本語）: 戦いの前、野営地で隊長が若い兵士たちに真剣な警告をする。  
例文（英語）: Before the battle, the captain gives the young soldiers a serious warning in the camp.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Before the battle, the captain gives the young soldiers a serious warning in the camp. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 85. useful（役に立つ）　id 335
例文（日本語）: 霧の中で、この古いコンパスは船の水夫たちにとても役に立つ。  
例文（英語）: In the fog, this old compass is very useful to the sailors on the ship.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the fog, this old compass is very useful to the sailors on the ship. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 86. wise（賢明な）　id 336
例文（日本語）: 森で、賢いフクロウが旅人たちによい助言をする。  
例文（英語）: In the forest, the wise owl gives the travelers good advice.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the forest, the wise owl gives the travelers good advice. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 87. actually（実は）　id 337　敵役: shadow
例文（日本語）: 壁の怖い影は、実はろうそくのそばの小さなネズミだった。  
例文（英語）: The scary shadow on the wall is actually a little mouse by the candle.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The scary shadow on the wall is actually a little mouse by the candle. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 88. especially（特に）　id 338
例文（日本語）: 夏の祭りで、子どもたちは特に竜の乗り物が大好きだ。  
例文（英語）: At the summer fair, the children especially love the dragon ride.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: At the summer fair, the children especially love the dragon ride. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 89. recently（最近）　id 339　敵役: werewolf
例文（日本語）: 最近、村の近くに人狼の足跡が現れている。  
例文（英語）: Werewolf tracks have appeared near the village recently.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Werewolf tracks have appeared near the village recently. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 90. probably（たぶん）　id 340
例文（日本語）: 港の上に黒い雲が集まっている。たぶんもうすぐ雨が降る。  
例文（英語）: Dark clouds gather over the harbour; it will probably rain soon.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Dark clouds gather over the harbour; it will probably rain soon. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.4 EPIC（この一覧に99語）

### 91. implement（実行する）　id 61　敵役: lich
例文（日本語）: 議会は明日、リッチに対する計画を実行する。  
例文（英語）: The council will implement the plan against the lich tomorrow.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council will implement the plan against the lich tomorrow. Make the sentence's action (implement) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 92. facilitate（円滑にする）　id 62
例文（日本語）: 魔法の橋が、二つの王国の交易を円滑にする。  
例文（英語）: A magic bridge facilitates trade between the two kingdoms.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A magic bridge facilitates trade between the two kingdoms. Make the sentence's action (facilitate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 93. potential（可能性）　id 64
例文（日本語）: その少年には魔法使いとして大きな可能性がある。  
例文（英語）: The boy has great potential as a mage.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The boy has great potential as a mage. The potential itself is the main subject of the picture: large and clearly visible. If the potential is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 94. perspective（視点）　id 65
例文（日本語）: 塔の上から、彼女は町を新しい視点で見た。  
例文（英語）: From the tower, she saw the city from a new perspective.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: From the tower, she saw the city from a new perspective. The perspective itself is the main subject of the picture: large and clearly visible. If the perspective is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 95. alternative（代わりの）　id 66　敵役: necromancer
例文（日本語）: 死霊術師の軍が門に迫り、彼らは代わりの道を取った。  
例文（英語）: With the necromancer's army at the gate, they took an alternative route.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: With the necromancer's army at the gate, they took an alternative route. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 96. consequence（結果）　id 67　敵役: necromancer
例文（日本語）: 死者を起こしたことが、死霊術師に恐ろしい結果をもたらした。  
例文（英語）: Raising the dead brought a terrible consequence upon the necromancer.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Raising the dead brought a terrible consequence upon the necromancer. The consequence itself is the main subject of the picture: large and clearly visible. If the consequence is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 97. accurate（正確な）　id 68
例文（日本語）: その古い地図は、小川ひとつまで正確だ。  
例文（英語）: The old map is accurate down to the last river.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old map is accurate down to the last river. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 98. efficient（効率的な）　id 69
例文（日本語）: ドワーフたちは、水晶を掘るための効率的な機械を作った。  
例文（英語）: The dwarves built an efficient machine to mine the crystals.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The dwarves built an efficient machine to mine the crystals. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 99. strategy（戦略）　id 70　敵役: demon
例文（日本語）: 将軍は、悪魔の群れに対する大胆な戦略を立てた。  
例文（英語）: The general planned a bold strategy against the demon horde.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The general planned a bold strategy against the demon horde. The strategy itself is the main subject of the picture: large and clearly visible. If the strategy is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 100. evaluate（評価する）　id 71
例文（日本語）: 審査員は、それぞれの魔法使いの腕を慎重に評価する。  
例文（英語）: The judges evaluate each mage's skill carefully.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The judges evaluate each mage's skill carefully. Make the sentence's action (evaluate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 101. analyze（分析する）　id 72　敵役: lich
例文（日本語）: 魔道士たちは、リッチの古い呪いを何週間も分析した。  
例文（英語）: The mages analyzed the lich's ancient curse for many weeks.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The mages analyzed the lich's ancient curse for many weeks. Make the sentence's action (analyze) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 102. establish（設立する）　id 73
例文（日本語）: 勇者たちは北の町にギルドを設立した。  
例文（英語）: The heroes established a guild in the northern city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The heroes established a guild in the northern city. Make the sentence's action (establish) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 103. maintain（維持する）　id 74　敵役: fiend
例文（日本語）: 古い結界が、外の魔人たちに対する壁を維持している。  
例文（英語）: The old wards maintain a barrier against the fiends outside.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old wards maintain a barrier against the fiends outside. Make the sentence's action (maintain) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. fiends are large demons with black-red hide, many horns and burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 104. enhance（高める）　id 75
例文（日本語）: この宝石は呪文の力を高めることができる。  
例文（英語）: This gem can enhance the power of a spell.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: This gem can enhance the power of a spell. Make the sentence's action (enhance) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 105. criteria（基準）　id 76
例文（日本語）: 騎士は王の騎士団の基準をすべて満たした。  
例文（英語）: The knight met all the criteria for the royal order.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The knight met all the criteria for the royal order. The criteria itself is the main subject of the picture: large and clearly visible. If the criteria is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 106. priority（優先事項）　id 77　敵役: lich
例文（日本語）: リッチの命の器を壊すことが、我々の最優先事項だ。  
例文（英語）: Destroying the lich's phylactery is our first priority.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Destroying the lich's phylactery is our first priority. The priority itself is the main subject of the picture: large and clearly visible. If the priority is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 107. comprehensive（包括的な）　id 78　敵役: demon
例文（日本語）: その騎士団は、知られたすべての悪魔の包括的な記録を保つ。  
例文（英語）: The order keeps a comprehensive record of every known demon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The order keeps a comprehensive record of every known demon. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 108. demonstrate（実演する）　id 79
例文（日本語）: 師匠は生徒たちに呪文を実演してみせる。  
例文（英語）: The master will demonstrate the spell to the students.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The master will demonstrate the spell to the students. Make the sentence's action (demonstrate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 109. assumption（前提）　id 80　敵役: lich
例文（日本語）: 彼らの攻撃は、リッチが単独だという誤った前提のために失敗した。  
例文（英語）: Their attack failed on the false assumption that the lich was alone.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Their attack failed on the false assumption that the lich was alone. The assumption itself is the main subject of the picture: large and clearly visible. If the assumption is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 110. concept（概念）　id 341
例文（日本語）: 学者は、時間魔法という概念を評議会に説明した。  
例文（英語）: The scholar explained the concept of time magic to the council.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scholar explained the concept of time magic to the council. The concept itself is the main subject of the picture: large and clearly visible. If the concept is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 111. context（文脈）　id 342
例文（日本語）: 文脈がなければ、その古い巻物はまったく意味をなさなかった。  
例文（英語）: Without the context, the ancient scroll made no sense at all.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Without the context, the ancient scroll made no sense at all. The context itself is the main subject of the picture: large and clearly visible. If the context is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 112. contract（契約）　id 343　敵役: demon, warlock
例文（日本語）: 魔術師は血の月の下で、悪魔と契約を結んだ。  
例文（英語）: The warlock signed a contract with a demon under the blood moon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The warlock signed a contract with a demon under the blood moon. The contract itself is the main subject of the picture: large and clearly visible. If the contract is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. warlocks are robed spellcasters in black and violet, with glowing sigils around their hands. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 113. decade（十年間）　id 344
例文（日本語）: その古い城壁は、果てしない戦いの十年間、崩れずに立ち続けた。  
例文（英語）: The old wall stood unbroken for a decade of endless wars.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old wall stood unbroken for a decade of endless wars. The decade itself is the main subject of the picture: large and clearly visible. If the decade is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 114. dimension（次元）　id 345　敵役: demon
例文（日本語）: 燃える祭壇の上で、別の次元から悪魔たちが流れ出た。  
例文（英語）: Demons poured from another dimension above the burning altar.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Demons poured from another dimension above the burning altar. The dimension itself is the main subject of the picture: large and clearly visible. If the dimension is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 115. economy（経済）　id 346
例文（日本語）: 女王は、荒れた王国の経済を立て直そうと懸命に働いた。  
例文（英語）: The queen worked hard to rebuild the economy of the ruined kingdom.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The queen worked hard to rebuild the economy of the ruined kingdom. The economy itself is the main subject of the picture: large and clearly visible. If the economy is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 116. element（要素）　id 347
例文（日本語）: 学院の魔法使いは皆、火や氷といった一つの要素を極める。  
例文（英語）: Each mage in the academy masters one element, such as fire or ice.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Each mage in the academy masters one element, such as fire or ice. The element itself is the main subject of the picture: large and clearly visible. If the element is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 117. enterprise（企業）　id 348
例文（日本語）: 商人たちは、東の海をまたぐ大胆な企業を始めた。  
例文（英語）: The merchants started a bold enterprise across the eastern sea.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The merchants started a bold enterprise across the eastern sea. The enterprise itself is the main subject of the picture: large and clearly visible. If the enterprise is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 118. equipment（設備）　id 349
例文（日本語）: ドワーフたちは、深い洞くつに入る前に採掘の設備を確かめた。  
例文（英語）: The dwarves checked their mining equipment before entering the deep cave.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The dwarves checked their mining equipment before entering the deep cave. The equipment itself is the main subject of the picture: large and clearly visible. If the equipment is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 119. expansion（拡大）　id 350
例文（日本語）: 帝国の急速な拡大は、国境の村々を不安にさせた。  
例文（英語）: The rapid expansion of the empire worried the border villages.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The rapid expansion of the empire worried the border villages. The expansion itself is the main subject of the picture: large and clearly visible. If the expansion is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 120. factor（要因）　id 351　敵役: undead
例文（日本語）: 聖なる炎が、不死の軍に対する決定的な要因だった。  
例文（英語）: Holy fire was the deciding factor against the undead army.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Holy fire was the deciding factor against the undead army. The factor itself is the main subject of the picture: large and clearly visible. If the factor is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 121. feature（特徴）　id 352
例文（日本語）: その塔の最も目立つ特徴は、光る水晶の屋根だ。  
例文（英語）: The most striking feature of the tower is its glowing crystal roof.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The most striking feature of the tower is its glowing crystal roof. The feature itself is the main subject of the picture: large and clearly visible. If the feature is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 122. foundation（土台）　id 353　敵役: demon
例文（日本語）: 黒い神殿の土台の下に、眠る悪魔が横たわっている。  
例文（英語）: A sleeping demon lies beneath the foundation of the black temple.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A sleeping demon lies beneath the foundation of the black temple. The foundation itself is the main subject of the picture: large and clearly visible. If the foundation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 123. framework（枠組み）　id 354
例文（日本語）: 魔法使いたちは、新しい学院のために、しっかりした規則の枠組みを作った。  
例文（英語）: The wizards built a strong framework of rules for the new academy.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The wizards built a strong framework of rules for the new academy. The framework itself is the main subject of the picture: large and clearly visible. If the framework is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 124. function（機能）　id 355
例文（日本語）: その水晶の機能はひとつだけで、月の光をたくわえることだ。  
例文（英語）: The crystal has a single function: it stores the light of the moon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The crystal has a single function: it stores the light of the moon. The function itself is the main subject of the picture: large and clearly visible. If the function is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 125. hypothesis（仮説）　id 356
例文（日本語）: 学者は、危険な実験で自分の仮説を確かめた。  
例文（英語）: The scholar tested her hypothesis with a dangerous experiment.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scholar tested her hypothesis with a dangerous experiment. The hypothesis itself is the main subject of the picture: large and clearly visible. If the hypothesis is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 126. identity（正体）　id 357　敵役: vampire
例文（日本語）: 仮面の将軍は、ヴァンパイア卿としての正体を隠していた。  
例文（英語）: The masked general hid his identity as a vampire lord.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The masked general hid his identity as a vampire lord. The identity itself is the main subject of the picture: large and clearly visible. If the identity is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 127. impact（衝撃）　id 358
例文（日本語）: 流れ星は、砂漠の地面に大きな衝撃を与えた。  
例文（英語）: The falling star made a huge impact on the desert floor.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The falling star made a huge impact on the desert floor. The impact itself is the main subject of the picture: large and clearly visible. If the impact is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 128. industry（産業）　id 359
例文（日本語）: 新しい炉が、鉱業に黄金時代をもたらした。  
例文（英語）: The new furnaces brought a golden age to the mining industry.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The new furnaces brought a golden age to the mining industry. The industry itself is the main subject of the picture: large and clearly visible. If the industry is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 129. initiative（主導権）　id 360
例文（日本語）: 若い隊長は主導権をにぎり、救出作戦を率いた。  
例文（英語）: The young captain took the initiative and led the rescue mission.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The young captain took the initiative and led the rescue mission. The initiative itself is the main subject of the picture: large and clearly visible. If the initiative is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 130. institution（機関）　id 361
例文（日本語）: 王立の機関は、あらゆる土地から若い魔法使いを育てている。  
例文（英語）: The royal institution trains young mages from every land.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The royal institution trains young mages from every land. The institution itself is the main subject of the picture: large and clearly visible. If the institution is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 131. investment（投資）　id 362
例文（日本語）: 王の新しい船への投資は、大きな富をもたらした。  
例文（英語）: The king's investment in new ships brought great riches.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king's investment in new ships brought great riches. The investment itself is the main subject of the picture: large and clearly visible. If the investment is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 132. mechanism（仕組み）　id 363
例文（日本語）: 隠された仕組みが、古代の宝物庫の扉を開いた。  
例文（英語）: A hidden mechanism opened the door of the ancient vault.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A hidden mechanism opened the door of the ancient vault. The mechanism itself is the main subject of the picture: large and clearly visible. If the mechanism is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 133. objective（目標）　id 364　敵役: necromancer
例文（日本語）: 目標は、死霊術師の名前の書を焼くことだ。  
例文（英語）: The objective is to burn the necromancer's book of names.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The objective is to burn the necromancer's book of names. The objective itself is the main subject of the picture: large and clearly visible. If the objective is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 134. outcome（結末）　id 365　敵役: lich
例文（日本語）: リッチとの戦争の結末は、誰にも予測できなかった。  
例文（英語）: Nobody could predict the outcome of the war against the lich.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Nobody could predict the outcome of the war against the lich. The outcome itself is the main subject of the picture: large and clearly visible. If the outcome is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 135. principle（原則）　id 366
例文（日本語）: ギルドは、ひとつの原則に従う。仲間を決して置き去りにしない、というものだ。  
例文（英語）: The guild lives by one principle: never leave a friend behind.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The guild lives by one principle: never leave a friend behind. The principle itself is the main subject of the picture: large and clearly visible. If the principle is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 136. procedure（手順）　id 367　敵役: demon
例文（日本語）: 司祭は、悪魔を追い払うために慎重な手順を踏んだ。  
例文（英語）: The priest followed a careful procedure to banish the demon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The priest followed a careful procedure to banish the demon. The procedure itself is the main subject of the picture: large and clearly visible. If the procedure is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 137. proposal（提案）　id 368
例文（日本語）: 評議会は、城門を開けるという女王の提案を退けた。  
例文（英語）: The council rejected the queen's proposal to open the gates.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council rejected the queen's proposal to open the gates. The proposal itself is the main subject of the picture: large and clearly visible. If the proposal is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 138. prospect（見通し）　id 369　敵役: demon
例文（日本語）: 悪魔の包囲という見通しが、街全体を空にした。  
例文（英語）: The prospect of a demon siege emptied the whole city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The prospect of a demon siege emptied the whole city. The prospect itself is the main subject of the picture: large and clearly visible. If the prospect is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 139. sector（部門）　id 370
例文（日本語）: 戦争のあと、王国の交易部門は急速に成長した。  
例文（英語）: The trade sector of the kingdom grew rapidly after the war.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The trade sector of the kingdom grew rapidly after the war. The sector itself is the main subject of the picture: large and clearly visible. If the sector is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 140. standard（標準）　id 371
例文（日本語）: その鍛冶師の剣は、品質の新しい標準を打ち立てた。  
例文（英語）: The blacksmith's swords set a new standard for quality.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The blacksmith's swords set a new standard for quality. The standard itself is the main subject of the picture: large and clearly visible. If the standard is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 141. theory（理論）　id 372
例文（日本語）: 教授の理論は、浮かぶ島が空にとどまる理由を説明した。  
例文（英語）: The professor's theory explained how the floating islands stay in the air.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The professor's theory explained how the floating islands stay in the air. The theory itself is the main subject of the picture: large and clearly visible. If the theory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 142. adapt（適応する）　id 373
例文（日本語）: エルフたちは、雪山での暮らしにすばやく適応した。  
例文（英語）: The elves adapted quickly to life in the snowy mountains.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The elves adapted quickly to life in the snowy mountains. Make the sentence's action (adapt) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 143. adjust（調整する）　id 374
例文（日本語）: 操舵手は、風をとらえるように帆を調整した。  
例文（英語）: The pilot adjusted the sails to catch the wind.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The pilot adjusted the sails to catch the wind. Make the sentence's action (adjust) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 144. allocate（配分する）　id 375　敵役: demon
例文（日本語）: 女王は、悪魔狩りの者たちにもっと金を配分する。  
例文（英語）: The queen will allocate more gold to the demon hunters.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The queen will allocate more gold to the demon hunters. Make the sentence's action (allocate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 145. anticipate（予想する）　id 376　敵役: dread
例文（日本語）: 将軍は、夜明けの恐怖の騎士の突撃を予想していた。  
例文（英語）: The general anticipated the dread knight's charge at dawn.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The general anticipated the dread knight's charge at dawn. Make the sentence's action (anticipate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dread knights are towering figures in black plate armour with a horned helm and a cold red glow behind the visor. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 146. apply（適用する）　id 377
例文（日本語）: 魔法使いは、どの呪文にも同じ規則を適用しなければならない。  
例文（英語）: Mages must apply the same rule to every spell.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Mages must apply the same rule to every spell. Make the sentence's action (apply) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 147. assess（査定する）　id 378　敵役: fiend
例文（日本語）: 騎士は、再び斬りかかる前に魔人の傷を査定した。  
例文（英語）: The knight assessed the fiend's wounds before striking again.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The knight assessed the fiend's wounds before striking again. Make the sentence's action (assess) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. fiends are large demons with black-red hide, many horns and burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 148. assign（任命する）　id 379　敵役: demon
例文（日本語）: 隊長は、悪魔の封印を守るため二人の騎士を任命した。  
例文（英語）: The captain assigned two knights to guard the demon seal.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The captain assigned two knights to guard the demon seal. Make the sentence's action (assign) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 149. attain（到達する）　id 380
例文（日本語）: 何年もの修行のあと、彼女は大魔導師の位に到達した。  
例文（英語）: After years of training, she attained the rank of archmage.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: After years of training, she attained the rank of archmage. Make the sentence's action (attain) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 150. conclude（結論づける）　id 381　敵役: lich
例文（日本語）: 議会は、凍った街をリッチが支配していると結論づけた。  
例文（英語）: The council concluded that a lich ruled the frozen city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council concluded that a lich ruled the frozen city. Make the sentence's action (conclude) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 151. conduct（実施する）　id 382　敵役: cultist
例文（日本語）: カルティストたちは毎晩、塔で闇の儀式を実施する。  
例文（英語）: The cultists conduct dark rites in the tower every night.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The cultists conduct dark rites in the tower every night. Make the sentence's action (conduct) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. cultists are faceless figures in identical dark red hooded robes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 152. confirm（確認する）　id 383　敵役: necromancer
例文（日本語）: 偵察兵は、死霊術師の軍が川を渡ったことを確認した。  
例文（英語）: The scout confirmed that the necromancer's army had crossed the river.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scout confirmed that the necromancer's army had crossed the river. Make the sentence's action (confirm) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 153. consult（相談する）　id 384　敵役: lich
例文（日本語）: 王はリッチへ進軍する前に、神託に相談した。  
例文（英語）: The king consulted the oracle before marching on the lich.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king consulted the oracle before marching on the lich. Make the sentence's action (consult) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 154. convince（納得させる）　id 385
例文（日本語）: 彼女は、評議会に城門を開けるよう納得させられなかった。  
例文（英語）: She could not convince the council to open the gates.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: She could not convince the council to open the gates. Make the sentence's action (convince) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 155. deliver（届ける）　id 386
例文（日本語）: 使者は、日の出前に王の伝言を届けた。  
例文（英語）: The courier delivered the royal message before sunrise.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The courier delivered the royal message before sunrise. Make the sentence's action (deliver) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 156. distribute（配る）　id 387
例文（日本語）: 修道士たちは、毎朝、貧しい人々にパンを配る。  
例文（英語）: The monks distribute bread to the poor every morning.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The monks distribute bread to the poor every morning. Make the sentence's action (distribute) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 157. eliminate（取り除く）　id 388　敵役: cultist
例文（日本語）: 騎士団は、首都に隠れるカルティストをすべて取り除く。  
例文（英語）: The order will eliminate every cultist hiding in the capital.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The order will eliminate every cultist hiding in the capital. Make the sentence's action (eliminate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. cultists are faceless figures in identical dark red hooded robes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 158. emerge（姿を現す）　id 389　敵役: serpent
例文（日本語）: 巨大な蛇が、暗い湖からゆっくりと姿を現した。  
例文（英語）: A giant serpent slowly emerged from the dark lake.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A giant serpent slowly emerged from the dark lake. Make the sentence's action (emerge) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. giant serpents are thick-coiled snakes with dark green scales and cold yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 159. emphasize（強調する）　id 390
例文（日本語）: 先生は、戦いの前にチームワークの大切さを強調した。  
例文（英語）: The teacher emphasized the importance of teamwork before the battle.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The teacher emphasized the importance of teamwork before the battle. Make the sentence's action (emphasize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 160. encounter（出会う）　id 391　敵役: lich
例文（日本語）: 旅人たちは、凍った峠でさまようリッチに出会った。  
例文（英語）: The travelers encountered a wandering lich on the frozen pass.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The travelers encountered a wandering lich on the frozen pass. Make the sentence's action (encounter) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 161. ensure（確実にする）　id 392　敵役: demon
例文（日本語）: 銀の結界が、悪魔が本丸に入らないことを確実にする。  
例文（英語）: Silver wards ensure that no demon enters the inner keep.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Silver wards ensure that no demon enters the inner keep. Make the sentence's action (ensure) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 162. estimate（見積もる）　id 393
例文（日本語）: 技師たちは、その橋を作るのに一年かかると見積もっている。  
例文（英語）: The engineers estimate that the bridge will take a year to build.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The engineers estimate that the bridge will take a year to build. Make the sentence's action (estimate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 163. exceed（上回る）　id 394　敵役: demon
例文（日本語）: 悪魔の力は、騎士たちが想像したすべてを上回った。  
例文（英語）: The demon's strength exceeded everything the knights had imagined.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The demon's strength exceeded everything the knights had imagined. Make the sentence's action (exceed) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 164. extend（延ばす）　id 395
例文（日本語）: 王は、道を北の海岸まで延ばすことに決めた。  
例文（英語）: The king decided to extend the road to the northern coast.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king decided to extend the road to the northern coast. Make the sentence's action (extend) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 165. generate（発生させる）　id 396
例文（日本語）: その水晶は、街じゅうを照らすほどのエネルギーを発生させられる。  
例文（英語）: The crystal can generate enough energy to light the whole city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The crystal can generate enough energy to light the whole city. Make the sentence's action (generate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 166. illustrate（例で示す）　id 397
例文（日本語）: 先生は、勇者の長い旅をわかりやすく示すために地図を描いた。  
例文（英語）: The teacher drew a map to illustrate the hero's long journey.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The teacher drew a map to illustrate the hero's long journey. Make the sentence's action (illustrate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 167. indicate（示す）　id 398　敵役: lich
例文（日本語）: 黒い文字が、リッチが葬られた場所を示している。  
例文（英語）: The black runes indicate the place where the lich was buried.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The black runes indicate the place where the lich was buried. Make the sentence's action (indicate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 168. interpret（解釈する）　id 399
例文（日本語）: 神託者だけが、その不思議な夢の意味を解釈できた。  
例文（英語）: Only the oracle could interpret the meaning of the strange dream.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Only the oracle could interpret the meaning of the strange dream. Make the sentence's action (interpret) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 169. investigate（調査する）　id 400　敵役: necromancer
例文（日本語）: 狩人たちは、死霊術師の静かな塔を調査に向かった。  
例文（英語）: The hunters went to investigate the necromancer's silent tower.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The hunters went to investigate the necromancer's silent tower. Make the sentence's action (investigate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 170. justify（正当化する）　id 401
例文（日本語）: どうして、そんな危険な計画を正当化できるのですか？  
例文（英語）: How can you justify such a dangerous plan?
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: How can you justify such a dangerous plan? Make the sentence's action (justify) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 171. modify（修正する）　id 402
例文（日本語）: 鍛冶師は、この剣を小さな手に合わせて修正できるだろうか？  
例文（英語）: Can the smith modify this sword to fit a smaller hand?
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Can the smith modify this sword to fit a smaller hand? Make the sentence's action (modify) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 172. adequate（十分な）　id 403
例文（日本語）: そのテントは、山の風をしのぐのに十分な避難所だった。  
例文（英語）: The tent was adequate shelter against the mountain wind.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The tent was adequate shelter against the mountain wind. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 173. appropriate（適切な）　id 404
例文（日本語）: 神殿の中で剣を抜くのは、適切ではない。  
例文（英語）: It is not appropriate to draw a sword inside the temple.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: It is not appropriate to draw a sword inside the temple. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 174. complex（複雑な）　id 405　敵役: lich
例文（日本語）: リッチの呪いはあまりに複雑で、読める魔道士はわずかだった。  
例文（英語）: The lich's curse was so complex that few mages could read it.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The lich's curse was so complex that few mages could read it. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 175. consistent（一貫した）　id 406
例文（日本語）: その弓兵は一貫していて、毎回まとに当てた。  
例文（英語）: The archer was consistent, hitting the target every single time.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The archer was consistent, hitting the target every single time. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 176. crucial（極めて重要な）　id 407　敵役: demon
例文（日本語）: 悪魔の門が開く前の次の一時間が、極めて重要だ。  
例文（英語）: The next hour is crucial before the demon gate opens.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The next hour is crucial before the demon gate opens. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 177. diverse（多様な）　id 408
例文（日本語）: 市場は、あらゆる土地からの多様な人々でにぎわっていた。  
例文（英語）: The market was crowded with diverse peoples from every land.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The market was crowded with diverse peoples from every land. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 178. essential（不可欠な）　id 409
例文（日本語）: 砂漠を越える人にとって、きれいな水は不可欠だ。  
例文（英語）: Clean water is essential for anyone crossing the desert.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Clean water is essential for anyone crossing the desert. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 179. fundamental（根本的な）　id 410
例文（日本語）: 信頼は、よいギルドの根本的な決まりだ。  
例文（英語）: Trust is the fundamental rule of a good guild.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Trust is the fundamental rule of a good guild. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 180. innovative（革新的な）　id 411
例文（日本語）: 革新的な鍛冶師は、歌う剣を発明した。  
例文（英語）: The innovative smith invented a sword that could sing.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The innovative smith invented a sword that could sing. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 181. relevant（関連のある）　id 412
例文（日本語）: 古書のうち、関連のあるページだけが残された。  
例文（英語）: Only the relevant pages of the ancient book were saved.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Only the relevant pages of the ancient book were saved. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 182. sufficient（足りる）　id 413
例文（日本語）: 三日分の食料が、山の旅には足りる。  
例文（英語）: Three days of food is sufficient for the mountain trip.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Three days of food is sufficient for the mountain trip. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 183. ultimate（究極の）　id 414　敵役: lich
例文（日本語）: 究極の目標は、リッチ王の長い支配を終わらせることだ。  
例文（英語）: The ultimate goal is to end the lich king's long reign.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The ultimate goal is to end the lich king's long reign. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 184. valid（有効な）　id 415
例文（日本語）: その切符は、月が沈むまでしか有効ではない。  
例文（英語）: The ticket is valid only until the moon sets.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The ticket is valid only until the moon sets. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 185. vulnerable（傷つきやすい）　id 416　敵役: lich
例文（日本語）: リッチは、命の器が壊れたときだけ傷つきやすくなる。  
例文（英語）: The lich is vulnerable only when its phylactery breaks.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The lich is vulnerable only when its phylactery breaks. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 186. consequently（その結果）　id 417
例文（日本語）: 橋が崩れ、その結果、軍は引き返さなければならなかった。  
例文（英語）: The bridge collapsed; consequently, the army had to turn back.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The bridge collapsed; consequently, the army had to turn back. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 187. currently（現在）　id 418　敵役: demon
例文（日本語）: 現在、北の山の下には悪魔の王が封じられている。  
例文（英語）: A demon lord is currently sealed beneath the northern mountain.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A demon lord is currently sealed beneath the northern mountain. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 188. gradually（徐々に）　id 419　敵役: demon, shadow
例文（日本語）: 悪魔の影が、徐々に谷全体をおおっていった。  
例文（英語）: The demon's shadow gradually covered the whole valley.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The demon's shadow gradually covered the whole valley. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 189. essentially（本質的に）　id 420
例文（日本語）: 二つの呪文は本質的には同じだが、片方のほうが速い。  
例文（英語）: The two spells are essentially the same, but one is faster.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The two spells are essentially the same, but one is faster. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.5 LEGENDARY（この一覧に99語）

### 190. leverage（活用する）　id 81　敵役: vampire
例文（日本語）: ヴァンパイア公は同盟を活用し、人間の三都市を奪った。  
例文（英語）: The vampire count leveraged his alliances to seize three human cities.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The vampire count leveraged his alliances to seize three human cities. Make the sentence's action (leverage) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 191. mitigate（和らげる）　id 82　敵役: archdemon
例文（日本語）: 大魔道士は結界を張り、大悪魔の燃える息を和らげた。  
例文（英語）: The archmage raised a barrier to mitigate the archdemon's burning breath.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archmage raised a barrier to mitigate the archdemon's burning breath. Make the sentence's action (mitigate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 192. acquisition（買収）　id 83　敵役: vampire, cursed
例文（日本語）: 呪われた鉱山の買収が、ヴァンパイア公に新たな力を与えた。  
例文（英語）: The acquisition of the cursed mines gave the vampire count new power.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The acquisition of the cursed mines gave the vampire count new power. The acquisition itself is the main subject of the picture: large and clearly visible. If the acquisition is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 193. compliance（順守）　id 85
例文（日本語）: ギルドは、王の安全規則への完全な順守を徹底した。  
例文（英語）: The guild ensured full compliance with the royal safety rules.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild ensured full compliance with the royal safety rules. The compliance itself is the main subject of the picture: large and clearly visible. If the compliance is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 194. revenue（収益）　id 86　敵役: vampire
例文（日本語）: ヴァンパイアの襲撃が始まると、港の収益は急に落ちた。  
例文（英語）: The harbor's revenue fell sharply after the vampire raids began.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The harbor's revenue fell sharply after the vampire raids began. The revenue itself is the main subject of the picture: large and clearly visible. If the revenue is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 195. disruption（混乱）　id 87　敵役: archdemon
例文（日本語）: 大悪魔の復活が、すべての交易路に深刻な混乱を引き起こした。  
例文（英語）: The archdemon's return caused serious disruption across every trade route.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archdemon's return caused serious disruption across every trade route. The disruption itself is the main subject of the picture: large and clearly visible. If the disruption is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 196. sustainable（持続可能な）　id 88
例文（日本語）: エルフたちは、森とともに育つ持続可能な都市を設計した。  
例文（英語）: The elves designed a sustainable city that grows together with the forest.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elves designed a sustainable city that grows together with the forest. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 197. negotiation（交渉）　id 89　敵役: demon
例文（日本語）: 悪魔の王との交渉は、血と炎で終わった。  
例文（英語）: The negotiation with the demon lord ended in blood and fire.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The negotiation with the demon lord ended in blood and fire. The negotiation itself is the main subject of the picture: large and clearly visible. If the negotiation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 198. collaboration（協力）　id 90
例文（日本語）: 魔法使いと鍛冶師の協力が、伝説の剣を生み出した。  
例文（英語）: The collaboration of mages and smiths produced a legendary sword.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The collaboration of mages and smiths produced a legendary sword. The collaboration itself is the main subject of the picture: large and clearly visible. If the collaboration is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 199. proactively（先手を打って）　id 91　敵役: demon
例文（日本語）: 隊長は先手を打って、悪魔の包囲の前に城壁を補強した。  
例文（英語）: The captain proactively reinforced the walls before the demon siege.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain proactively reinforced the walls before the demon siege. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 200. substantial（かなりの）　id 92　敵役: undead
例文（日本語）: 軍のかなりの部分が、不死の軍団に失われた。  
例文（英語）: A substantial part of the army was lost to the undead legion.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A substantial part of the army was lost to the undead legion. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 201. constraint（制約）　id 93
例文（日本語）: 魔法使いたちは、時間と魔力の厳しい制約の中で働いた。  
例文（英語）: The mages worked within strict constraints of time and mana.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages worked within strict constraints of time and mana. The constraint itself is the main subject of the picture: large and clearly visible. If the constraint is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 202. incentive（報奨）　id 94
例文（日本語）: 王は、呪いを解いた者に金の報奨を約束した。  
例文（英語）: The king offered a golden incentive to anyone who could break the curse.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king offered a golden incentive to anyone who could break the curse. The incentive itself is the main subject of the picture: large and clearly visible. If the incentive is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 203. scalable（拡張可能な）　id 95
例文（日本語）: ギルドは、街とともに拡大できる拡張可能な仕組みを作った。  
例文（英語）: The guild built a scalable system that could grow with the city.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built a scalable system that could grow with the city. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 204. benchmark（指標）　id 96
例文（日本語）: 老いた王者の記録は、すべての若い騎士の目標となる指標になった。  
例文（英語）: The old champion's record became the benchmark for every young knight.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old champion's record became the benchmark for every young knight. The benchmark itself is the main subject of the picture: large and clearly visible. If the benchmark is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 205. liability（負債）　id 97
例文（日本語）: 未払いの借金は、商人にとって重い負債となった。  
例文（英語）: An unpaid debt became a heavy liability for the merchant.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: An unpaid debt became a heavy liability for the merchant. The liability itself is the main subject of the picture: large and clearly visible. If the liability is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 206. contingency（不測の事態）　id 98　敵役: lich
例文（日本語）: 将軍は、リッチが再び起き上がる不測の事態への計画を用意した。  
例文（英語）: The general prepared a contingency plan in case the lich rose again.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general prepared a contingency plan in case the lich rose again. The contingency itself is the main subject of the picture: large and clearly visible. If the contingency is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 207. deliverable（成果物）　id 99
例文（日本語）: 弟子たちはそれぞれ、期限前に成果物を提出した。  
例文（英語）: Each apprentice submitted the final deliverable before the deadline.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each apprentice submitted the final deliverable before the deadline. The deliverable itself is the main subject of the picture: large and clearly visible. If the deliverable is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 208. streamline（効率化する）　id 100
例文（日本語）: ギルド長は時間を節約するため、手順を効率化した。  
例文（英語）: The guildmaster streamlined the process to save time.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guildmaster streamlined the process to save time. Make the sentence's action (streamline) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 209. agenda（議題）　id 421
例文（日本語）: 長老は、会議の議題の最初に、ドラゴンの脅威を置いた。  
例文（英語）: The elder placed the dragon threat first on the agenda of the summit.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elder placed the dragon threat first on the agenda of the summit. The agenda itself is the main subject of the picture: large and clearly visible. If the agenda is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 210. alliance（同盟）　id 422　敵役: archdemon
例文（日本語）: 自由都市は、大悪魔の尽きない軍団に対する同盟を結んだ。  
例文（英語）: The free cities formed an alliance against the archdemon's endless legions.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The free cities formed an alliance against the archdemon's endless legions. The alliance itself is the main subject of the picture: large and clearly visible. If the alliance is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 211. asset（資産）　id 423
例文（日本語）: その古い図書館は、王国でもっとも価値のある資産となった。  
例文（英語）: The ancient library became the most valuable asset of the kingdom.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ancient library became the most valuable asset of the kingdom. The asset itself is the main subject of the picture: large and clearly visible. If the asset is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 212. audit（監査）　id 424
例文（日本語）: 王の検査官たちは、宝物庫の帳簿に厳しい監査を行った。  
例文（英語）: Royal inspectors conducted a strict audit of the treasury accounts.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Royal inspectors conducted a strict audit of the treasury accounts. The audit itself is the main subject of the picture: large and clearly visible. If the audit is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 213. brand（ブランド）　id 425
例文（日本語）: その有名なギルドは、旅人なら誰もが信頼するブランドを築き上げた。  
例文（英語）: The famous guild built a brand that every traveler could trust.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous guild built a brand that every traveler could trust. The brand itself is the main subject of the picture: large and clearly visible. If the brand is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 214. budget（予算）　id 426　敵役: archdemon
例文（日本語）: 女王は、大悪魔との戦争に大きな予算を承認した。  
例文（英語）: The queen approved a large budget for the war against the archdemon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen approved a large budget for the war against the archdemon. The budget itself is the main subject of the picture: large and clearly visible. If the budget is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 215. capital（資本）　id 427
例文（日本語）: 商人たちは、空の船団を作れるだけの資本を集めた。  
例文（英語）: The merchants raised enough capital to build a fleet of sky ships.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchants raised enough capital to build a fleet of sky ships. The capital itself is the main subject of the picture: large and clearly visible. If the capital is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 216. client（顧客）　id 428
例文（日本語）: 魔法使いは、顧客に決して失敗しない呪文を約束した。  
例文（英語）: The wizard promised his client a spell that would never fail.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard promised his client a spell that would never fail. The client itself is the main subject of the picture: large and clearly visible. If the client is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 217. competitor（競合他社）　id 429
例文（日本語）: ライバルのギルドが、水晶の取引で手強い競合他社になった。  
例文（英語）: A rival guild became a serious competitor in the crystal trade.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A rival guild became a serious competitor in the crystal trade. The competitor itself is the main subject of the picture: large and clearly visible. If the competitor is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 218. consumer（消費者）　id 430
例文（日本語）: 街の消費者は皆、決して燃え尽きないランプをほしがった。  
例文（英語）: Every consumer in the city wanted a lamp that never burned out.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every consumer in the city wanted a lamp that never burned out. The consumer itself is the main subject of the picture: large and clearly visible. If the consumer is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 219. corporation（大企業）　id 431
例文（日本語）: その鉱山会社は、海岸から砂漠までのすべての山を支配していた。  
例文（英語）: The mining corporation controlled every mountain from the coast to the desert.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mining corporation controlled every mountain from the coast to the desert. The corporation itself is the main subject of the picture: large and clearly visible. If the corporation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 220. deadline（締め切り）　id 432
例文（日本語）: 鍛冶師は、王の締め切りに間に合わせるため、夜通し働いた。  
例文（英語）: The blacksmith worked all night to meet the royal deadline.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The blacksmith worked all night to meet the royal deadline. The deadline itself is the main subject of the picture: large and clearly visible. If the deadline is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 221. demand（需要）　id 433　敵役: vampire
例文（日本語）: ヴァンパイア公が現れてから、銀の武器の需要が急に伸びた。  
例文（英語）: Demand for silver weapons rose sharply after the vampire count appeared.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Demand for silver weapons rose sharply after the vampire count appeared. The demand itself is the main subject of the picture: large and clearly visible. If the demand is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 222. dividend（配当）　id 434
例文（日本語）: 株主たちは、年の終わりに金貨の配当を受け取った。  
例文（英語）: Each shareholder received a golden dividend at the end of the year.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each shareholder received a golden dividend at the end of the year. The dividend itself is the main subject of the picture: large and clearly visible. If the dividend is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 223. entrepreneur（起業家）　id 435
例文（日本語）: 若い起業家は、空の真ん中に酒場を開いた。  
例文（英語）: The young entrepreneur opened a tavern in the middle of the sky.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The young entrepreneur opened a tavern in the middle of the sky. The entrepreneur itself is the main subject of the picture: large and clearly visible. If the entrepreneur is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 224. headquarters（本部）　id 436
例文（日本語）: ギルドは、巨大な空洞の木の中に本部を築いた。  
例文（英語）: The guild built its headquarters inside a giant hollow tree.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built its headquarters inside a giant hollow tree. The headquarters itself is the main subject of the picture: large and clearly visible. If the headquarters is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 225. inflation（インフレ）　id 437
例文（日本語）: インフレのせいで、パン一つが金貨十枚もした。  
例文（英語）: Inflation made a loaf of bread cost ten gold coins.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Inflation made a loaf of bread cost ten gold coins. The inflation itself is the main subject of the picture: large and clearly visible. If the inflation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 226. inventory（在庫）　id 438
例文（日本語）: ドワーフは、隊商が出発する前に在庫のすべての品を数えた。  
例文（英語）: The dwarf counted every item in the inventory before the caravan left.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The dwarf counted every item in the inventory before the caravan left. The inventory itself is the main subject of the picture: large and clearly visible. If the inventory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 227. manufacturer（製造業者）　id 439
例文（日本語）: 魔法の鎧を作る最高の製造業者は、山の都に住んでいた。  
例文（英語）: The finest manufacturer of enchanted armor lived in the mountain city.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The finest manufacturer of enchanted armor lived in the mountain city. The manufacturer itself is the main subject of the picture: large and clearly visible. If the manufacturer is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 228. merger（合併）　id 440
例文（日本語）: 二つのギルドの合併は、この地で最強の勢力を生んだ。  
例文（英語）: The merger of the two guilds created the strongest force in the land.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merger of the two guilds created the strongest force in the land. The merger itself is the main subject of the picture: large and clearly visible. If the merger is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 229. milestone（節目）　id 441　敵役: vampire
例文（日本語）: ヴァンパイア公を討ったことは、長い戦争の節目だった。  
例文（英語）: Slaying the vampire count was a milestone in the long war.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Slaying the vampire count was a milestone in the long war. The milestone itself is the main subject of the picture: large and clearly visible. If the milestone is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 230. partnership（提携）　id 442
例文（日本語）: 魔法使いと技術者の提携は、王国全体を変えた。  
例文（英語）: The partnership between mages and engineers changed the whole kingdom.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The partnership between mages and engineers changed the whole kingdom. The partnership itself is the main subject of the picture: large and clearly visible. If the partnership is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 231. portfolio（ポートフォリオ）　id 443
例文（日本語）: 銀行家のポートフォリオには、金鉱と船、それに小さなドラゴンまで入っていた。  
例文（英語）: The banker's portfolio held gold mines, ships, and even a small dragon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The banker's portfolio held gold mines, ships, and even a small dragon. The portfolio itself is the main subject of the picture: large and clearly visible. If the portfolio is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 232. productivity（生産性）　id 444
例文（日本語）: 新しい魔法の織機は、織り手たちの生産性を倍にした。  
例文（英語）: The new enchanted looms doubled the productivity of the weavers.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The new enchanted looms doubled the productivity of the weavers. The productivity itself is the main subject of the picture: large and clearly visible. If the productivity is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 233. profit（利益）　id 445　敵役: pirate
例文（日本語）: 海賊たちは、利益を全員で平等に分けた。  
例文（英語）: The pirates split the profit equally among the whole crew.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The pirates split the profit equally among the whole crew. The profit itself is the main subject of the picture: large and clearly visible. If the profit is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 234. recession（景気後退）　id 446　敵役: demon
例文（日本語）: 悪魔戦争後の景気後退の間に、港町の半分が店を閉じた。  
例文（英語）: During the recession after the demon war, half the port city closed.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: During the recession after the demon war, half the port city closed. The recession itself is the main subject of the picture: large and clearly visible. If the recession is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 235. reputation（評判）　id 447
例文（日本語）: 正直な癒し手という彼女の評判は、あらゆる王国に広まった。  
例文（英語）: Her reputation as an honest healer spread across every kingdom.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Her reputation as an honest healer spread across every kingdom. The reputation itself is the main subject of the picture: large and clearly visible. If the reputation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 236. subsidiary（子会社）　id 448
例文（日本語）: その大ギルドは、遠い東の港に子会社を開いた。  
例文（英語）: The great guild opened a subsidiary in the far eastern harbor.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The great guild opened a subsidiary in the far eastern harbor. The subsidiary itself is the main subject of the picture: large and clearly visible. If the subsidiary is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 237. supplier（供給業者）　id 449　敵役: undead
例文（日本語）: 王の主要な供給業者が、不死の軍が来る前に銀の矢一万本を届けた。  
例文（英語）: The king's chief supplier delivered ten thousand silver arrows before the undead came.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king's chief supplier delivered ten thousand silver arrows before the undead came. The supplier itself is the main subject of the picture: large and clearly visible. If the supplier is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 238. tariff（関税）　id 450
例文（日本語）: 帝国は、南からの品すべてに重い関税をかけた。  
例文（英語）: The empire raised a heavy tariff on all goods from the south.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The empire raised a heavy tariff on all goods from the south. The tariff itself is the main subject of the picture: large and clearly visible. If the tariff is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 239. transaction（取引）　id 451
例文（日本語）: 市場のすべての取引は、魔法の帳簿に記録された。  
例文（英語）: Every transaction in the market was recorded in a magic ledger.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every transaction in the market was recorded in a magic ledger. The transaction itself is the main subject of the picture: large and clearly visible. If the transaction is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 240. warehouse（倉庫）　id 452　敵役: cultist, archdemon
例文（日本語）: カルティストたちは、封じた大悪魔の遺物を古い倉庫に隠した。  
例文（英語）: The cultists hid a sealed archdemon relic inside the old warehouse.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The cultists hid a sealed archdemon relic inside the old warehouse. The warehouse itself is the main subject of the picture: large and clearly visible. If the warehouse is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. cultists are faceless figures in identical dark red hooded robes. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 241. workforce（労働力）　id 453　敵役: titan
例文（日本語）: 街は、巨神が壊した城壁を築き直すため、より多くの労働力を必要とした。  
例文（英語）: The city needed a larger workforce to rebuild the walls the titan broke.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The city needed a larger workforce to rebuild the walls the titan broke. The workforce itself is the main subject of the picture: large and clearly visible. If the workforce is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. titans are colossal armoured giants of weathered stone and bronze. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 242. monopoly（独占）　id 454
例文（日本語）: 魔法使いのギルドは、空飛ぶじゅうたんすべてを独占していた。  
例文（英語）: The wizard's guild held a monopoly on all flying carpets.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard's guild held a monopoly on all flying carpets. The monopoly itself is the main subject of the picture: large and clearly visible. If the monopoly is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 243. accelerate（加速させる）　id 455
例文（日本語）: 魔法使いたちは、作物の成長を加速させる呪文を使った。  
例文（英語）: The mages used a spell to accelerate the growth of the crops.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages used a spell to accelerate the growth of the crops. Make the sentence's action (accelerate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 244. accommodate（収容する）　id 456
例文（日本語）: その大広間は、一度に一万人の客を収容できた。  
例文（英語）: The grand hall could accommodate ten thousand guests at once.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The grand hall could accommodate ten thousand guests at once. Make the sentence's action (accommodate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 245. acquire（手に入れる）　id 457　敵役: lich
例文（日本語）: リッチは、騎士団が焼く前にその希少な書を手に入れようとした。  
例文（英語）: The lich tried to acquire the rare book before the order burned it.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The lich tried to acquire the rare book before the order burned it. Make the sentence's action (acquire) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 246. align（足並みをそろえる）　id 458　敵役: archdemon
例文（日本語）: 二つの王国は、大悪魔に対して軍の足並みをそろえることに合意した。  
例文（英語）: The two kingdoms agreed to align their armies against the archdemon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two kingdoms agreed to align their armies against the archdemon. Make the sentence's action (align) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 247. amend（改正する）　id 459
例文（日本語）: 評議会は、港の古い法を改正することを票決した。  
例文（英語）: The council voted to amend the ancient law of the harbor.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The council voted to amend the ancient law of the harbor. Make the sentence's action (amend) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 248. approve（承認する）　id 460
例文（日本語）: 評議会が賛成した場合にのみ、王はその計画を承認する。  
例文（英語）: The king will approve the plan only if the council agrees.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king will approve the plan only if the council agrees. Make the sentence's action (approve) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 249. authorize（認可する）　id 461　敵役: demon
例文（日本語）: 封じられた悪魔の地下室を開けることを認可できるのは、女王だけだ。  
例文（英語）: Only the queen can authorize the opening of the sealed demon vault.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the queen can authorize the opening of the sealed demon vault. Make the sentence's action (authorize) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 250. commence（開始する）　id 462　敵役: lich
例文（日本語）: リッチの砦への最後の攻撃は、夜明けに開始される。  
例文（英語）: The final assault on the lich's fortress will commence at dawn.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The final assault on the lich's fortress will commence at dawn. Make the sentence's action (commence) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 251. consolidate（統合する）　id 463　敵役: demon
例文（日本語）: 将軍は、悪魔の軍団が到着する前に軍勢を統合しようと動いた。  
例文（英語）: The general moved to consolidate his forces before the demon legion arrived.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general moved to consolidate his forces before the demon legion arrived. Make the sentence's action (consolidate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 252. delegate（委任する）　id 464
例文（日本語）: 賢い女王は、収穫の仕事を、信頼する助言者たちに委任することにした。  
例文（英語）: The wise queen chose to delegate the harvest to her trusted advisors.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wise queen chose to delegate the harvest to her trusted advisors. Make the sentence's action (delegate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 253. diversify（多角化する）　id 465
例文（日本語）: 商人は、香辛料だけでなく絹も売って、事業を多角化することにした。  
例文（英語）: The merchant decided to diversify and sell silk as well as spices.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchant decided to diversify and sell silk as well as spices. Make the sentence's action (diversify) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 254. endorse（支持する）　id 466
例文（日本語）: 有名な勇者は、新しい剣の店を支持することに同意した。  
例文（英語）: The famous hero agreed to endorse the new sword shop.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous hero agreed to endorse the new sword shop. Make the sentence's action (endorse) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 255. execute（遂行する）　id 467　敵役: vampire
例文（日本語）: 狩人たちは真夜中、ヴァンパイア公が眠る時に計画を遂行する。  
例文（英語）: The hunters will execute the plan at midnight, when the vampire count sleeps.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hunters will execute the plan at midnight, when the vampire count sleeps. Make the sentence's action (execute) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 256. expedite（早める）　id 468　敵役: undead
例文（日本語）: 王は鍛冶に、不死の軍との戦いのため銀の矢を早めるよう命じた。  
例文（英語）: The king ordered the smiths to expedite the silver arrows for the undead war.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king ordered the smiths to expedite the silver arrows for the undead war. Make the sentence's action (expedite) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 257. finalize（最終決定する）　id 469
例文（日本語）: 二人の支配者は、条約を最終決定するために塔で会った。  
例文（英語）: The two rulers met in the tower to finalize the treaty.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two rulers met in the tower to finalize the treaty. Make the sentence's action (finalize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 258. forecast（予測する）　id 470　敵役: archdemon
例文（日本語）: 神託は、大悪魔の攻撃を三日前に予測できる。  
例文（英語）: The oracle can forecast the archdemon's attack three days in advance.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The oracle can forecast the archdemon's attack three days in advance. Make the sentence's action (forecast) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 259. initiate（着手する）　id 471
例文（日本語）: 女王は、諸国を再びひとつにする大胆な計画に着手したいと考えた。  
例文（英語）: The queen wished to initiate a bold plan to reunite the realms.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen wished to initiate a bold plan to reunite the realms. Make the sentence's action (initiate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 260. invest（投資する）　id 472
例文（日本語）: 裕福な公爵は、飛行船の船団に金貨を投資することにした。  
例文（英語）: The wealthy duke chose to invest his gold in a fleet of airships.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wealthy duke chose to invest his gold in a fleet of airships. Make the sentence's action (invest) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 261. oversee（統括する）　id 473　敵役: demon
例文（日本語）: 信頼された騎士が、悪魔の門の封印を統括する。  
例文（英語）: A trusted knight will oversee the sealing of the demon gate.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A trusted knight will oversee the sealing of the demon gate. Make the sentence's action (oversee) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 262. prioritize（優先する）　id 474
例文（日本語）: 船長は、積み荷を救うより子どもたちを救うことを優先しなければならなかった。  
例文（英語）: The captain had to prioritize saving the children over saving the cargo.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain had to prioritize saving the children over saving the cargo. Make the sentence's action (prioritize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 263. procure（調達する）　id 475　敵役: lich
例文（日本語）: 錬金術師は、リッチに必要な聖水の調達に苦しんだ。  
例文（英語）: The alchemist struggled to procure the holy water needed against the lich.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The alchemist struggled to procure the holy water needed against the lich. Make the sentence's action (procure) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 264. reimburse（払い戻す）　id 476　敵役: demon
例文（日本語）: 王は、悪魔が焼いた畑について農民に払い戻すと約束した。  
例文（英語）: The king promised to reimburse the farmers for the fields the demons burned.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king promised to reimburse the farmers for the fields the demons burned. Make the sentence's action (reimburse) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 265. renew（更新する）　id 477
例文（日本語）: 毎年、村人たちは森の精霊たちとの古い誓いを更新する。  
例文（英語）: Every year, the villagers renew the old pact with the forest spirits.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every year, the villagers renew the old pact with the forest spirits. Make the sentence's action (renew) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 266. restructure（再編する）　id 478　敵役: demon
例文（日本語）: 悪魔戦争の後、議会は軍全体を再編しなければならなかった。  
例文（英語）: After the demon war, the council had to restructure the entire army.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: After the demon war, the council had to restructure the entire army. Make the sentence's action (restructure) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 267. revise（改訂する）　id 479
例文（日本語）: 学者たちは、新しい島が現れるたびに、古い地図を改訂する。  
例文（英語）: The scholars revise the ancient map whenever a new island appears.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The scholars revise the ancient map whenever a new island appears. Make the sentence's action (revise) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 268. supervise（監督する）　id 480
例文（日本語）: 老いた親方が、鍛冶場で若い弟子たちを監督する。  
例文（英語）: The old master will supervise the young apprentices in the forge.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old master will supervise the young apprentices in the forge. Make the sentence's action (supervise) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 269. terminate（終了させる）　id 481　敵役: warlock, archdemon
例文（日本語）: 騎士団は、魔術師と大悪魔の契約を終了させることを決めた。  
例文（英語）: The order decided to terminate the warlock's contract with the archdemon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The order decided to terminate the warlock's contract with the archdemon. Make the sentence's action (terminate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. warlocks are robed spellcasters in black and violet, with glowing sigils around their hands. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 270. undermine（弱体化させる）　id 482
例文（日本語）: スパイの流したうわさが、王の権威を弱体化させ始めた。  
例文（英語）: Rumors spread by the spy began to undermine the king's authority.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Rumors spread by the spy began to undermine the king's authority. Make the sentence's action (undermine) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 271. ambitious（野心的な）　id 483
例文（日本語）: 野心的な若い魔法使いは、学院全体を治めることを夢見ていた。  
例文（英語）: The ambitious young mage dreamed of ruling the entire academy.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ambitious young mage dreamed of ruling the entire academy. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 272. competitive（競争力のある）　id 484
例文（日本語）: 水晶の取引では、もっとも競争力のあるギルドだけが生き残った。  
例文（英語）: Only the most competitive guilds survived in the crystal trade.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the most competitive guilds survived in the crystal trade. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 273. confidential（機密の）　id 485　敵役: archdemon
例文（日本語）: 将軍は、大悪魔の唯一の弱点についての機密の報告を受けた。  
例文（英語）: The general received a confidential report on the archdemon's only weakness.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general received a confidential report on the archdemon's only weakness. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 274. flexible（柔軟な）　id 486　敵役: demon
例文（日本語）: 柔軟な計画のおかげで、悪魔が突破したとき軍は逃れられた。  
例文（英語）: A flexible plan let the army escape when the demons broke through.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A flexible plan let the army escape when the demons broke through. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 275. lucrative（もうかる）　id 487
例文（日本語）: ドラゴンの卵をコレクターに売るのは、もうかるが危険な商売だった。  
例文（英語）: Selling dragon eggs to collectors was a lucrative but dangerous business.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Selling dragon eggs to collectors was a lucrative but dangerous business. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 276. mandatory（義務の）　id 488
例文（日本語）: 戦いの前に誓いを立てるのは、すべての騎士に義務づけられている。  
例文（英語）: It is mandatory for every knight to swear the oath before the battle.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: It is mandatory for every knight to swear the oath before the battle. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 277. obsolete（時代遅れの）　id 489　敵役: demon
例文（日本語）: 悪魔が首都に達すると、鉄の武器は時代遅れになった。  
例文（英語）: Iron weapons became obsolete once the demons reached the capital.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Iron weapons became obsolete once the demons reached the capital. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 278. overdue（期限を過ぎた）　id 490
例文（日本語）: 商人の借金は、すでに三年も期限を過ぎていた。  
例文（英語）: The debt of the merchant was already overdue by three long years.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The debt of the merchant was already overdue by three long years. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 279. profitable（利益の出る）　id 491
例文（日本語）: 北の交易路は、ギルド全体にとって利益の出るものだった。  
例文（英語）: The northern trade route proved profitable for the whole guild.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The northern trade route proved profitable for the whole guild. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 280. prominent（著名な）　id 492
例文（日本語）: 学院の著名な学者が、大きな討論の口火を切った。  
例文（英語）: A prominent scholar of the academy opened the great debate.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A prominent scholar of the academy opened the great debate. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 281. viable（実行可能な）　id 493　敵役: archdemon
例文（日本語）: 魔法使いたちは、大悪魔の王冠を壊す実行可能な方法を見つけられなかった。  
例文（英語）: The wizards found no viable way to destroy the archdemon's crown.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizards found no viable way to destroy the archdemon's crown. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 282. temporary（一時的な）　id 494　敵役: demon
例文（日本語）: 悪魔の門の封印は、一時的な処置にすぎない。  
例文（英語）: The seal on the demon gate is only a temporary fix.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The seal on the demon gate is only a temporary fix. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 283. transparent（透明な）　id 495
例文（日本語）: 女王は、すべての市民に開かれた透明な裁判を約束した。  
例文（英語）: The queen promised a transparent trial, open to every citizen.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen promised a transparent trial, open to every citizen. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 284. volatile（不安定な）　id 496
例文（日本語）: その不安定な薬の混合物は、いつ爆発してもおかしくなかった。  
例文（英語）: The volatile mixture of potions could explode at any moment.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The volatile mixture of potions could explode at any moment. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 285. accordingly（それに応じて）　id 497　敵役: lich
例文（日本語）: 将軍はリッチの計画を見抜き、それに応じて備えた。  
例文（英語）: The general saw the lich's plan and prepared accordingly.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general saw the lich's plan and prepared accordingly. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 286. approximately（およそ）　id 498
例文（日本語）: 空の都までの旅は、およそ三日かかる。  
例文（英語）: The journey to the sky city takes approximately three days.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The journey to the sky city takes approximately three days. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 287. simultaneously（同時に）　id 499　敵役: archdemon
例文（日本語）: 二体の大悪魔が、反対側から同時に塔を襲った。  
例文（英語）: Two archdemons struck the tower simultaneously from opposite sides.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Two archdemons struck the tower simultaneously from opposite sides. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 288. subsequently（その後）　id 500　敵役: lich
例文（日本語）: 勇者はリッチを討ち、その後、黒い門を封じた。  
例文（英語）: The hero slew the lich and subsequently sealed the black gate.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hero slew the lich and subsequently sealed the black gate. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

