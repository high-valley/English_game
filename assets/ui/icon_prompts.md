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

## そのまま貼れる全文（12個）

1個ずつコピーして画像生成AIに投げる。保存名は各見出しのファイル名にする。

### スタイルA：イラストアイコン（5個）

**1. `icon_study.png`**（勉強ボタン／勉強画面のレベル欄／表示 約49px・22px）
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view, an open magic book with softly glowing pages, tiny rune symbols floating above it, gold-trimmed cover. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**2. `icon_cards.png`**（ホームの「カード」ボタン／表示 約49px）
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view, a fan of three fantasy trading cards, gold edges, a blue sapphire diamond emblem on the front card. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**3. `icon_gacha.png`**（ホームのガチャパネルのパック／表示 約129px（最大））
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view, a magical card pack shaped like a closed spellbook, gold compass-star emblem in the center, floating blue and purple crystals around it, strong magical glow. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**4. `icon_coin.png`**（ヘッダーのコイン／価格表示／表示 22px・16px・14px（最小））
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view, a round gold coin, slightly tilted 3/4 view, an eight-point compass star engraved in the center with a small sapphire gem, polished beveled rim with fine milled edge, warm rim light. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**5. `icon_gear.png`**（設定ボタン／表示 38px）
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view, a silver and gold cog gear inside a thin gold-outlined diamond frame, a small sapphire gem at the center of the gear. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

### スタイルB：ラインアイコン（7個）

**6. `stat_words.png`**（ホームの統計：コレクション／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, a stack of three closed books. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**7. `stat_ok.png`**（ホームの統計：覚えた／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, a circle with a check mark inside. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**8. `stat_streak.png`**（ホームの統計：連続学習／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, a single flame. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**9. `nav_home.png`**（下タブ：ホーム／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, a simple house. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**10. `nav_study.png`**（下タブ：勉強／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, an open book. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**11. `nav_gacha.png`**（下タブ：ガチャ／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, an eight-point compass star inside a thin circle. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

**12. `nav_cards.png`**（下タブ：カード／表示 約26px）
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object, two overlapping playing cards with a small diamond mark. flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

---

### 組み立て方（参考）
上の全文は、次の3つをつないだもの。個別に作り直すときの参考に。

共通の頭（スタイルA）:
```
glossy fantasy mobile game UI icon, deep navy blue and gold palette with sapphire blue accents, soft inner glow, crisp clean outline, subtle metallic highlights, single object, front view,
```
共通の頭（スタイルB）:
```
minimal fantasy game UI line icon, thin uniform stroke, light ice-blue color #BFD4FF with a faint blue glow, rounded line caps, very simple and readable at about 26 pixels, single object,
```
共通の末尾（全12個）:
```
flat pure magenta #FF00FF background, completely uniform, no gradient, no shadow on the background, square composition, subject centered, no text, no letters, no numbers, no border, no frame
```

---

## 作るときの注意
- `icon_gacha` は**いちばん大きく出る**（約129px）ので、いちばん描き込んでよい
- `icon_coin` は**14pxまで小さくなる**ので、文様を細かくしすぎない
- ライン系7個はすべて**26px前後**。形が一目で分かることを最優先にする
- `stat_words`（積み重ねた本）と `nav_study`（開いた本）は、**必ず別の形**にする
- `nav_*` の4つは下タブに横並びになるので、線の太さと大きさをそろえる

## 置いたあとの確認
1. `assets/ui/icons/` に、上のファイル名どおりに置く
2. ブラウザを再読み込みする（HTTPで開く。`file://` では処理が効かない）
3. マゼンタが残って見える場合は、背景が純マゼンタになっていない（グラデーションや影が掛かっている）。
   背景を「完全に均一なベタ塗り」で作り直してもらう
