# 次に作るカード画像（Lv.1 COMMON）

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ **COMMON だけ**を図鑑の並び順で出しています。COMMON で画像がまだ無いのは **82語**、ここにはそのうち **82語**。（全レアリティ合わせての残りは 478語）

## 使い方
1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る

順番は図鑑の並び順（id順）です。端から順に潰していけます。


## Lv.1 COMMON（この一覧に82語）

### 1. happy（幸せな）　id 19
例文: The princess is happy today.　／　姫は今日、幸せそうだ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The princess is happy today. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. big（大きい）　id 20　敵役: spider
例文: A big spider hangs from the dead tree.　／　大きな蜘蛛が、枯れた木からぶら下がっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A big spider hangs from the dead tree. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. bird（鳥）　id 101
例文: A bird sings on the castle wall.　／　鳥が城壁の上で歌っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A bird sings on the castle wall. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. fish（魚）　id 102
例文: The fish swims in the clear lake.　／　魚が澄んだ湖を泳いでいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The fish swims in the clear lake. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. horse（馬）　id 103　敵役: wolf
例文: A wolf chases the white horse.　／　狼が白い馬を追いかける。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A wolf chases the white horse. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. tree（木）　id 104
例文: A tall tree stands by the river.　／　背の高い木が川のそばに立っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A tall tree stands by the river. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. flower（花）　id 105
例文: She picks a flower in the garden.　／　少女は庭で花を摘む。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: She picks a flower in the garden. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. river（川）　id 106
例文: The river runs through the forest.　／　川が森の中を流れていく。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The river runs through the forest. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. mountain（山）　id 107
例文: The dragon sleeps on the mountain.　／　ドラゴンが山の上で眠っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The dragon sleeps on the mountain. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. sea（海）　id 108
例文: The ship sails across the sea.　／　船が海を渡っていく。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The ship sails across the sea. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. star（星）　id 109
例文: A star shines above the tower.　／　塔の上に星が輝いている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A star shines above the tower. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 12. rain（雨）　id 110
例文: The rain falls on the old town.　／　雨が古い町に降っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The rain falls on the old town. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 13. wind（風）　id 111
例文: A cold wind blows from the north.　／　冷たい風が北から吹いてくる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A cold wind blows from the north. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 14. snow（雪）　id 112
例文: Snow covers the mountain path.　／　雪が山道をおおっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Snow covers the mountain path. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 15. fire（火）　id 113　敵役: goblin
例文: Goblins sit around a small fire.　／　ゴブリンたちが小さな火のまわりに座っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Goblins sit around a small fire. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 16. bread（パン）　id 114
例文: The baker makes fresh bread.　／　パン職人が焼きたてのパンを作る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The baker makes fresh bread. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 17. milk（牛乳）　id 115
例文: The cat drinks warm milk.　／　猫が温かい牛乳を飲む。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The cat drinks warm milk. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 18. egg（卵）　id 116
例文: The dragon guards a golden egg.　／　ドラゴンが金の卵を守っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The dragon guards a golden egg. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 19. rice（米）　id 117
例文: The farmer grows rice in the field.　／　農夫が畑で米を育てる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The farmer grows rice in the field. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 20. tea（お茶）　id 118
例文: The old man drinks hot tea.　／　老人が熱いお茶を飲む。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The old man drinks hot tea. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 21. cake（ケーキ）　id 119
例文: We eat cake at the party.　／　私たちはパーティーでケーキを食べる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: We eat cake at the party. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 22. door（ドア）　id 120　敵役: imp
例文: An imp knocks on the heavy door.　／　インプが重いドアをたたく。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: An imp knocks on the heavy door. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 23. window（窓）　id 121　敵役: bat
例文: A bat flies in through the window.　／　コウモリが窓から飛び込んでくる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A bat flies in through the window. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 24. table（テーブル）　id 122
例文: An old map lies open on the table.　／　古い地図が、テーブルの上に広げてある。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: An old map lies open on the table. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 25. chair（椅子）　id 123
例文: A king sits on a golden chair.　／　王が金の椅子に座っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A king sits on a golden chair. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 26. bed（ベッド）　id 124　敵役: slime
例文: A small slime hides under the bed.　／　小さなスライムがベッドの下に隠れている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A small slime hides under the bed. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 27. room（部屋）　id 125　敵役: spider
例文: A spider sits in the corner of the room.　／　蜘蛛が部屋のすみにいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A spider sits in the corner of the room. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 28. town（町）　id 126　敵役: goblin
例文: Goblins attack the small town at night.　／　ゴブリンたちが、夜に小さな町を襲う。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Goblins attack the small town at night. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 29. road（道）　id 127　敵役: kobold
例文: A kobold waits on the dark road.　／　コボルトが暗い道で待ちかまえている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A kobold waits on the dark road. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 30. bridge（橋）　id 128　敵役: kobold
例文: Two kobolds guard the stone bridge.　／　二匹のコボルトが石の橋を見張っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Two kobolds guard the stone bridge. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 31. castle（城）　id 129
例文: The castle stands on a hill.　／　城が丘の上にそびえている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The castle stands on a hill. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 32. king（王）　id 130
例文: The king speaks to the people.　／　王が民に語りかける。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The king speaks to the people. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 33. queen（女王）　id 131
例文: The queen wears a silver crown.　／　女王は銀の冠をかぶっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The queen wears a silver crown. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 34. boy（少年）　id 132　敵役: imp
例文: The boy throws a stone at the imp.　／　少年がインプに石を投げる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The boy throws a stone at the imp. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 35. girl（少女）　id 133
例文: The girl feeds a baby dragon.　／　少女が子どものドラゴンにえさをやる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The girl feeds a baby dragon. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 36. man（男の人）　id 134
例文: An old man walks on the road.　／　老人が道を歩いている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: An old man walks on the road. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 37. woman（女の人）　id 135
例文: A woman sells fruit at the market.　／　女の人が市場で果物を売っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A woman sells fruit at the market. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 38. baby（赤ちゃん）　id 136
例文: The baby sleeps in a small bed.　／　赤ちゃんが小さなベッドで眠っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The baby sleeps in a small bed. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 39. teacher（先生）　id 137
例文: The teacher shows a map to the class.　／　先生が生徒に地図を見せる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The teacher shows a map to the class. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 40. doctor（医者）　id 138
例文: The doctor helps the hurt knight.　／　医者が傷ついた騎士を助ける。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The doctor helps the hurt knight. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 41. sword（剣）　id 139　敵役: slime
例文: He cuts the slime with his sword.　／　彼は剣でスライムを切る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: He cuts the slime with his sword. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 42. key（鍵）　id 140
例文: A gold key opens the old iron gate.　／　金の鍵が、古い鉄の門を開ける。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A gold key opens the old iron gate. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 43. box（箱）　id 141
例文: A small locked box sits in the cave.　／　小さな鍵のかかった箱が、洞くつに置かれている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A small locked box sits in the cave. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 44. bag（かばん）　id 142
例文: The traveler carries a heavy bag.　／　旅人が重いかばんを運んでいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The traveler carries a heavy bag. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 45. hat（帽子）　id 143
例文: The wizard wears a tall hat.　／　魔法使いが背の高い帽子をかぶっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The wizard wears a tall hat. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 46. night（夜）　id 144　敵役: bat
例文: Bats fly out of the cave at night.　／　夜、コウモリたちが洞窟から飛び出す。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Bats fly out of the cave at night. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 47. morning（朝）　id 145
例文: We wake up early in the morning.　／　私たちは朝早く起きる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: We wake up early in the morning. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 48. hand（手）　id 146
例文: She holds a lantern in her hand.　／　少女は手にランタンを持っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: She holds a lantern in her hand. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 49. see（見る）　id 147　敵役: goblin
例文: I can see a goblin behind the tree.　／　木の後ろにゴブリンが見える。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: I can see a goblin behind the tree. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 50. walk（歩く）　id 148
例文: We walk along the river.　／　私たちは川ぞいを歩く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: We walk along the river. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 51. run（走る）　id 149　敵役: goblin
例文: The goblins run away from the village.　／　ゴブリンたちが村から逃げていく。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The goblins run away from the village. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 52. jump（跳ぶ）　id 150　敵役: imp
例文: The imp jumps onto the round table.　／　インプが丸いテーブルの上に飛び乗る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The imp jumps onto the round table. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 53. swim（泳ぐ）　id 151
例文: The children swim in the lake.　／　子どもたちが湖で泳ぐ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The children swim in the lake. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 54. fly（飛ぶ）　id 152　敵役: bat
例文: Bats fly around the dark tower.　／　コウモリたちが暗い塔のまわりを飛ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Bats fly around the dark tower. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 55. sit（座る）　id 153
例文: Please sit by the fire.　／　火のそばに座ってください。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Please sit by the fire. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 56. open（開ける）　id 154　敵役: goblin
例文: Do not open the goblin's old box.　／　ゴブリンの古い箱を開けてはいけない。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Do not open the goblin's old box. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 57. close（閉める）　id 155　敵役: wolf
例文: Close the gate! The wolves are here.　／　門を閉めて！ 狼たちが来ている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Close the gate! The wolves are here. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 58. read（読む）　id 156
例文: I read a book every night.　／　私は毎晩本を読む。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: I read a book every night. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 59. write（書く）　id 157
例文: She writes a letter to the king.　／　少女は王に手紙を書く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: She writes a letter to the king. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 60. sing（歌う）　id 158
例文: The bard sings a happy song.　／　吟遊詩人が楽しい歌を歌う。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The bard sings a happy song. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 61. play（遊ぶ）　id 159
例文: The children play in the garden.　／　子どもたちが庭で遊ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The children play in the garden. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 62. help（助ける）　id 160　敵役: slime
例文: Help me! A slime is in my bag.　／　助けて！ かばんの中にスライムがいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Help me! A slime is in my bag. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 63. make（作る）　id 161
例文: Let's make a small boat.　／　小さな舟を作ろう。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Let's make a small boat. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 64. buy（買う）　id 162
例文: I want to buy a new sword.　／　新しい剣を買いたい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: I want to buy a new sword. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 65. give（与える）　id 163
例文: The king gives a gold ring to the hero.　／　王が勇者に金の指輪を贈る。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The king gives a gold ring to the hero. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 66. love（愛する）　id 164
例文: The knight loves his home.　／　騎士は故郷を愛している。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The knight loves his home. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 67. live（住む）　id 165　敵役: goblin
例文: Goblins live in the dark cave.　／　ゴブリンたちは暗い洞窟に住んでいる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Goblins live in the dark cave. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 68. work（働く）　id 166
例文: The dwarves work in the mine.　／　ドワーフたちが鉱山で働いている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The dwarves work in the mine. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 69. listen（聞く）　id 167　敵役: wolf
例文: Listen! I hear a wolf outside.　／　聞いて！ 外に狼の声がする。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: Listen! I hear a wolf outside. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 70. speak（話す）　id 168
例文: The wise owl can speak.　／　賢いフクロウは話すことができる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The wise owl can speak. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 71. small（小さい）　id 169　敵役: imp
例文: A small imp hides in the tall grass.　／　小さなインプが、高い草に隠れている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A small imp hides in the tall grass. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 72. new（新しい）　id 170
例文: The knight has a new shield.　／　騎士は新しい盾を持っている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The knight has a new shield. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 73. old（古い）　id 171
例文: The old tower is very tall.　／　古い塔はとても高い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The old tower is very tall. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 74. hot（熱い）　id 172
例文: The soup is too hot.　／　スープは熱すぎる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The soup is too hot. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 75. cold（冷たい）　id 173
例文: The lake is cold in winter.　／　湖は冬に冷たい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The lake is cold in winter. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 76. fast（速い）　id 174　敵役: goblin
例文: The goblin is small but very fast.　／　そのゴブリンは小さいが、とても速い。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The goblin is small but very fast. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 77. strong（強い）　id 175
例文: The strong knight lifts a big stone.　／　強い騎士が大きな石を持ち上げる。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The strong knight lifts a big stone. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 78. good（良い）　id 176
例文: This is a good day for a trip.　／　旅に出るのにいい日だ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: This is a good day for a trip. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 79. red（赤い）　id 177
例文: A red dragon flies over the town.　／　赤いドラゴンが町の上を飛ぶ。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A red dragon flies over the town. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 80. blue（青い）　id 178
例文: The blue lake shines in the sun.　／　青い湖が太陽の下で輝く。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The blue lake shines in the sun. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 81. white（白い）　id 179
例文: The snow is white and soft.　／　雪は白くてやわらかい。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: The snow is white and soft. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 82. black（黒い）　id 180　敵役: crow
例文: A black crow sits on the roof.　／　黒いカラスが屋根にとまっている。
```
soft hand-painted anime illustration, visible brush texture, matte finish, gentle natural light, warm and clear colors, storybook feel, one clear subject, a simple background that shows the place, few magical effects. Scene: A black crow sits on the roof. 3:2 wide landscape, the subject is large and centered and fills most of the frame, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

