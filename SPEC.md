# WORD GRIMOIRE 仕様書

- **このファイルが、唯一の基準仕様です。** 管理は Claude が行います（ChatGPT の指示書は使いません）。
- 画像の生成だけは ChatGPT に任せます。プロンプトは Claude が用意します。
- 決まったことが増えたら、このファイルを更新します。

---

## 1. 確定した方針
1. 題名は WORD GRIMOIRE。高級ファンタジー × 魔導書 × トレーディングカード（紺・黒・金・宝石）
2. スマホ（iPhone）の縦画面を最優先。将来のiPhoneアプリ化のため、ロジックとUIを分ける
3. 既存の機能を壊さない。小さく分けて実装する
4. **勉強はレベル制**（レベル1〜5）
   - レベルごとに進捗率を出し、100%で次のレベルへ
   - 次のレベルに進むと、ガチャの排出率が更新される
5. **問題の形式は、全レベルで同じ**：英単語を見て、4つの日本語から意味を選ぶ。難しさは、レベルに対応する単語のレアリティで上がる
6. 各レアリティ20語（合計100語）から始め、**次の目標は各100語（合計500語）**。その後も増やす
7. クリア済みのレベルは、次回から選べる（コインは今のまま +25）
8. **復習システムは削除**
9. 各単語の進捗（熟練度）は、勉強の結果だけを反映する
10. **旧「XPランク」は廃止**。Lv は学習レベルに統一する
11. カードの例文は、カードゲーム風の一文（1文に統一）
12. ガチャ確率は表のとおり。先取りで、上のレアが出ることがある（0%は出ない）

---

## 2. ゲームループ
勉強（4択に正解）→ コイン＋熟練度UP＋レベルの進捗UP → ガチャ → カード収集 → また勉強
- カードを持っていなくても、その単語は勉強できる
- カードには、勉強で上がった熟練度が表示される

---

## 3. レベルとレアリティ
| レベル | レアリティ | 対象 | 単語数（現在） | 正解のコイン |
|---|---|---|---|---|
| Lv.1 | COMMON | 英語初心者 | 20 | 25 |
| Lv.2 | UNCOMMON | 日常英語の基礎 | 20 | 25 |
| Lv.3 | RARE | 高校・一般 | 20 | 25 |
| Lv.4 | EPIC | 大学・ビジネス | 20 | 25 |
| Lv.5 | LEGENDARY | 実践ビジネス | 20 | 25 |

- **将来**：レベルが上がるほど、正解のコインを増やす（比例して）。レベルごとのコインは、設定の1か所（`LEVEL_COIN`）に置き、今は全レベル25にしておく
- 「難しい単語だからLEGENDARY」ではなく、実際に使う価値・学習価値も見て決める

---

## 4. 勉強
**画面**
- 「レベルN」と、そのレベルの進捗率（%）を表示する（レアリティ名は前面に出さない）
- 最初は Lv.1 だけ。クリア済みのレベルは、切り替えて遊べる。未解放は🔒
- クリア時：「Lv.N 解放！ ガチャの排出率が更新されました」を表示する
- Lv.5 クリア後は「全レベルクリア」と表示し、そのあとも自由に勉強できる

**問題**
- 形式：英単語 → 日本語（4択）。全レベル共通
- 出題は、選んでいるレベルの単語から。熟練度が低い単語を優先して出す
- 4択のダミーは、同じレベルの単語から選ぶ

**進捗**
- 単語の熟練度：0〜5。正解で +1。不正解では変わらず、その単語が近いうちにまた出る
- レベルの進捗率 ＝ そのレベルの全単語の熟練度の合計 ÷（単語数 × 5）
- 100%でクリア（今の20語なら目安：約100問）→ 次のレベル解放。一度解放したレベルは、ロックしない
- 数値は設定に置き、調整できるようにする（クリア基準、熟練度の上限）
- 単語を増やすと、クリアまでの問題数も増える。長くなりすぎる場合は、レベルを分ける、または基準を調整する（増やす前に決める）
- 正解 +25コイン（クリア済みのレベルでも同じ）

---

## 5. ガチャ
- 1回100コイン。まとめて引くこともできる（実装済み）
- **排出率のレベルは、ガチャ画面で選べる**（実装済み）。到達済みのレベルなら、どれでも選べる
  - 初期値は、到達した最高レベル。勉強でレベルが上がると、初期値も自動で追いつく
  - 一度、下のレベルを選ぶと、その選択が残る（低いレアリティのコンプリート狙いなど）。次にレベルが上がったときは、また最新に追いつく
- 確率は、設定（`GACHA_RATES`）にまとめる
- 抽選されたレアリティの100語から、ランダムに1枚

| 到達レベル | COMMON | UNCOMMON | RARE | EPIC | LEGENDARY |
|---|---|---|---|---|---|
| Lv.1 | 90 | 9 | 1 | 0 | 0 |
| Lv.2 | 65 | 25 | 9 | 1 | 0 |
| Lv.3 | 45 | 30 | 20 | 5 | 0 |
| Lv.4 | 30 | 30 | 25 | 12 | 3 |
| Lv.5 | 25 | 25 | 25 | 18 | 7 |

- 演出：暗転 → 魔法陣 → パック → 揺れ → 光 → 開封 → カード → 回転 → 表面 → レアリティ表示（実装済み）。高レアほど豪華

---

## 6. 単語データ（`js/words.js`、現在500語。各レアリティ100語）
形式：`{ id, en, ja, pronunciation, pos, rarity, stars, ic, ex, tr }`
- `ex`：カードゲーム風の一文（英文）、`tr`：その日本語訳
- `ic`：絵の代わりに使う絵文字
- `stars`：レベルと同じ（1〜5）
- レベルは `rarity` から求める（COMMON=Lv.1 … LEGENDARY=Lv.5）

### IDのルール（単語を増やしても壊れない考え方）
1. **id は通し番号**。レアリティや並び順とは無関係
2. **一度使った番号は、二度と使わない**（永久欠番）。単語を消しても、番号は詰めない
3. **新しい単語は「次のID」を使う**。どのレアリティでも、番号は続きから（今は 101 から）。`words.js` の先頭に「次に使うID」を書いておく
4. **レアリティを変えても、id は変えない**（セーブデータが壊れないため）
5. 図鑑の並びは、配列の並び。同じレアリティの単語は、まとめて並べる（途中に追加してよい）
6. カード画像は、id ではなく英単語（`en`）で対応する（`assets/cards/単語.webp`）
7. セーブデータの `owned` と `mastery` は id で保存する。データから消した単語のセーブが残っていても、集計には数えない（実装済み）
8. 起動時に、IDの重複を確認する（重複があるとコンソールに警告が出る）

### 単語を追加する手順
1. `words.js` の「次のID」を使って、同じ形式で追加する（同じレアリティのまとまりの最後に）
2. 「次のID」の数字を更新する
3. 画像を作る場合は、`assets/cards/単語.webp` を置き、`card_art.js` の `CARD_IMG_NAMES` に名前を追加する
4. 既存のカードや熟練度には、影響しない

### 現在の単語
| レベル | 単語 |
|---|---|
| Lv.1 | apple book cat dog house school water food friend family sun moon car go come eat drink sleep happy big |
| Lv.2 | important different usually together beautiful necessary remember decide continue arrive possible future problem reason experience learn difficult travel believe forget |
| Lv.3 | improve consider suggest require develop increase reduce environment relationship opportunity responsibility effective available achieve compare describe influence purpose popular challenge |
| Lv.4 | implement facilitate significant potential perspective alternative consequence accurate efficient strategy evaluate analyze establish maintain enhance criteria priority comprehensive demonstrate assumption |
| Lv.5 | leverage mitigate acquisition stakeholder compliance revenue disruption sustainable negotiation collaboration proactively substantial constraint incentive scalable benchmark liability contingency deliverable streamline |

- **Lv.1 の追加80語（ID 101〜180）**：bird fish horse tree flower river mountain sea star rain wind snow fire bread milk egg rice tea cake door window table chair bed room town road bridge castle king queen boy girl man woman baby teacher doctor sword key box bag hat night morning hand see walk run jump swim fly sit open close read write sing play help make buy give love live work listen speak small new old hot cold fast strong good red blue white black
- 選んだ基準：CEFR A1〜A2、英検5〜4級の身近な単語（名詞・動詞・形容詞）。ゲームの世界に合う単語（城、剣、王など）も入れた
- **Lv.2 の追加80語（ID 181〜260）**：garden kitchen market village forest island desert cave tower gate ship station hospital library ticket map letter story dream question answer number color weather summer winter holiday bicycle brother sister mother father umbrella mirror candle ring crown shield wait ask bring carry catch choose climb cook cross dance draw enjoy explain find follow join leave meet protect save search send share show teach visit careful dangerous quiet brave clever empty famous heavy tired safe ready special always never suddenly finally
- 選んだ基準（Lv.2）：CEFR A2〜B1、英検3級（中学卒業）の日常の単語。名詞38・動詞26・形容詞12・副詞4。例文には、小さな魔法の要素を入れた
- **Lv.3 の追加80語（ID 261〜340）**：treasure mystery secret wisdom victory power memory journey leader promise danger energy nature peace freedom knowledge history tradition culture science speed evidence expert ability advantage damage community effort invention truth rule region discover destroy hide reveal survive create gather imagine explore defend attract avoid belong cause collect connect contain control depend exist expect notice offer prepare prevent recognize recover refuse release solve ancient mysterious powerful valuable curious enormous familiar generous honest ordinary rare serious useful wise actually especially recently probably
- 選んだ基準（Lv.3）：CEFR B1〜B2、英検準2級、高校で学ぶ単語。名詞32・動詞30・形容詞14・副詞4。例文は、物語のワンシーン（8〜12語）
- **Lv.4 の追加80語（ID 341〜420）**：concept context contract decade dimension economy element enterprise equipment expansion factor feature foundation framework function hypothesis identity impact industry initiative institution investment mechanism objective outcome principle procedure proposal prospect sector standard theory adapt adjust allocate anticipate apply assess assign attain conclude conduct confirm consult convince deliver distribute eliminate emerge emphasize encounter ensure estimate exceed extend generate illustrate indicate interpret investigate justify modify adequate appropriate complex consistent crucial diverse essential fundamental innovative relevant sufficient ultimate valid vulnerable consequently currently gradually essentially
- 選んだ基準（Lv.4）：CEFR B2〜C1、大学・ビジネス、学術（NAWL）、TOEIC（TSL）の単語。名詞32・動詞30・形容詞14・副詞4。例文は、ドラマチックな場面（8〜13語）
- **Lv.5 の追加80語（ID 421〜500）**：agenda alliance asset audit brand budget capital client competitor consumer corporation deadline demand dividend entrepreneur headquarters inflation inventory manufacturer merger milestone partnership portfolio productivity profit recession reputation subsidiary supplier tariff transaction warehouse workforce monopoly accelerate accommodate acquire align amend approve authorize commence consolidate delegate diversify endorse execute expedite finalize forecast initiate invest oversee prioritize procure reimburse renew restructure revise supervise terminate undermine ambitious competitive confidential flexible lucrative mandatory obsolete overdue profitable prominent viable temporary transparent volatile accordingly approximately simultaneously subsequently
- 選んだ基準（Lv.5）：CEFR C1、実践ビジネス（BSL）の単語。名詞34・動詞28・形容詞14・副詞4。例文は、壮大な場面に、ビジネスの言い回しを乗せた一文（9〜13語）

- 例文の難しさと絵の豪華さは、レアリティに合わせる（COMMON は簡素、LEGENDARY は壮大）

### 難易度の基準と、単語数の目安（調査）
各レアリティの難易度は、次の既存の基準に対応させる。

| レベル | レアリティ | 難易度の基準（対応） | 累計の目安 |
|---|---|---|---|
| Lv.1 | COMMON | 英語初心者：CEFR A1〜A2、英検5〜4級（中学初級〜中級） | 約600〜1,400語 |
| Lv.2 | UNCOMMON | 日常英語の基礎：CEFR A2〜B1、英検3級（中学卒業） | 約2,100語 |
| Lv.3 | RARE | 高校・一般：CEFR B1〜B2、英検準2級、学習指導要領（高校まで） | 約3,600〜5,000語 |
| Lv.4 | EPIC | 大学・ビジネス：CEFR B2〜C1、Oxford 5000、NAWL（学術）、TSL（TOEIC） | 約5,000語〜 |
| Lv.5 | LEGENDARY | 高度なビジネス・実践：CEFR C1、BSL（ビジネス） | 約6,000語〜 |

**各基準の単語数（調べた結果）**
- Oxford 3000：3,000語（CEFR A1〜B2）。Oxford 5000：さらに2,000語（B2〜C1）
- CEFRと語彙数（Paul Nation）：A2 約1,000語族、B1 2,000〜3,000語、B2 約4,000語、C1 5,000〜6,000語
- 英検の目安（ベルリッツ）：5級 約600語、4級 約1,400語、3級 約2,100語、準2級 約3,600語
- 学習指導要領（新）：小学校 600〜700語、中学校 1,600〜1,800語、高校 +1,800〜2,500語、合計 4,000〜5,000語
- NGSL（一般英語）2,800語超、NAWL（学術）960語超、TSL（TOEIC）約1,000語、BSL（ビジネス）1,700語。NGSL＋BSL の4,500語で、ビジネス文章の約97%をカバー

**レアリティごとの単語の母数（上の累計の差から出した私の試算。目安）**
| レアリティ | 母数の目安 |
|---|---|
| COMMON | 約1,000〜1,400語 |
| UNCOMMON | 約700〜1,000語 |
| RARE | 約1,500〜2,000語 |
| EPIC | 約2,000語 |
| LEGENDARY | 約1,700語 |

- どのレアリティも、今の20語の数十倍の母数がある。**母数が足りなくなる心配はない**
- 実際に増やす数は、**画像とその一文を用意する手間**で決まる（100語で100枚。COMMONは背景付き絵文字でもよい）

**増やす目標（案）**
| 段階 | 各レアリティ | 合計 |
|---|---|---|
| 今 | 20語 | 100語 |
| 次（決定） | 100語 | 500語 |
| その次 | 300語 | 1,500語 |

**レベルのクリア条件（単語が増えても、長くならないように）**
- 進捗率 ＝ そのレベルの全単語の熟練度の合計 ÷ 100（設定：クリアに必要なポイント）
- 単語が増えても、クリアに必要なのは約100問（熟練度ポイント100）のまま
- 出題は、そのレベルの全単語から。熟練度が低い単語を優先する
- 決定済み（進捗率は、熟練度ポイントで固定。`CLEAR_POINTS`＝100）


---

## 7. カード
- 表示：レアリティ、星、イラスト、英単語、発音、品詞、日本語の意味、例文と和訳、コレクションLv、所持枚数、熟練度
- コレクションLv ＝ 所持枚数。**熟練度とは別管理**（10枚持っていても、覚えていないことがある）
- 熟練度は、勉強で上がった値（0〜5）
- 画像の差し替え：`assets/cards/単語.webp`（3:2）＋ `card_art.js` の `CARD_IMG_NAMES`。プロンプトは `card_image_prompts.md`
- **枠はレアリティ別**：`assets/ui/card_frame_common / _uncommon / _epic / _legendary .webp`（RARE は `card_frame.webp`）。COMMON は銀、UNCOMMON は緑、RARE は青、EPIC は紫、LEGENDARY は赤×金
- **小カード**（図鑑・ガチャ結果）：同じ枠を縮小し、単語名と星を表示。未入手は暗い枠と「？？？」。3列で表示

---

## 8. セーブデータ（localStorage、キー `wordQuestDemo` は継続）
```
{ coins, owned:{id:枚数}, mastery:{id:0〜5}, unlockedLevel:1〜5, studyLevel, allClear, streak, last, v:2 }
```
- レベルの進捗率は、`mastery` から計算する（保存しない）
- `unlockedLevel`：到達した最高レベル。増えるだけ。起動時にも、熟練度から合わせ直す
- 「クリア済み」：進捗率が100%のレベル
- `studyLevel`：最後に選んだ勉強のレベル、`allClear`：全レベルクリアの表示済みフラグ
- IDの考え方は §6。単語を消してもセーブが壊れない
- 単語を入れ替えたとき（v2）に、カードと熟練度をリセットした（テスト版のため）
- 旧XPランクは廃止した（`xp` は削除）

---

## 9. 画面
- **下のタブ：ホーム／勉強／ガチャ／カード**（復習は削除済み）
- **ホーム**：ロゴ、キャッチ、現在の学習レベルと進捗、🔒表示、統計、勉強・カードのボタン、ガチャのパネル
- **勉強**：レベルの切り替え、進捗バー、4択の問題
- **ガチャ**：現在のレベルの排出率を表示
- **カード**：レアリティ別の図鑑。未入手は「？」。詳細は発音・例文・熟練度を表示

---

## 10. ファイル構成（現在）
```
English_game/
├─ index.html
├─ SPEC.md                 この仕様書
├─ TODO.md                 次のタスク
├─ card_image_prompts.md   カード画像のプロンプト（100語）
├─ css/
│   ├─ style.css           元のスタイル（リポジトリ側にある）
│   └─ upgrade.css         追加・上書きのスタイル
├─ js/
│   ├─ words.js            単語データ（100語、IDのルールを先頭に記載）
│   ├─ config.js           設定（レベル、ガチャ確率、コイン、クリア条件）
│   ├─ game.js             ゲームのルール（進捗、解放、出題）。画面に依存しない
│   ├─ app.js              ホーム・カード図鑑・セーブ・画面切り替え
│   ├─ study_ui.js         勉強画面（レベル制）とレベルアップ演出
│   ├─ gacha_ui.js         ガチャ画面と開封演出
│   ├─ card_art.js         カード画像の対応、SVGイラスト、背景
│   └─ ui_images.js        assets/ui の画像の自動読み込み
└─ assets/
    ├─ pack.svg / card_back.svg   （リポジトリ側にある。差し替え予定）
    ├─ cards/              単語ごとのカード画像（apple.webp, cat.webp）
    └─ ui/
        ├─ card_frame.webp / home_bg.webp / logo_title.webp / logo_emblem.webp / favicon.png
        ├─ icons/          アイコン（icon_*, stat_*, nav_*）
        ├─ README.md       画像の置き方
        ├─ gacha_prompts.md / icon_prompts.md   画像のプロンプト
        └─ _layout_guide.png / _layout_labeled.png   枠づくりのガイド
```
- リポジトリから消すファイル：`assets/cards/abandon.jpg`、`assets/ui/icons/icon_review.png`、`assets/ui/icons/nav_review.png`

---

## 11. 実装の段階と状況
| 段階 | 内容 | 状況 |
|---|---|---|
| 1 | ガチャ画面と開封演出 | 完了 |
| 2 | 単語データの整理（各20語、発音、カードゲーム風の一文）、IDのルール、セーブの切り替え | 完了 |
| 3 | 復習の削除（タブ4つ）、熟練度は勉強だけで上げる | 完了 |
| 4 | レベル制の勉強（進捗、切り替え、クリア、レベルアップ演出）、XPランク廃止 | 完了 |
| 5 | レベルに応じたガチャ排出率（`GACHA_RATES`） | 完了 |
| 6 | ホームに学習レベルと進捗、ロック表示 | 完了 |
| 7 | レア度別の枠、小カードの新デザイン（図鑑の使いやすさの改善は別） | 完了 |
| 8 | レベルごとのコイン増（`LEVEL_COIN`） | 将来 |
| 9 | 単語を増やす（各100語）：各レアリティ100語（合計500語）を達成 | 完了 |


---

## 12. 画像（ChatGPT に任せる）
- ガチャの演出用画像は適用済み：`assets/ui/gacha_pack.webp`（パック）、`card_back.webp`（カード裏面）、`magic_circle.webp`（魔法陣）、`gacha_bg.webp`（背景）
- カード画像：`card_image_prompts.md`（100語）
- ガチャ・背景・パック・カード裏面：`assets/ui/gacha_prompts.md`
- アイコン：`assets/ui/icon_prompts.md`
- カード枠：`assets/ui/README.md`

---

## 13. 将来
RPG要素（プレイヤー、ステータス、バトル、スキル等）は、英語学習とカード収集が完成してから。
