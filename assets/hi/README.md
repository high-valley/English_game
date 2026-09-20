# assets/ui/ ― 生成AI画像の置き場

ここに下のファイル名で画像を置くだけで、ゲームが自動で使います（無ければ従来のデザイン）。
拡張子は `.webp` か `.png`。文字は画像に入れず、文字・数字はゲーム側で描きます。

| ファイル名 | 用途 | 推奨サイズ |
|---|---|---|
| `card_frame` | カード枠（全レア度共通） | 900x1200（縦横 3:4） |
| `card_frame_common` `_uncommon` `_rare` `_epic` `_legendary` | レア度別の枠（あれば共通より優先） | 同上 |
| `home_bg` | ホーム上部の大きな絵 | 1200x600 程度（横長） |
| `splash_bg` | 起動画面の背景 | 900x1600（縦長） |
| `gacha_bg` | ガチャ画面と開封演出の背景 | 900x1600（縦長） |
| `app_bg` | 全画面の背景 | 900x1600（縦長） |

## カード枠の作り方
1. `_layout_guide.png`（文字なし）を、画像生成AIに参考画像として渡す。`_layout_labeled.png` は人が見る用（AIには渡さない）。
2. 「絵の窓」は**純マゼンタ #FF00FF のベタ塗り**にしてもらう。ゲームが自動で透明にして、窓の位置も検出します。
3. 名前プレート・情報パネル・Lv バー・バッジの位置は、ガイドと同じ場所に「空の飾り枠」として作ってもらう。ずれる場合は `js/ui_images.js` の `LAYOUT_OVERRIDE` で微調整できます。

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
- `_layout_*.png` は不要になったら削除して構いません。
