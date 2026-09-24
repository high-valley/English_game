# 次に作るカード画像（Lv.1 COMMON）

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ **COMMON だけ**を図鑑の並び順で出しています。COMMON で画像がまだ無いのは **11語**、ここにはそのうち **11語**。（全レアリティ合わせての残りは 407語）

## 使い方
1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る

順番は図鑑の並び順（id順）です。端から順に潰していけます。


## Lv.1 COMMON（この一覧に11語）

### 1. new（新しい）　id 170
例文: The young knight holds up his shiny new shield.　／　若い騎士が、ぴかぴかの新しい盾をかかげる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The young knight holds up his shiny new shield. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. old（古い）　id 171
例文: The old tower is very tall.　／　古い塔はとても高い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The old tower is very tall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. hot（熱い）　id 172
例文: The girl blows on her hot soup by the fire.　／　少女が火のそばで、熱いスープをふうふう冷ます。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The girl blows on her hot soup by the fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. cold（冷たい）　id 173
例文: The lake is cold in winter.　／　湖は冬に冷たい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The lake is cold in winter. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. fast（速い）　id 174　敵役: goblin
例文: A fast goblin runs off with a stolen pie.　／　すばしっこいゴブリンが、盗んだパイを持って走り去る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A fast goblin runs off with a stolen pie. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. strong（強い）　id 175
例文: The strong knight lifts a big stone.　／　強い騎士が大きな石を持ち上げる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The strong knight lifts a big stone. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. good（良い）　id 176
例文: A good knight helps an old woman across the bridge.　／　心やさしい騎士が、おばあさんが橋を渡るのを手伝う。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A good knight helps an old woman across the bridge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. red（赤い）　id 177
例文: A red dragon flies over the town.　／　赤いドラゴンが町の上を飛ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A red dragon flies over the town. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. blue（青い）　id 178
例文: The blue lake shines in the sun.　／　青い湖が太陽の下で輝く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The blue lake shines in the sun. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. white（白い）　id 179
例文: The snow is white and soft.　／　雪は白くてやわらかい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The snow is white and soft. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. black（黒い）　id 180　敵役: crow
例文: A black crow sits on the roof.　／　黒いカラスが屋根にとまっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A black crow sits on the roof. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

