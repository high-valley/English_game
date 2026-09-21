# カード画像のプロンプト

※番号は単語のID（通し番号）です。

## 使い方
1. 各プロンプトを、画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. できた画像を `assets/cards/単語.webp` で保存する（例：`assets/cards/bird.webp`、1200x800 前後、200〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に、単語の名前を追加する（例：`"apple","cat","bird"`）

プロンプトは、カードの例文（`words.js` の `ex`）から作っています。例文の場面が、そのまま絵になります。レアリティが低いほど簡素に、高いほど豪華になります。画像を作らない単語は、背景付きの絵文字が表示されます。

## 優先順位のおすすめ
- 画像が目立つのは、ガチャで出る高レアと、図鑑で見るカードです
- COMMON は数が多いので、まず数語だけ作り、絵柄を確認してから増やすのがおすすめです


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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The brave dog guards the gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**5. house**（家）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small house stands by the lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The cook makes hot food for the guests. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**9. friend**（友達）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The hero helps his best friend. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The moon shines on the lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**13. car**（車）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The old car stops at the bridge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**14. go**（行く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We go to the forest at dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**15. come**（来る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Come here and see the stars. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**16. eat**（食べる）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The giant likes to eat bread. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**17. drink**（飲む）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Drink this tea and rest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**18. sleep**（眠る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The baby dragon sleeps all day. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**19. happy**（幸せな）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The princess is happy today. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**20. big**（大きい）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A big bird flies above the town. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight rides a white horse. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The wizard lights a small fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The knight opens the heavy door. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**121. window**（窓）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A light shines in the window. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**122. table**（テーブル）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The map lies on the table. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**123. chair**（椅子）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A king sits on a golden chair. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**124. bed**（ベッド）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The child goes to bed early. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**125. room**（部屋）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The room is warm and quiet. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**126. town**（町）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small town lies by the lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**127. road**（道）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The road goes to the castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**128. bridge**（橋）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A stone bridge crosses the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The boy finds a magic key. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The hero holds a bright sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**140. key**（鍵）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A gold key opens the gate. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**141. box**（箱）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small box lies in the cave. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The stars shine bright at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: I can see the castle from here. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**148. walk**（歩く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: We walk along the river. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**149. run**（走る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The fox runs into the forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**150. jump**（跳ぶ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The boy jumps over the stream. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**151. swim**（泳ぐ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The children swim in the lake. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**152. fly**（飛ぶ）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A dragon can fly above the clouds. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**153. sit**（座る）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Please sit by the fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**154. open**（開ける）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Open the door and come in. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**155. close**（閉める）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Close the gate at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Please help me find my key. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Elves live in the old forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**166. work**（働く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The dwarves work in the mine. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**167. listen**（聞く）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: Listen to the sound of the sea. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**168. speak**（話す）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The wise owl can speak. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**169. small**（小さい）
```
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: A small fox hides in the grass. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
simple fantasy illustration, one clear subject, calm simple background, minimal effects, soft colors, little decoration. Scene: The horse is very fast. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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


## Lv.2 UNCOMMON（20語）

共通のスタイル：fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject

**21. important**（重要な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: This old map is very important. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**22. different**（違う）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Each door leads to a different world. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**23. usually**（たいてい）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard usually wakes up before dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**24. together**（一緒に）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We travel together to the castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**25. beautiful**（美しい）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The garden is beautiful in the moonlight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**26. necessary**（必要な）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A strong rope is necessary for the climb. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**27. remember**（覚えている）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: I remember the way home. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**28. decide**（決める）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: He cannot decide which path to take. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**29. continue**（続ける）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knights continue their journey at dawn. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**30. arrive**（到着する）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The travelers arrive at the gate at night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The villagers have a problem with the well. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**34. reason**（理由）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: There is a reason for the strange light. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**35. experience**（経験）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old knight has years of experience. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**36. learn**（学ぶ）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Young mages learn spells at the tower. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**37. difficult**（難しい）
```
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The spell is difficult to cast. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
fantasy illustration with a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Do not forget your lantern. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.3 RARE（20語）

共通のスタイル：rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene

**41. improve**（改善する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With daily practice, the young mage began to improve. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**42. consider**（検討する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The king will consider the offer carefully. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**43. suggest**（提案する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The old wizard suggested a safer route through the forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**44. require**（必要とする）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This spell requires a rare crystal. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**45. develop**（発展する）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The small village developed into a great magical city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**46. increase**（増える）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The number of stars increases every night. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**47. reduce**（減らす）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The shield reduces the damage from the fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A rare opportunity appeared before the young knight. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**51. responsibility**（責任）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A guardian carries a heavy responsibility. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**52. effective**（効果的な）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The potion was effective against the poison. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The traveler described the dragon to the villagers. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**57. influence**（影響）
```
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The moon has a strong influence on the tides. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
rich fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young hero accepted the challenge. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.4 EPIC（20語）

共通のスタイル：very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition

**61. implement**（実行する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The council will implement the new plan tomorrow. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**62. facilitate**（円滑にする）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: A magic bridge facilitates trade between the two kingdoms. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**63. significant**（著しい）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The wizard noticed a significant change in the stars. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: When the gate was sealed, they found an alternative route. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**67. consequence**（結果）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The wizard faced the consequence of his forbidden spell. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The queen studied the map and planned a bold strategy. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**71. evaluate**（評価する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The judges evaluate each mage's skill carefully. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**72. analyze**（分析する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The scholar analyzed the ancient runes for weeks. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**73. establish**（設立する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The heroes established a guild in the northern city. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**74. maintain**（維持する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The guards maintain the walls of the castle. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Protecting the villagers is our first priority. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**78. comprehensive**（包括的な）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The library holds a comprehensive guide to magic. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**79. demonstrate**（実演する）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: The master will demonstrate the spell to the students. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**80. assumption**（前提）
```
very luxurious epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments, complex composition. Scene: Their plan was based on a false assumption. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```


## Lv.5 LEGENDARY（20語）

共通のスタイル：masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic

**81. leverage**（活用する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchant guild leveraged its alliances to expand into new markets. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**82. mitigate**（和らげる）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archmage raised a barrier to mitigate the damage of the dragon's fire. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**83. acquisition**（買収）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The acquisition of the rival guild doubled the kingdom's trade. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**84. stakeholder**（利害関係者）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every stakeholder gathered at the round table to discuss the kingdom's future. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**85. compliance**（順守）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild ensured full compliance with the royal safety rules. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**86. revenue**（収益）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The harbor's revenue grew after the new ships arrived. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**87. disruption**（混乱）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A sudden storm caused serious disruption to the trade routes. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**88. sustainable**（持続可能な）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elves designed a sustainable city that grows together with the forest. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**89. negotiation**（交渉）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: After a long negotiation, the two kingdoms signed a peace treaty. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**90. collaboration**（協力）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The collaboration of mages and smiths produced a legendary sword. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**91. proactively**（先手を打って）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain proactively reinforced the walls before the siege. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**92. substantial**（かなりの）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The dragon's hoard held a substantial amount of gold. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
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
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general prepared a contingency plan in case the bridge fell. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**99. deliverable**（成果物）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each apprentice submitted the final deliverable before the deadline. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```

**100. streamline**（効率化する）
```
masterpiece grand legendary fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guildmaster streamlined the process to save time. painterly anime style, 3:2 landscape composition, main subject centered with margin, no text, no letters, no border, no frame
```
