# カード画像のプロンプト

※番号は単語のID（通し番号）です。
※このファイルは `tools/gen_card_prompts.py` が `js/words.js` から作ります。直接編集せず、例文（`ex`）を直してから作り直してください。

## 使い方
1. 各プロンプトを、画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. できた画像を `assets/cards/単語.webp` で保存する（例：`assets/cards/goblin.webp`、1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に、単語の名前を追加する（例：`"apple","cat","bird"`）

プロンプトは、カードの例文（`words.js` の `ex`）から作っています。例文の場面が、そのまま絵になります。レアリティが低いほど簡素に、高いほど豪華になります。画像を作らない単語は、背景付きの絵文字が表示されます。

## 登場するもの（世界観）
味方だけでなく、**敵役**も出てきます。レアリティが上がるほど、敵も強くなります。

| レベル | 主な敵役 |
|---|---|
| Lv.1 COMMON | ゴブリン、スライム、コウモリ、ネズミ、小さな蜘蛛、いたずら妖精 |
| Lv.2 UNCOMMON | オーク、スケルトン、幽霊、魔女、大蜘蛛、山賊、コボルト |
| Lv.3 RARE | ヴァンパイア、人狼、トロル、ハーピー、呪われた騎士、海賊、ゴーレム |
| Lv.4 EPIC | リッチ、悪魔、死霊術師、闇の将軍、ヴァンパイア卿、怪物の巣 |
| Lv.5 LEGENDARY | 大悪魔、ヴァンパイア公、古竜、破滅の王、闇の帝国 |

## 優先順位のおすすめ
- 画像が目立つのは、ガチャで出る高レアと、図鑑で見るカードです
- COMMON・UNCOMMON は数が多いので、まず数語だけ作り、絵柄を確認してから増やすのがおすすめです
- 敵役が出てくる例文は絵になりやすいので、そこから作るのもおすすめです

## 作成済みの画像
`js/card_art.js` の `CARD_IMG_NAMES` に登録済み（この4語は、絵文字ではなく画像で表示されます）。

- apple
- book
- cat
- water

全500語ぶんのプロンプトが下にあります。


## Lv.1 COMMON（100語）

共通のスタイル：simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration

**1. apple**（りんご）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight eats a red apple. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**2. book**（本）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She reads a big book. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**3. cat**（猫）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The black cat sleeps on a stone wall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**4. dog**（犬）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The brave dog barks at the goblins. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**5. house**（家）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A goblin runs out of the small house. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**6. school**（学校）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children walk to the old school. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**7. water**（水）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The traveler drinks cold water from a spring. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**8. food**（食べ物）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A hungry slime eats the food on the floor. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**9. friend**（友達）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: My friend and I fight a goblin together. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**10. family**（家族）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The family sits around a warm fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**11. sun**（太陽）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The sun rises over the castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**12. moon**（月）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A gray wolf howls at the moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**13. car**（車）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old car stops at the bridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**14. go**（行く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Do not go into the goblin cave alone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**15. come**（来る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The kobolds come from the dark forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**16. eat**（食べる）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Slimes eat old bread in the cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**17. drink**（飲む）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Drink this tea and rest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**18. sleep**（眠る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The kobold sleeps beside a small fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**19. happy**（幸せな）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The princess is happy today. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**20. big**（大きい）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A big spider hangs from the dead tree. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**101. bird**（鳥）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A bird sings on the castle wall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**102. fish**（魚）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The fish swims in the clear lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**103. horse**（馬）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A wolf chases the white horse. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**104. tree**（木）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A tall tree stands by the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**105. flower**（花）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She picks a flower in the garden. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**106. river**（川）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The river runs through the forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**107. mountain**（山）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dragon sleeps on the mountain. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**108. sea**（海）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The ship sails across the sea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**109. star**（星）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A star shines above the tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**110. rain**（雨）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The rain falls on the old town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**111. wind**（風）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A cold wind blows from the north. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**112. snow**（雪）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Snow covers the mountain path. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**113. fire**（火）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Goblins sit around a small fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**114. bread**（パン）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The baker makes fresh bread. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**115. milk**（牛乳）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The cat drinks warm milk. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**116. egg**（卵）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dragon guards a golden egg. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**117. rice**（米）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The farmer grows rice in the field. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**118. tea**（お茶）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old man drinks hot tea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**119. cake**（ケーキ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We eat cake at the party. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**120. door**（ドア）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: An imp knocks on the heavy door. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**121. window**（窓）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A bat flies in through the window. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**122. table**（テーブル）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A big rat runs under the table. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**123. chair**（椅子）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A king sits on a golden chair. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**124. bed**（ベッド）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small slime hides under the bed. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**125. room**（部屋）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A spider sits in the corner of the room. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**126. town**（町）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Goblins attack the small town at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**127. road**（道）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A kobold waits on the dark road. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**128. bridge**（橋）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Two kobolds guard the stone bridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**129. castle**（城）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The castle stands on a hill. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**130. king**（王）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The king speaks to the people. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**131. queen**（女王）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The queen wears a silver crown. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**132. boy**（少年）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The boy throws a stone at the imp. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**133. girl**（少女）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The girl feeds a baby dragon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**134. man**（男の人）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: An old man walks on the road. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**135. woman**（女の人）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A woman sells fruit at the market. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**136. baby**（赤ちゃん）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The baby sleeps in a small bed. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**137. teacher**（先生）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The teacher shows a map to the class. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**138. doctor**（医者）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The doctor helps the hurt knight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**139. sword**（剣）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: He cuts the slime with his sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**140. key**（鍵）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The goblin drops a gold key. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**141. box**（箱）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A rat hides in the small box. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**142. bag**（かばん）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The traveler carries a heavy bag. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**143. hat**（帽子）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The wizard wears a tall hat. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**144. night**（夜）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Bats fly out of the cave at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**145. morning**（朝）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We wake up early in the morning. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**146. hand**（手）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She holds a lantern in her hand. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**147. see**（見る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I can see a goblin behind the tree. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**148. walk**（歩く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We walk along the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**149. run**（走る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The goblins run away from the village. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**150. jump**（跳ぶ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The imp jumps onto the round table. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**151. swim**（泳ぐ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children swim in the lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**152. fly**（飛ぶ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Bats fly around the dark tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**153. sit**（座る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Please sit by the fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**154. open**（開ける）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Do not open the goblin's old box. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**155. close**（閉める）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Close the gate! The wolves are here. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**156. read**（読む）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I read a book every night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**157. write**（書く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: She writes a letter to the king. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**158. sing**（歌う）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The bard sings a happy song. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**159. play**（遊ぶ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children play in the garden. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**160. help**（助ける）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Help me! A slime is in my bag. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**161. make**（作る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Let's make a small boat. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**162. buy**（買う）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I want to buy a new sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**163. give**（与える）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The king gives a gold ring to the hero. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**164. love**（愛する）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight loves his home. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**165. live**（住む）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Goblins live in the dark cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**166. work**（働く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dwarves work in the mine. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**167. listen**（聞く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Listen! I hear a wolf outside. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**168. speak**（話す）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The wise owl can speak. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**169. small**（小さい）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small imp hides in the tall grass. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**170. new**（新しい）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight has a new shield. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**171. old**（古い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old tower is very tall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**172. hot**（熱い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The soup is too hot. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**173. cold**（冷たい）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The lake is cold in winter. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**174. fast**（速い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The goblin is small but very fast. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**175. strong**（強い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The strong knight lifts a big stone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**176. good**（良い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: This is a good day for a trip. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**177. red**（赤い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A red dragon flies over the town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**178. blue**（青い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The blue lake shines in the sun. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**179. white**（白い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The snow is white and soft. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**180. black**（黒い）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A black crow sits on the roof. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.2 UNCOMMON（100語）

共通のスタイル：fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject

**21. important**（重要な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The stolen map of the orc camp is important. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**22. different**（違う）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Each door leads to a different world. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**23. usually**（たいてい）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons usually rise when the moon appears. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**24. together**（一緒に）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We fight the orcs together at the gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**25. beautiful**（美しい）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The garden is beautiful in the moonlight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**26. necessary**（必要な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Silver is necessary to wound a ghost. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**27. remember**（覚えている）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: I remember the orc who broke this gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**28. decide**（決める）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: He cannot decide which path to take. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**29. continue**（続ける）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The skeletons continue to rise from the ground. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**30. arrive**（到着する）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The bandits arrive at the village before dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**31. possible**（可能な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Is it possible to cross the river? painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**32. future**（未来）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The oracle sees the future in a crystal. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**33. problem**（問題）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs in the hills are a real problem. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**34. reason**（理由）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: There is a reason for the strange light. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**35. experience**（経験）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hunter has experience fighting giant spiders. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**36. learn**（学ぶ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Young mages learn spells at the tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**37. difficult**（難しい）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orc chief is difficult to defeat alone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**38. travel**（旅する）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Merchants travel across the desert. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**39. believe**（信じる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: I believe in the power of words. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**40. forget**（忘れる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Do not forget the ghost in the east wing. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**181. garden**（庭）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Glowing flowers bloom in the secret garden. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**182. kitchen**（台所）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The witch cooks a magic soup in the kitchen. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**183. market**（市場）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The village market is full of strange fruit. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**184. village**（村）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Bandits watch the small village from the hill. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**185. forest**（森）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Tiny lights dance in the dark forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**186. island**（島）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A floating island appears above the clouds. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**187. desert**（砂漠）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The travelers cross the hot desert at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**188. cave**（洞くつ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons guard the treasure inside the cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**189. tower**（塔）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard lives in the tallest tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**190. gate**（門）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs break the stone gate with a log. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**191. ship**（船）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A silver ship sails through the night sky. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**192. station**（駅）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old station is quiet at midnight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**193. hospital**（病院）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The healer works at the hospital on the hill. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**194. library**（図書館）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Ancient books sleep in the silent library. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**195. ticket**（切符）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She shows her ticket to the guard. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**196. map**（地図）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old map shows a hidden island. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**197. letter**（手紙）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A magic letter arrives at the window. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**198. story**（物語）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Grandma tells a story about a dragon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**199. dream**（夢）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A ghost visits the boy in his dream. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**200. question**（質問）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The sphinx asks a difficult question. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**201. answer**（答え）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Only the brave hero knows the answer. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**202. number**（数）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A large number of orcs march on the road. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**203. color**（色）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dragon changes color in the sun. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**204. weather**（天気）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The weather is good for a journey. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**205. summer**（夏）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Fireflies fill the air in summer. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**206. winter**（冬）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Snow falls softly in winter. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**207. holiday**（休日）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The whole town celebrates the holiday. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**208. bicycle**（自転車）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The boy rides a bicycle to school. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**209. brother**（兄弟）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: My brother is a brave knight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**210. sister**（姉妹）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Her sister makes a magic potion. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**211. mother**（母）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: His mother sings by the fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**212. father**（父）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The father teaches his son to swim. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**213. umbrella**（傘）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She opens an umbrella in the rain. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**214. mirror**（鏡）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A pale ghost appears in the old mirror. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**215. candle**（ろうそく）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A single candle keeps the ghosts away. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**216. ring**（指輪）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hero wears a ring of silver. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**217. crown**（王冠）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A skeleton king wears a broken crown. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**218. shield**（盾）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: His shield stops the orc's heavy axe. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**219. wait**（待つ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The gargoyles wait on the roof at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**220. ask**（尋ねる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The traveler asks the way to the castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**221. bring**（持ってくる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Bring silver arrows to fight the ghosts. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**222. carry**（運ぶ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The strong horse can carry two heavy bags. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**223. catch**（つかまえる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: This net can catch even a giant spider. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**224. choose**（選ぶ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: You must choose one path today. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**225. climb**（登る）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Giant spiders climb the tower walls at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**226. cook**（料理する）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: He cooks a fresh fish over the fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**227. cross**（渡る）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs cross the river at the shallow point. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**228. dance**（踊る）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The fairies dance under the moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**229. draw**（描く）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She draws a dragon on the wall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**230. enjoy**（楽しむ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We enjoy a warm meal at the inn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**231. explain**（説明する）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The teacher explains the magic rules. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**232. find**（見つける）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We find skeleton bones in the old well. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**233. follow**（ついていく）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Do not follow the harpy into the cliffs. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**234. join**（加わる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Many heroes join the guild every year. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**235. leave**（去る）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knight must leave the village at dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**236. meet**（会う）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We meet at the old bridge at noon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**237. protect**（守る）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dragon protects the sleeping village. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**238. save**（救う）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hero jumps in to save the child. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**239. search**（探す）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: They search the forest for the lost key. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**240. send**（送る）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard sends a message by bird. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**241. share**（分け合う）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The friends share bread and warm tea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**242. show**（見せる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The guide shows us the secret path. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**243. teach**（教える）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hunter teaches us how to stop zombies. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**244. visit**（訪れる）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Many travelers visit the ancient temple. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**245. careful**（注意深い）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Be careful of the gargoyles above the door. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**246. dangerous**（危険な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orc camp at night is very dangerous. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**247. quiet**（静かな）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The skeleton army waits in quiet rows. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**248. brave**（勇敢な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The brave girl faces the orc alone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**249. clever**（賢い）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A clever witch tricks the hungry troll. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**250. empty**（空の）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Only ghosts live in the empty castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**251. famous**（有名な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The famous bard sings in the town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**252. heavy**（重い）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orc swings a heavy iron club. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**253. tired**（疲れた）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The tired traveler falls asleep quickly. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**254. safe**（安全な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: No road is safe while the bandits ride. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**255. ready**（準備ができた）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The guards are ready for the orc attack. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**256. special**（特別な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: This is a special day for the kingdom. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**257. always**（いつも）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons always rise again after sunset. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**258. never**（決して〜ない）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Never enter the spider cave without fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**259. suddenly**（突然）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Suddenly, a ghost appears behind the door. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**260. finally**（ついに）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Finally, the orc chief falls to the ground. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.3 RARE（100語）

共通のスタイル：rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene

**41. improve**（改善する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With daily practice, the young mage began to improve. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**42. consider**（検討する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The council must consider the vampire's strange offer. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**43. suggest**（提案する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The guide suggested a route that avoids the werewolf woods. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**44. require**（必要とする）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Killing a vampire requires a stake of white ash. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**45. develop**（発展する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The small village developed into a great magical city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**46. increase**（増える）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The number of werewolves increases with every full moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**47. reduce**（減らす）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Silver armor reduces the damage from a werewolf's claws. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**48. environment**（環境）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The elves work hard to protect their forest environment. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**49. relationship**（関係）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The two kingdoms have a strong relationship. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**50. opportunity**（機会）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Dawn gave the hunters their only opportunity against the vampire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**51. responsibility**（責任）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A guardian carries a heavy responsibility. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**52. effective**（効果的な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Holy water proved effective against the wandering wraiths. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**53. available**（利用できる）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Two rooms are available at the inn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**54. achieve**（達成する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She worked for years to achieve her dream. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**55. compare**（比べる）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The merchant compared the two swords carefully. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**56. describe**（描写する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The survivor described the troll that crushed the gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**57. influence**（影響）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The full moon has a strong influence on werewolves. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**58. purpose**（目的）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: What is the purpose of this ancient tower? painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**59. popular**（人気のある）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The bard is popular in every town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**60. challenge**（挑戦）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young hero accepted the vampire lord's challenge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**261. treasure**（宝物）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates buried a golden treasure on the island. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**262. mystery**（謎）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Nobody could solve the mystery of the silent tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**263. secret**（秘密）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A secret door opened behind the old bookshelf. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**264. wisdom**（知恵）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The old wizard shared his wisdom with the young heroes. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**265. victory**（勝利）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The victory over the troll army was celebrated for days. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**266. power**（力）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A strange power flowed through the ancient crystal. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**267. memory**（記憶）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A warm memory returned when she smelled the old flowers. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**268. journey**（旅路）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The long journey across the desert tested their courage. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**269. leader**（指導者）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The leader of the werewolf pack howled on the ridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**270. promise**（約束）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: He made a promise to return before the winter. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**271. danger**（危険）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Danger waited in the shadows of the ruined castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**272. energy**（エネルギー）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Blue energy gathered around the mage's hands. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**273. nature**（自然）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The elves live in harmony with nature. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**274. peace**（平和）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: After the war, peace finally returned to the valley. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**275. freedom**（自由）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The birds flew away with a sense of freedom. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**276. knowledge**（知識）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The library holds the knowledge of a thousand years. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**277. history**（歴史）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The history of the kingdom is carved into the wall. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**278. tradition**（伝統）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Every spring, the village keeps an old tradition. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**279. culture**（文化）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The festival showed the culture of the mountain people. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**280. science**（科学）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the tower, scholars studied science and magic together. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**281. speed**（速さ）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The harpies dived at terrible speed over the cliffs. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**282. evidence**（証拠）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: They found evidence of a vampire in the empty crypt. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**283. expert**（専門家）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: An expert on werewolves examined the tracks by the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**284. ability**（能力）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A vampire has the ability to turn into a bat. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**285. advantage**（利点）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Daylight gives every hunter an advantage over a vampire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**286. damage**（損害）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The troll's club caused heavy damage to the castle gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**287. community**（地域社会）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The whole community worked together to rebuild the town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**288. effort**（努力）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With great effort, the boy lifted the stone door. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**289. invention**（発明）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The inventor's newest invention floated above the workshop. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**290. truth**（真実）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The magic mirror in the hall always tells the truth. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**291. rule**（規則）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Every student must follow the rule of the academy. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**292. region**（地域）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Harpies nest all across the northern region. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**293. discover**（発見する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Explorers discover a hidden city beneath the ice. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**294. destroy**（破壊する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A stone golem destroyed the old wooden bridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**295. hide**（隠す）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Vampires hide in the crypt while the sun is up. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**296. reveal**（明かす）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The map will reveal the way to the lost temple. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**297. survive**（生き残る）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Only two hunters could survive the ogre's ambush. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**298. create**（生み出す）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The artist can create living flowers from light. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**299. gather**（集まる）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Wraiths gather around the old battlefield at midnight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**300. imagine**（想像する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Can you imagine a city floating in the sky? painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**301. explore**（探検する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young heroes explore the ruins of an ancient temple. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**302. defend**（防衛する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The knights defend the gate against the ogre warband. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**303. attract**（引きつける）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Fresh blood will attract every vampire in the valley. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**304. avoid**（避ける）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: We must avoid the cursed swamp at all costs. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**305. belong**（属する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This golden sword belongs to the first king. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**306. cause**（引き起こす）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A single spark can cause a great fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**307. collect**（集める）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The children collect shining stones by the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**308. connect**（つなぐ）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A long bridge connects the two floating islands. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**309. contain**（含む）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The sealed coffin may contain a sleeping vampire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**310. control**（操る）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A werewolf cannot control himself under a full moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**311. depend**（頼る）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The whole village depends on the river for water. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**312. exist**（存在する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Some say dragons no longer exist in this world. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**313. expect**（期待する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Nobody expected a small girl to win the contest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**314. notice**（気づく）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She noticed a basilisk's scales beside the dry well. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**315. offer**（差し出す）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The merchant offered a silver coin for the magic ring. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**316. prepare**（準備する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The village prepares carefully for the night of the werewolf. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**317. prevent**（防ぐ）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Garlic and silver prevent a vampire from entering a house. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**318. recognize**（見分ける）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Even after ten years, he could recognize her voice. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**319. recover**（回復する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It took a week to recover from the troll's heavy blow. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**320. refuse**（断る）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The proud king refused to listen to any advice. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**321. release**（解き放つ）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The hero released the bird from the golden cage. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**322. solve**（解く）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Only a clever mind can solve this old riddle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**323. ancient**（古代の）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Ancient symbols glow on the walls of the cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**324. mysterious**（神秘的な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A mysterious traveler arrived in the village at midnight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**325. powerful**（強力な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The vampire lord is the most powerful creature in this land. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**326. valuable**（貴重な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates stole a valuable jewel from the royal vault. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**327. curious**（好奇心の強い）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The curious kitten followed the glowing light. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**328. enormous**（巨大な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: An enormous troll blocks the narrow mountain pass. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**329. familiar**（見慣れた）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The song was familiar, but she could not remember why. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**330. generous**（寛大な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The generous king gave food to every hungry traveler. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**331. honest**（正直な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The honest merchant returned the lost purse. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**332. ordinary**（ふつうの）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It looked like an ordinary stone, but it glowed at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**333. rare**（まれな）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A rare flower blooms only once in a hundred years. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**334. serious**（真剣な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The hunters gave the village a serious warning about vampires. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**335. useful**（役に立つ）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This old compass is very useful in the fog. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**336. wise**（賢明な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The wise owl gave the travelers good advice. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**337. actually**（実は）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It was actually a friendly dragon, not a monster. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**338. especially**（特に）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The swamp is especially dangerous when the trolls wake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**339. recently**（最近）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Werewolf tracks have appeared near the village recently. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**340. probably**（たぶん）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The vampire will probably return before dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.4 EPIC（100語）

共通のスタイル：very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition

**61. implement**（実行する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The council will implement the plan against the lich tomorrow. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**62. facilitate**（円滑にする）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: A magic bridge facilitates trade between the two kingdoms. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**63. significant**（著しい）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The scholars noticed a significant rise in demon activity. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**64. potential**（可能性）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The boy has great potential as a mage. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**65. perspective**（視点）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: From the tower, she saw the city from a new perspective. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**66. alternative**（代わりの）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: With the necromancer's army at the gate, they took an alternative route. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**67. consequence**（結果）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Raising the dead brought a terrible consequence upon the necromancer. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**68. accurate**（正確な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The old map is accurate down to the last river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**69. efficient**（効率的な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The dwarves built an efficient machine to mine the crystals. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**70. strategy**（戦略）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The general planned a bold strategy against the demon horde. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**71. evaluate**（評価する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The judges evaluate each mage's skill carefully. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**72. analyze**（分析する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The mages analyzed the lich's ancient curse for many weeks. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**73. establish**（設立する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The heroes established a guild in the northern city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**74. maintain**（維持する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The old wards maintain a barrier against the fiends outside. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**75. enhance**（高める）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: This gem can enhance the power of a spell. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**76. criteria**（基準）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The knight met all the criteria for the royal order. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**77. priority**（優先事項）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Destroying the lich's phylactery is our first priority. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**78. comprehensive**（包括的な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The order keeps a comprehensive record of every known demon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**79. demonstrate**（実演する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The master will demonstrate the spell to the students. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**80. assumption**（前提）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Their attack failed on the false assumption that the lich was alone. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**341. concept**（概念）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The scholar explained the concept of time magic to the council. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**342. context**（文脈）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Without the context, the ancient scroll made no sense at all. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**343. contract**（契約）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The warlock signed a contract with a demon under the blood moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**344. decade**（十年間）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The old wall stood unbroken for a decade of endless wars. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**345. dimension**（次元）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Demons poured from another dimension above the burning altar. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**346. economy**（経済）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The queen worked hard to rebuild the economy of the ruined kingdom. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**347. element**（要素）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Each mage in the academy masters one element, such as fire or ice. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**348. enterprise**（企業）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The merchants started a bold enterprise across the eastern sea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**349. equipment**（設備）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The dwarves checked their mining equipment before entering the deep cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**350. expansion**（拡大）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The rapid expansion of the empire worried the border villages. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**351. factor**（要因）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Holy fire was the deciding factor against the undead army. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**352. feature**（特徴）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The most striking feature of the tower is its glowing crystal roof. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**353. foundation**（土台）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: A sleeping demon lies beneath the foundation of the black temple. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**354. framework**（枠組み）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The wizards built a strong framework of rules for the new academy. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**355. function**（機能）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The crystal has a single function: it stores the light of the moon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**356. hypothesis**（仮説）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The scholar tested her hypothesis with a dangerous experiment. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**357. identity**（正体）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The masked general hid his identity as a vampire lord. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**358. impact**（衝撃）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The falling star made a huge impact on the desert floor. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**359. industry**（産業）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The new furnaces brought a golden age to the mining industry. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**360. initiative**（主導権）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The young captain took the initiative and led the rescue mission. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**361. institution**（機関）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The royal institution trains young mages from every land. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**362. investment**（投資）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The king's investment in new ships brought great riches. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**363. mechanism**（仕組み）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: A hidden mechanism opened the door of the ancient vault. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**364. objective**（目標）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The objective is to burn the necromancer's book of names. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**365. outcome**（結末）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Nobody could predict the outcome of the war against the lich. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**366. principle**（原則）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The guild lives by one principle: never leave a friend behind. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**367. procedure**（手順）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The priest followed a careful procedure to banish the demon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**368. proposal**（提案）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The council rejected the queen's proposal to open the gates. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**369. prospect**（見通し）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The prospect of a demon siege emptied the whole city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**370. sector**（部門）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The trade sector of the kingdom grew rapidly after the war. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**371. standard**（標準）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The blacksmith's swords set a new standard for quality. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**372. theory**（理論）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The professor's theory explained how the floating islands stay in the air. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**373. adapt**（適応する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The elves adapted quickly to life in the snowy mountains. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**374. adjust**（調整する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The pilot adjusted the sails to catch the wind. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**375. allocate**（配分する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The queen will allocate more gold to the demon hunters. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**376. anticipate**（予想する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The general anticipated the dread knight's charge at dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**377. apply**（適用する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Mages must apply the same rule to every spell. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**378. assess**（査定する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The knight assessed the fiend's wounds before striking again. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**379. assign**（任命する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The captain assigned two knights to guard the demon seal. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**380. attain**（到達する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: After years of training, she attained the rank of archmage. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**381. conclude**（結論づける）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The council concluded that a lich ruled the frozen city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**382. conduct**（実施する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The cultists conduct dark rites in the tower every night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**383. confirm**（確認する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The scout confirmed that the necromancer's army had crossed the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**384. consult**（相談する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The king consulted the oracle before marching on the lich. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**385. convince**（納得させる）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: She could not convince the council to open the gates. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**386. deliver**（届ける）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The courier delivered the royal message before sunrise. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**387. distribute**（配る）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The monks distribute bread to the poor every morning. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**388. eliminate**（取り除く）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The order will eliminate every cultist hiding in the capital. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**389. emerge**（姿を現す）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: A giant serpent slowly emerged from the dark lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**390. emphasize**（強調する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The teacher emphasized the importance of teamwork before the battle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**391. encounter**（出会う）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The travelers encountered a wandering lich on the frozen pass. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**392. ensure**（確実にする）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Silver wards ensure that no demon enters the inner keep. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**393. estimate**（見積もる）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The engineers estimate that the bridge will take a year to build. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**394. exceed**（上回る）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The demon's strength exceeded everything the knights had imagined. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**395. extend**（延ばす）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The king decided to extend the road to the northern coast. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**396. generate**（発生させる）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The crystal can generate enough energy to light the whole city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**397. illustrate**（例で示す）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The teacher drew a map to illustrate the hero's long journey. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**398. indicate**（示す）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The black runes indicate the place where the lich was buried. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**399. interpret**（解釈する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Only the oracle could interpret the meaning of the strange dream. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**400. investigate**（調査する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The hunters went to investigate the necromancer's silent tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**401. justify**（正当化する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: How can you justify such a dangerous plan? painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**402. modify**（修正する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Can the smith modify this sword to fit a smaller hand? painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**403. adequate**（十分な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The tent was adequate shelter against the mountain wind. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**404. appropriate**（適切な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: It is not appropriate to draw a sword inside the temple. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**405. complex**（複雑な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The lich's curse was so complex that few mages could read it. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**406. consistent**（一貫した）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The archer was consistent, hitting the target every single time. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**407. crucial**（極めて重要な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The next hour is crucial before the demon gate opens. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**408. diverse**（多様な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The market was crowded with diverse peoples from every land. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**409. essential**（不可欠な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Clean water is essential for anyone crossing the desert. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**410. fundamental**（根本的な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Trust is the fundamental rule of a good guild. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**411. innovative**（革新的な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The innovative smith invented a sword that could sing. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**412. relevant**（関連のある）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Only the relevant pages of the ancient book were saved. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**413. sufficient**（足りる）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Three days of food is sufficient for the mountain trip. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**414. ultimate**（究極の）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The ultimate goal is to end the lich king's long reign. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**415. valid**（有効な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The ticket is valid only until the moon sets. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**416. vulnerable**（傷つきやすい）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The lich is vulnerable only when its phylactery breaks. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**417. consequently**（その結果）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The bridge collapsed; consequently, the army had to turn back. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**418. currently**（現在）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: A demon lord is currently sealed beneath the northern mountain. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**419. gradually**（徐々に）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The demon's shadow gradually covered the whole valley. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**420. essentially**（本質的に）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The two spells are essentially the same, but one is faster. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.5 LEGENDARY（100語）

共通のスタイル：masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic

**81. leverage**（活用する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The vampire count leveraged his alliances to seize three human cities. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**82. mitigate**（和らげる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archmage raised a barrier to mitigate the archdemon's burning breath. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**83. acquisition**（買収）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The acquisition of the cursed mines gave the vampire count new power. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**84. stakeholder**（利害関係者）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every stakeholder gathered to decide how to fight the archdemon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**85. compliance**（順守）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild ensured full compliance with the royal safety rules. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**86. revenue**（収益）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The harbor's revenue fell sharply after the vampire raids began. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**87. disruption**（混乱）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archdemon's return caused serious disruption across every trade route. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**88. sustainable**（持続可能な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elves designed a sustainable city that grows together with the forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**89. negotiation**（交渉）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The negotiation with the demon lord ended in blood and fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**90. collaboration**（協力）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The collaboration of mages and smiths produced a legendary sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**91. proactively**（先手を打って）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain proactively reinforced the walls before the demon siege. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**92. substantial**（かなりの）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A substantial part of the army was lost to the undead legion. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**93. constraint**（制約）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages worked within strict constraints of time and mana. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**94. incentive**（報奨）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king offered a golden incentive to anyone who could break the curse. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**95. scalable**（拡張可能な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built a scalable system that could grow with the city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**96. benchmark**（指標）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old champion's record became the benchmark for every young knight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**97. liability**（負債）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: An unpaid debt became a heavy liability for the merchant. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**98. contingency**（不測の事態）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general prepared a contingency plan in case the lich rose again. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**99. deliverable**（成果物）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each apprentice submitted the final deliverable before the deadline. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**100. streamline**（効率化する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guildmaster streamlined the process to save time. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**421. agenda**（議題）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elder placed the dragon threat first on the agenda of the summit. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**422. alliance**（同盟）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The free cities formed an alliance against the archdemon's endless legions. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**423. asset**（資産）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ancient library became the most valuable asset of the kingdom. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**424. audit**（監査）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Royal inspectors conducted a strict audit of the treasury accounts. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**425. brand**（ブランド）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous guild built a brand that every traveler could trust. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**426. budget**（予算）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen approved a large budget for the war against the archdemon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**427. capital**（資本）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchants raised enough capital to build a fleet of sky ships. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**428. client**（顧客）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard promised his client a spell that would never fail. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**429. competitor**（競合他社）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A rival guild became a serious competitor in the crystal trade. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**430. consumer**（消費者）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every consumer in the city wanted a lamp that never burned out. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**431. corporation**（大企業）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mining corporation controlled every mountain from the coast to the desert. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**432. deadline**（締め切り）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The blacksmith worked all night to meet the royal deadline. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**433. demand**（需要）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Demand for silver weapons rose sharply after the vampire count appeared. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**434. dividend**（配当）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each shareholder received a golden dividend at the end of the year. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**435. entrepreneur**（起業家）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The young entrepreneur opened a tavern in the middle of the sky. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**436. headquarters**（本部）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built its headquarters inside a giant hollow tree. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**437. inflation**（インフレ）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Inflation made a loaf of bread cost ten gold coins. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**438. inventory**（在庫）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The dwarf counted every item in the inventory before the caravan left. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**439. manufacturer**（製造業者）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The finest manufacturer of enchanted armor lived in the mountain city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**440. merger**（合併）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merger of the two guilds created the strongest force in the land. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**441. milestone**（節目）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Slaying the vampire count was a milestone in the long war. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**442. partnership**（提携）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The partnership between mages and engineers changed the whole kingdom. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**443. portfolio**（ポートフォリオ）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The banker's portfolio held gold mines, ships, and even a small dragon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**444. productivity**（生産性）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The new enchanted looms doubled the productivity of the weavers. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**445. profit**（利益）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The pirates split the profit equally among the whole crew. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**446. recession**（景気後退）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: During the recession after the demon war, half the port city closed. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**447. reputation**（評判）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Her reputation as an honest healer spread across every kingdom. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**448. subsidiary**（子会社）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The great guild opened a subsidiary in the far eastern harbor. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**449. supplier**（供給業者）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king's chief supplier delivered ten thousand silver arrows before the undead came. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**450. tariff**（関税）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The empire raised a heavy tariff on all goods from the south. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**451. transaction**（取引）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every transaction in the market was recorded in a magic ledger. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**452. warehouse**（倉庫）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The cultists hid a sealed archdemon relic inside the old warehouse. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**453. workforce**（労働力）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The city needed a larger workforce to rebuild the walls the titan broke. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**454. monopoly**（独占）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard's guild held a monopoly on all flying carpets. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**455. accelerate**（加速させる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages used a spell to accelerate the growth of the crops. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**456. accommodate**（収容する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The grand hall could accommodate ten thousand guests at once. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**457. acquire**（手に入れる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The lich tried to acquire the rare book before the order burned it. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**458. align**（足並みをそろえる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two kingdoms agreed to align their armies against the archdemon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**459. amend**（改正する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The council voted to amend the ancient law of the harbor. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**460. approve**（承認する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king will approve the plan only if the council agrees. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**461. authorize**（認可する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the queen can authorize the opening of the sealed demon vault. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**462. commence**（開始する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The final assault on the lich's fortress will commence at dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**463. consolidate**（統合する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general moved to consolidate his forces before the demon legion arrived. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**464. delegate**（委任する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wise queen chose to delegate the harvest to her trusted advisors. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**465. diversify**（多角化する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchant decided to diversify and sell silk as well as spices. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**466. endorse**（支持する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous hero agreed to endorse the new sword shop. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**467. execute**（遂行する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hunters will execute the plan at midnight, when the vampire count sleeps. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**468. expedite**（早める）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king ordered the smiths to expedite the silver arrows for the undead war. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**469. finalize**（最終決定する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two rulers met in the tower to finalize the treaty. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**470. forecast**（予測する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The oracle can forecast the archdemon's attack three days in advance. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**471. initiate**（着手する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen wished to initiate a bold plan to reunite the realms. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**472. invest**（投資する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wealthy duke chose to invest his gold in a fleet of airships. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**473. oversee**（統括する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A trusted knight will oversee the sealing of the demon gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**474. prioritize**（優先する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain had to prioritize saving the children over saving the cargo. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**475. procure**（調達する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The alchemist struggled to procure the holy water needed against the lich. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**476. reimburse**（払い戻す）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king promised to reimburse the farmers for the fields the demons burned. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**477. renew**（更新する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every year, the villagers renew the old pact with the forest spirits. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**478. restructure**（再編する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: After the demon war, the council had to restructure the entire army. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**479. revise**（改訂する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The scholars revise the ancient map whenever a new island appears. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**480. supervise**（監督する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old master will supervise the young apprentices in the forge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**481. terminate**（終了させる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The order decided to terminate the warlock's contract with the archdemon. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**482. undermine**（弱体化させる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Rumors spread by the spy began to undermine the king's authority. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**483. ambitious**（野心的な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ambitious young mage dreamed of ruling the entire academy. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**484. competitive**（競争力のある）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the most competitive guilds survived in the crystal trade. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**485. confidential**（機密の）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general received a confidential report on the archdemon's only weakness. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**486. flexible**（柔軟な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A flexible plan let the army escape when the demons broke through. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**487. lucrative**（もうかる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Selling dragon eggs to collectors was a lucrative but dangerous business. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**488. mandatory**（義務の）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: It is mandatory for every knight to swear the oath before the battle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**489. obsolete**（時代遅れの）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Iron weapons became obsolete once the demons reached the capital. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**490. overdue**（期限を過ぎた）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The debt of the merchant was already overdue by three long years. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**491. profitable**（利益の出る）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The northern trade route proved profitable for the whole guild. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**492. prominent**（著名な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A prominent scholar of the academy opened the great debate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**493. viable**（実行可能な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizards found no viable way to destroy the archdemon's crown. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**494. temporary**（一時的な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The seal on the demon gate is only a temporary fix. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**495. transparent**（透明な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen promised a transparent trial, open to every citizen. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**496. volatile**（不安定な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The volatile mixture of potions could explode at any moment. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**497. accordingly**（それに応じて）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general saw the lich's plan and prepared accordingly. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**498. approximately**（およそ）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The journey to the sky city takes approximately three days. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**499. simultaneously**（同時に）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Two archdemons struck the tower simultaneously from opposite sides. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**500. subsequently**（その後）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hero slew the lich and subsequently sealed the black gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```
