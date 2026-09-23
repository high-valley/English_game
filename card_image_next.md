# 次に作るカード画像（Lv.1 COMMON）

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ **COMMON だけ**を図鑑の並び順で出しています。COMMON で画像がまだ無いのは **16語**、ここにはそのうち **16語**。（全レアリティ合わせての残りは 412語）

## 使い方
1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る

順番は図鑑の並び順（id順）です。端から順に潰していけます。


## Lv.1 COMMON（この一覧に16語）

### 1. live（住む）　id 165　敵役: goblin
例文: Goblins live in the dark cave.　／　ゴブリンたちは暗い洞窟に住んでいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Goblins live in the dark cave. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. work（働く）　id 166
例文: The dwarves work in the mine.　／　ドワーフたちが鉱山で働いている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The dwarves work in the mine. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. listen（聞く）　id 167　敵役: wolf
例文: The hunter listens for wolves in the dark wood.　／　狩人が暗い森で、狼の気配に耳をすます。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The hunter listens for wolves in the dark wood. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. speak（話す）　id 168
例文: The wise owl speaks to a boy in the forest.　／　賢いフクロウが、森で少年に話しかける。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The wise owl speaks to a boy in the forest. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. small（小さい）　id 169　敵役: imp
例文: A small imp hides in the tall grass.　／　小さなインプが、高い草に隠れている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A small imp hides in the tall grass. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. new（新しい）　id 170
例文: The knight has a new shield.　／　騎士は新しい盾を持っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The knight has a new shield. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. old（古い）　id 171
例文: The old tower is very tall.　／　古い塔はとても高い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The old tower is very tall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. hot（熱い）　id 172
例文: The soup is too hot.　／　スープは熱すぎる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The soup is too hot. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. cold（冷たい）　id 173
例文: The lake is cold in winter.　／　湖は冬に冷たい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The lake is cold in winter. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. fast（速い）　id 174　敵役: goblin
例文: The goblin is small but very fast.　／　そのゴブリンは小さいが、とても速い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The goblin is small but very fast. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. strong（強い）　id 175
例文: The strong knight lifts a big stone.　／　強い騎士が大きな石を持ち上げる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The strong knight lifts a big stone. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 12. good（良い）　id 176
例文: A good knight helps an old woman across the bridge.　／　心やさしい騎士が、おばあさんが橋を渡るのを手伝う。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A good knight helps an old woman across the bridge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 13. red（赤い）　id 177
例文: A red dragon flies over the town.　／　赤いドラゴンが町の上を飛ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A red dragon flies over the town. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 14. blue（青い）　id 178
例文: The blue lake shines in the sun.　／　青い湖が太陽の下で輝く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The blue lake shines in the sun. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 15. white（白い）　id 179
例文: The snow is white and soft.　／　雪は白くてやわらかい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The snow is white and soft. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 16. black（黒い）　id 180　敵役: crow
例文: A black crow sits on the roof.　／　黒いカラスが屋根にとまっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A black crow sits on the roof. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

