# assets/ui/ ― 生成AI画像の置き場

ここに下のファイル名で画像を置くだけで、ゲームが自動で使います（無ければ従来のデザイン）。
拡張子は `.webp` か `.png`。文字は画像に入れず、文字・数字はゲーム側で描きます。

| ファイル名 | 用途 | 推奨サイズ |
|---|---|---|
| `card_frame` | カード枠（全レア度共通） | 900x1200（縦横 3:4） |
| `card_frame_common` `_uncommon` `_rare` `_epic` `_legendary` | レア度別の枠（あれば共通より優先） | 同上 |
| `home_bg` | ホーム上部の大きな絵 | 1200x600 程度（横長） |
| `home_bg_day` | ホームの昼の背景（日本時間 6〜18時。省略可。無ければ昼も `home_bg`） | 縦長 9:16 |
| `study_bg_day` / `gacha_bg_day` / `cards_bg_day` | 勉強・ガチャ・図鑑の昼の背景（省略可。無ければ昼も夜の絵） | 縦長 9:16 |
| `splash_bg` | 起動画面の背景 | 900x1600（縦長） |
| `gacha_bg` | ガチャ画面と開封演出の背景 | 900x1600（縦長） |
| `study_bg` | 勉強画面の背景（適用済み。省略可。無ければ `home_bg`） | 縦長 9:16 |
| `cards_bg` | カード図鑑の背景（適用済み。省略可。無ければ `home_bg`） | 縦長 9:16 |
| `app_bg` | 全画面の背景 | 900x1600（縦長） |
| `gacha_pack` | ガチャのパック（透過。詳細は `gacha_prompts.md`） | 縦長 2:3 |
| `card_back` | カード裏面（透過） | 縦長 3:4 |
| `magic_circle` | 魔法陣（透過。省略可） | 正方形 |
| `logo_title` | 題名ロゴ（透過WebP。ホームと起動画面） | 横長 3:1（幅 1100 程度） |
| `logo_emblem` | 起動画面のマーク（透過WebP） | 縦長（幅 640 程度） |
| `favicon.png` | ブラウザのタブのアイコン（`index.html` から読み込み） | 192x192 |

## カード枠の作り方
レイアウトのガイド画像（`_layout_guide.png` / `_layout_labeled.png`）は、枠が完成したので削除しました。作り直す時は、今の `card_frame.webp`（RARE の枠）を参考画像として渡してください。

1. 今の `card_frame.webp` を、画像生成AIに参考画像として渡す。
2. 「絵の窓」は**純マゼンタ #FF00FF のベタ塗り**にしてもらう。ゲームが自動で透明にして、窓の位置も検出します。
3. 名前プレート・情報パネル・Lv バー・バッジの位置は、参考画像と同じ場所に「空の飾り枠」として作ってもらう。ずれる場合は `js/ui_images.js` の `LAYOUT_OVERRIDE` で微調整できます。

プロンプト例:
```
ornate fantasy trading card frame following the reference layout exactly,
gold filigree border, navy blue panels, 3:4 portrait,
the art window filled with flat pure magenta #FF00FF (no gradient, no shading),
empty decorative plates and panels, no text, no letters, no characters,
symmetrical, highly detailed, front view
```
レア度別にする時は、気に入った1枚を参考画像にして「同じ構図で金を銀／青／紫／赤の基調に」と頼むと揃えやすいです。

## 注意
- 枠はカードの縁ぎりぎりでトリミングしてください（外側に余白があるとずれます）。
- 枠の処理は、公開URL（GitHub Pages など）で動きます。パソコン内の `file://` で開いた場合は、セキュリティ制限で枠画像が使われません。
- 画像を差し替えたら、ブラウザを再読み込み（キャッシュ更新）してください。
- 枠を差し替える時は、今の `card_frame*.webp` を参考画像として渡すと、レア度別の5枚を揃えやすいです。

## home_bg（ホーム画面の全画面背景）
- ホームの背景一面に使います。**縦長 9:16（例 1080x1920）** がおすすめです（端は少し切れます）。
- 下半分にはパネルやボタンが重なるので、下側は暗めで細かい描き込みを控えめにしてもらうと見やすくなります。
- 左上にロゴ、中央左にキャッチコピーが重なるので、その辺りも空けておきます。
- `splash_bg`（起動画面）も同じ絵で構いません。
```
epic fantasy night landscape, a grand gothic castle city on a cliff with a glowing waterfall,
huge glowing moon, floating islands, deep blue and purple starry sky, magical lights,
calm reflective lake in the lower part, dark silhouetted trees framing the sides,
painterly, highly detailed, vertical 9:16 composition,
the upper left and the lower half kept calm and darker for UI overlay,
no text, no letters, no characters, no UI
```


## home_bg_day などの昼の背景
- 背景は、**日本時間の 6〜18時は `〜_day`（昼）、18〜6時は今までの絵（夜）**に切り替わります。
  ホーム・勉強・ガチャ・図鑑の4画面すべて（起動画面は夜のまま）。開いたまま6時・18時をまたいだときは、1分以内にふわっと入れ替わります
- 勉強・ガチャ・図鑑も、**今の夜の絵を参考画像として渡し、同じ部屋・同じ構図の昼の絵**にしてもらいます
- **今の `home_bg`（夜の城）を参考画像として一緒に渡し、同じ城・同じ構図の昼の絵**にしてもらいます。
  夜と昼で景色が変わらないので、同じ場所の時間が変わったように見えます
- 置き方・注意は `home_bg` と同じ（縦長 9:16、左上にロゴ、中央左にキャッチコピー、下半分にパネル）。
  **昼は空が明るいので、下半分を明るくしすぎない**（白い文字とパネルが読みにくくなる）
```
the same grand gothic castle city on a cliff with a waterfall as the reference image, but in bright daytime,
warm morning sunlight, clear blue sky with soft white clouds, floating islands, calm lake reflecting the sky
in the lower part, green trees framing the sides, keep the same composition and camera position as the reference,
painterly epic fantasy, highly detailed, vertical 9:16 composition,
the upper left kept calm for a logo, the lower half kept calm and slightly darker for UI overlay,
no moon, no stars, no text, no letters, no characters, no UI
```
置いたら `python3 tools/bake_assets.py` を実行し、`ASSET_V` を上げる。

## study_bg / cards_bg（勉強・カード図鑑の背景）
**適用済み**：勉強は「魔法学院の図書室（浮かぶ魔導書と月の窓）」、図鑑は「魔導書の宝物庫（宝箱と水晶の柱廊）」。
差し替えるときは、下のプロンプトを参考にしてください。置かなくても動きます（`home_bg` が使われます）。

- **縦長 9:16（1080x1920）**。`home_bg` と同じ世界・同じ色調にすると、画面を移動しても違和感がありません
- どちらも**文字とパネルが重なる**ので、**中央から下は暗め・静か**にしてもらいます
- 勉強は画面の上半分にレベルのパネル、中央に大きな問題パネルが載ります
- 図鑑は上に検索パネル、その下いっぱいにカードが並びます

`study_bg` のプロンプト例:
```
epic fantasy library interior at night, towering bookshelves of an ancient wizard academy,
floating glowing books and runes drifting in the air, tall gothic windows with moonlight,
deep blue and purple palette with warm gold candlelight, painterly, highly detailed,
vertical 9:16 composition, the center and lower half kept dark, calm and simple for UI overlay,
no text, no letters, no characters, no UI
```

差し替えるときの注意（今回わかったこと）:
- 背景は**表示領域に固定**して切り出します（`#bg` は `position:fixed`）。
  絵の見せ場は**上半分**に置いてもらうと、パネルに隠れずに見えます
- 勉強は中央に大きな問題パネル、図鑑は上の検索パネルの下いっぱいにカードが並びます
- 図鑑はカードそのものが主役なので、背景は勉強より強く暗くしています（`.is-cards #bg:after`）。
  明るい絵を入れてもカードの枠が負けないようになっています

`cards_bg` のプロンプト例:
```
epic fantasy treasury vault at night, a vast stone hall of an ancient grimoire archive,
glowing crystals and gold ornaments on the walls, soft magical dust in the air,
deep navy and purple palette with gold accents, painterly, highly detailed,
vertical 9:16 composition, kept dark and uncluttered overall so cards placed on top stay readable,
no text, no letters, no characters, no UI, no cards
```

## アイコン画像（assets/ui/icons/）
同じファイル名の PNG（透過）を置くと差し替わります。無い場合は絵文字が表示されます。

| ファイル名 | 用途 |
|---|---|
| `icon_study` `icon_cards` | ホームの2つのボタン（推奨 約 200x200） |
| `icon_gacha` | ホームのガチャパネルのパック画像（推奨 約 500x430、縁は透明にぼかす） |
| `icon_coin` | コイン（ヘッダー・価格表示） |
| `icon_gear` | 設定ボタン |
| `stat_words` `stat_ok` `stat_streak` | ホームの統計（コレクション・覚えた・連続学習） |
| `nav_home` `nav_study` `nav_gacha` `nav_cards` | 下のタブ（4つ。推奨 約 120x120） |

現在入っているアイコンは、参考にしてくれたホーム画面の画像から切り出したものです。

### AIでアイコンを作り直す（マゼンタ背景 → 自動で透過）
画像生成AIは透過PNGを安定して出せないので、**背景を純マゼンタ #FF00FF のベタ塗り**にしてもらい、
ゲーム側で透過します。

- **個別ファイル**：マゼンタ背景の画像を、上の表と同じファイル名（`icon_study.png` など）で置けば、
  自動で透過して**余白も詰めます**（＝どのアイコンも同じ大きさに見えるようにそろう）。
- **シート**：1枚に格子状に並べた画像を置くと、自動で切り分けて全部に割り当てます。
  個別ファイルがあれば、そちらが優先です。
- **すでに透過している画像は、そのまま使われます**（加工しません）。
  紫や青の発光はマゼンタと見分けがつかないため、透過済みの絵に処理をかけると光の部分が削れてしまいます。
  そのため「透過を持っているか」で判定し、持っていれば触りません。
  → **余白を自動でそろえたい場合は、透過PNGではなくマゼンタ背景で渡してください。**

| ファイル名 | 並び順（左→右、上→下） |
|---|---|
| `icons/sheet_main.png`（3列×2行、5個） | 勉強(開いた本) / カード(トランプ) / ガチャ(カードパック) / コイン / 設定(歯車) |
| `icons/sheet_small.png`（4列×2行、7個） | コレクション(積んだ本) / 覚えた(チェック) / 連続学習(炎) / ホーム(家) / 勉強(開いた本) / ガチャ(羅針盤) / カード(トランプ) |

※ シートは**個数が合わないと1個も使われません**（コンソールに警告が出ます）。
　 確実なのは個別ファイルです。プロンプトは `icon_prompts.md` にあります。

プロンプト例（sheet_main）:
```
a set of exactly 5 glowing fantasy game UI icons arranged in a grid of 3 columns and 2 rows,
in this order: an open magic book, a fan of playing cards,
a glowing card pack booklet with a compass star, a gold coin, a gear,
gold and blue palette with soft glow, each icon separate with wide empty gaps between them,
flat pure magenta #FF00FF background, no text, no labels, no numbers, no shadows on the background
```
sheet_small は「5」→「7」、「3 columns and 2 rows」→「4 columns and 2 rows」に変え、
`a book with sparkles, a check mark in a circle, a flame, a house, an open book, a compass, playing cards`
の順にして、「thin gold and blue line-art style, small simple icons」を足します。

※ 数が合わないとコンソールに警告が出て、シートは使われません（間隔を広げて作り直してください）。
