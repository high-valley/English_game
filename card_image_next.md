# 次に作るカード画像（Lv.1 COMMON）

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ **COMMON だけ**を図鑑の並び順で出しています。COMMON で画像がまだ無いのは **95語**、ここにはそのうち **95語**。（全レアリティ合わせての残りは 495語）

## 使い方
1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る

順番は図鑑の並び順（id順）です。端から順に潰していけます。


## Lv.1 COMMON（この一覧に95語）

### 1. school（学校）　id 6
例文: The children walk to the old school.　／　子どもたちは古い学校へ歩いていく。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children walk to the old school. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 2. water（水）　id 7　敵役: slime
例文: A green slime floats in the cold water.　／　緑のスライムが、冷たい水に浮かんでいる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A green slime floats in the cold water. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 3. food（食べ物）　id 8　敵役: slime
例文: A hungry slime eats the food on the floor.　／　腹をすかせたスライムが、床の食べ物を食べる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A hungry slime eats the food on the floor. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 4. friend（友達）　id 9　敵役: goblin
例文: My friend and I fight a goblin together.　／　友達と私で、力を合わせてゴブリンと戦う。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: My friend and I fight a goblin together. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 5. family（家族）　id 10
例文: The family sits around a warm fire.　／　家族が暖かい火のまわりに座っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The family sits around a warm fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 6. sun（太陽）　id 11
例文: The sun rises over the castle.　／　太陽が城の上に昇る。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The sun rises over the castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 7. moon（月）　id 12　敵役: wolf
例文: A gray wolf howls at the moon.　／　灰色の狼が、月に向かって吠える。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A gray wolf howls at the moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 8. car（車）　id 13
例文: The old car stops at the bridge.　／　古い車が橋の前で止まる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old car stops at the bridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 9. go（行く）　id 14　敵役: goblin
例文: Do not go into the goblin cave alone.　／　ひとりでゴブリンの洞窟に行ってはいけない。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Do not go into the goblin cave alone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 10. come（来る）　id 15　敵役: kobold
例文: The kobolds come from the dark forest.　／　コボルトたちが、暗い森からやって来る。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The kobolds come from the dark forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 11. eat（食べる）　id 16　敵役: slime
例文: Slimes eat old bread in the cave.　／　スライムたちは、洞窟で古いパンを食べる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Slimes eat old bread in the cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 12. drink（飲む）　id 17
例文: Drink this tea and rest.　／　このお茶を飲んで休みなさい。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Drink this tea and rest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 13. sleep（眠る）　id 18　敵役: kobold
例文: The kobold sleeps beside a small fire.　／　コボルトが小さな火のそばで眠っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The kobold sleeps beside a small fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 14. happy（幸せな）　id 19
例文: The princess is happy today.　／　姫は今日、幸せそうだ。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The princess is happy today. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 15. big（大きい）　id 20　敵役: spider
例文: A big spider hangs from the dead tree.　／　大きな蜘蛛が、枯れた木からぶら下がっている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A big spider hangs from the dead tree. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 16. bird（鳥）　id 101
例文: A bird sings on the castle wall.　／　鳥が城壁の上で歌っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A bird sings on the castle wall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 17. fish（魚）　id 102
例文: The fish swims in the clear lake.　／　魚が澄んだ湖を泳いでいる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The fish swims in the clear lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 18. horse（馬）　id 103　敵役: wolf
例文: A wolf chases the white horse.　／　狼が白い馬を追いかける。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A wolf chases the white horse. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 19. tree（木）　id 104
例文: A tall tree stands by the river.　／　背の高い木が川のそばに立っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A tall tree stands by the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 20. flower（花）　id 105
例文: She picks a flower in the garden.　／　少女は庭で花を摘む。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She picks a flower in the garden. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 21. river（川）　id 106
例文: The river runs through the forest.　／　川が森の中を流れていく。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The river runs through the forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 22. mountain（山）　id 107
例文: The dragon sleeps on the mountain.　／　ドラゴンが山の上で眠っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dragon sleeps on the mountain. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 23. sea（海）　id 108
例文: The ship sails across the sea.　／　船が海を渡っていく。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The ship sails across the sea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 24. star（星）　id 109
例文: A star shines above the tower.　／　塔の上に星が輝いている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A star shines above the tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 25. rain（雨）　id 110
例文: The rain falls on the old town.　／　雨が古い町に降っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The rain falls on the old town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 26. wind（風）　id 111
例文: A cold wind blows from the north.　／　冷たい風が北から吹いてくる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A cold wind blows from the north. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 27. snow（雪）　id 112
例文: Snow covers the mountain path.　／　雪が山道をおおっている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Snow covers the mountain path. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 28. fire（火）　id 113　敵役: goblin
例文: Goblins sit around a small fire.　／　ゴブリンたちが小さな火のまわりに座っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Goblins sit around a small fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 29. bread（パン）　id 114
例文: The baker makes fresh bread.　／　パン職人が焼きたてのパンを作る。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The baker makes fresh bread. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 30. milk（牛乳）　id 115
例文: The cat drinks warm milk.　／　猫が温かい牛乳を飲む。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The cat drinks warm milk. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 31. egg（卵）　id 116
例文: The dragon guards a golden egg.　／　ドラゴンが金の卵を守っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dragon guards a golden egg. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 32. rice（米）　id 117
例文: The farmer grows rice in the field.　／　農夫が畑で米を育てる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The farmer grows rice in the field. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 33. tea（お茶）　id 118
例文: The old man drinks hot tea.　／　老人が熱いお茶を飲む。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old man drinks hot tea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 34. cake（ケーキ）　id 119
例文: We eat cake at the party.　／　私たちはパーティーでケーキを食べる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We eat cake at the party. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 35. door（ドア）　id 120　敵役: imp
例文: An imp knocks on the heavy door.　／　インプが重いドアをたたく。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: An imp knocks on the heavy door. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 36. window（窓）　id 121　敵役: bat
例文: A bat flies in through the window.　／　コウモリが窓から飛び込んでくる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A bat flies in through the window. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 37. table（テーブル）　id 122
例文: An old map lies open on the table.　／　古い地図が、テーブルの上に広げてある。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: An old map lies open on the table. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 38. chair（椅子）　id 123
例文: A king sits on a golden chair.　／　王が金の椅子に座っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A king sits on a golden chair. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 39. bed（ベッド）　id 124　敵役: slime
例文: A small slime hides under the bed.　／　小さなスライムがベッドの下に隠れている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small slime hides under the bed. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 40. room（部屋）　id 125　敵役: spider
例文: A spider sits in the corner of the room.　／　蜘蛛が部屋のすみにいる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A spider sits in the corner of the room. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 41. town（町）　id 126　敵役: goblin
例文: Goblins attack the small town at night.　／　ゴブリンたちが、夜に小さな町を襲う。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Goblins attack the small town at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 42. road（道）　id 127　敵役: kobold
例文: A kobold waits on the dark road.　／　コボルトが暗い道で待ちかまえている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A kobold waits on the dark road. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 43. bridge（橋）　id 128　敵役: kobold
例文: Two kobolds guard the stone bridge.　／　二匹のコボルトが石の橋を見張っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Two kobolds guard the stone bridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 44. castle（城）　id 129
例文: The castle stands on a hill.　／　城が丘の上にそびえている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The castle stands on a hill. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 45. king（王）　id 130
例文: The king speaks to the people.　／　王が民に語りかける。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The king speaks to the people. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 46. queen（女王）　id 131
例文: The queen wears a silver crown.　／　女王は銀の冠をかぶっている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The queen wears a silver crown. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 47. boy（少年）　id 132　敵役: imp
例文: The boy throws a stone at the imp.　／　少年がインプに石を投げる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The boy throws a stone at the imp. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 48. girl（少女）　id 133
例文: The girl feeds a baby dragon.　／　少女が子どものドラゴンにえさをやる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The girl feeds a baby dragon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 49. man（男の人）　id 134
例文: An old man walks on the road.　／　老人が道を歩いている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: An old man walks on the road. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 50. woman（女の人）　id 135
例文: A woman sells fruit at the market.　／　女の人が市場で果物を売っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A woman sells fruit at the market. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 51. baby（赤ちゃん）　id 136
例文: The baby sleeps in a small bed.　／　赤ちゃんが小さなベッドで眠っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The baby sleeps in a small bed. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 52. teacher（先生）　id 137
例文: The teacher shows a map to the class.　／　先生が生徒に地図を見せる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The teacher shows a map to the class. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 53. doctor（医者）　id 138
例文: The doctor helps the hurt knight.　／　医者が傷ついた騎士を助ける。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The doctor helps the hurt knight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 54. sword（剣）　id 139　敵役: slime
例文: He cuts the slime with his sword.　／　彼は剣でスライムを切る。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: He cuts the slime with his sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 55. key（鍵）　id 140
例文: A gold key opens the old iron gate.　／　金の鍵が、古い鉄の門を開ける。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A gold key opens the old iron gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 56. box（箱）　id 141
例文: A small locked box sits in the cave.　／　小さな鍵のかかった箱が、洞くつに置かれている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small locked box sits in the cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 57. bag（かばん）　id 142
例文: The traveler carries a heavy bag.　／　旅人が重いかばんを運んでいる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The traveler carries a heavy bag. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 58. hat（帽子）　id 143
例文: The wizard wears a tall hat.　／　魔法使いが背の高い帽子をかぶっている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The wizard wears a tall hat. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 59. night（夜）　id 144　敵役: bat
例文: Bats fly out of the cave at night.　／　夜、コウモリたちが洞窟から飛び出す。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Bats fly out of the cave at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 60. morning（朝）　id 145
例文: We wake up early in the morning.　／　私たちは朝早く起きる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We wake up early in the morning. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 61. hand（手）　id 146
例文: She holds a lantern in her hand.　／　少女は手にランタンを持っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She holds a lantern in her hand. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 62. see（見る）　id 147　敵役: goblin
例文: I can see a goblin behind the tree.　／　木の後ろにゴブリンが見える。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I can see a goblin behind the tree. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 63. walk（歩く）　id 148
例文: We walk along the river.　／　私たちは川ぞいを歩く。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We walk along the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 64. run（走る）　id 149　敵役: goblin
例文: The goblins run away from the village.　／　ゴブリンたちが村から逃げていく。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The goblins run away from the village. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 65. jump（跳ぶ）　id 150　敵役: imp
例文: The imp jumps onto the round table.　／　インプが丸いテーブルの上に飛び乗る。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The imp jumps onto the round table. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 66. swim（泳ぐ）　id 151
例文: The children swim in the lake.　／　子どもたちが湖で泳ぐ。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children swim in the lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 67. fly（飛ぶ）　id 152　敵役: bat
例文: Bats fly around the dark tower.　／　コウモリたちが暗い塔のまわりを飛ぶ。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Bats fly around the dark tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 68. sit（座る）　id 153
例文: Please sit by the fire.　／　火のそばに座ってください。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Please sit by the fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 69. open（開ける）　id 154　敵役: goblin
例文: Do not open the goblin's old box.　／　ゴブリンの古い箱を開けてはいけない。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Do not open the goblin's old box. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 70. close（閉める）　id 155　敵役: wolf
例文: Close the gate! The wolves are here.　／　門を閉めて！ 狼たちが来ている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Close the gate! The wolves are here. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 71. read（読む）　id 156
例文: I read a book every night.　／　私は毎晩本を読む。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I read a book every night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 72. write（書く）　id 157
例文: She writes a letter to the king.　／　少女は王に手紙を書く。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She writes a letter to the king. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 73. sing（歌う）　id 158
例文: The bard sings a happy song.　／　吟遊詩人が楽しい歌を歌う。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The bard sings a happy song. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 74. play（遊ぶ）　id 159
例文: The children play in the garden.　／　子どもたちが庭で遊ぶ。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children play in the garden. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 75. help（助ける）　id 160　敵役: slime
例文: Help me! A slime is in my bag.　／　助けて！ かばんの中にスライムがいる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Help me! A slime is in my bag. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 76. make（作る）　id 161
例文: Let's make a small boat.　／　小さな舟を作ろう。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Let's make a small boat. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 77. buy（買う）　id 162
例文: I want to buy a new sword.　／　新しい剣を買いたい。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I want to buy a new sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 78. give（与える）　id 163
例文: The king gives a gold ring to the hero.　／　王が勇者に金の指輪を贈る。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The king gives a gold ring to the hero. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 79. love（愛する）　id 164
例文: The knight loves his home.　／　騎士は故郷を愛している。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight loves his home. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 80. live（住む）　id 165　敵役: goblin
例文: Goblins live in the dark cave.　／　ゴブリンたちは暗い洞窟に住んでいる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Goblins live in the dark cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 81. work（働く）　id 166
例文: The dwarves work in the mine.　／　ドワーフたちが鉱山で働いている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dwarves work in the mine. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 82. listen（聞く）　id 167　敵役: wolf
例文: Listen! I hear a wolf outside.　／　聞いて！ 外に狼の声がする。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Listen! I hear a wolf outside. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 83. speak（話す）　id 168
例文: The wise owl can speak.　／　賢いフクロウは話すことができる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The wise owl can speak. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 84. small（小さい）　id 169　敵役: imp
例文: A small imp hides in the tall grass.　／　小さなインプが、高い草に隠れている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small imp hides in the tall grass. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 85. new（新しい）　id 170
例文: The knight has a new shield.　／　騎士は新しい盾を持っている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight has a new shield. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 86. old（古い）　id 171
例文: The old tower is very tall.　／　古い塔はとても高い。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old tower is very tall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 87. hot（熱い）　id 172
例文: The soup is too hot.　／　スープは熱すぎる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The soup is too hot. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 88. cold（冷たい）　id 173
例文: The lake is cold in winter.　／　湖は冬に冷たい。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The lake is cold in winter. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 89. fast（速い）　id 174　敵役: goblin
例文: The goblin is small but very fast.　／　そのゴブリンは小さいが、とても速い。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The goblin is small but very fast. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 90. strong（強い）　id 175
例文: The strong knight lifts a big stone.　／　強い騎士が大きな石を持ち上げる。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The strong knight lifts a big stone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 91. good（良い）　id 176
例文: This is a good day for a trip.　／　旅に出るのにいい日だ。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: This is a good day for a trip. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 92. red（赤い）　id 177
例文: A red dragon flies over the town.　／　赤いドラゴンが町の上を飛ぶ。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A red dragon flies over the town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 93. blue（青い）　id 178
例文: The blue lake shines in the sun.　／　青い湖が太陽の下で輝く。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The blue lake shines in the sun. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 94. white（白い）　id 179
例文: The snow is white and soft.　／　雪は白くてやわらかい。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The snow is white and soft. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

### 95. black（黒い）　id 180　敵役: crow
例文: A black crow sits on the roof.　／　黒いカラスが屋根にとまっている。
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A black crow sits on the roof. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

