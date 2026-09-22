# アイコン作り直し用プロンプト（全12点）

## 渡し方
- **背景は純マゼンタ #FF00FF のベタ塗り**にしてもらう。ゲーム側が自動で透過し、**余白も詰めて大きさをそろえる**
  （`ui_images.js` の `uiIcon`）。透過PNGで渡すと、この「そろえる」処理が効かないので**マゼンタで渡す**
- **1個ずつ個別ファイル**で、下の表のファイル名どおりに `assets/ui/icons/` に置く（例：`stat_streak.png`）
- **正方形**、512x512 か 1024x1024 の PNG。余白は自動で詰まるので、多めに取って構わない
- 文字・数字は入れない（ゲーム側で描く）

## 今のアイコンの直したい点
| 対象 | 問題 |
|---|---|
| `stat_streak` | **連続学習（🔥）なのに照準マークになっている**。炎にする |
| `stat_words` | `nav_study` と同じ「開いた本」で見分けがつかない。**積み重ねた本**にして分ける |
| `icon_cards` | 宝石だけ緑で、紺・金・青の基調から浮いている。**青（サファイア）**にそろえる |
| `icon_gear` | 平たい白灰色で、他のイラストアイコンより安っぽい。金と銀＋青い宝石にする |
| 全体 | 余白の取り方がバラバラで、見た目の大きさが揃っていない → マゼンタ背景で作り直せば自動でそろう |

## すべてに付ける共通の指定（末尾に足す）
```
flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background,
square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

---

## スタイルA：ボタン用のイラストアイコン（5点）
先頭に付ける共通文:
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents,
soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view,
```

| ファイル名 | 用途 | 表示サイズ | 続きのプロンプト |
|---|---|---|---|
| `icon_study` | ホームの「勉強」ボタン／勉強画面のレベル欄 | 約49px・22px | `an open magic book with softly glowing pages, tiny rune symbols floating above it, gold-trimmed cover` |
| `icon_cards` | ホームの「カード」ボタン | 約49px | `a fan of three fantasy trading cards, gold edges, a blue sapphire diamond emblem on the front card` |
| `icon_gacha` | ホームのガチャパネルのパック | **約129px（最大）** | `a magical card pack shaped like a closed spellbook, gold compass-star emblem in the center, floating blue and purple crystals around it, strong magical glow` |
| `icon_coin` | ヘッダーのコイン／価格表示 | **22px・16px・14px（最小）** | `a round gold coin, slightly tilted 3/4 view, an eight-point compass star engraved in the center with a small sapphire gem, polished beveled rim with fine milled edge, warm rim light` |
| `icon_gear` | 設定ボタン | 38px | `a silver and gold cog gear inside a thin gold-outlined diamond frame, a small sapphire gem at the center of the gear` |

- `icon_gacha` は**いちばん大きく出る**ので、いちばん描き込んでよい
- `icon_coin` は**14pxまで小さくなる**ので、文様を細かくしすぎない

---

## スタイルB：ライン（線）アイコン（7点）
**すべて 26px 前後の小ささで表示される。** 形が一目で分かることを最優先にする。

先頭に付ける共通文:
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow,
rounded line caps, very simple and readable at about 26 pixels, single object, centered,
```

| ファイル名 | 用途 | 続きのプロンプト |
|---|---|---|
| `stat_words` | ホームの統計：**コレクション** | `a stack of three closed books` |
| `stat_ok` | ホームの統計：覚えた | `a circle with a check mark inside` |
| `stat_streak` | ホームの統計：連続学習 | `a single flame` |
| `nav_home` | 下タブ：ホーム | `a simple house` |
| `nav_study` | 下タブ：勉強 | `an open book` |
| `nav_gacha` | 下タブ：ガチャ | `an eight-point compass star inside a thin circle` |
| `nav_cards` | 下タブ：カード | `two overlapping playing cards with a small diamond mark` |

- `stat_words`（積み重ねた本）と `nav_study`（開いた本）は、**必ず別の形**にする
- `nav_*` の4つは下タブに横並びになるので、線の太さと大きさをそろえる

---

## 置いたあとの確認
1. `assets/ui/icons/` に、上のファイル名どおりに置く
2. ブラウザを再読み込みする（HTTPで開く。`file://` では処理が効かない）
3. マゼンタが残って見える場合は、背景が純マゼンタになっていない（グラデーションや影が掛かっている）。
   背景を「完全に均一なベタ塗り」で作り直してもらう
