# アイコン作り直し用プロンプト（全12点）

保存先は `assets/ui/icons/` です。ファイル名は下の表のとおりにします。

## 共通の設定
- 比率は **1:1（正方形）**、サイズは 1024x1024。中央に置き、まわりに余白を取る。
- 背景は、透過PNGが出せるサービスなら **透過**。出せない場合は下の「背景の指定」を付けて、単色マゼンタで作る。
- 1点ずつ作るほうがきれいに出ます。最初の1点が気に入ったら、それを参考画像にして「same style, same colors」と頼むと、そろいます。

**背景の指定（末尾に付ける）**
```
on a flat pure magenta #FF00FF background, no gradient, no shadow or glow spilling onto the background, crisp clean edges, no text, no letters
```

## スタイルA：ボタン用のイラストアイコン（4点）
先頭に付ける共通文:
```
glossy fantasy mobile game UI icon, gold and sapphire blue palette, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view, centered with generous margin,
```

| ファイル名 | 用途 | 続きのプロンプト |
|---|---|---|
| `icon_study` | 勉強ボタン | `an open magic book with softly glowing pages, tiny rune symbols floating above it, gold-trimmed cover` |
| `icon_cards` | カードボタン | `a fan of three fantasy trading cards, gold edges, a blue crystal diamond emblem on the front card` |
| `icon_gacha` | ガチャのパック | `a magical card pack shaped like a small closed spellbook, gold compass-star emblem in the center, floating blue and purple crystals around it, magical glow (4:3 composition)` |
| `icon_coin` | コイン（ヘッダー・価格表示など全画面で共通） | `a round gold coin, slightly tilted 3/4 view, an eight-point compass star engraved in the center with a small sapphire gem, polished beveled rim with fine milled edge, warm rim light and soft highlight, rich metallic shading, subtle drop shadow` |

## スタイルB：ライン（線）アイコン（7点）
先頭に付ける共通文:
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color (#BFD4FF) with a faint blue glow, rounded line caps, simple and readable at small size, centered with generous margin,
```

| ファイル名 | 用途 | 続きのプロンプト |
|---|---|---|
| `stat_words` | 総単語数 | `an open book with a small sparkle` |
| `stat_ok` | 覚えた | `a circle with a check mark inside` |
| `stat_streak` | 連続学習 | `a single flame` |
| `nav_home` | 下タブ：ホーム | `a house` |
| `nav_study` | 下タブ：勉強 | `an open book` |
| `nav_gacha` | 下タブ：ガチャ | `a compass star inside a thin circle` |
| `nav_cards` | 下タブ：カード | `two overlapping playing cards with a small diamond mark` |

## 設定ボタン
| ファイル名 | 続きのプロンプト（共通文なしで、そのまま使う） |
|---|---|
| `icon_gear` | `a white and silver cog gear icon centered inside a thin gold-outlined diamond (rhombus) frame, fantasy game UI style, soft glow, no text` に「背景の指定」を付ける |

## まとめて作る場合（統一感を出しやすい）
下のタブ用5点を、1枚にまとめる例です。できた画像を私に渡してもらえれば、切り分けます。
```
a set of 5 minimal fantasy game UI line icons in one horizontal row on one image, equal size, equal spacing:
a house, an open book, a compass star inside a circle, two overlapping playing cards with a diamond mark, a brain outline.
thin uniform stroke, light ice-blue (#BFD4FF) with a faint blue glow, consistent style,
on a flat pure magenta #FF00FF background, no text, no letters
```
統計3点（本・チェック・炎）、ボタン3点（本・カード・脳）も、同じ形で作れます。

## 仕上げ
- 生成した画像を私に渡してください。背景を透明にして、余白を切り、指定のファイル名の PNG にして返します（この変換は、渡してもらってから行います）。
- 下タブのアイコンは、選択中は明るく光る処理をゲーム側で行うので、明るい水色のまま1種類だけで大丈夫です。
