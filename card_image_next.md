# 次に作るカード画像

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ 全500語のうち、画像がまだ無いのは **386語**。ここにはその先頭 **386語** を出しています。

## 使い方
1. 上から順に、``` で囲まれたプロンプトを**そのまま**画像生成AIに入れる（1件＝1枚。3:2の横長）
2. できた絵が「例文（日本語）」のとおりかを確かめる
3. 絵を `assets/cards/単語.webp` にして、`js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` を実行し直すと、作り終えた分が外れて次の分が先頭に来る

順番はレアリティの低い順 → 図鑑の並び順（id順）。`python3 tools/prompt_for.py --next 5` が出す5件と同じです。


## Lv.2 UNCOMMON（この一覧に89語）

### 1. future（未来）　id 32
例文（日本語）: 神託者は水晶の中に未来を見る。  
例文（英語）: The oracle sees the future in a crystal.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The oracle sees the future in a crystal. The future itself is the main subject of the picture: large and clearly visible. If the future is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. problem（問題）　id 33　敵役: ogre
例文（日本語）: 一本しかない道でオーガが寝ていて、商人たちは困っている。  
例文（英語）: An ogre asleep on the only road is a big problem for the merchants.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: An ogre asleep on the only road is a big problem for the merchants. The problem itself is the main subject of the picture: large and clearly visible. If the problem is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. reason（理由）　id 34
例文（日本語）: 騎士は、洞窟の不思議な光の理由を見つける。光る水晶だった。  
例文（英語）: The knight finds the reason for the strange light in the cave: a glowing crystal.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knight finds the reason for the strange light in the cave: a glowing crystal. The reason itself is the main subject of the picture: large and clearly visible. If the reason is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. experience（経験）　id 35　敵役: wolf
例文（日本語）: 経験豊かな老狩人が、雪の森で狼の足跡を読み取る。  
例文（英語）: An old hunter with long experience reads wolf tracks in the snowy forest.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: An old hunter with long experience reads wolf tracks in the snowy forest. The experience itself is the main subject of the picture: large and clearly visible. If the experience is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. wolves are lean and grey with thick fur, amber eyes and dark markings on the muzzle. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. learn（学ぶ）　id 36
例文（日本語）: 若い魔法使いは塔で呪文を学ぶ。  
例文（英語）: Young mages learn spells at the tower.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Young mages learn spells at the tower. Make the sentence's action (learn) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. difficult（難しい）　id 37
例文（日本語）: 若い騎士が、凍った山の険しい氷の崖をよじ登る。  
例文（英語）: The young knight climbs a difficult, icy cliff up a frozen mountain.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The young knight climbs a difficult, icy cliff up a frozen mountain. Make the person or thing that the sentence is about the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. travel（旅する）　id 38
例文（日本語）: 商人たちは砂漠を旅する。  
例文（英語）: Merchants travel across the desert.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Merchants travel across the desert. Make the sentence's action (travel) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. believe（信じる）　id 39
例文（日本語）: 少女は妖精を信じていて、戸口に妖精のためのミルクを置く。  
例文（英語）: The little girl believes in fairies and leaves milk for them by the door.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The little girl believes in fairies and leaves milk for them by the door. Make the sentence's action (believe) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. forget（忘れる）　id 40　敵役: ghost
例文（日本語）: 塔で、眠そうな見張りが扉の鍵をかけ忘れ、幽霊がすべり込む。  
例文（英語）: At the tower, the sleepy guard forgets to lock the door and a ghost slips in.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: At the tower, the sleepy guard forgets to lock the door and a ghost slips in. Make the sentence's action (forget) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. garden（庭）　id 181
例文（日本語）: 光る花が、秘密の庭に咲いている。  
例文（英語）: Glowing flowers bloom in the secret garden.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Glowing flowers bloom in the secret garden. The garden itself is the main subject of the picture: large and clearly visible. If the garden is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. kitchen（台所）　id 182　敵役: witch
例文（日本語）: 魔女が台所で魔法のスープを作っている。  
例文（英語）: The witch cooks a magic soup in the kitchen.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The witch cooks a magic soup in the kitchen. The kitchen itself is the main subject of the picture: large and clearly visible. If the kitchen is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. witches are gaunt women in a dark green robe and a wide pointed hat, with a crooked staff. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 12. market（市場）　id 183
例文（日本語）: 村の市場は、不思議な果物でいっぱいだ。  
例文（英語）: The village market is full of strange fruit.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The village market is full of strange fruit. The market itself is the main subject of the picture: large and clearly visible. If the market is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 13. village（村）　id 184　敵役: bandit
例文（日本語）: 山賊たちが丘から小さな村を見張っている。  
例文（英語）: Bandits watch the small village from the hill.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Bandits watch the small village from the hill. The village itself is the main subject of the picture: large and clearly visible. If the village is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. bandits are rough men in worn leather with a dark cloth mask over the lower face. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 14. forest（森）　id 185
例文（日本語）: 小さな光が、暗い森の中で舞っている。  
例文（英語）: Tiny lights dance in the dark forest.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Tiny lights dance in the dark forest. The forest itself is the main subject of the picture: large and clearly visible. If the forest is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 15. island（島）　id 186
例文（日本語）: 浮かぶ島が、雲の上に現れる。  
例文（英語）: A floating island appears above the clouds.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A floating island appears above the clouds. The island itself is the main subject of the picture: large and clearly visible. If the island is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 16. desert（砂漠）　id 187
例文（日本語）: 旅人たちは、夜に熱い砂漠を渡る。  
例文（英語）: The travelers cross the hot desert at night.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The travelers cross the hot desert at night. The desert itself is the main subject of the picture: large and clearly visible. If the desert is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 17. cave（洞くつ）　id 188　敵役: skeleton
例文（日本語）: スケルトンたちが洞くつの中で宝を守っている。  
例文（英語）: Skeletons guard the treasure inside the cave.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons guard the treasure inside the cave. The cave itself is the main subject of the picture: large and clearly visible. If the cave is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. skeletons are bare bone-white skeletons in a rusted iron helm and scraps of mail, with small points of light in the eye sockets. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 18. tower（塔）　id 189
例文（日本語）: 魔法使いは、いちばん高い塔に住んでいる。  
例文（英語）: The wizard lives in the tallest tower.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard lives in the tallest tower. The tower itself is the main subject of the picture: large and clearly visible. If the tower is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 19. gate（門）　id 190　敵役: orc
例文（日本語）: オークたちが丸太で石の門を破る。  
例文（英語）: The orcs break the stone gate with a log.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs break the stone gate with a log. The gate itself is the main subject of the picture: large and clearly visible. If the gate is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 20. ship（船）　id 191
例文（日本語）: 銀の船が、夜空を進んでいく。  
例文（英語）: A silver ship sails through the night sky.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A silver ship sails through the night sky. The ship itself is the main subject of the picture: large and clearly visible. If the ship is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 21. station（駅）　id 192
例文（日本語）: 道ばたの古い馬車の宿場で、馬たちが休んでいる。  
例文（英語）: Horses rest at the old coach station by the road.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Horses rest at the old coach station by the road. The station itself is the main subject of the picture: large and clearly visible. If the station is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 22. hospital（病院）　id 193
例文（日本語）: 石造りの施療院で、修道士たちが病気の旅人を看病する。  
例文（英語）: Monks care for sick travelers in the stone hospital.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Monks care for sick travelers in the stone hospital. The hospital itself is the main subject of the picture: large and clearly visible. If the hospital is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 23. library（図書館）　id 194
例文（日本語）: 古い本たちが、静かな図書館で眠っている。  
例文（英語）: Ancient books sleep in the silent library.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Ancient books sleep in the silent library. The library itself is the main subject of the picture: large and clearly visible. If the library is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 24. ticket（切符）　id 195
例文（日本語）: 彼女は港で、見張りに乗船券を見せる。  
例文（英語）: She shows her ticket to the guard at the harbour.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She shows her ticket to the guard at the harbour. The ticket itself is the main subject of the picture: large and clearly visible. If the ticket is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 25. map（地図）　id 196
例文（日本語）: テーブルの上の古い地図に、隠された島が描かれている。  
例文（英語）: On the table, the old map shows a hidden island.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: On the table, the old map shows a hidden island. The map itself is the main subject of the picture: large and clearly visible. If the map is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 26. letter（手紙）　id 197
例文（日本語）: 魔法の手紙が、窓辺に届く。  
例文（英語）: A magic letter arrives at the window.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A magic letter arrives at the window. The letter itself is the main subject of the picture: large and clearly visible. If the letter is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 27. story（物語）　id 198
例文（日本語）: おばあちゃんが、火のそばで竜の物語を語る。  
例文（英語）: Grandma tells a story about a dragon by the fire.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Grandma tells a story about a dragon by the fire. The story itself is the main subject of the picture: large and clearly visible. If the story is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 28. dream（夢）　id 199　敵役: ghost
例文（日本語）: 幽霊が、少年の夢に現れる。  
例文（英語）: A ghost visits the boy in his dream.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A ghost visits the boy in his dream. The dream itself is the main subject of the picture: large and clearly visible. If the dream is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 29. question（質問）　id 200
例文（日本語）: 砂漠の神殿で、スフィンクスが難しい問いを投げかける。  
例文（英語）: The sphinx asks a difficult question at the desert temple.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The sphinx asks a difficult question at the desert temple. The question itself is the main subject of the picture: large and clearly visible. If the question is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 30. answer（答え）　id 201
例文（日本語）: 神殿で勇者が答えを告げると、石の扉が開く。  
例文（英語）: In the temple, the hero gives the answer and the stone door opens.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: In the temple, the hero gives the answer and the stone door opens. The answer itself is the main subject of the picture: large and clearly visible. If the answer is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 31. number（数）　id 202　敵役: orc
例文（日本語）: 大きな数のオークが、道を進んでくる。  
例文（英語）: A large number of orcs march on the road.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A large number of orcs march on the road. The number itself is the main subject of the picture: large and clearly visible. If the number is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 32. color（色）　id 203
例文（日本語）: ドラゴンは、日差しの中で色を変える。  
例文（英語）: The dragon changes color in the sun.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dragon changes color in the sun. The color itself is the main subject of the picture: large and clearly visible. If the color is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 33. weather（天気）　id 204
例文（日本語）: よい天気の中、旅人たちが日の当たる道を歩き出す。  
例文（英語）: In fine weather, travelers set out along the sunny road.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: In fine weather, travelers set out along the sunny road. The weather itself is the main subject of the picture: large and clearly visible. If the weather is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 34. summer（夏）　id 205
例文（日本語）: 夏には、草原の上をホタルが飛びかう。  
例文（英語）: Fireflies fill the air over the meadow in summer.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Fireflies fill the air over the meadow in summer. The summer itself is the main subject of the picture: large and clearly visible. If the summer is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 35. winter（冬）　id 206
例文（日本語）: 冬には、村に雪が静かに降り積もる。  
例文（英語）: Snow falls softly on the village in winter.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Snow falls softly on the village in winter. The winter itself is the main subject of the picture: large and clearly visible. If the winter is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 36. holiday（休日）　id 207
例文（日本語）: 町じゅうの人が、広場で祝日を祝う。  
例文（英語）: The whole town celebrates the holiday in the square.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The whole town celebrates the holiday in the square. The holiday itself is the main subject of the picture: large and clearly visible. If the holiday is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 37. bicycle（自転車）　id 208
例文（日本語）: 若い発明家が、木の自転車に乗って村を走り抜ける。  
例文（英語）: The young inventor rides a wooden bicycle through the village.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The young inventor rides a wooden bicycle through the village. The bicycle itself is the main subject of the picture: large and clearly visible. If the bicycle is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 38. brother（兄弟）　id 209
例文（日本語）: 兄が、中庭で剣のけいこをしている。  
例文（英語）: My big brother practices with his sword in the yard.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: My big brother practices with his sword in the yard. The brother itself is the main subject of the picture: large and clearly visible. If the brother is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 39. sister（姉妹）　id 210
例文（日本語）: 彼女の妹が、台所で魔法の薬を作る。  
例文（英語）: Her little sister makes a magic potion in the kitchen.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Her little sister makes a magic potion in the kitchen. The sister itself is the main subject of the picture: large and clearly visible. If the sister is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 40. mother（母）　id 211
例文（日本語）: 彼の母は、火のそばで歌っている。  
例文（英語）: His mother sings by the fire.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: His mother sings by the fire. The mother itself is the main subject of the picture: large and clearly visible. If the mother is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 41. father（父）　id 212
例文（日本語）: 父親が、川で息子に泳ぎを教える。  
例文（英語）: The father teaches his son to swim in the river.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The father teaches his son to swim in the river. The father itself is the main subject of the picture: large and clearly visible. If the father is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 42. umbrella（傘）　id 213
例文（日本語）: 少女は、雨の中で傘を開く。  
例文（英語）: She opens an umbrella in the rain.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She opens an umbrella in the rain. The umbrella itself is the main subject of the picture: large and clearly visible. If the umbrella is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 43. mirror（鏡）　id 214　敵役: ghost
例文（日本語）: 青白い幽霊が、古い鏡に映る。  
例文（英語）: A pale ghost appears in the old mirror.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A pale ghost appears in the old mirror. The mirror itself is the main subject of the picture: large and clearly visible. If the mirror is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 44. candle（ろうそく）　id 215　敵役: ghost
例文（日本語）: 暗い広間で、一本のろうそくが幽霊を遠ざけている。  
例文（英語）: A single candle keeps the ghosts away in the dark hall.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A single candle keeps the ghosts away in the dark hall. The candle itself is the main subject of the picture: large and clearly visible. If the candle is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 45. ring（指輪）　id 216
例文（日本語）: 勇者は、手に銀の指輪をはめている。  
例文（英語）: The hero wears a silver ring on his hand.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hero wears a silver ring on his hand. The ring itself is the main subject of the picture: large and clearly visible. If the ring is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 46. crown（王冠）　id 217　敵役: skeleton
例文（日本語）: 玉座のスケルトンの王が、壊れた冠をかぶっている。  
例文（英語）: A skeleton king wears a broken crown on his throne.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A skeleton king wears a broken crown on his throne. The crown itself is the main subject of the picture: large and clearly visible. If the crown is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. skeletons are bare bone-white skeletons in a rusted iron helm and scraps of mail, with small points of light in the eye sockets. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 47. shield（盾）　id 218　敵役: orc
例文（日本語）: 戦いの中、彼の盾がオークの重い斧を受け止める。  
例文（英語）: His shield stops the orc's heavy axe in the battle.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: His shield stops the orc's heavy axe in the battle. The shield itself is the main subject of the picture: large and clearly visible. If the shield is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 48. wait（待つ）　id 219　敵役: gargoyle
例文（日本語）: ガーゴイルたちが、夜、屋根の上で待っている。  
例文（英語）: The gargoyles wait on the roof at night.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The gargoyles wait on the roof at night. Make the sentence's action (wait) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. gargoyles are grey stone beasts with folded bat wings, curved horns and blank carved eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 49. ask（尋ねる）　id 220
例文（日本語）: 旅人が、分かれ道で農夫に道をたずねる。  
例文（英語）: The traveler asks a farmer the way at the crossroads.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The traveler asks a farmer the way at the crossroads. Make the sentence's action (ask) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 50. bring（持ってくる）　id 221　敵役: ghost
例文（日本語）: 従者が、墓地の幽霊と戦うための銀の矢を運んでくる。  
例文（英語）: The squire brings silver arrows to fight the ghosts in the graveyard.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The squire brings silver arrows to fight the ghosts in the graveyard. Make the sentence's action (bring) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 51. carry（運ぶ）　id 222
例文（日本語）: 二頭のたくましい馬が、重い荷物を運んで丘をのぼる。  
例文（英語）: Two strong horses carry heavy bags up the hill.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Two strong horses carry heavy bags up the hill. Make the sentence's action (carry) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 52. catch（つかまえる）　id 223　敵役: slime
例文（日本語）: 漁師たちが、港で大きな網を使ってスライムをつかまえる。  
例文（英語）: The fishermen catch a slime with a big net at the harbour.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The fishermen catch a slime with a big net at the harbour. Make the sentence's action (catch) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. slimes are smooth rounded domes of translucent green jelly, about the size of a melon, with two big round eyes and a small simple mouth, charming. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 53. choose（選ぶ）　id 224
例文（日本語）: 店で、若い魔法使いが棚から杖を選ぶ。  
例文（英語）: In the shop, the young wizard chooses a wand from the shelf.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: In the shop, the young wizard chooses a wand from the shelf. Make the sentence's action (choose) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 54. climb（登る）　id 225　敵役: goblin
例文（日本語）: 夜、ゴブリンたちがロープを使って塔の壁をよじ登る。  
例文（英語）: Goblins climb up the tower walls with ropes at night.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Goblins climb up the tower walls with ropes at night. Make the sentence's action (climb) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. goblins are lean and wiry, a head shorter than a man, with sage-green skin, long ears that stick out sideways, a large hooked nose, yellow eyes and sharp teeth, in ragged brown cloth and scraps of leather, barefoot, menacing. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 55. cook（料理する）　id 226
例文（日本語）: 彼は、火の上で新鮮な魚を料理する。  
例文（英語）: He cooks a fresh fish over the fire.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: He cooks a fresh fish over the fire. Make the sentence's action (cook) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 56. cross（渡る）　id 227　敵役: orc
例文（日本語）: オークたちが、浅い場所で川を渡る。  
例文（英語）: The orcs cross the river at the shallow point.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs cross the river at the shallow point. Make the sentence's action (cross) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 57. dance（踊る）　id 228
例文（日本語）: 妖精たちが、月の下で踊る。  
例文（英語）: The fairies dance under the moon.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The fairies dance under the moon. Make the sentence's action (dance) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 58. draw（描く）　id 229
例文（日本語）: 少女は、壁にドラゴンを描く。  
例文（英語）: She draws a dragon on the wall.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She draws a dragon on the wall. Make the sentence's action (draw) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 59. enjoy（楽しむ）　id 230
例文（日本語）: 私たちは、宿で温かい食事を楽しむ。  
例文（英語）: We enjoy a warm meal at the inn.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We enjoy a warm meal at the inn. Make the sentence's action (enjoy) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 60. explain（説明する）　id 231
例文（日本語）: 年老いた先生が、塔で弟子たちに魔法のきまりを説明する。  
例文（英語）: The old teacher explains the magic rules to his students in the tower.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old teacher explains the magic rules to his students in the tower. Make the sentence's action (explain) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 61. find（見つける）　id 232　敵役: skeleton
例文（日本語）: 古い井戸で、スケルトンの骨を見つける。  
例文（英語）: We find skeleton bones in the old well.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We find skeleton bones in the old well. Make the sentence's action (find) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. skeletons are bare bone-white skeletons in a rusted iron helm and scraps of mail, with small points of light in the eye sockets. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 62. follow（ついていく）　id 233　敵役: harpy
例文（日本語）: 勇敢な狩人が、ハーピーを追って崖の奥へ入っていく。  
例文（英語）: The brave hunter follows the harpy into the cliffs.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The brave hunter follows the harpy into the cliffs. Make the sentence's action (follow) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 63. join（加わる）　id 234
例文（日本語）: 大広間で、多くの若い勇者がギルドに加わる。  
例文（英語）: Many young heroes join the guild at the great hall.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Many young heroes join the guild at the great hall. Make the sentence's action (join) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 64. leave（去る）　id 235
例文（日本語）: 騎士は、夜明けに馬に乗って村を出ていく。  
例文（英語）: The knight leaves the village at dawn on his horse.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knight leaves the village at dawn on his horse. Make the sentence's action (leave) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 65. meet（会う）　id 236
例文（日本語）: 私たちは、正午に古い橋で会う。  
例文（英語）: We meet at the old bridge at noon.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We meet at the old bridge at noon. Make the sentence's action (meet) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 66. protect（守る）　id 237
例文（日本語）: 竜が、眠っている村を嵐から守る。  
例文（英語）: The dragon protects the sleeping village from the storm.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dragon protects the sleeping village from the storm. Make the sentence's action (protect) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 67. save（救う）　id 238
例文（日本語）: 勇者が、子どもを救うために川へ飛び込む。  
例文（英語）: The hero jumps into the river to save the child.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hero jumps into the river to save the child. Make the sentence's action (save) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 68. search（探す）　id 239
例文（日本語）: 彼らは、なくした鍵を森の中で探す。  
例文（英語）: They search in the forest for the lost key.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: They search in the forest for the lost key. Make the sentence's action (search) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 69. send（送る）　id 240
例文（日本語）: 魔法使いが、塔からフクロウに手紙を託して送る。  
例文（英語）: The wizard sends a message by owl from his tower.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard sends a message by owl from his tower. Make the sentence's action (send) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 70. share（分け合う）　id 241
例文（日本語）: 仲間たちが、たき火を囲んでパンと温かいお茶を分け合う。  
例文（英語）: The friends share bread and warm tea at the campfire.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The friends share bread and warm tea at the campfire. Make the sentence's action (share) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 71. show（見せる）　id 242
例文（日本語）: 案内人が、山を抜ける秘密の道を私たちに教える。  
例文（英語）: The guide shows us the secret path through the mountains.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The guide shows us the secret path through the mountains. Make the sentence's action (show) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 72. teach（教える）　id 243　敵役: zombie
例文（日本語）: 年老いた狩人が、広場で村人たちにゾンビとの戦い方を教える。  
例文（英語）: The old hunter teaches the villagers how to fight zombies in the square.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old hunter teaches the villagers how to fight zombies in the square. Make the sentence's action (teach) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. zombies are grey-skinned and slack-jawed in torn clothing, with clouded white eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 73. visit（訪れる）　id 244
例文（日本語）: 多くの旅人が、山の中の古い神殿を訪れる。  
例文（英語）: Many travelers visit the ancient temple in the mountains.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Many travelers visit the ancient temple in the mountains. Make the sentence's action (visit) the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 74. careful（注意深い）　id 245　敵役: troll
例文（日本語）: 用心深い泥棒が、洞窟で眠るトロルの横を忍び足で通り過ぎる。  
例文（英語）: The careful thief tiptoes past the sleeping troll in the cave.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The careful thief tiptoes past the sleeping troll in the cave. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 75. dangerous（危険な）　id 246　敵役: orc
例文（日本語）: 騎士たちが、夜の危険なオークの野営地へ忍び込む。  
例文（英語）: The knights creep into the dangerous orc camp at night.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knights creep into the dangerous orc camp at night. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 76. quiet（静かな）　id 247　敵役: skeleton
例文（日本語）: 墓所の中で、スケルトンの軍勢が静かに列をなして待っている。  
例文（英語）: The skeleton army waits in quiet rows in the tomb.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The skeleton army waits in quiet rows in the tomb. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. skeletons are bare bone-white skeletons in a rusted iron helm and scraps of mail, with small points of light in the eye sockets. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 77. brave（勇敢な）　id 248　敵役: orc
例文（日本語）: 勇敢な少女が、橋の上でたった一人オークに立ち向かう。  
例文（英語）: The brave girl faces the orc alone on the bridge.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The brave girl faces the orc alone on the bridge. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 78. clever（賢い）　id 249　敵役: witch, troll
例文（日本語）: 賢い魔女が、橋の下の腹ぺこのトロルをだます。  
例文（英語）: A clever witch tricks the hungry troll under the bridge.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A clever witch tricks the hungry troll under the bridge. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. witches are gaunt women in a dark green robe and a wide pointed hat, with a crooked staff. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 79. empty（空の）　id 250　敵役: ghost
例文（日本語）: 空の城には、幽霊だけが住んでいる。  
例文（英語）: Only ghosts live in the empty castle.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Only ghosts live in the empty castle. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 80. famous（有名な）　id 251
例文（日本語）: 有名な吟遊詩人が、町で歌う。  
例文（英語）: The famous bard sings in the town.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The famous bard sings in the town. Make the person or thing that the sentence is about the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 81. heavy（重い）　id 252　敵役: orc
例文（日本語）: 森の中で、オークが重い鉄のこん棒を振り回す。  
例文（英語）: The orc swings a heavy iron club in the forest.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orc swings a heavy iron club in the forest. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 82. tired（疲れた）　id 253
例文（日本語）: 疲れた旅人が、木の下で眠り込む。  
例文（英語）: The tired traveler falls asleep under a tree.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The tired traveler falls asleep under a tree. Make the person or thing that the sentence is about the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 83. safe（安全な）　id 254　敵役: bandit
例文（日本語）: 騎士たちが、道中の山賊から村人たちを守り、無事に送り届ける。  
例文（英語）: The knights keep the villagers safe from the bandits on the road.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knights keep the villagers safe from the bandits on the road. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. bandits are rough men in worn leather with a dark cloth mask over the lower face. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 84. ready（準備ができた）　id 255　敵役: orc
例文（日本語）: 衛兵たちが、オークの襲撃に備えて城壁の上で身構える。  
例文（英語）: The guards stand ready on the walls for the orc attack.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The guards stand ready on the walls for the orc attack. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 85. special（特別な）　id 256
例文（日本語）: 王女が、宮殿の祭りのために特別なドレスを着る。  
例文（英語）: The princess wears a special dress for the festival in the palace.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The princess wears a special dress for the festival in the palace. Make the person or thing that the sentence is about the main subject: large and clearly visible. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 86. always（いつも）　id 257　敵役: skeleton
例文（日本語）: スケルトンは、日が沈むといつも墓からよみがえる。  
例文（英語）: Skeletons always rise again from the graves after sunset.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons always rise again from the graves after sunset. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. skeletons are bare bone-white skeletons in a rusted iron helm and scraps of mail, with small points of light in the eye sockets. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 87. never（決して〜ない）　id 258　敵役: bat
例文（日本語）: 狩人は、たいまつを持たずにコウモリの洞窟へ入ることは決してない。  
例文（英語）: The hunter never goes into the bat cave without a torch.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hunter never goes into the bat cave without a torch. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. bats are small and fuzzy with dark violet fur, large round ears and big round eyes, charming. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 88. suddenly（突然）　id 259　敵役: ghost
例文（日本語）: 突然、ドアの後ろに幽霊が現れる。  
例文（英語）: Suddenly, a ghost appears behind the door.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Suddenly, a ghost appears behind the door. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ghosts are pale blue-white and half transparent, the lower body fading into mist, with hollow glowing eyes. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 89. finally（ついに）　id 260　敵役: orc
例文（日本語）: ついに、闘技場でオークの族長が地面に倒れる。  
例文（英語）: Finally, the orc chief falls to the ground in the arena.
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Finally, the orc chief falls to the ground in the arena. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, and crude iron and leather armour. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. not photorealistic, not a 3D render, no glossy plastic shine, 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.3 RARE（この一覧に99語）

### 90. improve（改善する）　id 41
例文（日本語）: 毎日の練習で、若い魔法使いは上達し始めた。  
例文（英語）: With daily practice, the young mage began to improve.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With daily practice, the young mage began to improve. Make the sentence's action (improve) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 91. consider（検討する）　id 42　敵役: vampire
例文（日本語）: 議会は、ヴァンパイアの奇妙な申し出を検討しなければならない。  
例文（英語）: The council must consider the vampire's strange offer.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The council must consider the vampire's strange offer. Make the sentence's action (consider) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 92. suggest（提案する）　id 43　敵役: werewolf
例文（日本語）: 案内人は、人狼の森を避ける道を提案した。  
例文（英語）: The guide suggested a route that avoids the werewolf woods.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The guide suggested a route that avoids the werewolf woods. Make the sentence's action (suggest) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 93. develop（発展する）　id 45
例文（日本語）: 小さな村は、偉大な魔法都市へと発展した。  
例文（英語）: The small village developed into a great magical city.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The small village developed into a great magical city. Make the sentence's action (develop) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 94. increase（増える）　id 46　敵役: werewolf
例文（日本語）: 満月ごとに、人狼の数が増える。  
例文（英語）: The number of werewolves increases with every full moon.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The number of werewolves increases with every full moon. Make the sentence's action (increase) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 95. reduce（減らす）　id 47　敵役: werewolf
例文（日本語）: 銀の鎧は、人狼の爪による損害を減らす。  
例文（英語）: Silver armor reduces the damage from a werewolf's claws.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Silver armor reduces the damage from a werewolf's claws. Make the sentence's action (reduce) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 96. environment（環境）　id 48
例文（日本語）: エルフたちは、森の環境を守るために懸命に働く。  
例文（英語）: The elves work hard to protect their forest environment.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The elves work hard to protect their forest environment. The environment itself is the main subject of the picture: large and clearly visible. If the environment is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 97. relationship（関係）　id 49
例文（日本語）: 二つの王国は強い関係で結ばれている。  
例文（英語）: The two kingdoms have a strong relationship.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The two kingdoms have a strong relationship. The relationship itself is the main subject of the picture: large and clearly visible. If the relationship is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 98. opportunity（機会）　id 50　敵役: vampire
例文（日本語）: 夜明けが、狩人たちにヴァンパイアへの唯一の機会を与えた。  
例文（英語）: Dawn gave the hunters their only opportunity against the vampire.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Dawn gave the hunters their only opportunity against the vampire. The opportunity itself is the main subject of the picture: large and clearly visible. If the opportunity is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 99. responsibility（責任）　id 51
例文（日本語）: 守護者は重い責任を背負っている。  
例文（英語）: A guardian carries a heavy responsibility.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A guardian carries a heavy responsibility. The responsibility itself is the main subject of the picture: large and clearly visible. If the responsibility is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 100. effective（効果的な）　id 52　敵役: wraith
例文（日本語）: 聖水は、さまようレイスに対して効果的だった。  
例文（英語）: Holy water proved effective against the wandering wraiths.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Holy water proved effective against the wandering wraiths. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. wraiths are hooded shapes of black smoke with no face, only two pale burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 101. available（利用できる）　id 53
例文（日本語）: 宿には二部屋空いている。  
例文（英語）: Two rooms are available at the inn.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Two rooms are available at the inn. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 102. achieve（達成する）　id 54
例文（日本語）: 彼女は夢を達成するために何年も努力した。  
例文（英語）: She worked for years to achieve her dream.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She worked for years to achieve her dream. Make the sentence's action (achieve) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 103. compare（比べる）　id 55
例文（日本語）: 商人は二本の剣を注意深く比べた。  
例文（英語）: The merchant compared the two swords carefully.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The merchant compared the two swords carefully. Make the sentence's action (compare) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 104. describe（描写する）　id 56　敵役: troll
例文（日本語）: 生き残りが、門を叩き壊したトロルを描写した。  
例文（英語）: The survivor described the troll that crushed the gate.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The survivor described the troll that crushed the gate. Make the sentence's action (describe) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 105. influence（影響）　id 57　敵役: werewolf
例文（日本語）: 満月は、人狼に強い影響をあたえる。  
例文（英語）: The full moon has a strong influence on werewolves.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The full moon has a strong influence on werewolves. The influence itself is the main subject of the picture: large and clearly visible. If the influence is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 106. purpose（目的）　id 58
例文（日本語）: この古い塔の目的は何だろう。  
例文（英語）: What is the purpose of this ancient tower?
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: What is the purpose of this ancient tower? The purpose itself is the main subject of the picture: large and clearly visible. If the purpose is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 107. popular（人気のある）　id 59
例文（日本語）: その吟遊詩人はどの町でも人気だ。  
例文（英語）: The bard is popular in every town.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The bard is popular in every town. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 108. challenge（挑戦）　id 60　敵役: vampire
例文（日本語）: 若き勇者は、ヴァンパイア卿の挑戦を受けた。  
例文（英語）: The young hero accepted the vampire lord's challenge.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young hero accepted the vampire lord's challenge. The challenge itself is the main subject of the picture: large and clearly visible. If the challenge is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 109. treasure（宝物）　id 261　敵役: pirate
例文（日本語）: 海賊たちは、島に金色の宝物を埋めた。  
例文（英語）: The pirates buried a golden treasure on the island.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates buried a golden treasure on the island. The treasure itself is the main subject of the picture: large and clearly visible. If the treasure is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 110. mystery（謎）　id 262
例文（日本語）: 誰も、静かな塔の謎を解けなかった。  
例文（英語）: Nobody could solve the mystery of the silent tower.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Nobody could solve the mystery of the silent tower. The mystery itself is the main subject of the picture: large and clearly visible. If the mystery is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 111. secret（秘密）　id 263
例文（日本語）: 古い本棚の裏で、秘密の扉が開いた。  
例文（英語）: A secret door opened behind the old bookshelf.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A secret door opened behind the old bookshelf. The secret itself is the main subject of the picture: large and clearly visible. If the secret is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 112. wisdom（知恵）　id 264
例文（日本語）: 老魔法使いは、若い勇者たちに知恵を分け与えた。  
例文（英語）: The old wizard shared his wisdom with the young heroes.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The old wizard shared his wisdom with the young heroes. The wisdom itself is the main subject of the picture: large and clearly visible. If the wisdom is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 113. victory（勝利）　id 265　敵役: troll
例文（日本語）: トロルの軍への勝利は、何日も祝われた。  
例文（英語）: The victory over the troll army was celebrated for days.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The victory over the troll army was celebrated for days. The victory itself is the main subject of the picture: large and clearly visible. If the victory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 114. power（力）　id 266
例文（日本語）: 不思議な力が、古代の水晶の中を流れた。  
例文（英語）: A strange power flowed through the ancient crystal.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A strange power flowed through the ancient crystal. The power itself is the main subject of the picture: large and clearly visible. If the power is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 115. memory（記憶）　id 267
例文（日本語）: 古い花の香りをかぐと、温かい記憶がよみがえった。  
例文（英語）: A warm memory returned when she smelled the old flowers.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A warm memory returned when she smelled the old flowers. The memory itself is the main subject of the picture: large and clearly visible. If the memory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 116. journey（旅路）　id 268
例文（日本語）: 砂漠を越える長い旅路が、彼らの勇気を試した。  
例文（英語）: The long journey across the desert tested their courage.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The long journey across the desert tested their courage. The journey itself is the main subject of the picture: large and clearly visible. If the journey is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 117. leader（指導者）　id 269　敵役: werewolf
例文（日本語）: 人狼の群れの指導者が、尾根の上で吠えた。  
例文（英語）: The leader of the werewolf pack howled on the ridge.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The leader of the werewolf pack howled on the ridge. The leader itself is the main subject of the picture: large and clearly visible. If the leader is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 118. promise（約束）　id 270
例文（日本語）: 彼は、冬が来る前に戻ると約束した。  
例文（英語）: He made a promise to return before the winter.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: He made a promise to return before the winter. The promise itself is the main subject of the picture: large and clearly visible. If the promise is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 119. danger（危険）　id 271　敵役: shadow
例文（日本語）: 崩れた城の影に、危険が待ちかまえていた。  
例文（英語）: Danger waited in the shadows of the ruined castle.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Danger waited in the shadows of the ruined castle. The danger itself is the main subject of the picture: large and clearly visible. If the danger is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 120. energy（エネルギー）　id 272
例文（日本語）: 青いエネルギーが、魔法使いの手のまわりに集まった。  
例文（英語）: Blue energy gathered around the mage's hands.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Blue energy gathered around the mage's hands. The energy itself is the main subject of the picture: large and clearly visible. If the energy is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 121. nature（自然）　id 273
例文（日本語）: エルフたちは、自然と調和して暮らしている。  
例文（英語）: The elves live in harmony with nature.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The elves live in harmony with nature. The nature itself is the main subject of the picture: large and clearly visible. If the nature is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 122. peace（平和）　id 274
例文（日本語）: 戦いのあと、ついに谷へ平和が戻った。  
例文（英語）: After the war, peace finally returned to the valley.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: After the war, peace finally returned to the valley. The peace itself is the main subject of the picture: large and clearly visible. If the peace is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 123. freedom（自由）　id 275
例文（日本語）: 鳥たちは、自由を感じながら飛び去った。  
例文（英語）: The birds flew away with a sense of freedom.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The birds flew away with a sense of freedom. The freedom itself is the main subject of the picture: large and clearly visible. If the freedom is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 124. knowledge（知識）　id 276
例文（日本語）: その図書館には、千年の知識がおさめられている。  
例文（英語）: The library holds the knowledge of a thousand years.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The library holds the knowledge of a thousand years. The knowledge itself is the main subject of the picture: large and clearly visible. If the knowledge is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 125. history（歴史）　id 277
例文（日本語）: 王国の歴史が、壁に刻まれている。  
例文（英語）: The history of the kingdom is carved into the wall.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The history of the kingdom is carved into the wall. The history itself is the main subject of the picture: large and clearly visible. If the history is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 126. tradition（伝統）　id 278
例文（日本語）: 毎年春になると、村は古い伝統を守る。  
例文（英語）: Every spring, the village keeps an old tradition.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Every spring, the village keeps an old tradition. The tradition itself is the main subject of the picture: large and clearly visible. If the tradition is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 127. culture（文化）　id 279
例文（日本語）: その祭りは、山の民の文化を伝えていた。  
例文（英語）: The festival showed the culture of the mountain people.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The festival showed the culture of the mountain people. The culture itself is the main subject of the picture: large and clearly visible. If the culture is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 128. science（科学）　id 280
例文（日本語）: 塔の中で、学者たちは科学と魔法を一緒に研究した。  
例文（英語）: In the tower, scholars studied science and magic together.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the tower, scholars studied science and magic together. The science itself is the main subject of the picture: large and clearly visible. If the science is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 129. speed（速さ）　id 281　敵役: harpy
例文（日本語）: ハーピーたちが、恐ろしい速さで崖の上から急降下した。  
例文（英語）: The harpies dived at terrible speed over the cliffs.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The harpies dived at terrible speed over the cliffs. The speed itself is the main subject of the picture: large and clearly visible. If the speed is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 130. evidence（証拠）　id 282　敵役: vampire
例文（日本語）: 彼らは空の地下墓所で、ヴァンパイアの証拠を見つけた。  
例文（英語）: They found evidence of a vampire in the empty crypt.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: They found evidence of a vampire in the empty crypt. The evidence itself is the main subject of the picture: large and clearly visible. If the evidence is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 131. expert（専門家）　id 283　敵役: werewolf
例文（日本語）: 人狼の専門家が、川辺の足跡を調べた。  
例文（英語）: An expert on werewolves examined the tracks by the river.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: An expert on werewolves examined the tracks by the river. The expert itself is the main subject of the picture: large and clearly visible. If the expert is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 132. ability（能力）　id 284　敵役: bat, vampire
例文（日本語）: ヴァンパイアは、コウモリに変わる能力を持つ。  
例文（英語）: A vampire has the ability to turn into a bat.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A vampire has the ability to turn into a bat. The ability itself is the main subject of the picture: large and clearly visible. If the ability is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. bats are small and fuzzy with dark violet fur, large round ears and big round eyes, charming. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 133. advantage（利点）　id 285　敵役: vampire
例文（日本語）: 日の光は、すべての狩人にヴァンパイアへの利点を与える。  
例文（英語）: Daylight gives every hunter an advantage over a vampire.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Daylight gives every hunter an advantage over a vampire. The advantage itself is the main subject of the picture: large and clearly visible. If the advantage is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 134. damage（損害）　id 286　敵役: troll
例文（日本語）: トロルの棍棒が、城門に大きな損害を与えた。  
例文（英語）: The troll's club caused heavy damage to the castle gate.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The troll's club caused heavy damage to the castle gate. The damage itself is the main subject of the picture: large and clearly visible. If the damage is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 135. community（地域社会）　id 287
例文（日本語）: 地域の人々みんなが、力を合わせて町を建て直した。  
例文（英語）: The whole community worked together to rebuild the town.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The whole community worked together to rebuild the town. The community itself is the main subject of the picture: large and clearly visible. If the community is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 136. effort（努力）　id 288
例文（日本語）: 大きな努力で、少年は石の扉を持ち上げた。  
例文（英語）: With great effort, the boy lifted the stone door.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With great effort, the boy lifted the stone door. The effort itself is the main subject of the picture: large and clearly visible. If the effort is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 137. invention（発明）　id 289
例文（日本語）: 発明家の最新の発明が、工房の上に浮かんでいた。  
例文（英語）: The inventor's newest invention floated above the workshop.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The inventor's newest invention floated above the workshop. The invention itself is the main subject of the picture: large and clearly visible. If the invention is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 138. truth（真実）　id 290
例文（日本語）: 広間の魔法の鏡は、いつも真実を語る。  
例文（英語）: The magic mirror in the hall always tells the truth.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The magic mirror in the hall always tells the truth. The truth itself is the main subject of the picture: large and clearly visible. If the truth is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 139. rule（規則）　id 291
例文（日本語）: 生徒は皆、学院の規則に従わなければならない。  
例文（英語）: Every student must follow the rule of the academy.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Every student must follow the rule of the academy. The rule itself is the main subject of the picture: large and clearly visible. If the rule is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 140. region（地域）　id 292　敵役: harpy
例文（日本語）: ハーピーたちは、北の地域のいたるところに巣を作る。  
例文（英語）: Harpies nest all across the northern region.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Harpies nest all across the northern region. The region itself is the main subject of the picture: large and clearly visible. If the region is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 141. discover（発見する）　id 293
例文（日本語）: 探検家たちは、氷の下に隠された都市を発見する。  
例文（英語）: Explorers discover a hidden city beneath the ice.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Explorers discover a hidden city beneath the ice. Make the sentence's action (discover) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 142. destroy（破壊する）　id 294　敵役: golem
例文（日本語）: 石のゴーレムが、古い木の橋を破壊した。  
例文（英語）: A stone golem destroyed the old wooden bridge.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A stone golem destroyed the old wooden bridge. Make the sentence's action (destroy) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. golems are broad figures built of cut stone blocks, with glowing runes in the seams. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 143. hide（隠す）　id 295　敵役: vampire
例文（日本語）: ヴァンパイアたちは、日が出ている間、地下墓所に隠れる。  
例文（英語）: Vampires hide in the crypt while the sun is up.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Vampires hide in the crypt while the sun is up. Make the sentence's action (hide) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 144. reveal（明かす）　id 296
例文（日本語）: その地図は、失われた神殿への道を明かすだろう。  
例文（英語）: The map will reveal the way to the lost temple.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The map will reveal the way to the lost temple. Make the sentence's action (reveal) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 145. survive（生き残る）　id 297　敵役: ogre
例文（日本語）: オーガの待ち伏せを生き残れたのは、二人の狩人だけだった。  
例文（英語）: Only two hunters could survive the ogre's ambush.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Only two hunters could survive the ogre's ambush. Make the sentence's action (survive) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 146. create（生み出す）　id 298
例文（日本語）: その芸術家は、光から生きた花を生み出せる。  
例文（英語）: The artist can create living flowers from light.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The artist can create living flowers from light. Make the sentence's action (create) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 147. gather（集まる）　id 299　敵役: wraith
例文（日本語）: レイスたちが、真夜中に古戦場へ集まる。  
例文（英語）: Wraiths gather around the old battlefield at midnight.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Wraiths gather around the old battlefield at midnight. Make the sentence's action (gather) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. wraiths are hooded shapes of black smoke with no face, only two pale burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 148. imagine（想像する）　id 300
例文（日本語）: 空に浮かぶ町を、想像できますか？  
例文（英語）: Can you imagine a city floating in the sky?
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Can you imagine a city floating in the sky? Make the sentence's action (imagine) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 149. explore（探検する）　id 301
例文（日本語）: 若い勇者たちは、古代神殿の遺跡を探検する。  
例文（英語）: The young heroes explore the ruins of an ancient temple.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young heroes explore the ruins of an ancient temple. Make the sentence's action (explore) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 150. defend（防衛する）　id 302　敵役: ogre
例文（日本語）: 騎士たちが、オーガの一団から門を防衛する。  
例文（英語）: The knights defend the gate against the ogre warband.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The knights defend the gate against the ogre warband. Make the sentence's action (defend) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 151. attract（引きつける）　id 303　敵役: vampire
例文（日本語）: 新しい血は、谷のすべてのヴァンパイアを引きつける。  
例文（英語）: Fresh blood will attract every vampire in the valley.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Fresh blood will attract every vampire in the valley. Make the sentence's action (attract) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 152. avoid（避ける）　id 304　敵役: cursed
例文（日本語）: 私たちは、何としても呪われた沼を避けなければならない。  
例文（英語）: We must avoid the cursed swamp at all costs.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: We must avoid the cursed swamp at all costs. Make the sentence's action (avoid) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 153. belong（属する）　id 305
例文（日本語）: この金の剣は、初代の王のものだ。  
例文（英語）: This golden sword belongs to the first king.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This golden sword belongs to the first king. Make the sentence's action (belong) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 154. cause（引き起こす）　id 306
例文（日本語）: ひとつの火花が、大きな火事を引き起こすことがある。  
例文（英語）: A single spark can cause a great fire.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A single spark can cause a great fire. Make the sentence's action (cause) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 155. collect（集める）　id 307
例文（日本語）: 子どもたちは、川辺で光る石を集める。  
例文（英語）: The children collect shining stones by the river.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The children collect shining stones by the river. Make the sentence's action (collect) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 156. connect（つなぐ）　id 308
例文（日本語）: 長い橋が、二つの浮かぶ島をつないでいる。  
例文（英語）: A long bridge connects the two floating islands.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A long bridge connects the two floating islands. Make the sentence's action (connect) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 157. contain（含む）　id 309　敵役: vampire
例文（日本語）: 封じられた棺は、眠るヴァンパイアを含んでいるかもしれない。  
例文（英語）: The sealed coffin may contain a sleeping vampire.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The sealed coffin may contain a sleeping vampire. Make the sentence's action (contain) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 158. control（操る）　id 310　敵役: werewolf
例文（日本語）: 人狼は、満月の下で自分を操ることができない。  
例文（英語）: A werewolf cannot control himself under a full moon.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A werewolf cannot control himself under a full moon. Make the sentence's action (control) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 159. depend（頼る）　id 311
例文（日本語）: 村じゅうが、水を川に頼っている。  
例文（英語）: The whole village depends on the river for water.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The whole village depends on the river for water. Make the sentence's action (depend) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 160. exist（存在する）　id 312
例文（日本語）: この世界にもうドラゴンはいない、と言う人もいる。  
例文（英語）: Some say dragons no longer exist in this world.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Some say dragons no longer exist in this world. Make the sentence's action (exist) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 161. expect（期待する）　id 313
例文（日本語）: 小さな少女が大会に勝つとは、誰も予想しなかった。  
例文（英語）: Nobody expected a small girl to win the contest.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Nobody expected a small girl to win the contest. Make the sentence's action (expect) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 162. notice（気づく）　id 314　敵役: basilisk
例文（日本語）: 彼女は、枯れた井戸のそばでバジリスクの鱗に気づいた。  
例文（英語）: She noticed a basilisk's scales beside the dry well.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She noticed a basilisk's scales beside the dry well. Make the sentence's action (notice) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. basilisks are long scaled lizards with a crested head and bright yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 163. offer（差し出す）　id 315
例文（日本語）: 商人は、魔法の指輪に銀貨を差し出した。  
例文（英語）: The merchant offered a silver coin for the magic ring.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The merchant offered a silver coin for the magic ring. Make the sentence's action (offer) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 164. prepare（準備する）　id 316　敵役: werewolf
例文（日本語）: 村は、人狼の夜に向けて注意深く準備する。  
例文（英語）: The village prepares carefully for the night of the werewolf.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The village prepares carefully for the night of the werewolf. Make the sentence's action (prepare) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 165. prevent（防ぐ）　id 317　敵役: vampire
例文（日本語）: ニンニクと銀が、ヴァンパイアの侵入を防ぐ。  
例文（英語）: Garlic and silver prevent a vampire from entering a house.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Garlic and silver prevent a vampire from entering a house. Make the sentence's action (prevent) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 166. recognize（見分ける）　id 318
例文（日本語）: 十年たっても、彼は彼女の声を聞き分けられた。  
例文（英語）: Even after ten years, he could recognize her voice.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Even after ten years, he could recognize her voice. Make the sentence's action (recognize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 167. recover（回復する）　id 319　敵役: troll
例文（日本語）: トロルの重い一撃から回復するのに、一週間かかった。  
例文（英語）: It took a week to recover from the troll's heavy blow.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It took a week to recover from the troll's heavy blow. Make the sentence's action (recover) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 168. refuse（断る）　id 320
例文（日本語）: 誇り高い王は、どんな助言にも耳を貸そうとしなかった。  
例文（英語）: The proud king refused to listen to any advice.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The proud king refused to listen to any advice. Make the sentence's action (refuse) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 169. release（解き放つ）　id 321
例文（日本語）: 勇者は、金のかごから鳥を解き放った。  
例文（英語）: The hero released the bird from the golden cage.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The hero released the bird from the golden cage. Make the sentence's action (release) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 170. solve（解く）　id 322
例文（日本語）: 賢い頭脳だけが、この古いなぞを解ける。  
例文（英語）: Only a clever mind can solve this old riddle.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Only a clever mind can solve this old riddle. Make the sentence's action (solve) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 171. ancient（古代の）　id 323
例文（日本語）: 古代の記号が、洞くつの壁で光っている。  
例文（英語）: Ancient symbols glow on the walls of the cave.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Ancient symbols glow on the walls of the cave. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 172. mysterious（神秘的な）　id 324
例文（日本語）: 神秘的な旅人が、真夜中に村へやって来た。  
例文（英語）: A mysterious traveler arrived in the village at midnight.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A mysterious traveler arrived in the village at midnight. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 173. powerful（強力な）　id 325　敵役: vampire
例文（日本語）: ヴァンパイア卿は、この地でもっとも強力な存在だ。  
例文（英語）: The vampire lord is the most powerful creature in this land.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The vampire lord is the most powerful creature in this land. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 174. valuable（貴重な）　id 326　敵役: pirate
例文（日本語）: 海賊たちは、王の宝物庫から貴重な宝石を盗んだ。  
例文（英語）: The pirates stole a valuable jewel from the royal vault.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates stole a valuable jewel from the royal vault. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 175. curious（好奇心の強い）　id 327
例文（日本語）: 好奇心の強い子猫が、光を追いかけた。  
例文（英語）: The curious kitten followed the glowing light.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The curious kitten followed the glowing light. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 176. enormous（巨大な）　id 328　敵役: troll
例文（日本語）: 巨大なトロルが、狭い山道をふさいでいる。  
例文（英語）: An enormous troll blocks the narrow mountain pass.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: An enormous troll blocks the narrow mountain pass. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 177. familiar（見慣れた）　id 329
例文（日本語）: その歌には聞き覚えがあったが、なぜか思い出せなかった。  
例文（英語）: The song was familiar, but she could not remember why.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The song was familiar, but she could not remember why. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 178. generous（寛大な）　id 330
例文（日本語）: 気前のよい王は、飢えた旅人みんなに食べ物を与えた。  
例文（英語）: The generous king gave food to every hungry traveler.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The generous king gave food to every hungry traveler. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 179. honest（正直な）　id 331
例文（日本語）: 正直な商人は、落とされた財布を返した。  
例文（英語）: The honest merchant returned the lost purse.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The honest merchant returned the lost purse. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 180. ordinary（ふつうの）　id 332
例文（日本語）: それはふつうの石に見えたが、夜には光った。  
例文（英語）: It looked like an ordinary stone, but it glowed at night.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It looked like an ordinary stone, but it glowed at night. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 181. rare（まれな）　id 333
例文（日本語）: まれな花が、百年にたった一度だけ咲く。  
例文（英語）: A rare flower blooms only once in a hundred years.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A rare flower blooms only once in a hundred years. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 182. serious（真剣な）　id 334　敵役: vampire
例文（日本語）: 狩人たちは村に、ヴァンパイアについて真剣な警告をした。  
例文（英語）: The hunters gave the village a serious warning about vampires.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The hunters gave the village a serious warning about vampires. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 183. useful（役に立つ）　id 335
例文（日本語）: この古いコンパスは、霧の中でとても役に立つ。  
例文（英語）: This old compass is very useful in the fog.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This old compass is very useful in the fog. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 184. wise（賢明な）　id 336
例文（日本語）: 賢いフクロウは、旅人たちによい助言を与えた。  
例文（英語）: The wise owl gave the travelers good advice.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The wise owl gave the travelers good advice. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 185. actually（実は）　id 337　敵役: monster
例文（日本語）: それは実は、怪物ではなく友好的なドラゴンだった。  
例文（英語）: It was actually a friendly dragon, not a monster.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It was actually a friendly dragon, not a monster. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 186. especially（特に）　id 338　敵役: troll
例文（日本語）: その沼は、トロルが目覚めるときに特に危険だ。  
例文（英語）: The swamp is especially dangerous when the trolls wake.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The swamp is especially dangerous when the trolls wake. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 187. recently（最近）　id 339　敵役: werewolf
例文（日本語）: 最近、村の近くに人狼の足跡が現れている。  
例文（英語）: Werewolf tracks have appeared near the village recently.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Werewolf tracks have appeared near the village recently. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes and torn human clothing. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 188. probably（たぶん）　id 340　敵役: vampire
例文（日本語）: ヴァンパイアはたぶん、夜明け前に戻ってくる。  
例文（英語）: The vampire will probably return before dawn.
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The vampire will probably return before dawn. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.4 EPIC（この一覧に99語）

### 189. implement（実行する）　id 61　敵役: lich
例文（日本語）: 議会は明日、リッチに対する計画を実行する。  
例文（英語）: The council will implement the plan against the lich tomorrow.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council will implement the plan against the lich tomorrow. Make the sentence's action (implement) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 190. facilitate（円滑にする）　id 62
例文（日本語）: 魔法の橋が、二つの王国の交易を円滑にする。  
例文（英語）: A magic bridge facilitates trade between the two kingdoms.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A magic bridge facilitates trade between the two kingdoms. Make the sentence's action (facilitate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 191. potential（可能性）　id 64
例文（日本語）: その少年には魔法使いとして大きな可能性がある。  
例文（英語）: The boy has great potential as a mage.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The boy has great potential as a mage. The potential itself is the main subject of the picture: large and clearly visible. If the potential is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 192. perspective（視点）　id 65
例文（日本語）: 塔の上から、彼女は町を新しい視点で見た。  
例文（英語）: From the tower, she saw the city from a new perspective.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: From the tower, she saw the city from a new perspective. The perspective itself is the main subject of the picture: large and clearly visible. If the perspective is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 193. alternative（代わりの）　id 66　敵役: necromancer
例文（日本語）: 死霊術師の軍が門に迫り、彼らは代わりの道を取った。  
例文（英語）: With the necromancer's army at the gate, they took an alternative route.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: With the necromancer's army at the gate, they took an alternative route. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 194. consequence（結果）　id 67　敵役: necromancer
例文（日本語）: 死者を起こしたことが、死霊術師に恐ろしい結果をもたらした。  
例文（英語）: Raising the dead brought a terrible consequence upon the necromancer.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Raising the dead brought a terrible consequence upon the necromancer. The consequence itself is the main subject of the picture: large and clearly visible. If the consequence is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 195. accurate（正確な）　id 68
例文（日本語）: その古い地図は、小川ひとつまで正確だ。  
例文（英語）: The old map is accurate down to the last river.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old map is accurate down to the last river. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 196. efficient（効率的な）　id 69
例文（日本語）: ドワーフたちは、水晶を掘るための効率的な機械を作った。  
例文（英語）: The dwarves built an efficient machine to mine the crystals.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The dwarves built an efficient machine to mine the crystals. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 197. strategy（戦略）　id 70　敵役: demon
例文（日本語）: 将軍は、悪魔の群れに対する大胆な戦略を立てた。  
例文（英語）: The general planned a bold strategy against the demon horde.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The general planned a bold strategy against the demon horde. The strategy itself is the main subject of the picture: large and clearly visible. If the strategy is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 198. evaluate（評価する）　id 71
例文（日本語）: 審査員は、それぞれの魔法使いの腕を慎重に評価する。  
例文（英語）: The judges evaluate each mage's skill carefully.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The judges evaluate each mage's skill carefully. Make the sentence's action (evaluate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 199. analyze（分析する）　id 72　敵役: lich
例文（日本語）: 魔道士たちは、リッチの古い呪いを何週間も分析した。  
例文（英語）: The mages analyzed the lich's ancient curse for many weeks.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The mages analyzed the lich's ancient curse for many weeks. Make the sentence's action (analyze) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 200. establish（設立する）　id 73
例文（日本語）: 勇者たちは北の町にギルドを設立した。  
例文（英語）: The heroes established a guild in the northern city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The heroes established a guild in the northern city. Make the sentence's action (establish) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 201. maintain（維持する）　id 74　敵役: fiend
例文（日本語）: 古い結界が、外の魔人たちに対する壁を維持している。  
例文（英語）: The old wards maintain a barrier against the fiends outside.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old wards maintain a barrier against the fiends outside. Make the sentence's action (maintain) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. fiends are large demons with black-red hide, many horns and burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 202. enhance（高める）　id 75
例文（日本語）: この宝石は呪文の力を高めることができる。  
例文（英語）: This gem can enhance the power of a spell.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: This gem can enhance the power of a spell. Make the sentence's action (enhance) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 203. criteria（基準）　id 76
例文（日本語）: 騎士は王の騎士団の基準をすべて満たした。  
例文（英語）: The knight met all the criteria for the royal order.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The knight met all the criteria for the royal order. The criteria itself is the main subject of the picture: large and clearly visible. If the criteria is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 204. priority（優先事項）　id 77　敵役: lich
例文（日本語）: リッチの命の器を壊すことが、我々の最優先事項だ。  
例文（英語）: Destroying the lich's phylactery is our first priority.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Destroying the lich's phylactery is our first priority. The priority itself is the main subject of the picture: large and clearly visible. If the priority is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 205. comprehensive（包括的な）　id 78　敵役: demon
例文（日本語）: その騎士団は、知られたすべての悪魔の包括的な記録を保つ。  
例文（英語）: The order keeps a comprehensive record of every known demon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The order keeps a comprehensive record of every known demon. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 206. demonstrate（実演する）　id 79
例文（日本語）: 師匠は生徒たちに呪文を実演してみせる。  
例文（英語）: The master will demonstrate the spell to the students.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The master will demonstrate the spell to the students. Make the sentence's action (demonstrate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 207. assumption（前提）　id 80　敵役: lich
例文（日本語）: 彼らの攻撃は、リッチが単独だという誤った前提のために失敗した。  
例文（英語）: Their attack failed on the false assumption that the lich was alone.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Their attack failed on the false assumption that the lich was alone. The assumption itself is the main subject of the picture: large and clearly visible. If the assumption is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 208. concept（概念）　id 341
例文（日本語）: 学者は、時間魔法という概念を評議会に説明した。  
例文（英語）: The scholar explained the concept of time magic to the council.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scholar explained the concept of time magic to the council. The concept itself is the main subject of the picture: large and clearly visible. If the concept is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 209. context（文脈）　id 342
例文（日本語）: 文脈がなければ、その古い巻物はまったく意味をなさなかった。  
例文（英語）: Without the context, the ancient scroll made no sense at all.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Without the context, the ancient scroll made no sense at all. The context itself is the main subject of the picture: large and clearly visible. If the context is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 210. contract（契約）　id 343　敵役: demon, warlock
例文（日本語）: 魔術師は血の月の下で、悪魔と契約を結んだ。  
例文（英語）: The warlock signed a contract with a demon under the blood moon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The warlock signed a contract with a demon under the blood moon. The contract itself is the main subject of the picture: large and clearly visible. If the contract is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. warlocks are robed spellcasters in black and violet, with glowing sigils around their hands. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 211. decade（十年間）　id 344
例文（日本語）: その古い城壁は、果てしない戦いの十年間、崩れずに立ち続けた。  
例文（英語）: The old wall stood unbroken for a decade of endless wars.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old wall stood unbroken for a decade of endless wars. The decade itself is the main subject of the picture: large and clearly visible. If the decade is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 212. dimension（次元）　id 345　敵役: demon
例文（日本語）: 燃える祭壇の上で、別の次元から悪魔たちが流れ出た。  
例文（英語）: Demons poured from another dimension above the burning altar.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Demons poured from another dimension above the burning altar. The dimension itself is the main subject of the picture: large and clearly visible. If the dimension is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 213. economy（経済）　id 346
例文（日本語）: 女王は、荒れた王国の経済を立て直そうと懸命に働いた。  
例文（英語）: The queen worked hard to rebuild the economy of the ruined kingdom.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The queen worked hard to rebuild the economy of the ruined kingdom. The economy itself is the main subject of the picture: large and clearly visible. If the economy is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 214. element（要素）　id 347
例文（日本語）: 学院の魔法使いは皆、火や氷といった一つの要素を極める。  
例文（英語）: Each mage in the academy masters one element, such as fire or ice.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Each mage in the academy masters one element, such as fire or ice. The element itself is the main subject of the picture: large and clearly visible. If the element is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 215. enterprise（企業）　id 348
例文（日本語）: 商人たちは、東の海をまたぐ大胆な企業を始めた。  
例文（英語）: The merchants started a bold enterprise across the eastern sea.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The merchants started a bold enterprise across the eastern sea. The enterprise itself is the main subject of the picture: large and clearly visible. If the enterprise is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 216. equipment（設備）　id 349
例文（日本語）: ドワーフたちは、深い洞くつに入る前に採掘の設備を確かめた。  
例文（英語）: The dwarves checked their mining equipment before entering the deep cave.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The dwarves checked their mining equipment before entering the deep cave. The equipment itself is the main subject of the picture: large and clearly visible. If the equipment is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 217. expansion（拡大）　id 350
例文（日本語）: 帝国の急速な拡大は、国境の村々を不安にさせた。  
例文（英語）: The rapid expansion of the empire worried the border villages.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The rapid expansion of the empire worried the border villages. The expansion itself is the main subject of the picture: large and clearly visible. If the expansion is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 218. factor（要因）　id 351　敵役: undead
例文（日本語）: 聖なる炎が、不死の軍に対する決定的な要因だった。  
例文（英語）: Holy fire was the deciding factor against the undead army.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Holy fire was the deciding factor against the undead army. The factor itself is the main subject of the picture: large and clearly visible. If the factor is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 219. feature（特徴）　id 352
例文（日本語）: その塔の最も目立つ特徴は、光る水晶の屋根だ。  
例文（英語）: The most striking feature of the tower is its glowing crystal roof.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The most striking feature of the tower is its glowing crystal roof. The feature itself is the main subject of the picture: large and clearly visible. If the feature is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 220. foundation（土台）　id 353　敵役: demon
例文（日本語）: 黒い神殿の土台の下に、眠る悪魔が横たわっている。  
例文（英語）: A sleeping demon lies beneath the foundation of the black temple.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A sleeping demon lies beneath the foundation of the black temple. The foundation itself is the main subject of the picture: large and clearly visible. If the foundation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 221. framework（枠組み）　id 354
例文（日本語）: 魔法使いたちは、新しい学院のために、しっかりした規則の枠組みを作った。  
例文（英語）: The wizards built a strong framework of rules for the new academy.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The wizards built a strong framework of rules for the new academy. The framework itself is the main subject of the picture: large and clearly visible. If the framework is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 222. function（機能）　id 355
例文（日本語）: その水晶の機能はひとつだけで、月の光をたくわえることだ。  
例文（英語）: The crystal has a single function: it stores the light of the moon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The crystal has a single function: it stores the light of the moon. The function itself is the main subject of the picture: large and clearly visible. If the function is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 223. hypothesis（仮説）　id 356
例文（日本語）: 学者は、危険な実験で自分の仮説を確かめた。  
例文（英語）: The scholar tested her hypothesis with a dangerous experiment.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scholar tested her hypothesis with a dangerous experiment. The hypothesis itself is the main subject of the picture: large and clearly visible. If the hypothesis is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 224. identity（正体）　id 357　敵役: vampire
例文（日本語）: 仮面の将軍は、ヴァンパイア卿としての正体を隠していた。  
例文（英語）: The masked general hid his identity as a vampire lord.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The masked general hid his identity as a vampire lord. The identity itself is the main subject of the picture: large and clearly visible. If the identity is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 225. impact（衝撃）　id 358
例文（日本語）: 流れ星は、砂漠の地面に大きな衝撃を与えた。  
例文（英語）: The falling star made a huge impact on the desert floor.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The falling star made a huge impact on the desert floor. The impact itself is the main subject of the picture: large and clearly visible. If the impact is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 226. industry（産業）　id 359
例文（日本語）: 新しい炉が、鉱業に黄金時代をもたらした。  
例文（英語）: The new furnaces brought a golden age to the mining industry.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The new furnaces brought a golden age to the mining industry. The industry itself is the main subject of the picture: large and clearly visible. If the industry is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 227. initiative（主導権）　id 360
例文（日本語）: 若い隊長は主導権をにぎり、救出作戦を率いた。  
例文（英語）: The young captain took the initiative and led the rescue mission.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The young captain took the initiative and led the rescue mission. The initiative itself is the main subject of the picture: large and clearly visible. If the initiative is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 228. institution（機関）　id 361
例文（日本語）: 王立の機関は、あらゆる土地から若い魔法使いを育てている。  
例文（英語）: The royal institution trains young mages from every land.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The royal institution trains young mages from every land. The institution itself is the main subject of the picture: large and clearly visible. If the institution is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 229. investment（投資）　id 362
例文（日本語）: 王の新しい船への投資は、大きな富をもたらした。  
例文（英語）: The king's investment in new ships brought great riches.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king's investment in new ships brought great riches. The investment itself is the main subject of the picture: large and clearly visible. If the investment is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 230. mechanism（仕組み）　id 363
例文（日本語）: 隠された仕組みが、古代の宝物庫の扉を開いた。  
例文（英語）: A hidden mechanism opened the door of the ancient vault.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A hidden mechanism opened the door of the ancient vault. The mechanism itself is the main subject of the picture: large and clearly visible. If the mechanism is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 231. objective（目標）　id 364　敵役: necromancer
例文（日本語）: 目標は、死霊術師の名前の書を焼くことだ。  
例文（英語）: The objective is to burn the necromancer's book of names.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The objective is to burn the necromancer's book of names. The objective itself is the main subject of the picture: large and clearly visible. If the objective is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 232. outcome（結末）　id 365　敵役: lich
例文（日本語）: リッチとの戦争の結末は、誰にも予測できなかった。  
例文（英語）: Nobody could predict the outcome of the war against the lich.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Nobody could predict the outcome of the war against the lich. The outcome itself is the main subject of the picture: large and clearly visible. If the outcome is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 233. principle（原則）　id 366
例文（日本語）: ギルドは、ひとつの原則に従う。仲間を決して置き去りにしない、というものだ。  
例文（英語）: The guild lives by one principle: never leave a friend behind.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The guild lives by one principle: never leave a friend behind. The principle itself is the main subject of the picture: large and clearly visible. If the principle is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 234. procedure（手順）　id 367　敵役: demon
例文（日本語）: 司祭は、悪魔を追い払うために慎重な手順を踏んだ。  
例文（英語）: The priest followed a careful procedure to banish the demon.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The priest followed a careful procedure to banish the demon. The procedure itself is the main subject of the picture: large and clearly visible. If the procedure is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 235. proposal（提案）　id 368
例文（日本語）: 評議会は、城門を開けるという女王の提案を退けた。  
例文（英語）: The council rejected the queen's proposal to open the gates.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council rejected the queen's proposal to open the gates. The proposal itself is the main subject of the picture: large and clearly visible. If the proposal is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 236. prospect（見通し）　id 369　敵役: demon
例文（日本語）: 悪魔の包囲という見通しが、街全体を空にした。  
例文（英語）: The prospect of a demon siege emptied the whole city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The prospect of a demon siege emptied the whole city. The prospect itself is the main subject of the picture: large and clearly visible. If the prospect is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 237. sector（部門）　id 370
例文（日本語）: 戦争のあと、王国の交易部門は急速に成長した。  
例文（英語）: The trade sector of the kingdom grew rapidly after the war.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The trade sector of the kingdom grew rapidly after the war. The sector itself is the main subject of the picture: large and clearly visible. If the sector is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 238. standard（標準）　id 371
例文（日本語）: その鍛冶師の剣は、品質の新しい標準を打ち立てた。  
例文（英語）: The blacksmith's swords set a new standard for quality.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The blacksmith's swords set a new standard for quality. The standard itself is the main subject of the picture: large and clearly visible. If the standard is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 239. theory（理論）　id 372
例文（日本語）: 教授の理論は、浮かぶ島が空にとどまる理由を説明した。  
例文（英語）: The professor's theory explained how the floating islands stay in the air.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The professor's theory explained how the floating islands stay in the air. The theory itself is the main subject of the picture: large and clearly visible. If the theory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 240. adapt（適応する）　id 373
例文（日本語）: エルフたちは、雪山での暮らしにすばやく適応した。  
例文（英語）: The elves adapted quickly to life in the snowy mountains.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The elves adapted quickly to life in the snowy mountains. Make the sentence's action (adapt) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 241. adjust（調整する）　id 374
例文（日本語）: 操舵手は、風をとらえるように帆を調整した。  
例文（英語）: The pilot adjusted the sails to catch the wind.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The pilot adjusted the sails to catch the wind. Make the sentence's action (adjust) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 242. allocate（配分する）　id 375　敵役: demon
例文（日本語）: 女王は、悪魔狩りの者たちにもっと金を配分する。  
例文（英語）: The queen will allocate more gold to the demon hunters.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The queen will allocate more gold to the demon hunters. Make the sentence's action (allocate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 243. anticipate（予想する）　id 376　敵役: dread
例文（日本語）: 将軍は、夜明けの恐怖の騎士の突撃を予想していた。  
例文（英語）: The general anticipated the dread knight's charge at dawn.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The general anticipated the dread knight's charge at dawn. Make the sentence's action (anticipate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dread knights are towering figures in black plate armour with a horned helm and a cold red glow behind the visor. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 244. apply（適用する）　id 377
例文（日本語）: 魔法使いは、どの呪文にも同じ規則を適用しなければならない。  
例文（英語）: Mages must apply the same rule to every spell.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Mages must apply the same rule to every spell. Make the sentence's action (apply) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 245. assess（査定する）　id 378　敵役: fiend
例文（日本語）: 騎士は、再び斬りかかる前に魔人の傷を査定した。  
例文（英語）: The knight assessed the fiend's wounds before striking again.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The knight assessed the fiend's wounds before striking again. Make the sentence's action (assess) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. fiends are large demons with black-red hide, many horns and burning eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 246. assign（任命する）　id 379　敵役: demon
例文（日本語）: 隊長は、悪魔の封印を守るため二人の騎士を任命した。  
例文（英語）: The captain assigned two knights to guard the demon seal.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The captain assigned two knights to guard the demon seal. Make the sentence's action (assign) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 247. attain（到達する）　id 380
例文（日本語）: 何年もの修行のあと、彼女は大魔導師の位に到達した。  
例文（英語）: After years of training, she attained the rank of archmage.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: After years of training, she attained the rank of archmage. Make the sentence's action (attain) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 248. conclude（結論づける）　id 381　敵役: lich
例文（日本語）: 議会は、凍った街をリッチが支配していると結論づけた。  
例文（英語）: The council concluded that a lich ruled the frozen city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council concluded that a lich ruled the frozen city. Make the sentence's action (conclude) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 249. conduct（実施する）　id 382　敵役: cultist
例文（日本語）: カルティストたちは毎晩、塔で闇の儀式を実施する。  
例文（英語）: The cultists conduct dark rites in the tower every night.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The cultists conduct dark rites in the tower every night. Make the sentence's action (conduct) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. cultists are faceless figures in identical dark red hooded robes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 250. confirm（確認する）　id 383　敵役: necromancer
例文（日本語）: 偵察兵は、死霊術師の軍が川を渡ったことを確認した。  
例文（英語）: The scout confirmed that the necromancer's army had crossed the river.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scout confirmed that the necromancer's army had crossed the river. Make the sentence's action (confirm) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 251. consult（相談する）　id 384　敵役: lich
例文（日本語）: 王はリッチへ進軍する前に、神託に相談した。  
例文（英語）: The king consulted the oracle before marching on the lich.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king consulted the oracle before marching on the lich. Make the sentence's action (consult) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 252. convince（納得させる）　id 385
例文（日本語）: 彼女は、評議会に城門を開けるよう納得させられなかった。  
例文（英語）: She could not convince the council to open the gates.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: She could not convince the council to open the gates. Make the sentence's action (convince) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 253. deliver（届ける）　id 386
例文（日本語）: 使者は、日の出前に王の伝言を届けた。  
例文（英語）: The courier delivered the royal message before sunrise.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The courier delivered the royal message before sunrise. Make the sentence's action (deliver) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 254. distribute（配る）　id 387
例文（日本語）: 修道士たちは、毎朝、貧しい人々にパンを配る。  
例文（英語）: The monks distribute bread to the poor every morning.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The monks distribute bread to the poor every morning. Make the sentence's action (distribute) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 255. eliminate（取り除く）　id 388　敵役: cultist
例文（日本語）: 騎士団は、首都に隠れるカルティストをすべて取り除く。  
例文（英語）: The order will eliminate every cultist hiding in the capital.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The order will eliminate every cultist hiding in the capital. Make the sentence's action (eliminate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. cultists are faceless figures in identical dark red hooded robes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 256. emerge（姿を現す）　id 389　敵役: serpent
例文（日本語）: 巨大な蛇が、暗い湖からゆっくりと姿を現した。  
例文（英語）: A giant serpent slowly emerged from the dark lake.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A giant serpent slowly emerged from the dark lake. Make the sentence's action (emerge) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. giant serpents are thick-coiled snakes with dark green scales and cold yellow eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 257. emphasize（強調する）　id 390
例文（日本語）: 先生は、戦いの前にチームワークの大切さを強調した。  
例文（英語）: The teacher emphasized the importance of teamwork before the battle.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The teacher emphasized the importance of teamwork before the battle. Make the sentence's action (emphasize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 258. encounter（出会う）　id 391　敵役: lich
例文（日本語）: 旅人たちは、凍った峠でさまようリッチに出会った。  
例文（英語）: The travelers encountered a wandering lich on the frozen pass.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The travelers encountered a wandering lich on the frozen pass. Make the sentence's action (encounter) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 259. ensure（確実にする）　id 392　敵役: demon
例文（日本語）: 銀の結界が、悪魔が本丸に入らないことを確実にする。  
例文（英語）: Silver wards ensure that no demon enters the inner keep.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Silver wards ensure that no demon enters the inner keep. Make the sentence's action (ensure) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 260. estimate（見積もる）　id 393
例文（日本語）: 技師たちは、その橋を作るのに一年かかると見積もっている。  
例文（英語）: The engineers estimate that the bridge will take a year to build.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The engineers estimate that the bridge will take a year to build. Make the sentence's action (estimate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 261. exceed（上回る）　id 394　敵役: demon
例文（日本語）: 悪魔の力は、騎士たちが想像したすべてを上回った。  
例文（英語）: The demon's strength exceeded everything the knights had imagined.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The demon's strength exceeded everything the knights had imagined. Make the sentence's action (exceed) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 262. extend（延ばす）　id 395
例文（日本語）: 王は、道を北の海岸まで延ばすことに決めた。  
例文（英語）: The king decided to extend the road to the northern coast.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king decided to extend the road to the northern coast. Make the sentence's action (extend) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 263. generate（発生させる）　id 396
例文（日本語）: その水晶は、街じゅうを照らすほどのエネルギーを発生させられる。  
例文（英語）: The crystal can generate enough energy to light the whole city.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The crystal can generate enough energy to light the whole city. Make the sentence's action (generate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 264. illustrate（例で示す）　id 397
例文（日本語）: 先生は、勇者の長い旅をわかりやすく示すために地図を描いた。  
例文（英語）: The teacher drew a map to illustrate the hero's long journey.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The teacher drew a map to illustrate the hero's long journey. Make the sentence's action (illustrate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 265. indicate（示す）　id 398　敵役: lich
例文（日本語）: 黒い文字が、リッチが葬られた場所を示している。  
例文（英語）: The black runes indicate the place where the lich was buried.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The black runes indicate the place where the lich was buried. Make the sentence's action (indicate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 266. interpret（解釈する）　id 399
例文（日本語）: 神託者だけが、その不思議な夢の意味を解釈できた。  
例文（英語）: Only the oracle could interpret the meaning of the strange dream.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Only the oracle could interpret the meaning of the strange dream. Make the sentence's action (interpret) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 267. investigate（調査する）　id 400　敵役: necromancer
例文（日本語）: 狩人たちは、死霊術師の静かな塔を調査に向かった。  
例文（英語）: The hunters went to investigate the necromancer's silent tower.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The hunters went to investigate the necromancer's silent tower. Make the sentence's action (investigate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 268. justify（正当化する）　id 401
例文（日本語）: どうして、そんな危険な計画を正当化できるのですか？  
例文（英語）: How can you justify such a dangerous plan?
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: How can you justify such a dangerous plan? Make the sentence's action (justify) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 269. modify（修正する）　id 402
例文（日本語）: 鍛冶師は、この剣を小さな手に合わせて修正できるだろうか？  
例文（英語）: Can the smith modify this sword to fit a smaller hand?
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Can the smith modify this sword to fit a smaller hand? Make the sentence's action (modify) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 270. adequate（十分な）　id 403
例文（日本語）: そのテントは、山の風をしのぐのに十分な避難所だった。  
例文（英語）: The tent was adequate shelter against the mountain wind.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The tent was adequate shelter against the mountain wind. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 271. appropriate（適切な）　id 404
例文（日本語）: 神殿の中で剣を抜くのは、適切ではない。  
例文（英語）: It is not appropriate to draw a sword inside the temple.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: It is not appropriate to draw a sword inside the temple. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 272. complex（複雑な）　id 405　敵役: lich
例文（日本語）: リッチの呪いはあまりに複雑で、読める魔道士はわずかだった。  
例文（英語）: The lich's curse was so complex that few mages could read it.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The lich's curse was so complex that few mages could read it. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 273. consistent（一貫した）　id 406
例文（日本語）: その弓兵は一貫していて、毎回まとに当てた。  
例文（英語）: The archer was consistent, hitting the target every single time.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The archer was consistent, hitting the target every single time. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 274. crucial（極めて重要な）　id 407　敵役: demon
例文（日本語）: 悪魔の門が開く前の次の一時間が、極めて重要だ。  
例文（英語）: The next hour is crucial before the demon gate opens.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The next hour is crucial before the demon gate opens. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 275. diverse（多様な）　id 408
例文（日本語）: 市場は、あらゆる土地からの多様な人々でにぎわっていた。  
例文（英語）: The market was crowded with diverse peoples from every land.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The market was crowded with diverse peoples from every land. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 276. essential（不可欠な）　id 409
例文（日本語）: 砂漠を越える人にとって、きれいな水は不可欠だ。  
例文（英語）: Clean water is essential for anyone crossing the desert.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Clean water is essential for anyone crossing the desert. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 277. fundamental（根本的な）　id 410
例文（日本語）: 信頼は、よいギルドの根本的な決まりだ。  
例文（英語）: Trust is the fundamental rule of a good guild.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Trust is the fundamental rule of a good guild. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 278. innovative（革新的な）　id 411
例文（日本語）: 革新的な鍛冶師は、歌う剣を発明した。  
例文（英語）: The innovative smith invented a sword that could sing.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The innovative smith invented a sword that could sing. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 279. relevant（関連のある）　id 412
例文（日本語）: 古書のうち、関連のあるページだけが残された。  
例文（英語）: Only the relevant pages of the ancient book were saved.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Only the relevant pages of the ancient book were saved. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 280. sufficient（足りる）　id 413
例文（日本語）: 三日分の食料が、山の旅には足りる。  
例文（英語）: Three days of food is sufficient for the mountain trip.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Three days of food is sufficient for the mountain trip. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 281. ultimate（究極の）　id 414　敵役: lich
例文（日本語）: 究極の目標は、リッチ王の長い支配を終わらせることだ。  
例文（英語）: The ultimate goal is to end the lich king's long reign.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The ultimate goal is to end the lich king's long reign. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 282. valid（有効な）　id 415
例文（日本語）: その切符は、月が沈むまでしか有効ではない。  
例文（英語）: The ticket is valid only until the moon sets.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The ticket is valid only until the moon sets. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 283. vulnerable（傷つきやすい）　id 416　敵役: lich
例文（日本語）: リッチは、命の器が壊れたときだけ傷つきやすくなる。  
例文（英語）: The lich is vulnerable only when its phylactery breaks.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The lich is vulnerable only when its phylactery breaks. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 284. consequently（その結果）　id 417
例文（日本語）: 橋が崩れ、その結果、軍は引き返さなければならなかった。  
例文（英語）: The bridge collapsed; consequently, the army had to turn back.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The bridge collapsed; consequently, the army had to turn back. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 285. currently（現在）　id 418　敵役: demon
例文（日本語）: 現在、北の山の下には悪魔の王が封じられている。  
例文（英語）: A demon lord is currently sealed beneath the northern mountain.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A demon lord is currently sealed beneath the northern mountain. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 286. gradually（徐々に）　id 419　敵役: demon, shadow
例文（日本語）: 悪魔の影が、徐々に谷全体をおおっていった。  
例文（英語）: The demon's shadow gradually covered the whole valley.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The demon's shadow gradually covered the whole valley. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 287. essentially（本質的に）　id 420
例文（日本語）: 二つの呪文は本質的には同じだが、片方のほうが速い。  
例文（英語）: The two spells are essentially the same, but one is faster.
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The two spells are essentially the same, but one is faster. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.5 LEGENDARY（この一覧に99語）

### 288. leverage（活用する）　id 81　敵役: vampire
例文（日本語）: ヴァンパイア公は同盟を活用し、人間の三都市を奪った。  
例文（英語）: The vampire count leveraged his alliances to seize three human cities.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The vampire count leveraged his alliances to seize three human cities. Make the sentence's action (leverage) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 289. mitigate（和らげる）　id 82　敵役: archdemon
例文（日本語）: 大魔道士は結界を張り、大悪魔の燃える息を和らげた。  
例文（英語）: The archmage raised a barrier to mitigate the archdemon's burning breath.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archmage raised a barrier to mitigate the archdemon's burning breath. Make the sentence's action (mitigate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 290. acquisition（買収）　id 83　敵役: vampire, cursed
例文（日本語）: 呪われた鉱山の買収が、ヴァンパイア公に新たな力を与えた。  
例文（英語）: The acquisition of the cursed mines gave the vampire count new power.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The acquisition of the cursed mines gave the vampire count new power. The acquisition itself is the main subject of the picture: large and clearly visible. If the acquisition is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 291. compliance（順守）　id 85
例文（日本語）: ギルドは、王の安全規則への完全な順守を徹底した。  
例文（英語）: The guild ensured full compliance with the royal safety rules.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild ensured full compliance with the royal safety rules. The compliance itself is the main subject of the picture: large and clearly visible. If the compliance is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 292. revenue（収益）　id 86　敵役: vampire
例文（日本語）: ヴァンパイアの襲撃が始まると、港の収益は急に落ちた。  
例文（英語）: The harbor's revenue fell sharply after the vampire raids began.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The harbor's revenue fell sharply after the vampire raids began. The revenue itself is the main subject of the picture: large and clearly visible. If the revenue is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 293. disruption（混乱）　id 87　敵役: archdemon
例文（日本語）: 大悪魔の復活が、すべての交易路に深刻な混乱を引き起こした。  
例文（英語）: The archdemon's return caused serious disruption across every trade route.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archdemon's return caused serious disruption across every trade route. The disruption itself is the main subject of the picture: large and clearly visible. If the disruption is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 294. sustainable（持続可能な）　id 88
例文（日本語）: エルフたちは、森とともに育つ持続可能な都市を設計した。  
例文（英語）: The elves designed a sustainable city that grows together with the forest.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elves designed a sustainable city that grows together with the forest. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 295. negotiation（交渉）　id 89　敵役: demon
例文（日本語）: 悪魔の王との交渉は、血と炎で終わった。  
例文（英語）: The negotiation with the demon lord ended in blood and fire.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The negotiation with the demon lord ended in blood and fire. The negotiation itself is the main subject of the picture: large and clearly visible. If the negotiation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 296. collaboration（協力）　id 90
例文（日本語）: 魔法使いと鍛冶師の協力が、伝説の剣を生み出した。  
例文（英語）: The collaboration of mages and smiths produced a legendary sword.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The collaboration of mages and smiths produced a legendary sword. The collaboration itself is the main subject of the picture: large and clearly visible. If the collaboration is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 297. proactively（先手を打って）　id 91　敵役: demon
例文（日本語）: 隊長は先手を打って、悪魔の包囲の前に城壁を補強した。  
例文（英語）: The captain proactively reinforced the walls before the demon siege.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain proactively reinforced the walls before the demon siege. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 298. substantial（かなりの）　id 92　敵役: undead
例文（日本語）: 軍のかなりの部分が、不死の軍団に失われた。  
例文（英語）: A substantial part of the army was lost to the undead legion.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A substantial part of the army was lost to the undead legion. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 299. constraint（制約）　id 93
例文（日本語）: 魔法使いたちは、時間と魔力の厳しい制約の中で働いた。  
例文（英語）: The mages worked within strict constraints of time and mana.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages worked within strict constraints of time and mana. The constraint itself is the main subject of the picture: large and clearly visible. If the constraint is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 300. incentive（報奨）　id 94
例文（日本語）: 王は、呪いを解いた者に金の報奨を約束した。  
例文（英語）: The king offered a golden incentive to anyone who could break the curse.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king offered a golden incentive to anyone who could break the curse. The incentive itself is the main subject of the picture: large and clearly visible. If the incentive is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 301. scalable（拡張可能な）　id 95
例文（日本語）: ギルドは、街とともに拡大できる拡張可能な仕組みを作った。  
例文（英語）: The guild built a scalable system that could grow with the city.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built a scalable system that could grow with the city. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 302. benchmark（指標）　id 96
例文（日本語）: 老いた王者の記録は、すべての若い騎士の目標となる指標になった。  
例文（英語）: The old champion's record became the benchmark for every young knight.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old champion's record became the benchmark for every young knight. The benchmark itself is the main subject of the picture: large and clearly visible. If the benchmark is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 303. liability（負債）　id 97
例文（日本語）: 未払いの借金は、商人にとって重い負債となった。  
例文（英語）: An unpaid debt became a heavy liability for the merchant.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: An unpaid debt became a heavy liability for the merchant. The liability itself is the main subject of the picture: large and clearly visible. If the liability is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 304. contingency（不測の事態）　id 98　敵役: lich
例文（日本語）: 将軍は、リッチが再び起き上がる不測の事態への計画を用意した。  
例文（英語）: The general prepared a contingency plan in case the lich rose again.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general prepared a contingency plan in case the lich rose again. The contingency itself is the main subject of the picture: large and clearly visible. If the contingency is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 305. deliverable（成果物）　id 99
例文（日本語）: 弟子たちはそれぞれ、期限前に成果物を提出した。  
例文（英語）: Each apprentice submitted the final deliverable before the deadline.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each apprentice submitted the final deliverable before the deadline. The deliverable itself is the main subject of the picture: large and clearly visible. If the deliverable is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 306. streamline（効率化する）　id 100
例文（日本語）: ギルド長は時間を節約するため、手順を効率化した。  
例文（英語）: The guildmaster streamlined the process to save time.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guildmaster streamlined the process to save time. Make the sentence's action (streamline) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 307. agenda（議題）　id 421
例文（日本語）: 長老は、会議の議題の最初に、ドラゴンの脅威を置いた。  
例文（英語）: The elder placed the dragon threat first on the agenda of the summit.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elder placed the dragon threat first on the agenda of the summit. The agenda itself is the main subject of the picture: large and clearly visible. If the agenda is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 308. alliance（同盟）　id 422　敵役: archdemon
例文（日本語）: 自由都市は、大悪魔の尽きない軍団に対する同盟を結んだ。  
例文（英語）: The free cities formed an alliance against the archdemon's endless legions.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The free cities formed an alliance against the archdemon's endless legions. The alliance itself is the main subject of the picture: large and clearly visible. If the alliance is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 309. asset（資産）　id 423
例文（日本語）: その古い図書館は、王国でもっとも価値のある資産となった。  
例文（英語）: The ancient library became the most valuable asset of the kingdom.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ancient library became the most valuable asset of the kingdom. The asset itself is the main subject of the picture: large and clearly visible. If the asset is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 310. audit（監査）　id 424
例文（日本語）: 王の検査官たちは、宝物庫の帳簿に厳しい監査を行った。  
例文（英語）: Royal inspectors conducted a strict audit of the treasury accounts.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Royal inspectors conducted a strict audit of the treasury accounts. The audit itself is the main subject of the picture: large and clearly visible. If the audit is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 311. brand（ブランド）　id 425
例文（日本語）: その有名なギルドは、旅人なら誰もが信頼するブランドを築き上げた。  
例文（英語）: The famous guild built a brand that every traveler could trust.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous guild built a brand that every traveler could trust. The brand itself is the main subject of the picture: large and clearly visible. If the brand is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 312. budget（予算）　id 426　敵役: archdemon
例文（日本語）: 女王は、大悪魔との戦争に大きな予算を承認した。  
例文（英語）: The queen approved a large budget for the war against the archdemon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen approved a large budget for the war against the archdemon. The budget itself is the main subject of the picture: large and clearly visible. If the budget is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 313. capital（資本）　id 427
例文（日本語）: 商人たちは、空の船団を作れるだけの資本を集めた。  
例文（英語）: The merchants raised enough capital to build a fleet of sky ships.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchants raised enough capital to build a fleet of sky ships. The capital itself is the main subject of the picture: large and clearly visible. If the capital is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 314. client（顧客）　id 428
例文（日本語）: 魔法使いは、顧客に決して失敗しない呪文を約束した。  
例文（英語）: The wizard promised his client a spell that would never fail.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard promised his client a spell that would never fail. The client itself is the main subject of the picture: large and clearly visible. If the client is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 315. competitor（競合他社）　id 429
例文（日本語）: ライバルのギルドが、水晶の取引で手強い競合他社になった。  
例文（英語）: A rival guild became a serious competitor in the crystal trade.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A rival guild became a serious competitor in the crystal trade. The competitor itself is the main subject of the picture: large and clearly visible. If the competitor is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 316. consumer（消費者）　id 430
例文（日本語）: 街の消費者は皆、決して燃え尽きないランプをほしがった。  
例文（英語）: Every consumer in the city wanted a lamp that never burned out.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every consumer in the city wanted a lamp that never burned out. The consumer itself is the main subject of the picture: large and clearly visible. If the consumer is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 317. corporation（大企業）　id 431
例文（日本語）: その鉱山会社は、海岸から砂漠までのすべての山を支配していた。  
例文（英語）: The mining corporation controlled every mountain from the coast to the desert.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mining corporation controlled every mountain from the coast to the desert. The corporation itself is the main subject of the picture: large and clearly visible. If the corporation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 318. deadline（締め切り）　id 432
例文（日本語）: 鍛冶師は、王の締め切りに間に合わせるため、夜通し働いた。  
例文（英語）: The blacksmith worked all night to meet the royal deadline.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The blacksmith worked all night to meet the royal deadline. The deadline itself is the main subject of the picture: large and clearly visible. If the deadline is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 319. demand（需要）　id 433　敵役: vampire
例文（日本語）: ヴァンパイア公が現れてから、銀の武器の需要が急に伸びた。  
例文（英語）: Demand for silver weapons rose sharply after the vampire count appeared.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Demand for silver weapons rose sharply after the vampire count appeared. The demand itself is the main subject of the picture: large and clearly visible. If the demand is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 320. dividend（配当）　id 434
例文（日本語）: 株主たちは、年の終わりに金貨の配当を受け取った。  
例文（英語）: Each shareholder received a golden dividend at the end of the year.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each shareholder received a golden dividend at the end of the year. The dividend itself is the main subject of the picture: large and clearly visible. If the dividend is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 321. entrepreneur（起業家）　id 435
例文（日本語）: 若い起業家は、空の真ん中に酒場を開いた。  
例文（英語）: The young entrepreneur opened a tavern in the middle of the sky.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The young entrepreneur opened a tavern in the middle of the sky. The entrepreneur itself is the main subject of the picture: large and clearly visible. If the entrepreneur is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 322. headquarters（本部）　id 436
例文（日本語）: ギルドは、巨大な空洞の木の中に本部を築いた。  
例文（英語）: The guild built its headquarters inside a giant hollow tree.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built its headquarters inside a giant hollow tree. The headquarters itself is the main subject of the picture: large and clearly visible. If the headquarters is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 323. inflation（インフレ）　id 437
例文（日本語）: インフレのせいで、パン一つが金貨十枚もした。  
例文（英語）: Inflation made a loaf of bread cost ten gold coins.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Inflation made a loaf of bread cost ten gold coins. The inflation itself is the main subject of the picture: large and clearly visible. If the inflation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 324. inventory（在庫）　id 438
例文（日本語）: ドワーフは、隊商が出発する前に在庫のすべての品を数えた。  
例文（英語）: The dwarf counted every item in the inventory before the caravan left.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The dwarf counted every item in the inventory before the caravan left. The inventory itself is the main subject of the picture: large and clearly visible. If the inventory is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 325. manufacturer（製造業者）　id 439
例文（日本語）: 魔法の鎧を作る最高の製造業者は、山の都に住んでいた。  
例文（英語）: The finest manufacturer of enchanted armor lived in the mountain city.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The finest manufacturer of enchanted armor lived in the mountain city. The manufacturer itself is the main subject of the picture: large and clearly visible. If the manufacturer is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 326. merger（合併）　id 440
例文（日本語）: 二つのギルドの合併は、この地で最強の勢力を生んだ。  
例文（英語）: The merger of the two guilds created the strongest force in the land.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merger of the two guilds created the strongest force in the land. The merger itself is the main subject of the picture: large and clearly visible. If the merger is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 327. milestone（節目）　id 441　敵役: vampire
例文（日本語）: ヴァンパイア公を討ったことは、長い戦争の節目だった。  
例文（英語）: Slaying the vampire count was a milestone in the long war.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Slaying the vampire count was a milestone in the long war. The milestone itself is the main subject of the picture: large and clearly visible. If the milestone is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 328. partnership（提携）　id 442
例文（日本語）: 魔法使いと技術者の提携は、王国全体を変えた。  
例文（英語）: The partnership between mages and engineers changed the whole kingdom.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The partnership between mages and engineers changed the whole kingdom. The partnership itself is the main subject of the picture: large and clearly visible. If the partnership is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 329. portfolio（ポートフォリオ）　id 443
例文（日本語）: 銀行家のポートフォリオには、金鉱と船、それに小さなドラゴンまで入っていた。  
例文（英語）: The banker's portfolio held gold mines, ships, and even a small dragon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The banker's portfolio held gold mines, ships, and even a small dragon. The portfolio itself is the main subject of the picture: large and clearly visible. If the portfolio is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 330. productivity（生産性）　id 444
例文（日本語）: 新しい魔法の織機は、織り手たちの生産性を倍にした。  
例文（英語）: The new enchanted looms doubled the productivity of the weavers.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The new enchanted looms doubled the productivity of the weavers. The productivity itself is the main subject of the picture: large and clearly visible. If the productivity is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 331. profit（利益）　id 445　敵役: pirate
例文（日本語）: 海賊たちは、利益を全員で平等に分けた。  
例文（英語）: The pirates split the profit equally among the whole crew.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The pirates split the profit equally among the whole crew. The profit itself is the main subject of the picture: large and clearly visible. If the profit is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. pirates are weathered sailors in a long coat, a tricorn hat and a wide sash. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 332. recession（景気後退）　id 446　敵役: demon
例文（日本語）: 悪魔戦争後の景気後退の間に、港町の半分が店を閉じた。  
例文（英語）: During the recession after the demon war, half the port city closed.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: During the recession after the demon war, half the port city closed. The recession itself is the main subject of the picture: large and clearly visible. If the recession is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 333. reputation（評判）　id 447
例文（日本語）: 正直な癒し手という彼女の評判は、あらゆる王国に広まった。  
例文（英語）: Her reputation as an honest healer spread across every kingdom.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Her reputation as an honest healer spread across every kingdom. The reputation itself is the main subject of the picture: large and clearly visible. If the reputation is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 334. subsidiary（子会社）　id 448
例文（日本語）: その大ギルドは、遠い東の港に子会社を開いた。  
例文（英語）: The great guild opened a subsidiary in the far eastern harbor.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The great guild opened a subsidiary in the far eastern harbor. The subsidiary itself is the main subject of the picture: large and clearly visible. If the subsidiary is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 335. supplier（供給業者）　id 449　敵役: undead
例文（日本語）: 王の主要な供給業者が、不死の軍が来る前に銀の矢一万本を届けた。  
例文（英語）: The king's chief supplier delivered ten thousand silver arrows before the undead came.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king's chief supplier delivered ten thousand silver arrows before the undead came. The supplier itself is the main subject of the picture: large and clearly visible. If the supplier is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 336. tariff（関税）　id 450
例文（日本語）: 帝国は、南からの品すべてに重い関税をかけた。  
例文（英語）: The empire raised a heavy tariff on all goods from the south.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The empire raised a heavy tariff on all goods from the south. The tariff itself is the main subject of the picture: large and clearly visible. If the tariff is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 337. transaction（取引）　id 451
例文（日本語）: 市場のすべての取引は、魔法の帳簿に記録された。  
例文（英語）: Every transaction in the market was recorded in a magic ledger.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every transaction in the market was recorded in a magic ledger. The transaction itself is the main subject of the picture: large and clearly visible. If the transaction is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 338. warehouse（倉庫）　id 452　敵役: cultist, archdemon
例文（日本語）: カルティストたちは、封じた大悪魔の遺物を古い倉庫に隠した。  
例文（英語）: The cultists hid a sealed archdemon relic inside the old warehouse.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The cultists hid a sealed archdemon relic inside the old warehouse. The warehouse itself is the main subject of the picture: large and clearly visible. If the warehouse is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. cultists are faceless figures in identical dark red hooded robes. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 339. workforce（労働力）　id 453　敵役: titan
例文（日本語）: 街は、巨神が壊した城壁を築き直すため、より多くの労働力を必要とした。  
例文（英語）: The city needed a larger workforce to rebuild the walls the titan broke.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The city needed a larger workforce to rebuild the walls the titan broke. The workforce itself is the main subject of the picture: large and clearly visible. If the workforce is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. Any creature has clear, expressive eyes and a readable face. titans are colossal armoured giants of weathered stone and bronze. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 340. monopoly（独占）　id 454
例文（日本語）: 魔法使いのギルドは、空飛ぶじゅうたんすべてを独占していた。  
例文（英語）: The wizard's guild held a monopoly on all flying carpets.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard's guild held a monopoly on all flying carpets. The monopoly itself is the main subject of the picture: large and clearly visible. If the monopoly is not something that can be seen, show it through the people and things in the sentence, and make them large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 341. accelerate（加速させる）　id 455
例文（日本語）: 魔法使いたちは、作物の成長を加速させる呪文を使った。  
例文（英語）: The mages used a spell to accelerate the growth of the crops.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages used a spell to accelerate the growth of the crops. Make the sentence's action (accelerate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 342. accommodate（収容する）　id 456
例文（日本語）: その大広間は、一度に一万人の客を収容できた。  
例文（英語）: The grand hall could accommodate ten thousand guests at once.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The grand hall could accommodate ten thousand guests at once. Make the sentence's action (accommodate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 343. acquire（手に入れる）　id 457　敵役: lich
例文（日本語）: リッチは、騎士団が焼く前にその希少な書を手に入れようとした。  
例文（英語）: The lich tried to acquire the rare book before the order burned it.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The lich tried to acquire the rare book before the order burned it. Make the sentence's action (acquire) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 344. align（足並みをそろえる）　id 458　敵役: archdemon
例文（日本語）: 二つの王国は、大悪魔に対して軍の足並みをそろえることに合意した。  
例文（英語）: The two kingdoms agreed to align their armies against the archdemon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two kingdoms agreed to align their armies against the archdemon. Make the sentence's action (align) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 345. amend（改正する）　id 459
例文（日本語）: 評議会は、港の古い法を改正することを票決した。  
例文（英語）: The council voted to amend the ancient law of the harbor.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The council voted to amend the ancient law of the harbor. Make the sentence's action (amend) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 346. approve（承認する）　id 460
例文（日本語）: 評議会が賛成した場合にのみ、王はその計画を承認する。  
例文（英語）: The king will approve the plan only if the council agrees.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king will approve the plan only if the council agrees. Make the sentence's action (approve) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 347. authorize（認可する）　id 461　敵役: demon
例文（日本語）: 封じられた悪魔の地下室を開けることを認可できるのは、女王だけだ。  
例文（英語）: Only the queen can authorize the opening of the sealed demon vault.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the queen can authorize the opening of the sealed demon vault. Make the sentence's action (authorize) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 348. commence（開始する）　id 462　敵役: lich
例文（日本語）: リッチの砦への最後の攻撃は、夜明けに開始される。  
例文（英語）: The final assault on the lich's fortress will commence at dawn.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The final assault on the lich's fortress will commence at dawn. Make the sentence's action (commence) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 349. consolidate（統合する）　id 463　敵役: demon
例文（日本語）: 将軍は、悪魔の軍団が到着する前に軍勢を統合しようと動いた。  
例文（英語）: The general moved to consolidate his forces before the demon legion arrived.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general moved to consolidate his forces before the demon legion arrived. Make the sentence's action (consolidate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 350. delegate（委任する）　id 464
例文（日本語）: 賢い女王は、収穫の仕事を、信頼する助言者たちに委任することにした。  
例文（英語）: The wise queen chose to delegate the harvest to her trusted advisors.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wise queen chose to delegate the harvest to her trusted advisors. Make the sentence's action (delegate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 351. diversify（多角化する）　id 465
例文（日本語）: 商人は、香辛料だけでなく絹も売って、事業を多角化することにした。  
例文（英語）: The merchant decided to diversify and sell silk as well as spices.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchant decided to diversify and sell silk as well as spices. Make the sentence's action (diversify) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 352. endorse（支持する）　id 466
例文（日本語）: 有名な勇者は、新しい剣の店を支持することに同意した。  
例文（英語）: The famous hero agreed to endorse the new sword shop.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous hero agreed to endorse the new sword shop. Make the sentence's action (endorse) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 353. execute（遂行する）　id 467　敵役: vampire
例文（日本語）: 狩人たちは真夜中、ヴァンパイア公が眠る時に計画を遂行する。  
例文（英語）: The hunters will execute the plan at midnight, when the vampire count sleeps.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hunters will execute the plan at midnight, when the vampire count sleeps. Make the sentence's action (execute) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. vampires are pale and sharp-featured with red eyes, white hair, long fangs and a high-collared crimson and black cloak. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 354. expedite（早める）　id 468　敵役: undead
例文（日本語）: 王は鍛冶に、不死の軍との戦いのため銀の矢を早めるよう命じた。  
例文（英語）: The king ordered the smiths to expedite the silver arrows for the undead war.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king ordered the smiths to expedite the silver arrows for the undead war. Make the sentence's action (expedite) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the undead are grey and hollow-eyed, in rotted clothing and rusted mail. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 355. finalize（最終決定する）　id 469
例文（日本語）: 二人の支配者は、条約を最終決定するために塔で会った。  
例文（英語）: The two rulers met in the tower to finalize the treaty.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two rulers met in the tower to finalize the treaty. Make the sentence's action (finalize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 356. forecast（予測する）　id 470　敵役: archdemon
例文（日本語）: 神託は、大悪魔の攻撃を三日前に予測できる。  
例文（英語）: The oracle can forecast the archdemon's attack three days in advance.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The oracle can forecast the archdemon's attack three days in advance. Make the sentence's action (forecast) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 357. initiate（着手する）　id 471
例文（日本語）: 女王は、諸国を再びひとつにする大胆な計画に着手したいと考えた。  
例文（英語）: The queen wished to initiate a bold plan to reunite the realms.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen wished to initiate a bold plan to reunite the realms. Make the sentence's action (initiate) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 358. invest（投資する）　id 472
例文（日本語）: 裕福な公爵は、飛行船の船団に金貨を投資することにした。  
例文（英語）: The wealthy duke chose to invest his gold in a fleet of airships.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wealthy duke chose to invest his gold in a fleet of airships. Make the sentence's action (invest) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 359. oversee（統括する）　id 473　敵役: demon
例文（日本語）: 信頼された騎士が、悪魔の門の封印を統括する。  
例文（英語）: A trusted knight will oversee the sealing of the demon gate.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A trusted knight will oversee the sealing of the demon gate. Make the sentence's action (oversee) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 360. prioritize（優先する）　id 474
例文（日本語）: 船長は、積み荷を救うより子どもたちを救うことを優先しなければならなかった。  
例文（英語）: The captain had to prioritize saving the children over saving the cargo.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain had to prioritize saving the children over saving the cargo. Make the sentence's action (prioritize) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 361. procure（調達する）　id 475　敵役: lich
例文（日本語）: 錬金術師は、リッチに必要な聖水の調達に苦しんだ。  
例文（英語）: The alchemist struggled to procure the holy water needed against the lich.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The alchemist struggled to procure the holy water needed against the lich. Make the sentence's action (procure) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a wheat field at the edge of a wood. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 362. reimburse（払い戻す）　id 476　敵役: demon
例文（日本語）: 王は、悪魔が焼いた畑について農民に払い戻すと約束した。  
例文（英語）: The king promised to reimburse the farmers for the fields the demons burned.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king promised to reimburse the farmers for the fields the demons burned. Make the sentence's action (reimburse) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 363. renew（更新する）　id 477
例文（日本語）: 毎年、村人たちは森の精霊たちとの古い誓いを更新する。  
例文（英語）: Every year, the villagers renew the old pact with the forest spirits.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every year, the villagers renew the old pact with the forest spirits. Make the sentence's action (renew) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a ruined watchtower overgrown with ivy. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 364. restructure（再編する）　id 478　敵役: demon
例文（日本語）: 悪魔戦争の後、議会は軍全体を再編しなければならなかった。  
例文（英語）: After the demon war, the council had to restructure the entire army.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: After the demon war, the council had to restructure the entire army. Make the sentence's action (restructure) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 365. revise（改訂する）　id 479
例文（日本語）: 学者たちは、新しい島が現れるたびに、古い地図を改訂する。  
例文（英語）: The scholars revise the ancient map whenever a new island appears.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The scholars revise the ancient map whenever a new island appears. Make the sentence's action (revise) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a blacksmith's workshop, open to the street. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 366. supervise（監督する）　id 480
例文（日本語）: 老いた親方が、鍛冶場で若い弟子たちを監督する。  
例文（英語）: The old master will supervise the young apprentices in the forge.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old master will supervise the young apprentices in the forge. Make the sentence's action (supervise) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 367. terminate（終了させる）　id 481　敵役: warlock, archdemon
例文（日本語）: 騎士団は、魔術師と大悪魔の契約を終了させることを決めた。  
例文（英語）: The order decided to terminate the warlock's contract with the archdemon.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The order decided to terminate the warlock's contract with the archdemon. Make the sentence's action (terminate) the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. warlocks are robed spellcasters in black and violet, with glowing sigils around their hands. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 368. undermine（弱体化させる）　id 482
例文（日本語）: スパイの流したうわさが、王の権威を弱体化させ始めた。  
例文（英語）: Rumors spread by the spy began to undermine the king's authority.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Rumors spread by the spy began to undermine the king's authority. Make the sentence's action (undermine) the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 369. ambitious（野心的な）　id 483
例文（日本語）: 野心的な若い魔法使いは、学院全体を治めることを夢見ていた。  
例文（英語）: The ambitious young mage dreamed of ruling the entire academy.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ambitious young mage dreamed of ruling the entire academy. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 370. competitive（競争力のある）　id 484
例文（日本語）: 水晶の取引では、もっとも競争力のあるギルドだけが生き残った。  
例文（英語）: Only the most competitive guilds survived in the crystal trade.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the most competitive guilds survived in the crystal trade. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 371. confidential（機密の）　id 485　敵役: archdemon
例文（日本語）: 将軍は、大悪魔の唯一の弱点についての機密の報告を受けた。  
例文（英語）: The general received a confidential report on the archdemon's only weakness.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general received a confidential report on the archdemon's only weakness. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 372. flexible（柔軟な）　id 486　敵役: demon
例文（日本語）: 柔軟な計画のおかげで、悪魔が突破したとき軍は逃れられた。  
例文（英語）: A flexible plan let the army escape when the demons broke through.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A flexible plan let the army escape when the demons broke through. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a stone bridge over a stream. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 373. lucrative（もうかる）　id 487
例文（日本語）: ドラゴンの卵をコレクターに売るのは、もうかるが危険な商売だった。  
例文（英語）: Selling dragon eggs to collectors was a lucrative but dangerous business.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Selling dragon eggs to collectors was a lucrative but dangerous business. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. dragons are long scaled reptiles with a horned crest, a slender neck, folded leathery wings and amber eyes, in tan and bronze scales unless the sentence gives them another colour. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a quiet cloister with arches. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 374. mandatory（義務の）　id 488
例文（日本語）: 戦いの前に誓いを立てるのは、すべての騎士に義務づけられている。  
例文（英語）: It is mandatory for every knight to swear the oath before the battle.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: It is mandatory for every knight to swear the oath before the battle. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cellar or storeroom lined with barrels. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 375. obsolete（時代遅れの）　id 489　敵役: demon
例文（日本語）: 悪魔が首都に達すると、鉄の武器は時代遅れになった。  
例文（英語）: Iron weapons became obsolete once the demons reached the capital.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Iron weapons became obsolete once the demons reached the capital. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a tavern room with long tables. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 376. overdue（期限を過ぎた）　id 490
例文（日本語）: 商人の借金は、すでに三年も期限を過ぎていた。  
例文（英語）: The debt of the merchant was already overdue by three long years.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The debt of the merchant was already overdue by three long years. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 377. profitable（利益の出る）　id 491
例文（日本語）: 北の交易路は、ギルド全体にとって利益の出るものだった。  
例文（英語）: The northern trade route proved profitable for the whole guild.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The northern trade route proved profitable for the whole guild. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a rocky mountain pass. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 378. prominent（著名な）　id 492
例文（日本語）: 学院の著名な学者が、大きな討論の口火を切った。  
例文（英語）: A prominent scholar of the academy opened the great debate.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A prominent scholar of the academy opened the great debate. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 379. viable（実行可能な）　id 493　敵役: archdemon
例文（日本語）: 魔法使いたちは、大悪魔の王冠を壊す実行可能な方法を見つけられなかった。  
例文（英語）: The wizards found no viable way to destroy the archdemon's crown.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizards found no viable way to destroy the archdemon's crown. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a study full of books and scrolls. When several people appear, each has a clearly different face, age and build. Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 380. temporary（一時的な）　id 494　敵役: demon
例文（日本語）: 悪魔の門の封印は、一時的な処置にすぎない。  
例文（英語）: The seal on the demon gate is only a temporary fix.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The seal on the demon gate is only a temporary fix. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. demons are tall and red-skinned with curved black horns, leathery wings, hooves and burning orange eyes. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. When several people appear, each has a clearly different face, age and build. Composition: a three-quarter view, the subject turned partly away from the viewer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 381. transparent（透明な）　id 495
例文（日本語）: 女王は、すべての市民に開かれた透明な裁判を約束した。  
例文（英語）: The queen promised a transparent trial, open to every citizen.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen promised a transparent trial, open to every citizen. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a village street of timber and stone houses. When several people appear, each has a clearly different face, age and build. Composition: the subject close and sharp, the background kept soft and simple behind it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 382. volatile（不安定な）　id 496
例文（日本語）: その不安定な薬の混合物は、いつ爆発してもおかしくなかった。  
例文（英語）: The volatile mixture of potions could explode at any moment.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The volatile mixture of potions could explode at any moment. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a busy market with stalls and awnings. When several people appear, each has a clearly different face, age and build. Composition: a close view at eye level, the subject filling the frame and cropped by the edges. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 383. accordingly（それに応じて）　id 497　敵役: lich
例文（日本語）: 将軍はリッチの計画を見抜き、それに応じて備えた。  
例文（英語）: The general saw the lich's plan and prepared accordingly.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general saw the lich's plan and prepared accordingly. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a cottage room by the hearth. When several people appear, each has a clearly different face, age and build. Composition: a low angle, looking up at the subject against the sky or the ceiling above it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 384. approximately（およそ）　id 498
例文（日本語）: 空の都までの旅は、およそ三日かかる。  
例文（英語）: The journey to the sky city takes approximately three days.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The journey to the sky city takes approximately three days. Make the person or thing that the sentence is about the main subject: large and clearly visible. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a forest path under tall trees. When several people appear, each has a clearly different face, age and build. Composition: seen from slightly above, looking down on the subject and the ground around it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 385. simultaneously（同時に）　id 499　敵役: archdemon
例文（日本語）: 二体の大悪魔が、反対側から同時に塔を襲った。  
例文（英語）: Two archdemons struck the tower simultaneously from opposite sides.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Two archdemons struck the tower simultaneously from opposite sides. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. the archdemon is colossal, deep red and black, with a crown of great curved horns, vast leathery wings and molten cracks across its body. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a harbour with fishing boats and nets. When several people appear, each has a clearly different face, age and build. Composition: the subject set to one side of the frame, with the place opening up beside it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 386. subsequently（その後）　id 500　敵役: lich
例文（日本語）: 勇者はリッチを討ち、その後、黒い門を封じた。  
例文（英語）: The hero slew the lich and subsequently sealed the black gate.
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hero slew the lich and subsequently sealed the black gate. Make the person or thing that the sentence is about the main subject: large and clearly visible. Any creature has clear, expressive eyes and a readable face. liches are crowned skeletal sorcerers in tattered dark robes, with green fire in the eye sockets and a bone staff. The people are dressed so that their role in the sentence is obvious at a glance. Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. Include only what the sentence and the place call for; do not add a castle, a street lantern or a signpost unless the sentence or the place asks for one. If the sentence does not say where this happens, and it suits the scene, set it in a farm yard with barns and fences. When several people appear, each has a clearly different face, age and build. Composition: framed through something in the foreground - an archway, a doorway or branches - with the subject beyond it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

