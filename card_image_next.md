# 次に作るカード画像（Lv.1 COMMON）

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ **COMMON だけ**を図鑑の並び順で出しています。COMMON で画像がまだ無いのは **32語**、ここにはそのうち **32語**。（全レアリティ合わせての残りは 428語）

## 使い方
1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る

順番は図鑑の並び順（id順）です。端から順に潰していけます。


## Lv.1 COMMON（この一覧に32語）

### 1. walk（歩く）　id 148
例文: We walk along the river.　／　私たちは川ぞいを歩く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: We walk along the river. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. jump（跳ぶ）　id 150　敵役: imp
例文: The imp jumps onto the round table.　／　インプが丸いテーブルの上に飛び乗る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The imp jumps onto the round table. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. swim（泳ぐ）　id 151
例文: The children swim in the lake.　／　子どもたちが湖で泳ぐ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The children swim in the lake. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. fly（飛ぶ）　id 152　敵役: bat
例文: Bats fly around the dark tower.　／　コウモリたちが暗い塔のまわりを飛ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Bats fly around the dark tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. sit（座る）　id 153
例文: Please sit by the fire.　／　火のそばに座ってください。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Please sit by the fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. open（開ける）　id 154　敵役: goblin
例文: Do not open the goblin's old box.　／　ゴブリンの古い箱を開けてはいけない。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Do not open the goblin's old box. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. close（閉める）　id 155　敵役: wolf
例文: Close the gate! The wolves are here.　／　門を閉めて！ 狼たちが来ている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Close the gate! The wolves are here. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. read（読む）　id 156
例文: I read a book every night.　／　私は毎晩本を読む。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: I read a book every night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. write（書く）　id 157
例文: She writes a letter to the king.　／　少女は王に手紙を書く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: She writes a letter to the king. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. sing（歌う）　id 158
例文: The bard sings a happy song.　／　吟遊詩人が楽しい歌を歌う。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The bard sings a happy song. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. play（遊ぶ）　id 159
例文: The children play in the garden.　／　子どもたちが庭で遊ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The children play in the garden. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 12. help（助ける）　id 160　敵役: slime
例文: Help me! A slime is in my bag.　／　助けて！ かばんの中にスライムがいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Help me! A slime is in my bag. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 13. make（作る）　id 161
例文: Let's make a small boat.　／　小さな舟を作ろう。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Let's make a small boat. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 14. buy（買う）　id 162
例文: I want to buy a new sword.　／　新しい剣を買いたい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: I want to buy a new sword. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 15. give（与える）　id 163
例文: The king gives a gold ring to the hero.　／　王が勇者に金の指輪を贈る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The king gives a gold ring to the hero. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 16. love（愛する）　id 164
例文: The knight loves his home.　／　騎士は故郷を愛している。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The knight loves his home. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 17. live（住む）　id 165　敵役: goblin
例文: Goblins live in the dark cave.　／　ゴブリンたちは暗い洞窟に住んでいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Goblins live in the dark cave. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 18. work（働く）　id 166
例文: The dwarves work in the mine.　／　ドワーフたちが鉱山で働いている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The dwarves work in the mine. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 19. listen（聞く）　id 167　敵役: wolf
例文: Listen! I hear a wolf outside.　／　聞いて！ 外に狼の声がする。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Listen! I hear a wolf outside. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 20. speak（話す）　id 168
例文: The wise owl can speak.　／　賢いフクロウは話すことができる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The wise owl can speak. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 21. small（小さい）　id 169　敵役: imp
例文: A small imp hides in the tall grass.　／　小さなインプが、高い草に隠れている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A small imp hides in the tall grass. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 22. new（新しい）　id 170
例文: The knight has a new shield.　／　騎士は新しい盾を持っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The knight has a new shield. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 23. old（古い）　id 171
例文: The old tower is very tall.　／　古い塔はとても高い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The old tower is very tall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 24. hot（熱い）　id 172
例文: The soup is too hot.　／　スープは熱すぎる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The soup is too hot. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 25. cold（冷たい）　id 173
例文: The lake is cold in winter.　／　湖は冬に冷たい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The lake is cold in winter. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 26. fast（速い）　id 174　敵役: goblin
例文: The goblin is small but very fast.　／　そのゴブリンは小さいが、とても速い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The goblin is small but very fast. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 27. strong（強い）　id 175
例文: The strong knight lifts a big stone.　／　強い騎士が大きな石を持ち上げる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The strong knight lifts a big stone. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 28. good（良い）　id 176
例文: This is a good day for a trip.　／　旅に出るのにいい日だ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: This is a good day for a trip. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 29. red（赤い）　id 177
例文: A red dragon flies over the town.　／　赤いドラゴンが町の上を飛ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A red dragon flies over the town. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 30. blue（青い）　id 178
例文: The blue lake shines in the sun.　／　青い湖が太陽の下で輝く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The blue lake shines in the sun. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 31. white（白い）　id 179
例文: The snow is white and soft.　／　雪は白くてやわらかい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The snow is white and soft. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 32. black（黒い）　id 180　敵役: crow
例文: A black crow sits on the roof.　／　黒いカラスが屋根にとまっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A black crow sits on the roof. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

