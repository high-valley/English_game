# ガチャ画面・開封演出の画像プロンプト

保存先は `assets/ui/` です。置くだけで自動で使われます（無い場合は今の表示のまま）。

## 共通の設定
- 背景は、透過PNGが出せるなら **透過**。出せない場合は、下の「背景の指定」を付ける。
- 光る絵（魔法陣）は **真っ黒の背景** で作ってください。私が黒を透明にします。
- 名前や文字は、画像に入れない。

背景の指定
```
on a flat pure magenta #FF00FF background, no gradient, no glow spilling onto the background, crisp clean edges, no text
```

## 1. gacha_pack（パック画像）
- ファイル名：`gacha_pack.webp`（または .png）／縦長 2:3（例 1024x1536）
- 開封演出で、**上から約20%のところ**をギザギザに破って開きます。上のシール部分が20%になるように頼みます。
```
a sealed magical trading card booster pack, front view, portrait 2:3, glossy foil pouch in deep sapphire blue with gold filigree borders, a glowing golden compass-star emblem in the center, a serrated heat-seal crimp strip across the top 20 percent of the pack, small crystal shards on the sides, luxurious fantasy game asset, symmetrical, no text, no letters, on a flat pure magenta #FF00FF background, crisp clean edges
```

## 2. card_back（カード裏面）
- ファイル名：`card_back.webp`／縦長 3:4（例 1152x1536）
- 今のカード枠の絵柄に合わせるため、`card_frame` の画像を参考画像として渡すとそろいます。
```
trading card back design, portrait 3:4, dark navy leather texture, ornate gold filigree border with small sapphire gems at the corners, a large glowing golden compass-star inside a circular ring at the center, symmetrical, luxurious fantasy, the card fills the whole image with rounded corners, no text, no letters, everything outside the card is flat pure magenta #FF00FF
```

## 3. magic_circle（魔法陣・省略可）
- ファイル名：`magic_circle.webp`／正方形 1:1（例 1024x1024）
- 画像を置かない場合は、レアリティごとに色が変わる魔法陣（コードで描画）が出ます。**画像を置くと金色1色になります**（色分けを残したいなら、置かないのがおすすめです）。
```
top-down golden magical summoning circle, thin precise linework, concentric rings, runic glyphs, star-polygon geometry, glowing gold lines, perfectly symmetrical, flat 2D design, on a pure solid black background, no text, no letters, no shadows
```

## 4. gacha_bg（ガチャ画面と演出の背景）
- ファイル名：`gacha_bg.webp`／縦長 9:16（例 1080x1920）
- 中央（パックが重なる）と下半分（パネルが重なる）は、控えめにしてもらうと見やすくなります。
```
a vast dark arcane library sanctum at night, a glowing stone summoning altar in the center, faint golden runes on the floor, towering bookshelves and gothic arches, floating dust motes, deep navy and violet tones with warm gold light, dramatic light rays from above, painterly, highly detailed, vertical 9:16 composition, the center and the lower half kept calm and slightly darker for UI overlay, no text, no letters, no characters
```
※作らない場合は、ホームの背景を暗くして代わりに使います。

## 画像がいらないもの（コードで作成済み）
光、光線、破片、火の粉、フラッシュ、揺れ、レアリティ表示。
