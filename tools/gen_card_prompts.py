#!/usr/bin/env python3
"""card_image_prompts.md を js/words.js から作り直す。

例文（ex）を直したら、必ずこれを実行してプロンプトを作り直す。
    python3 tools/gen_card_prompts.py

プロンプトは「レアリティ別の共通スタイル」＋「例文（ex）」＋「共通の締め」でできている。
例文の場面が、そのまま絵になる。

書き方のきまり（実際に生成して分かったこと）:
  ・**「簡素に」と書かない。** COMMON に "minimal effects, soft colors, little decoration" と
    書いていたところ、生成AIによっては淡い水彩＋余白だらけになり、紺の枠に対して弱くなった
    （同じ5語を2つのAIで出して比べた。彩度の平均が 43〜78 と 47〜101 で、前者は見劣りした）。
    レアリティの差は「効果と描き込みの量」で付ける。色の濃さは全レアリティで落とさない
  ・**主役は枠いっぱいに。** "main subject centered with margin" と書くと、余白を取りすぎて
    小カード（図鑑）で主役が小さくなる
  ・**上下は切られる前提で書く。** 小カードは 3:2 の上下を切って表示するので、
    大事なものは中央の帯に収める
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(Path(__file__).resolve().parent))
from check_words import ENEMIES, enemy_pattern, has  # noqa: E402

WORDS_JS = ROOT / "js" / "words.js"
CARD_ART_JS = ROOT / "js" / "card_art.js"
OUT_MD = ROOT / "card_image_prompts.md"

# レアリティ別の画風（COMMON は簡素、LEGENDARY は壮大。SPEC.md §6）。
# 画風の指定は、締め（TAIL）ではなく必ずここに書く。
# 締めに "painterly anime style" と一言だけ置いていたときは、生成AIの既定の絵柄に押し負けて、
# COMMON が 3DCG のようなつやつやした絵になった。レアリティごとに画風を言い切る
STYLE = {
    "COMMON": "soft hand-painted anime illustration, visible brush texture, matte finish, "
              "gentle natural light, warm and clear colors, storybook feel, one clear subject, "
              "a simple background that shows the place, few magical effects",
    "UNCOMMON": "hand-painted anime fantasy illustration, visible brush texture, matte finish, "
                "a small magical touch, gentle glow, slightly richer details, clear subject",
    "RARE": "rich painted anime fantasy illustration, dramatic lighting, golden accents, "
            "floating light particles, detailed scene",
    "EPIC": "very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, "
            "intricate details, jewels and golden ornaments in the setting, complex composition",
    "LEGENDARY": "masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, "
                 "golden particles, radiant light, extremely detailed, cinematic",
}

# 避けてほしい見た目（低レアだけ）。
# COMMON・UNCOMMON は「絵の具で描いた感じ」を守りたいので、写実・3DCG・強い照り返しを外す。
# RARE 以上は、豪華さのために光の効果を許す（そこを外すと壮大さが出ない）
AVOID = {
    "COMMON": "not photorealistic, not a 3D render, no glossy plastic shine, no lens flare, no heavy bloom",
    "UNCOMMON": "not photorealistic, not a 3D render, no glossy plastic shine",
}

# すべてのプロンプトの締め（構図と、入れないもの）。画風はここに書かない
TAIL = ("3:2 wide landscape, the subject is unmistakably the main thing in the picture, "
        "important parts kept inside the middle horizontal band, "
        "no text, no letters, no logo, no border, no frame")

# 構図。全部に「主役を中央に大きく」と書いていたら、500枚が同じ絵面になってしまう
# （どれも真ん中に一つ、同じ距離から、同じ高さ）。単語ごとに振り分けて散らす。
#
# 変えてよいのは「カメラの位置・距離・横の置き場所・前景」まで。
# 次の2つは崩さないので、ここには書かない:
#   ・その単語が主役だと分かること（SUBJECT と TAIL が受け持つ）
#   ・大事なものを中央の帯に収めること（小カードが 3:2 の上下を切るため。
#     横はそのまま出るので、左右に寄せるのは安全）
# 明るさ・時刻・天気は入れない。例文と食い違うため
#   （"The sun rises over the castle." に「夜」と書くわけにいかない）
SHOT = [
    "Composition: a close view at eye level, the subject filling the frame and cropped by the edges.",
    # 「空を背に」だけだと、屋内の舞台（小屋・酒場・書斎・地下倉）と食い違う。天井でもよいとする
    "Composition: a low angle, looking up at the subject against the sky or the ceiling above it.",
    "Composition: seen from slightly above, looking down on the subject and the ground around it.",
    "Composition: the subject set to one side of the frame, with the place opening up beside it.",
    "Composition: framed through something in the foreground - an archway, a doorway or branches - "
    "with the subject beyond it.",
    "Composition: a wide view of the place, the subject nearest the viewer and still the largest thing in it.",
    "Composition: a three-quarter view, the subject turned partly away from the viewer.",
    "Composition: the subject close and sharp, the background kept soft and simple behind it.",
]


def shot_line(w):
    """id で振り分ける。図鑑は id 順に並ぶので、隣り合うカードは必ず別の構図になる"""
    return SHOT[w["id"] % len(SHOT)]

LEVELS = ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"]
LEVEL_NO = {r: i + 1 for i, r in enumerate(LEVELS)}

# 「この単語が主役」を、品詞に応じて英語で言い切る。
# これを書かないと、例文の中の別の名詞が主役になる
# （`sun` の "The sun rises over the castle." で、城が画面を占めて太陽が隅の点になった）
# 名詞には、目に見えない語（future / problem / strategy / revenue …）も多い。RARE から先はほとんどがそう。
# 「問題そのものを大きく」と言われても描けないので、例文の人や物で表して、それを大きく描いてもらう
SUBJECT = {
    "名詞": ('The {en} itself is the main subject of the picture: large and clearly visible. '
             'If the {en} is not something that can be seen, show it through the people and things '
             'in the sentence, and make them large and clearly visible.'),
    "動詞": "Make the sentence's action ({en}) the main subject: large and clearly visible.",
}
SUBJECT_OTHER = ("Make the person or thing that the sentence is about the main subject: "
                 "large and clearly visible.")

# 生きものが出てくるときは、顔と目を描いてもらう（目が無いと、ただの塊に見える）。
# 「愛嬌があるか、怖いか」はレアリティでは決まらない。同じ COMMON でも、
# スライムは可愛く、ゴブリンは怖い。そこは FOE_LOOK 側に書く
# 「顔が見える向き」までは書かない。後ろ姿の絵もあってよい（ユーザー判断）。
# cross のトロルの後ろ姿がだめだったのは、服を着ていなかったため（FOE_LOOK に服を書いて直した）
CREATURE = "Any creature has clear, expressive eyes and a readable face."

# RARE 以上は「金・宝石」を画風に入れているため、例文に出てくる人まで王侯貴族の装いになる。
# significant の "The scholars noticed ..." で、学者4人が宝石だらけの貴族に見えた。
# 役割（学者・農夫・商人・衛兵…）が分かる服装にしてもらう
ROLE = "The people are dressed so that their role in the sentence is obvious at a glance."

# 世界観。これを書かないと、生成AIの好みで和風・中華風の絵が混ざる
# （drink が日本の茶の間、significant の学者が中華風の道士になった）
WORLD = ("Set it in a European medieval fantasy world - not Japanese, not Chinese, not modern. "
         "Include only what the sentence and the place call for; do not add a castle, "
         "a street lantern or a signpost unless the sentence or the place asks for one.")

# 舞台。世界観だけ書いて場所を書かなかったら、どのカードにも同じ城と同じ街灯が立った。
# （前の WORLD は "stone castles, cobbled roads, cloaks, swords and lanterns" という
#   持ち物リストだったので、生成AIが毎回その5つを律儀に描いていた）
#
# **例文が場所を言っているときは、そちらが優先**。だから「例文が場所を言っていなければ」と条件を付ける
#   （"Slimes eat old bread in the cave." に「市場で」と書くわけにいかない）
# さらに「場面に合うなら」と付けて、押しつけにしない。屋内の舞台（小屋の中・酒場・書斎）が
# 屋外の場面に割り当たることがあるため（"A wolf chases the white horse." に「書斎で」は合わない）
PLACE = [
    "a village street of timber and stone houses",
    "a busy market with stalls and awnings",
    "a cottage room by the hearth",
    "a forest path under tall trees",
    "a harbour with fishing boats and nets",
    "a farm yard with barns and fences",
    "a stone bridge over a stream",
    "a quiet cloister with arches",
    "a cellar or storeroom lined with barrels",
    "a tavern room with long tables",
    "a wheat field at the edge of a wood",
    "a rocky mountain pass",
    "a ruined watchtower overgrown with ivy",
    "a study full of books and scrolls",
    "a blacksmith's workshop, open to the street",
]


# その単語自体が場所なので、別の舞台を割り当ててはいけない語。
# （`mountain` に「暖炉のある小屋の中」を割り当てたら、山の絵にならない）
PLACE_SELF = {
    "house", "school", "room", "town", "road", "bridge", "castle", "garden", "kitchen",
    "market", "village", "forest", "island", "desert", "cave", "tower", "gate", "station",
    "hospital", "library", "warehouse", "headquarters", "river", "mountain", "sea",
}

# 例文が場所を言っているかどうか（前置詞＋冠詞の形を見る）。
# 言っているなら、こちらから舞台を足さない
# onto / of / from などが抜けていて、"jumps onto the round table" に「村の通り」が入り、
# 通りの真ん中にテーブルがある絵になった。"out of the cave" も拾えていなかった
PLACE_CUE = re.compile(
    r"\b(in|at|on|onto|by|through|into|inside|outside|under|beneath|over|across|near|beside|"
    r"above|below|behind|along|around|down|up|of|from|off|past|among|between|within|beyond|"
    r"toward|towards)\s+(the|a|an|his|her|their|its|this|that)\b", re.I)


def place_line(w):
    """id で振り分ける。PLACE は15、SHOT は8で互いに素なので、
    「構図×舞台」の組み合わせは120通りぶん回ってから繰り返す"""
    if w["en"] in PLACE_SELF or PLACE_CUE.search(w["ex"]):
        return ""
    return (f"If the sentence does not say where this happens, and it suits the scene, "
            f"set it in {PLACE[w['id'] % len(PLACE)]}.")

# 人が複数出てくると、同じ顔が並ぶ（significant の学者3人が同一人物に見えた）
FACES = "When several people appear, each has a clearly different face, age and build."

# 敵役の見た目。**カードをまたいで同じ姿にするための設定**。
# これが無いと、ゴブリンが絵ごとに別の生きものになる
# （dog では背の高い痩せた緑の男、go では膝丈の丸い小鬼）。
# ENEMIES（check_words.py）の全項目にひとつずつ用意する（下の assert で漏れを止める）
FOE_LOOK = {
    # Lv.1 COMMON
    # 基準は dog / house / friend のカード。可愛い小鬼ではなく、痩せて険しい緑の男
    "goblin": "goblins are lean and wiry, a head shorter than a man, with sage-green skin, "
              "long ears that stick out sideways, a large hooked nose, yellow eyes and sharp teeth, "
              "in ragged brown cloth and scraps of leather, barefoot, menacing",
    "slime": "slimes are smooth rounded domes of translucent green jelly, about the size of a melon, "
             "with two big round eyes and a small simple mouth, charming",
    "bat": "bats are small and fuzzy with dark violet fur, large round ears and big round eyes, charming",
    "rat": "rats are plump and grey-brown with a long bare tail and small bright eyes, charming",
    "spider": "spiders are round and dark grey with pale markings, eight thick legs "
              "and a cluster of small shiny eyes",
    "imp": "imps are tiny and red-skinned with small horns, bat wings and a thin barbed tail, mischievous",
    "kobold": "kobolds are small lizard folk, knee-high, with scaled green, blue or orange skin, "
              "big round eyes, a short snout and a ragged hooded cloak, charming",
    "wolf": "wolves are lean and grey with thick fur, amber eyes and dark markings on the muzzle",
    "crow": "crows are glossy black with a heavy beak and pale grey eyes",
    # Lv.2 UNCOMMON
    "orc": "orcs are tall and heavy with dark green skin, a broad jaw with lower tusks, black hair, "
           "and crude iron and leather armour",
    "skeleton": "skeletons are bare bone-white skeletons in a rusted iron helm and scraps of mail, "
                "with small points of light in the eye sockets",
    "ghost": "ghosts are pale blue-white and half transparent, the lower body fading into mist, "
             "with hollow glowing eyes",
    "witch": "witches are gaunt women in a dark green robe and a wide pointed hat, with a crooked staff",
    "bandit": "bandits are rough men in worn leather with a dark cloth mask over the lower face",
    "zombie": "zombies are grey-skinned and slack-jawed in torn clothing, with clouded white eyes",
    "gargoyle": "gargoyles are grey stone beasts with folded bat wings, curved horns and blank carved eyes",
    # 基準は follow のカード（羽で胸と腰を覆った女性の姿）。一度「全身を羽で覆う」に変えたが、
    # ユーザーが follow の絵をそのままでよいとしたので、姿をそろえるために元に戻した
    "harpy": "harpies are women from the waist up, with brown feathered wings for arms and clawed bird legs",
    # Lv.3 RARE
    "vampire": "vampires are pale and sharp-featured with red eyes, white hair, long fangs "
               "and a high-collared crimson and black cloak",
    "werewolf": "werewolves are huge upright wolves with grey-brown fur, long arms, yellow eyes "
                "and torn human clothing",
    "troll": "trolls are huge and hunched with warty grey-green skin, a long nose and small dull eyes, "
             "wearing a ragged fur loincloth",
    "ogre": "ogres are massive and pot-bellied with tan skin, a heavy brow and a crude wooden club, "
            "wearing rough hide clothes",
    "pirate": "pirates are weathered sailors in a long coat, a tricorn hat and a wide sash",
    "golem": "golems are broad figures built of cut stone blocks, with glowing runes in the seams",
    "cursed": "cursed knights are empty suits of blackened plate armour with a cold blue light inside the helm",
    "wraith": "wraiths are hooded shapes of black smoke with no face, only two pale burning eyes",
    "basilisk": "basilisks are long scaled lizards with a crested head and bright yellow eyes",
    # Lv.4 EPIC
    "lich": "liches are crowned skeletal sorcerers in tattered dark robes, with green fire "
            "in the eye sockets and a bone staff",
    "demon": "demons are tall and red-skinned with curved black horns, leathery wings, hooves "
             "and burning orange eyes",
    "necromancer": "necromancers are hollow-cheeked men in deep purple robes with a skull-topped staff",
    "warlock": "warlocks are robed spellcasters in black and violet, with glowing sigils around their hands",
    "cultist": "cultists are faceless figures in identical dark red hooded robes",
    "assassin": "assassins are slim figures in fitted black cloth with only the eyes showing",
    "serpent": "giant serpents are thick-coiled snakes with dark green scales and cold yellow eyes",
    "hydra": "hydras are many-headed green serpent-beasts on one heavy body",
    "giant": "giants are three times a man's height, broad and bearded, in furs and rough iron",
    # Lv.5 LEGENDARY
    "archdemon": "the archdemon is colossal, deep red and black, with a crown of great curved horns, "
                 "vast leathery wings and molten cracks across its body",
    "fiend": "fiends are large demons with black-red hide, many horns and burning eyes",
    "dark lord": "the dark lord is a towering figure in black plate armour with a horned helm "
                 "and a red glow behind the visor",
    "dread": "dread knights are towering figures in black plate armour with a horned helm "
             "and a cold red glow behind the visor",
    "titan": "titans are colossal armoured giants of weathered stone and bronze",
    "shadow": "shadows are man-shaped patches of pure darkness with two pale eyes",
    "undead": "the undead are grey and hollow-eyed, in rotted clothing and rusted mail",
    "monster": "the monster is a heavy four-legged beast with dark scaled hide, horns and yellow eyes",
    "beast": "the beast is a heavy four-legged predator with shaggy dark fur and yellow eyes",
}
# 敵役ではないが、何枚にも出てくる生きもの。姿をそろえる目的は FOE_LOOK と同じ。
# ENEMIES に入れてしまうと「敵役の割合」の数字が狂う
# （竜は12語に出てくるが、"a friendly dragon" や "The dragon protects the sleeping village."
#   のように味方側で出ることも多い）
EXTRA_LOOK = {
    # 色は例文に譲る。"A red dragon flies over the town." や
    # "The dragon changes color in the sun." と食い違うため
    "dragon": "dragons are long scaled reptiles with a horned crest, a slender neck, "
              "folded leathery wings and amber eyes, in tan and bronze scales "
              "unless the sentence gives them another colour",
    # 基準は work のカード。4語に出る（work / efficient / equipment / inventory）
    "dwarf": "dwarves are short, broad and sturdy, with long thick beards in red, grey or brown, "
             "big hands, and plain wool and leather work clothes with an iron helmet or a cloth cap",
}

# 見た目を足す対象。敵役 ＋ 上の生きもの
LOOK = {**FOE_LOOK, **EXTRA_LOOK}

# カードの単語そのものの形を決めておく語（キーは単語）。
# 生成AIがその物を、ヨーロッパ中世ではない形で描いてしまうもの。WORLD の「和風でない」だけでは足りなかった
#   umbrella … 骨の細い和傘の形になり、少女の顔立ちも和風に見えた（ユーザーが作り直しを希望）
ITEM_LOOK = {
    "umbrella": "The umbrella is a European one: a dome of red oiled cloth stretched over a few "
                "sturdy wooden ribs, with a curved wooden handle - not a Japanese paper umbrella, "
                "not a parasol with many thin bamboo ribs. The girl is a European village girl.",
}

_missing = [e for e in ENEMIES if e not in FOE_LOOK]
assert not _missing, f"FOE_LOOK に見た目の設定が無い敵役: {_missing}"

# 例文の中では「敵そのもの」ではないので、見た目を足さない語。
# ENEMIES は敵役の割合を数えるための一覧なので、形容詞や比喩もひっかかる
#   cursed  … "the cursed swamp" / "the cursed mines"（呪われた場所であって、騎士は出てこない）
#   shadow  … "in the shadows of the ruined castle"（ただの影）
#   monster … "a friendly dragon, not a monster"（打ち消し。描いてはいけない）
#   beast   … 同様に、ほかの敵の言い換えとして出てくる
FOE_SKIP = {"cursed", "shadow", "monster", "beast"}

# 1枚に敵役が何種類も出ると、プロンプトが長くなりすぎる。例文に出てくる順で2種類まで
FOE_MAX = 2


def foe_lines(w):
    found = []
    for e in LOOK:
        if e in FOE_SKIP:
            continue
        m = re.search(enemy_pattern(e), w["ex"], re.I)
        if m:
            found.append((m.start(), e))
    found.sort()
    return ". ".join(LOOK[e] for _, e in found[:FOE_MAX])


def subject_line(w):
    return SUBJECT.get(w["pos"], SUBJECT_OTHER).format(en=w["en"])


def creature_line(w):
    """例文に生きものが出てくるなら、顔の指定を足す"""
    if not any(has(w["ex"], e) for e in LOOK):
        return ""
    return CREATURE


def prompt_for(w):
    r = w["rarity"]
    parts = [f'{STYLE[r]}. Scene: {w["ex"]}', subject_line(w)]
    if w["en"] in ITEM_LOOK:
        parts.append(ITEM_LOOK[w["en"]])
    c = creature_line(w)
    if c:
        parts.append(c)
    foes = foe_lines(w)
    if foes:
        parts.append(foes + ".")
    if LEVEL_NO[r] >= 3:
        parts.append(ROLE)
    parts.append(WORLD)
    place = place_line(w)
    if place:
        parts.append(place)
    parts.append(FACES)
    parts.append(shot_line(w))
    avoid = AVOID.get(r)
    parts.append(f"{avoid}, {TAIL}" if avoid else TAIL)
    return " ".join(parts)


def load_words():
    src = WORDS_JS.read_text(encoding="utf-8")
    m = re.search(r"const WORDS=(\[.*?\]);", src, re.S)
    if not m:
        sys.exit("words.js から WORDS を読み取れませんでした")
    return json.loads(m.group(1))


# 画像はあるが、作り直す単語（先頭から順に、次に作る分の最初に入る）。
# 作り直した絵を登録したら、ここから消す。例文を変えたときは、絵と食い違うので必ずここに入れる
#   （済み）book / big / room … 蜘蛛が描かれていた（ユーザーが苦手）。例文を変えて作り直した
REDO = []


def next_order(words, done, rarity=None):
    """次に作る順番。作り直し（REDO）が先、そのあとは画像の無い語をレアリティの低い順 → 図鑑の並び順"""
    by_en = {w["en"]: w for w in words}
    missing = [en for en in REDO if en not in by_en]
    assert not missing, f"REDO に words.js に無い単語がある: {missing}"
    redo = [by_en[en] for en in REDO if rarity is None or by_en[en]["rarity"] == rarity]
    rest = [w for w in words if w["en"] not in done and w["en"] not in REDO
            and (rarity is None or w["rarity"] == rarity)]
    rest.sort(key=lambda w: (LEVEL_NO[w["rarity"]], w["id"]))
    return redo + rest


def load_done_images():
    """card_art.js の CARD_IMG_NAMES（画像を作り終えた単語）"""
    src = CARD_ART_JS.read_text(encoding="utf-8")
    m = re.search(r"const CARD_IMG_NAMES=\[(.*?)\];", src, re.S)
    return re.findall(r'"([^"]+)"', m.group(1)) if m else []


def header(words, done):
    total = len(words)
    done_line = ("\n".join(f"- {n}" for n in done)
                 if done else "- （まだありません）")
    return f"""# カード画像のプロンプト

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
| Lv.1 COMMON | ゴブリン、スライム、コウモリ、ネズミ、いたずら妖精 |
| Lv.2 UNCOMMON | オーク、スケルトン、幽霊、魔女、山賊、コボルト |
| Lv.3 RARE | ヴァンパイア、人狼、トロル、ハーピー、呪われた騎士、海賊、ゴーレム |
| Lv.4 EPIC | リッチ、悪魔、死霊術師、闇の将軍、ヴァンパイア卿、怪物の巣 |
| Lv.5 LEGENDARY | 大悪魔、ヴァンパイア公、古竜、破滅の王、闇の帝国 |

## 優先順位のおすすめ
- 画像が目立つのは、ガチャで出る高レアと、図鑑で見るカードです
- COMMON・UNCOMMON は数が多いので、まず数語だけ作り、絵柄を確認してから増やすのがおすすめです
- 敵役が出てくる例文は絵になりやすいので、そこから作るのもおすすめです

## 作成済みの画像
`js/card_art.js` の `CARD_IMG_NAMES` に登録済み（この{len(done)}語は、絵文字ではなく画像で表示されます）。

{done_line}

全{total}語ぶんのプロンプトが下にあります。
"""


def main():
    words = load_words()
    done = load_done_images()
    out = [header(words, done)]

    for rarity in LEVELS:
        group = [w for w in words if w["rarity"] == rarity]
        out.append(f"\n## Lv.{LEVEL_NO[rarity]} {rarity}（{len(group)}語）\n")
        out.append(f"共通のスタイル：{STYLE[rarity]}\n")
        for w in group:
            out.append(f"**{w['id']}. {w['en']}**（{w['ja']}）")
            out.append("```")
            out.append(prompt_for(w))
            out.append("```")
            out.append("")

    OUT_MD.write_text("\n".join(out), encoding="utf-8")
    print(f"{OUT_MD.relative_to(ROOT)} を作り直しました（{len(words)}語）")


# PLACE_SELF に綴り違いが紛れていても気づけないので、words.js と突き合わせる
_no_word = sorted(PLACE_SELF - {w["en"] for w in load_words()})
assert not _no_word, f"PLACE_SELF に words.js に無い単語: {_no_word}"


if __name__ == "__main__":
    main()
