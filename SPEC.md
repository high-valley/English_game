# WORD GRIMOIRE 仕様書

- **このファイルが、唯一の基準仕様です。** 管理は Claude が行います（ChatGPT の指示書は使いません）。
- 画像の生成だけは画像生成AI（ChatGPT / Grok など）に任せます。プロンプトは Claude が用意します。
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
7. クリア済みのレベルは、次回から選べる。コインはそのレベルの額がもらえる（`LEVEL_COIN`。§3）
8. **復習システムは削除**
9. 各単語の進捗（熟練度）は、勉強の結果だけを反映する
10. **旧「XPランク」は廃止**。Lv は学習レベルに統一する
11. カードの例文は、カードゲーム風の一文（1文に統一）。**味方だけでなく敵役（ゴブリン、ヴァンパイア、悪魔など）も登場させる**
12. ガチャ確率は表のとおり。先取りで、上のレアが出ることがある（0%は出ない）

---

## 2. ゲームループ
勉強（4択に正解）→ コイン＋熟練度UP＋レベルの進捗UP → ガチャ → カード収集 → また勉強
- カードを持っていなくても、その単語は勉強できる
- カードには、勉強で上がった熟練度が表示される

---

## 3. レベルとレアリティ
| レベル | レアリティ | 対象 | 単語数（現在） | 正解のコイン | ガチャ1回に必要な正解数 |
|---|---|---|---|---|---|
| Lv.1 | COMMON | 英語初心者 | 100 | 25 | 4.0問 |
| Lv.2 | UNCOMMON | 日常英語の基礎 | 100 | 35 | 2.9問 |
| Lv.3 | RARE | 高校・一般 | 100 | 50 | 2.0問 |
| Lv.4 | EPIC | 大学・ビジネス | 100 | 70 | 1.4問 |
| Lv.5 | LEGENDARY | 実践ビジネス | 100 | 100 | 1.0問 |

- **レベルが上がるほど、正解のコインが増える**。設定は1か所（`config.js` の `LEVEL_COIN`）
  - **Lv.5 は 100 コイン＝ガチャ1回ぶん**を区切りにした。上がる実感を出しつつ、ガチャの価値も残すため
  - 比例（25/50/75/100/125）も検討したが、Lv.5 が1問未満でガチャ1回になり、
    クリア済みレベルを繰り返すとガチャが目標でなくなるため採らなかった
  - 勉強画面のレベル欄に「正解 +N🪙」を常時表示し、レベルアップ演出でも増えたことを知らせる
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
- 正解でコインがもらえる。額はそのレベルの `LEVEL_COIN`（§3）。クリア済みのレベルでも同じ額

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
3. 画像を作る場合は、`assets/cards/単語.webp` を置き、`card_art.js` の `CARD_IMG_NAMES` に名前を追加して、
   `python3 tools/bake_assets.py` を実行する（図鑑用の縮小版と、画像の一覧 `js/ui_manifest.js` を作る）
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

### 例文（`ex`）のルール
1. **その単語が絵の主役になるように書く**（いちばん大事）。例文はそのまま画像のプロンプトになるので、
   主語が別のものに移ると、カードの単語が絵の脇役になってしまう
   - ○ `mirror`：A pale ghost appears in the old mirror.（鏡が主役。幽霊は添え物）
   - × `key`：The goblin drops a gold key.（ゴブリンが主役で、鍵が小さくなる）
2. **1文**にする。カードの情報欄に収まる長さ（COMMON 約6語 … LEGENDARY 約11語）
3. **その英単語を、語幹がそのまま見える形で入れる**。カードは `hl()` が `/\b(en\w*)/i` で太字にするので、
   語幹が変わる形は太字にならない（例：`eat` → `eats` / `eating` は可、`ate` は不可。`go` → `goes` は可、`went` は不可）
4. `tr` は、その一文の日本語訳
5. **敵役を入れる**（下の表）。目標は全体の約4割。騎士・王・勇者だけに偏らせない。
   ただし**1が優先**。**風景・自然・道具のカードは、敵役なしのままでよい**
   （例：river / sea / star / rain / snow / tree / flower / forest などは敵役なし）
6. 例文を直したら、`python3 tools/gen_card_prompts.py` でプロンプトを作り直す

### 敵役（レアリティが上がるほど、敵も強くなる）
| レベル | 主な敵役 |
|---|---|
| Lv.1 COMMON | ゴブリン、スライム、コウモリ、ネズミ、蜘蛛、インプ、狼、コボルト、カラス |
| Lv.2 UNCOMMON | オーク、スケルトン、幽霊、山賊、大蜘蛛、ガーゴイル、ハーピー、ゾンビ、魔女 |
| Lv.3 RARE | ヴァンパイア、人狼、トロル、オーガ、レイス、ゴーレム、バジリスク、海賊 |
| Lv.4 EPIC | リッチ、悪魔、死霊術師、カルティスト、魔人、ヴァンパイア卿、恐怖の騎士 |
| Lv.5 LEGENDARY | 大悪魔、ヴァンパイア公、リッチ王、不死の軍団、巨神、悪魔の王 |

- **画像が対応している単語（`CARD_IMG_NAMES`）の例文は、変えない**（絵と食い違うため）。
  変えるときは、画像も作り直す。逆に、画像を消した単語の例文は自由に変えてよい

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
{ coins, owned:{id:枚数}, mastery:{id:0〜5}, unlockedLevel:1〜5, studyLevel, gachaLevel, allClear, streak, last, v:2 }
```
- レベルの進捗率は、`mastery` から計算する（保存しない）
- `unlockedLevel`：到達した最高レベル。増えるだけ。起動時にも、熟練度から合わせ直す
- 「クリア済み」：進捗率が100%のレベル
- `studyLevel`：最後に選んだ勉強のレベル、`gachaLevel`：最後に選んだガチャの排出率レベル（§5）、`allClear`：全レベルクリアの表示済みフラグ
- IDの考え方は §6。単語を消してもセーブが壊れない
- 単語を入れ替えたとき（v2）に、カードと熟練度をリセットした（テスト版のため）
- 旧XPランクは廃止した（`xp` は削除）

---

## 8.5 ファイルの版（キャッシュ対策）と画像の一覧
- **CSS・JS** の URL には `index.html` の `ASSET_V` が `?v=` として付く。中身を変えたら `ASSET_V` を上げる。
  上げないと、一度読み込んだ端末が古いファイルを使い続ける
- **画像**の URL には、`js/ui_manifest.js` に書いた**ファイルごとの版（中身のハッシュ）**が付く。
  中身が変わった画像だけが再ダウンロードされる。以前は画像も `ASSET_V` ひとつで、
  カードを1枚足すたびに全部の画像（25MB）が再ダウンロードになっていた（1日空けて開くと遅い原因）
- `js/ui_manifest.js` は `tools/bake_assets.py` が作る。**画像を足した・差し替えたら必ず実行する**。
  同時に、カード枠・アイコンの透過（マゼンタ抜き）と、図鑑用のカードの縮小版（480x320）も作る。
  実行し忘れは `tools/check_assets.py` が検出する
- 一覧があるので、起動時に画像を探さない（以前は、ファイルがあるかを確かめるために全部の画像をダウンロードしていた）。
  一覧が無いときだけ、従来どおりブラウザで探して透過する（`ui_images.js` の `uiInit`）

## 9. 画面
- **起動画面は、タップするまで閉じない**（「TAP TO START」と表示している。1回の起動につき1度だけ出る）
- **ホームの下に、今動いている版（`ASSET_V`）を「ver 〜」と出す**。マージが端末に届いたかを確かめるため。
  サイトにもっと新しい版があれば、その横に「新しい版 〜 に更新」ボタンが出る（起動3秒後と、アプリに戻ってきたときに確認）
- **4画面すべて同じ雰囲気**にそろえる：全画面背景＋半透明パネル（ぼかし）＋透過ヘッダー＋半透明の下タブ
  - 背景は画面ごとに差し替えられる（`home_bg` / `study_bg` / `gacha_bg` / `cards_bg`）。
    無い画面は `home_bg` を使う（`ui_images.js` の `BG_FALLBACK`）
  - 背景は**表示領域に固定**する（`#bg` は `position:fixed`）。絵の見せ場は上半分に置く
  - 勉強とカードは文字が多いので、背景を強めに暗くして読みやすさを優先する。
    図鑑はカードが主役なので、勉強よりさらに強く暗くする
- **下のタブ：ホーム／勉強／ガチャ／カード**（復習は削除済み）。表示領域に固定（`position:fixed`）し、
  本文の下には `main` の `padding-bottom` で場所を空ける
- **ホーム**：ロゴ、キャッチ、現在の学習レベルと進捗、🔒表示、統計、勉強・カードのボタン、ガチャのパネル
- **勉強**：レベルの切り替え、進捗バー、4択の問題
- **ガチャ**：現在のレベルの排出率を表示
- **カード**：レアリティ別の図鑑。**絞り込みボタンに、レア度ごとの解放数（所持している種類 / そのレア度の全種類）を出す**。スクロールで全件表示（ページ送りは廃止）。未入手は「？？？」。詳細は発音・例文・熟練度を表示
  - **検索は、英単語と日本語の意味の両方が対象**（部分一致）。例: "ap" → apple / map、"りんご" → apple、"重要" → important / crucial
  - 入力はそろえてから比べる：全角の英数（ａｐ）と半角カタカナ（ｱ）はふつうの字に直し、カタカナはひらがなに、英字は小文字に
    （「テーブル」でも「てーぶる」でも hit する）
  - **かな → 漢字の変換はしない**（辞書が必要なため）。「ねこ」では「猫」に hit しない。入力の変換を確定した「猫」で検索する
  - 検索の対象は日本語の**意味**（`ja`）まで。例文の訳（`tr`）は対象にしない（「悪魔」で何十件も出てしまうため）
  - 並び順は、一致した位置が先頭に近いものから（英単語・日本語訳のうち、より前で一致したほうを見る）
  - 入力中は、一覧・件数・クリアボタンだけを差し替える。**検索欄そのものは作り直さない**
    （iOS の日本語入力では、変換の確定前に入力欄を作り直すと「り」が「りり」になる）

---

## 10. ファイル構成（現在）
```
English_game/
├─ index.html
├─ SPEC.md                 この仕様書
├─ TODO.md                 次のタスク
├─ card_image_prompts.md   全500語のプロンプト（tools が自動生成）
├─ card_image_next.md      次に作る画像のおすすめ順（tools が自動生成）
├─ tools/
│   ├─ gen_card_prompts.py  words.js から card_image_prompts.md を作り直す
│   ├─ gen_next_batch.py    次に作る画像を、おすすめ順に切り出す（既にある画像は外す）
│   └─ check_words.py       単語データの検査（id重複、例文に単語が入っているか、敵役の割合）
├─ css/
│   ├─ style.css           元のスタイル（リポジトリ側にある）
│   └─ upgrade.css         追加・上書きのスタイル
├─ js/
│   ├─ words.js            単語データ（500語、IDのルールを先頭に記載）
│   ├─ config.js           設定（レベル、ガチャ確率、コイン、クリア条件）
│   ├─ game.js             ゲームのルール（進捗、解放、出題）。画面に依存しない
│   ├─ app.js              ホーム・カード図鑑・セーブ・画面切り替え
│   ├─ study_ui.js         勉強画面（レベル制）とレベルアップ演出
│   ├─ gacha_ui.js         ガチャ画面と開封演出
│   ├─ card_art.js         カード画像の対応、SVGイラスト、背景
│   ├─ ui_images.js        assets/ui の画像の読み込み（一覧があればそれを使う）
│   └─ ui_manifest.js      画像の一覧とファイルごとの版（tools/bake_assets.py が作る。直接編集しない）
└─ assets/
    ├─ pack.svg / card_back.svg   （画像が無い時の予備。今は gacha_pack / card_back の画像を使う）
    ├─ cards/              単語ごとのカード画像（1200x800）
    │   └─ thumb/          図鑑用の縮小版（480x320。tools/bake_assets.py が作る）
    └─ ui/
        ├─ card_frame.webp / card_frame_common / _uncommon / _epic / _legendary .webp
        ├─ home_bg.webp / splash_bg.webp / gacha_bg.webp / study_bg.webp / cards_bg.webp
        ├─ gacha_pack.webp / card_back.webp / magic_circle.webp
        ├─ logo_title.webp / logo_emblem.webp / favicon.png
        ├─ icons/          アイコン（icon_*, stat_*, nav_*。マゼンタ背景のまま置く）
        ├─ baked/          透過済みの枠とアイコン（tools/bake_assets.py が作る。直接編集しない）
        ├─ README.md       画像の置き方
        └─ gacha_prompts.md / icon_prompts.md   画像のプロンプト
```
- 消したファイル（対応済み）：`assets/cards/abandon.jpg`、`assets/ui/icons/icon_review.png`、`assets/ui/icons/nav_review.png`、`js/gacha_prompts.md`（`assets/ui/` と重複）、`Directly.md`（この§10に統合）、`assets/ui/_layout_guide.png` / `_layout_labeled.png`（枠が完成したため）

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
| 8 | レベルごとのコイン増（`LEVEL_COIN`） | 完了 |
| 9 | 単語を増やす（各100語）：各レアリティ100語（合計500語）を達成 | 完了 |


---

## 12. 画像（ChatGPT に任せる）
- ガチャの演出用画像は適用済み：`assets/ui/gacha_pack.webp`（パック）、`card_back.webp`（カード裏面）、`magic_circle.webp`（魔法陣）、`gacha_bg.webp`（背景）
- 勉強・図鑑の専用背景 `study_bg`（魔法学院の図書室）／ `cards_bg`（魔導書の宝物庫）を適用済み。
  差し替え用のプロンプトは `assets/ui/README.md`（無くても `home_bg` で動く）
- カード画像：`card_image_prompts.md`（全500語）。**`tools/gen_card_prompts.py` が `words.js` から作る**ので、直接編集しない
- 次に作る分は `card_image_next.md`（`tools/gen_next_batch.py` が、レアリティの高い順 → 敵役つきが先の順で切り出す）
- 作成済み：COMMON の10語（apple / book / cat / dog / family / food / friend / house / school / water）。
  `card_art.js` の `CARD_IMG_NAMES` に登録した語だけが画像表示になり、それ以外は `ART_SVG` か `sceneSvg()` の絵になる
- **プロンプトの書き方は `tools/gen_card_prompts.py` の冒頭にまとめてある**
  （「簡素に」と書かない・主役は枠いっぱい・上下は切られる前提。生成AIを変えても絵柄が揃うようにするため）
- プロンプトには「**この単語が主役**」を品詞に応じて英語で入れている（例文を渡すだけでは、文中の別の名詞が主役になる）。
  生きものが出てくる例文には「**目と顔を描く**」も入れる（COMMON は愛嬌のある見た目、UNCOMMON 以上は威厳のある見た目）
- **画風はレアリティごとに指定する**。COMMON・UNCOMMON は「絵の具で描いた感じ」（手描き・ブラシの跡・つや消し）を守り、
  写実・3DCG・強い照り返しを外す。RARE 以上は豪華さのために光の効果を許す
- **敵役の見た目は `tools/gen_card_prompts.py` の `FOE_LOOK` が基準**（下の表の全44種にひとつずつ）。
  敵役ではないが何枚にも出てくる生きもの（竜など）は `EXTRA_LOOK` に書く。
  カードをまたいで同じ姿にするため、例文に出てくる敵役の設定をプロンプトに入れる。
  敵役を増やすときは、`ENEMIES`（`tools/check_words.py`）と `FOE_LOOK` の両方に足す
- 世界観は**ヨーロッパ中世のファンタジー**で固定する（和風・中華風・現代にしない）。
  ただし**持ち物を並べて書かない**。「城・石畳・外套・剣・ランタン」と並べていたら、
  どのカードにも同じ城と同じ街灯が立った
- **舞台も単語ごとに散らす**（`PLACE`、15種類）。村の通り・市場・小屋の中・港・農場・酒場・鍛冶場など。
  例文が場所を言っている語と、その語自体が場所の語（`river` / `market` / `cave` など）には足さない
- **構図は単語ごとに散らす**（`SHOT`、8種類）。寄り・引き・見上げ・見下ろし・左右に寄せる・前景ごしなど。
  全部を「主役を中央に大きく」にすると、500枚が同じ絵面になる。
  ただし「その単語が主役」と「大事なものは中央の帯に収める」は全カード共通で守る
- **画像の生成は Claude ではできない**（画像生成の機能を持たないため）。プロンプトを Claude が作り、生成は ChatGPT / Grok などに渡す
- ガチャ・背景・パック・カード裏面：`assets/ui/gacha_prompts.md`
- アイコン：`assets/ui/icon_prompts.md`
- カード枠：`assets/ui/README.md`

---

## 13. 将来
RPG要素（プレイヤー、ステータス、バトル、スキル等）は、英語学習とカード収集が完成してから。
