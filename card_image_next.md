# 次に作るカード画像（おすすめ順）

※ このファイルは `tools/gen_next_batch.py` が作ります。直接編集しないでください。
※ 全500語のうち、画像がまだ無いのは **391語**。ここにはその先頭 **391語** を出しています。

## 使い方
1. 下のプロンプトを画像生成AIに入れる（3:2の横長。目安 1800x1200）
2. `assets/cards/単語.webp` で保存する（1200x800 前後、100〜400KB）
3. `js/card_art.js` の `CARD_IMG_NAMES` に単語を足す
4. `python3 tools/gen_next_batch.py` をもう一度実行すると、作り終えた分が外れて次の分が出る

順番は「レアリティが高い順 → 敵役が出てくる例文が先」です。高レアはガチャの開封で大きく映り、敵役の例文は場面がはっきりしていて絵にしやすいためです。


## Lv.5 LEGENDARY（この一覧に99語）

### 1. leverage（活用する）　id 81　敵役: vampire
例文: The vampire count leveraged his alliances to seize three human cities.　／　ヴァンパイア公は同盟を活用し、人間の三都市を奪った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The vampire count leveraged his alliances to seize three human cities. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 2. mitigate（和らげる）　id 82　敵役: archdemon
例文: The archmage raised a barrier to mitigate the archdemon's burning breath.　／　大魔道士は結界を張り、大悪魔の燃える息を和らげた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archmage raised a barrier to mitigate the archdemon's burning breath. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 3. acquisition（買収）　id 83　敵役: vampire, cursed
例文: The acquisition of the cursed mines gave the vampire count new power.　／　呪われた鉱山の買収が、ヴァンパイア公に新たな力を与えた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The acquisition of the cursed mines gave the vampire count new power. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 4. revenue（収益）　id 86　敵役: vampire
例文: The harbor's revenue fell sharply after the vampire raids began.　／　ヴァンパイアの襲撃が始まると、港の収益は急に落ちた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The harbor's revenue fell sharply after the vampire raids began. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 5. disruption（混乱）　id 87　敵役: archdemon
例文: The archdemon's return caused serious disruption across every trade route.　／　大悪魔の復活が、すべての交易路に深刻な混乱を引き起こした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The archdemon's return caused serious disruption across every trade route. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 6. negotiation（交渉）　id 89　敵役: demon
例文: The negotiation with the demon lord ended in blood and fire.　／　悪魔の王との交渉は、血と炎で終わった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The negotiation with the demon lord ended in blood and fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 7. proactively（先手を打って）　id 91　敵役: demon
例文: The captain proactively reinforced the walls before the demon siege.　／　隊長は先手を打って、悪魔の包囲の前に城壁を補強した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain proactively reinforced the walls before the demon siege. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 8. substantial（かなりの）　id 92　敵役: undead
例文: A substantial part of the army was lost to the undead legion.　／　軍のかなりの部分が、不死の軍団に失われた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A substantial part of the army was lost to the undead legion. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 9. contingency（不測の事態）　id 98　敵役: lich
例文: The general prepared a contingency plan in case the lich rose again.　／　将軍は、リッチが再び起き上がる不測の事態への計画を用意した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general prepared a contingency plan in case the lich rose again. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 10. alliance（同盟）　id 422　敵役: archdemon
例文: The free cities formed an alliance against the archdemon's endless legions.　／　自由都市は、大悪魔の尽きない軍団に対する同盟を結んだ。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The free cities formed an alliance against the archdemon's endless legions. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 11. budget（予算）　id 426　敵役: archdemon
例文: The queen approved a large budget for the war against the archdemon.　／　女王は、大悪魔との戦争に大きな予算を承認した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen approved a large budget for the war against the archdemon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 12. demand（需要）　id 433　敵役: vampire
例文: Demand for silver weapons rose sharply after the vampire count appeared.　／　ヴァンパイア公が現れてから、銀の武器の需要が急に伸びた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Demand for silver weapons rose sharply after the vampire count appeared. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 13. headquarters（本部）　id 436　敵役: giant
例文: The guild built its headquarters inside a giant hollow tree.　／　ギルドは、巨大な空洞の木の中に本部を築いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built its headquarters inside a giant hollow tree. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 14. milestone（節目）　id 441　敵役: vampire
例文: Slaying the vampire count was a milestone in the long war.　／　ヴァンパイア公を討ったことは、長い戦争の節目だった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Slaying the vampire count was a milestone in the long war. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 15. profit（利益）　id 445　敵役: pirate
例文: The pirates split the profit equally among the whole crew.　／　海賊たちは、利益を全員で平等に分けた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The pirates split the profit equally among the whole crew. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 16. recession（景気後退）　id 446　敵役: demon
例文: During the recession after the demon war, half the port city closed.　／　悪魔戦争後の景気後退の間に、港町の半分が店を閉じた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: During the recession after the demon war, half the port city closed. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 17. supplier（供給業者）　id 449　敵役: undead
例文: The king's chief supplier delivered ten thousand silver arrows before the undead came.　／　王の主要な供給業者が、不死の軍が来る前に銀の矢一万本を届けた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king's chief supplier delivered ten thousand silver arrows before the undead came. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 18. warehouse（倉庫）　id 452　敵役: cultist, archdemon
例文: The cultists hid a sealed archdemon relic inside the old warehouse.　／　カルティストたちは、封じた大悪魔の遺物を古い倉庫に隠した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The cultists hid a sealed archdemon relic inside the old warehouse. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 19. workforce（労働力）　id 453　敵役: titan
例文: The city needed a larger workforce to rebuild the walls the titan broke.　／　街は、巨神が壊した城壁を築き直すため、より多くの労働力を必要とした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The city needed a larger workforce to rebuild the walls the titan broke. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 20. acquire（手に入れる）　id 457　敵役: lich
例文: The lich tried to acquire the rare book before the order burned it.　／　リッチは、騎士団が焼く前にその希少な書を手に入れようとした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The lich tried to acquire the rare book before the order burned it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 21. align（足並みをそろえる）　id 458　敵役: archdemon
例文: The two kingdoms agreed to align their armies against the archdemon.　／　二つの王国は、大悪魔に対して軍の足並みをそろえることに合意した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two kingdoms agreed to align their armies against the archdemon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 22. authorize（認可する）　id 461　敵役: demon
例文: Only the queen can authorize the opening of the sealed demon vault.　／　封じられた悪魔の地下室を開けることを認可できるのは、女王だけだ。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the queen can authorize the opening of the sealed demon vault. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 23. commence（開始する）　id 462　敵役: lich
例文: The final assault on the lich's fortress will commence at dawn.　／　リッチの砦への最後の攻撃は、夜明けに開始される。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The final assault on the lich's fortress will commence at dawn. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 24. consolidate（統合する）　id 463　敵役: demon
例文: The general moved to consolidate his forces before the demon legion arrived.　／　将軍は、悪魔の軍団が到着する前に軍勢を統合しようと動いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general moved to consolidate his forces before the demon legion arrived. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 25. execute（遂行する）　id 467　敵役: vampire
例文: The hunters will execute the plan at midnight, when the vampire count sleeps.　／　狩人たちは真夜中、ヴァンパイア公が眠る時に計画を遂行する。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hunters will execute the plan at midnight, when the vampire count sleeps. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 26. expedite（早める）　id 468　敵役: undead
例文: The king ordered the smiths to expedite the silver arrows for the undead war.　／　王は鍛冶に、不死の軍との戦いのため銀の矢を早めるよう命じた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king ordered the smiths to expedite the silver arrows for the undead war. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 27. forecast（予測する）　id 470　敵役: archdemon
例文: The oracle can forecast the archdemon's attack three days in advance.　／　神託は、大悪魔の攻撃を三日前に予測できる。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The oracle can forecast the archdemon's attack three days in advance. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 28. oversee（統括する）　id 473　敵役: demon
例文: A trusted knight will oversee the sealing of the demon gate.　／　信頼された騎士が、悪魔の門の封印を統括する。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A trusted knight will oversee the sealing of the demon gate. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 29. procure（調達する）　id 475　敵役: lich
例文: The alchemist struggled to procure the holy water needed against the lich.　／　錬金術師は、リッチに必要な聖水の調達に苦しんだ。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The alchemist struggled to procure the holy water needed against the lich. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 30. reimburse（払い戻す）　id 476　敵役: demon
例文: The king promised to reimburse the farmers for the fields the demons burned.　／　王は、悪魔が焼いた畑について農民に払い戻すと約束した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king promised to reimburse the farmers for the fields the demons burned. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 31. restructure（再編する）　id 478　敵役: demon
例文: After the demon war, the council had to restructure the entire army.　／　悪魔戦争の後、議会は軍全体を再編しなければならなかった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: After the demon war, the council had to restructure the entire army. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 32. terminate（終了させる）　id 481　敵役: warlock, archdemon
例文: The order decided to terminate the warlock's contract with the archdemon.　／　騎士団は、魔術師と大悪魔の契約を終了させることを決めた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The order decided to terminate the warlock's contract with the archdemon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 33. confidential（機密の）　id 485　敵役: archdemon
例文: The general received a confidential report on the archdemon's only weakness.　／　将軍は、大悪魔の唯一の弱点についての機密の報告を受けた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general received a confidential report on the archdemon's only weakness. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 34. flexible（柔軟な）　id 486　敵役: demon
例文: A flexible plan let the army escape when the demons broke through.　／　柔軟な計画のおかげで、悪魔が突破したとき軍は逃れられた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A flexible plan let the army escape when the demons broke through. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 35. obsolete（時代遅れの）　id 489　敵役: demon
例文: Iron weapons became obsolete once the demons reached the capital.　／　悪魔が首都に達すると、鉄の武器は時代遅れになった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Iron weapons became obsolete once the demons reached the capital. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 36. viable（実行可能な）　id 493　敵役: archdemon
例文: The wizards found no viable way to destroy the archdemon's crown.　／　魔法使いたちは、大悪魔の王冠を壊す実行可能な方法を見つけられなかった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizards found no viable way to destroy the archdemon's crown. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 37. temporary（一時的な）　id 494　敵役: demon
例文: The seal on the demon gate is only a temporary fix.　／　悪魔の門の封印は、一時的な処置にすぎない。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The seal on the demon gate is only a temporary fix. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 38. accordingly（それに応じて）　id 497　敵役: lich
例文: The general saw the lich's plan and prepared accordingly.　／　将軍はリッチの計画を見抜き、それに応じて備えた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The general saw the lich's plan and prepared accordingly. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 39. simultaneously（同時に）　id 499　敵役: archdemon
例文: Two archdemons struck the tower simultaneously from opposite sides.　／　二体の大悪魔が、反対側から同時に塔を襲った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Two archdemons struck the tower simultaneously from opposite sides. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 40. subsequently（その後）　id 500　敵役: lich
例文: The hero slew the lich and subsequently sealed the black gate.　／　勇者はリッチを討ち、その後、黒い門を封じた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The hero slew the lich and subsequently sealed the black gate. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 41. compliance（順守）　id 85
例文: The guild ensured full compliance with the royal safety rules.　／　ギルドは、王の安全規則への完全な順守を徹底した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild ensured full compliance with the royal safety rules. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 42. sustainable（持続可能な）　id 88
例文: The elves designed a sustainable city that grows together with the forest.　／　エルフたちは、森とともに育つ持続可能な都市を設計した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elves designed a sustainable city that grows together with the forest. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 43. collaboration（協力）　id 90
例文: The collaboration of mages and smiths produced a legendary sword.　／　魔法使いと鍛冶師の協力が、伝説の剣を生み出した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The collaboration of mages and smiths produced a legendary sword. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 44. constraint（制約）　id 93
例文: The mages worked within strict constraints of time and mana.　／　魔法使いたちは、時間と魔力の厳しい制約の中で働いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages worked within strict constraints of time and mana. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 45. incentive（報奨）　id 94
例文: The king offered a golden incentive to anyone who could break the curse.　／　王は、呪いを解いた者に金の報奨を約束した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king offered a golden incentive to anyone who could break the curse. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 46. scalable（拡張可能な）　id 95
例文: The guild built a scalable system that could grow with the city.　／　ギルドは、街とともに拡大できる拡張可能な仕組みを作った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guild built a scalable system that could grow with the city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 47. benchmark（指標）　id 96
例文: The old champion's record became the benchmark for every young knight.　／　老いた王者の記録は、すべての若い騎士の目標となる指標になった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old champion's record became the benchmark for every young knight. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 48. liability（負債）　id 97
例文: An unpaid debt became a heavy liability for the merchant.　／　未払いの借金は、商人にとって重い負債となった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: An unpaid debt became a heavy liability for the merchant. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 49. deliverable（成果物）　id 99
例文: Each apprentice submitted the final deliverable before the deadline.　／　弟子たちはそれぞれ、期限前に成果物を提出した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each apprentice submitted the final deliverable before the deadline. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 50. streamline（効率化する）　id 100
例文: The guildmaster streamlined the process to save time.　／　ギルド長は時間を節約するため、手順を効率化した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The guildmaster streamlined the process to save time. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 51. agenda（議題）　id 421
例文: The elder placed the dragon threat first on the agenda of the summit.　／　長老は、会議の議題の最初に、ドラゴンの脅威を置いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The elder placed the dragon threat first on the agenda of the summit. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 52. asset（資産）　id 423
例文: The ancient library became the most valuable asset of the kingdom.　／　その古い図書館は、王国でもっとも価値のある資産となった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ancient library became the most valuable asset of the kingdom. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 53. audit（監査）　id 424
例文: Royal inspectors conducted a strict audit of the treasury accounts.　／　王の検査官たちは、宝物庫の帳簿に厳しい監査を行った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Royal inspectors conducted a strict audit of the treasury accounts. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 54. brand（ブランド）　id 425
例文: The famous guild built a brand that every traveler could trust.　／　その有名なギルドは、旅人なら誰もが信頼するブランドを築き上げた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous guild built a brand that every traveler could trust. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 55. capital（資本）　id 427
例文: The merchants raised enough capital to build a fleet of sky ships.　／　商人たちは、空の船団を作れるだけの資本を集めた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchants raised enough capital to build a fleet of sky ships. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 56. client（顧客）　id 428
例文: The wizard promised his client a spell that would never fail.　／　魔法使いは、顧客に決して失敗しない呪文を約束した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard promised his client a spell that would never fail. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 57. competitor（競合他社）　id 429
例文: A rival guild became a serious competitor in the crystal trade.　／　ライバルのギルドが、水晶の取引で手強い競合他社になった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A rival guild became a serious competitor in the crystal trade. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 58. consumer（消費者）　id 430
例文: Every consumer in the city wanted a lamp that never burned out.　／　街の消費者は皆、決して燃え尽きないランプをほしがった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every consumer in the city wanted a lamp that never burned out. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 59. corporation（大企業）　id 431
例文: The mining corporation controlled every mountain from the coast to the desert.　／　その鉱山会社は、海岸から砂漠までのすべての山を支配していた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mining corporation controlled every mountain from the coast to the desert. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 60. deadline（締め切り）　id 432
例文: The blacksmith worked all night to meet the royal deadline.　／　鍛冶師は、王の締め切りに間に合わせるため、夜通し働いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The blacksmith worked all night to meet the royal deadline. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 61. dividend（配当）　id 434
例文: Each shareholder received a golden dividend at the end of the year.　／　株主たちは、年の終わりに金貨の配当を受け取った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Each shareholder received a golden dividend at the end of the year. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 62. entrepreneur（起業家）　id 435
例文: The young entrepreneur opened a tavern in the middle of the sky.　／　若い起業家は、空の真ん中に酒場を開いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The young entrepreneur opened a tavern in the middle of the sky. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 63. inflation（インフレ）　id 437
例文: Inflation made a loaf of bread cost ten gold coins.　／　インフレのせいで、パン一つが金貨十枚もした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Inflation made a loaf of bread cost ten gold coins. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 64. inventory（在庫）　id 438
例文: The dwarf counted every item in the inventory before the caravan left.　／　ドワーフは、隊商が出発する前に在庫のすべての品を数えた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The dwarf counted every item in the inventory before the caravan left. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 65. manufacturer（製造業者）　id 439
例文: The finest manufacturer of enchanted armor lived in the mountain city.　／　魔法の鎧を作る最高の製造業者は、山の都に住んでいた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The finest manufacturer of enchanted armor lived in the mountain city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 66. merger（合併）　id 440
例文: The merger of the two guilds created the strongest force in the land.　／　二つのギルドの合併は、この地で最強の勢力を生んだ。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merger of the two guilds created the strongest force in the land. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 67. partnership（提携）　id 442
例文: The partnership between mages and engineers changed the whole kingdom.　／　魔法使いと技術者の提携は、王国全体を変えた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The partnership between mages and engineers changed the whole kingdom. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 68. portfolio（ポートフォリオ）　id 443
例文: The banker's portfolio held gold mines, ships, and even a small dragon.　／　銀行家のポートフォリオには、金鉱と船、それに小さなドラゴンまで入っていた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The banker's portfolio held gold mines, ships, and even a small dragon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 69. productivity（生産性）　id 444
例文: The new enchanted looms doubled the productivity of the weavers.　／　新しい魔法の織機は、織り手たちの生産性を倍にした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The new enchanted looms doubled the productivity of the weavers. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 70. reputation（評判）　id 447
例文: Her reputation as an honest healer spread across every kingdom.　／　正直な癒し手という彼女の評判は、あらゆる王国に広まった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Her reputation as an honest healer spread across every kingdom. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 71. subsidiary（子会社）　id 448
例文: The great guild opened a subsidiary in the far eastern harbor.　／　その大ギルドは、遠い東の港に子会社を開いた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The great guild opened a subsidiary in the far eastern harbor. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 72. tariff（関税）　id 450
例文: The empire raised a heavy tariff on all goods from the south.　／　帝国は、南からの品すべてに重い関税をかけた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The empire raised a heavy tariff on all goods from the south. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 73. transaction（取引）　id 451
例文: Every transaction in the market was recorded in a magic ledger.　／　市場のすべての取引は、魔法の帳簿に記録された。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every transaction in the market was recorded in a magic ledger. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 74. monopoly（独占）　id 454
例文: The wizard's guild held a monopoly on all flying carpets.　／　魔法使いのギルドは、空飛ぶじゅうたんすべてを独占していた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wizard's guild held a monopoly on all flying carpets. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 75. accelerate（加速させる）　id 455
例文: The mages used a spell to accelerate the growth of the crops.　／　魔法使いたちは、作物の成長を加速させる呪文を使った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The mages used a spell to accelerate the growth of the crops. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 76. accommodate（収容する）　id 456
例文: The grand hall could accommodate ten thousand guests at once.　／　その大広間は、一度に一万人の客を収容できた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The grand hall could accommodate ten thousand guests at once. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 77. amend（改正する）　id 459
例文: The council voted to amend the ancient law of the harbor.　／　評議会は、港の古い法を改正することを票決した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The council voted to amend the ancient law of the harbor. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 78. approve（承認する）　id 460
例文: The king will approve the plan only if the council agrees.　／　評議会が賛成した場合にのみ、王はその計画を承認する。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The king will approve the plan only if the council agrees. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 79. delegate（委任する）　id 464
例文: The wise queen chose to delegate the harvest to her trusted advisors.　／　賢い女王は、収穫の仕事を、信頼する助言者たちに委任することにした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wise queen chose to delegate the harvest to her trusted advisors. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 80. diversify（多角化する）　id 465
例文: The merchant decided to diversify and sell silk as well as spices.　／　商人は、香辛料だけでなく絹も売って、事業を多角化することにした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The merchant decided to diversify and sell silk as well as spices. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 81. endorse（支持する）　id 466
例文: The famous hero agreed to endorse the new sword shop.　／　有名な勇者は、新しい剣の店を支持することに同意した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The famous hero agreed to endorse the new sword shop. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 82. finalize（最終決定する）　id 469
例文: The two rulers met in the tower to finalize the treaty.　／　二人の支配者は、条約を最終決定するために塔で会った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The two rulers met in the tower to finalize the treaty. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 83. initiate（着手する）　id 471
例文: The queen wished to initiate a bold plan to reunite the realms.　／　女王は、諸国を再びひとつにする大胆な計画に着手したいと考えた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen wished to initiate a bold plan to reunite the realms. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 84. invest（投資する）　id 472
例文: The wealthy duke chose to invest his gold in a fleet of airships.　／　裕福な公爵は、飛行船の船団に金貨を投資することにした。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The wealthy duke chose to invest his gold in a fleet of airships. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 85. prioritize（優先する）　id 474
例文: The captain had to prioritize saving the children over saving the cargo.　／　船長は、積み荷を救うより子どもたちを救うことを優先しなければならなかった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The captain had to prioritize saving the children over saving the cargo. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 86. renew（更新する）　id 477
例文: Every year, the villagers renew the old pact with the forest spirits.　／　毎年、村人たちは森の精霊たちとの古い誓いを更新する。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Every year, the villagers renew the old pact with the forest spirits. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 87. revise（改訂する）　id 479
例文: The scholars revise the ancient map whenever a new island appears.　／　学者たちは、新しい島が現れるたびに、古い地図を改訂する。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The scholars revise the ancient map whenever a new island appears. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 88. supervise（監督する）　id 480
例文: The old master will supervise the young apprentices in the forge.　／　老いた親方が、鍛冶場で若い弟子たちを監督する。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The old master will supervise the young apprentices in the forge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 89. undermine（弱体化させる）　id 482
例文: Rumors spread by the spy began to undermine the king's authority.　／　スパイの流したうわさが、王の権威を弱体化させ始めた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Rumors spread by the spy began to undermine the king's authority. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 90. ambitious（野心的な）　id 483
例文: The ambitious young mage dreamed of ruling the entire academy.　／　野心的な若い魔法使いは、学院全体を治めることを夢見ていた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The ambitious young mage dreamed of ruling the entire academy. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 91. competitive（競争力のある）　id 484
例文: Only the most competitive guilds survived in the crystal trade.　／　水晶の取引では、もっとも競争力のあるギルドだけが生き残った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Only the most competitive guilds survived in the crystal trade. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 92. lucrative（もうかる）　id 487
例文: Selling dragon eggs to collectors was a lucrative but dangerous business.　／　ドラゴンの卵をコレクターに売るのは、もうかるが危険な商売だった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: Selling dragon eggs to collectors was a lucrative but dangerous business. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 93. mandatory（義務の）　id 488
例文: It is mandatory for every knight to swear the oath before the battle.　／　戦いの前に誓いを立てるのは、すべての騎士に義務づけられている。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: It is mandatory for every knight to swear the oath before the battle. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 94. overdue（期限を過ぎた）　id 490
例文: The debt of the merchant was already overdue by three long years.　／　商人の借金は、すでに三年も期限を過ぎていた。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The debt of the merchant was already overdue by three long years. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 95. profitable（利益の出る）　id 491
例文: The northern trade route proved profitable for the whole guild.　／　北の交易路は、ギルド全体にとって利益の出るものだった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The northern trade route proved profitable for the whole guild. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 96. prominent（著名な）　id 492
例文: A prominent scholar of the academy opened the great debate.　／　学院の著名な学者が、大きな討論の口火を切った。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: A prominent scholar of the academy opened the great debate. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 97. transparent（透明な）　id 495
例文: The queen promised a transparent trial, open to every citizen.　／　女王は、すべての市民に開かれた透明な裁判を約束した。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The queen promised a transparent trial, open to every citizen. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 98. volatile（不安定な）　id 496
例文: The volatile mixture of potions could explode at any moment.　／　その不安定な薬の混合物は、いつ爆発してもおかしくなかった。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The volatile mixture of potions could explode at any moment. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 99. approximately（およそ）　id 498
例文: The journey to the sky city takes approximately three days.　／　空の都までの旅は、およそ三日かかる。
```
masterpiece grand legendary painted fantasy illustration, epic scale, glowing magic circle, golden particles, radiant light, extremely detailed, cinematic. Scene: The journey to the sky city takes approximately three days. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.4 EPIC（この一覧に99語）

### 100. implement（実行する）　id 61　敵役: lich
例文: The council will implement the plan against the lich tomorrow.　／　議会は明日、リッチに対する計画を実行する。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council will implement the plan against the lich tomorrow. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 101. alternative（代わりの）　id 66　敵役: necromancer
例文: With the necromancer's army at the gate, they took an alternative route.　／　死霊術師の軍が門に迫り、彼らは代わりの道を取った。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: With the necromancer's army at the gate, they took an alternative route. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 102. consequence（結果）　id 67　敵役: necromancer
例文: Raising the dead brought a terrible consequence upon the necromancer.　／　死者を起こしたことが、死霊術師に恐ろしい結果をもたらした。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Raising the dead brought a terrible consequence upon the necromancer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 103. strategy（戦略）　id 70　敵役: demon
例文: The general planned a bold strategy against the demon horde.　／　将軍は、悪魔の群れに対する大胆な戦略を立てた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The general planned a bold strategy against the demon horde. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 104. analyze（分析する）　id 72　敵役: lich
例文: The mages analyzed the lich's ancient curse for many weeks.　／　魔道士たちは、リッチの古い呪いを何週間も分析した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The mages analyzed the lich's ancient curse for many weeks. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 105. maintain（維持する）　id 74　敵役: fiend
例文: The old wards maintain a barrier against the fiends outside.　／　古い結界が、外の魔人たちに対する壁を維持している。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old wards maintain a barrier against the fiends outside. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 106. priority（優先事項）　id 77　敵役: lich
例文: Destroying the lich's phylactery is our first priority.　／　リッチの命の器を壊すことが、我々の最優先事項だ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Destroying the lich's phylactery is our first priority. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 107. comprehensive（包括的な）　id 78　敵役: demon
例文: The order keeps a comprehensive record of every known demon.　／　その騎士団は、知られたすべての悪魔の包括的な記録を保つ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The order keeps a comprehensive record of every known demon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 108. assumption（前提）　id 80　敵役: lich
例文: Their attack failed on the false assumption that the lich was alone.　／　彼らの攻撃は、リッチが単独だという誤った前提のために失敗した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Their attack failed on the false assumption that the lich was alone. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 109. contract（契約）　id 343　敵役: demon, warlock
例文: The warlock signed a contract with a demon under the blood moon.　／　魔術師は血の月の下で、悪魔と契約を結んだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The warlock signed a contract with a demon under the blood moon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 110. dimension（次元）　id 345　敵役: demon
例文: Demons poured from another dimension above the burning altar.　／　燃える祭壇の上で、別の次元から悪魔たちが流れ出た。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Demons poured from another dimension above the burning altar. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 111. factor（要因）　id 351　敵役: undead
例文: Holy fire was the deciding factor against the undead army.　／　聖なる炎が、不死の軍に対する決定的な要因だった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Holy fire was the deciding factor against the undead army. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 112. foundation（土台）　id 353　敵役: demon
例文: A sleeping demon lies beneath the foundation of the black temple.　／　黒い神殿の土台の下に、眠る悪魔が横たわっている。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A sleeping demon lies beneath the foundation of the black temple. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 113. identity（正体）　id 357　敵役: vampire
例文: The masked general hid his identity as a vampire lord.　／　仮面の将軍は、ヴァンパイア卿としての正体を隠していた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The masked general hid his identity as a vampire lord. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 114. objective（目標）　id 364　敵役: necromancer
例文: The objective is to burn the necromancer's book of names.　／　目標は、死霊術師の名前の書を焼くことだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The objective is to burn the necromancer's book of names. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 115. outcome（結末）　id 365　敵役: lich
例文: Nobody could predict the outcome of the war against the lich.　／　リッチとの戦争の結末は、誰にも予測できなかった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Nobody could predict the outcome of the war against the lich. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 116. procedure（手順）　id 367　敵役: demon
例文: The priest followed a careful procedure to banish the demon.　／　司祭は、悪魔を追い払うために慎重な手順を踏んだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The priest followed a careful procedure to banish the demon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 117. prospect（見通し）　id 369　敵役: demon
例文: The prospect of a demon siege emptied the whole city.　／　悪魔の包囲という見通しが、街全体を空にした。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The prospect of a demon siege emptied the whole city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 118. allocate（配分する）　id 375　敵役: demon
例文: The queen will allocate more gold to the demon hunters.　／　女王は、悪魔狩りの者たちにもっと金を配分する。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The queen will allocate more gold to the demon hunters. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 119. anticipate（予想する）　id 376　敵役: dread
例文: The general anticipated the dread knight's charge at dawn.　／　将軍は、夜明けの恐怖の騎士の突撃を予想していた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The general anticipated the dread knight's charge at dawn. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 120. assess（査定する）　id 378　敵役: fiend
例文: The knight assessed the fiend's wounds before striking again.　／　騎士は、再び斬りかかる前に魔人の傷を査定した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The knight assessed the fiend's wounds before striking again. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 121. assign（任命する）　id 379　敵役: demon
例文: The captain assigned two knights to guard the demon seal.　／　隊長は、悪魔の封印を守るため二人の騎士を任命した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The captain assigned two knights to guard the demon seal. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 122. conclude（結論づける）　id 381　敵役: lich
例文: The council concluded that a lich ruled the frozen city.　／　議会は、凍った街をリッチが支配していると結論づけた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council concluded that a lich ruled the frozen city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 123. conduct（実施する）　id 382　敵役: cultist
例文: The cultists conduct dark rites in the tower every night.　／　カルティストたちは毎晩、塔で闇の儀式を実施する。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The cultists conduct dark rites in the tower every night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 124. confirm（確認する）　id 383　敵役: necromancer
例文: The scout confirmed that the necromancer's army had crossed the river.　／　偵察兵は、死霊術師の軍が川を渡ったことを確認した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scout confirmed that the necromancer's army had crossed the river. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 125. consult（相談する）　id 384　敵役: lich
例文: The king consulted the oracle before marching on the lich.　／　王はリッチへ進軍する前に、神託に相談した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king consulted the oracle before marching on the lich. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 126. eliminate（取り除く）　id 388　敵役: cultist
例文: The order will eliminate every cultist hiding in the capital.　／　騎士団は、首都に隠れるカルティストをすべて取り除く。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The order will eliminate every cultist hiding in the capital. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 127. emerge（姿を現す）　id 389　敵役: serpent, giant
例文: A giant serpent slowly emerged from the dark lake.　／　巨大な蛇が、暗い湖からゆっくりと姿を現した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A giant serpent slowly emerged from the dark lake. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 128. encounter（出会う）　id 391　敵役: lich
例文: The travelers encountered a wandering lich on the frozen pass.　／　旅人たちは、凍った峠でさまようリッチに出会った。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The travelers encountered a wandering lich on the frozen pass. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 129. ensure（確実にする）　id 392　敵役: demon
例文: Silver wards ensure that no demon enters the inner keep.　／　銀の結界が、悪魔が本丸に入らないことを確実にする。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Silver wards ensure that no demon enters the inner keep. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 130. exceed（上回る）　id 394　敵役: demon
例文: The demon's strength exceeded everything the knights had imagined.　／　悪魔の力は、騎士たちが想像したすべてを上回った。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The demon's strength exceeded everything the knights had imagined. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 131. indicate（示す）　id 398　敵役: lich
例文: The black runes indicate the place where the lich was buried.　／　黒い文字が、リッチが葬られた場所を示している。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The black runes indicate the place where the lich was buried. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 132. investigate（調査する）　id 400　敵役: necromancer
例文: The hunters went to investigate the necromancer's silent tower.　／　狩人たちは、死霊術師の静かな塔を調査に向かった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The hunters went to investigate the necromancer's silent tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 133. complex（複雑な）　id 405　敵役: lich
例文: The lich's curse was so complex that few mages could read it.　／　リッチの呪いはあまりに複雑で、読める魔道士はわずかだった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The lich's curse was so complex that few mages could read it. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 134. crucial（極めて重要な）　id 407　敵役: demon
例文: The next hour is crucial before the demon gate opens.　／　悪魔の門が開く前の次の一時間が、極めて重要だ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The next hour is crucial before the demon gate opens. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 135. ultimate（究極の）　id 414　敵役: lich
例文: The ultimate goal is to end the lich king's long reign.　／　究極の目標は、リッチ王の長い支配を終わらせることだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The ultimate goal is to end the lich king's long reign. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 136. vulnerable（傷つきやすい）　id 416　敵役: lich
例文: The lich is vulnerable only when its phylactery breaks.　／　リッチは、命の器が壊れたときだけ傷つきやすくなる。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The lich is vulnerable only when its phylactery breaks. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 137. currently（現在）　id 418　敵役: demon
例文: A demon lord is currently sealed beneath the northern mountain.　／　現在、北の山の下には悪魔の王が封じられている。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A demon lord is currently sealed beneath the northern mountain. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 138. gradually（徐々に）　id 419　敵役: demon, shadow
例文: The demon's shadow gradually covered the whole valley.　／　悪魔の影が、徐々に谷全体をおおっていった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The demon's shadow gradually covered the whole valley. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 139. facilitate（円滑にする）　id 62
例文: A magic bridge facilitates trade between the two kingdoms.　／　魔法の橋が、二つの王国の交易を円滑にする。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A magic bridge facilitates trade between the two kingdoms. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 140. potential（可能性）　id 64
例文: The boy has great potential as a mage.　／　その少年には魔法使いとして大きな可能性がある。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The boy has great potential as a mage. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 141. perspective（視点）　id 65
例文: From the tower, she saw the city from a new perspective.　／　塔の上から、彼女は町を新しい視点で見た。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: From the tower, she saw the city from a new perspective. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 142. accurate（正確な）　id 68
例文: The old map is accurate down to the last river.　／　その古い地図は、小川ひとつまで正確だ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old map is accurate down to the last river. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 143. efficient（効率的な）　id 69
例文: The dwarves built an efficient machine to mine the crystals.　／　ドワーフたちは、水晶を掘るための効率的な機械を作った。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The dwarves built an efficient machine to mine the crystals. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 144. evaluate（評価する）　id 71
例文: The judges evaluate each mage's skill carefully.　／　審査員は、それぞれの魔法使いの腕を慎重に評価する。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The judges evaluate each mage's skill carefully. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 145. establish（設立する）　id 73
例文: The heroes established a guild in the northern city.　／　勇者たちは北の町にギルドを設立した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The heroes established a guild in the northern city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 146. enhance（高める）　id 75
例文: This gem can enhance the power of a spell.　／　この宝石は呪文の力を高めることができる。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: This gem can enhance the power of a spell. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 147. criteria（基準）　id 76
例文: The knight met all the criteria for the royal order.　／　騎士は王の騎士団の基準をすべて満たした。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The knight met all the criteria for the royal order. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 148. demonstrate（実演する）　id 79
例文: The master will demonstrate the spell to the students.　／　師匠は生徒たちに呪文を実演してみせる。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The master will demonstrate the spell to the students. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 149. concept（概念）　id 341
例文: The scholar explained the concept of time magic to the council.　／　学者は、時間魔法という概念を評議会に説明した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scholar explained the concept of time magic to the council. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 150. context（文脈）　id 342
例文: Without the context, the ancient scroll made no sense at all.　／　文脈がなければ、その古い巻物はまったく意味をなさなかった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Without the context, the ancient scroll made no sense at all. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 151. decade（十年間）　id 344
例文: The old wall stood unbroken for a decade of endless wars.　／　その古い城壁は、果てしない戦いの十年間、崩れずに立ち続けた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The old wall stood unbroken for a decade of endless wars. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 152. economy（経済）　id 346
例文: The queen worked hard to rebuild the economy of the ruined kingdom.　／　女王は、荒れた王国の経済を立て直そうと懸命に働いた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The queen worked hard to rebuild the economy of the ruined kingdom. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 153. element（要素）　id 347
例文: Each mage in the academy masters one element, such as fire or ice.　／　学院の魔法使いは皆、火や氷といった一つの要素を極める。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Each mage in the academy masters one element, such as fire or ice. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 154. enterprise（企業）　id 348
例文: The merchants started a bold enterprise across the eastern sea.　／　商人たちは、東の海をまたぐ大胆な企業を始めた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The merchants started a bold enterprise across the eastern sea. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 155. equipment（設備）　id 349
例文: The dwarves checked their mining equipment before entering the deep cave.　／　ドワーフたちは、深い洞くつに入る前に採掘の設備を確かめた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The dwarves checked their mining equipment before entering the deep cave. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 156. expansion（拡大）　id 350
例文: The rapid expansion of the empire worried the border villages.　／　帝国の急速な拡大は、国境の村々を不安にさせた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The rapid expansion of the empire worried the border villages. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 157. feature（特徴）　id 352
例文: The most striking feature of the tower is its glowing crystal roof.　／　その塔の最も目立つ特徴は、光る水晶の屋根だ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The most striking feature of the tower is its glowing crystal roof. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 158. framework（枠組み）　id 354
例文: The wizards built a strong framework of rules for the new academy.　／　魔法使いたちは、新しい学院のために、しっかりした規則の枠組みを作った。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The wizards built a strong framework of rules for the new academy. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 159. function（機能）　id 355
例文: The crystal has a single function: it stores the light of the moon.　／　その水晶の機能はひとつだけで、月の光をたくわえることだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The crystal has a single function: it stores the light of the moon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 160. hypothesis（仮説）　id 356
例文: The scholar tested her hypothesis with a dangerous experiment.　／　学者は、危険な実験で自分の仮説を確かめた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The scholar tested her hypothesis with a dangerous experiment. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 161. impact（衝撃）　id 358
例文: The falling star made a huge impact on the desert floor.　／　流れ星は、砂漠の地面に大きな衝撃を与えた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The falling star made a huge impact on the desert floor. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 162. industry（産業）　id 359
例文: The new furnaces brought a golden age to the mining industry.　／　新しい炉が、鉱業に黄金時代をもたらした。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The new furnaces brought a golden age to the mining industry. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 163. initiative（主導権）　id 360
例文: The young captain took the initiative and led the rescue mission.　／　若い隊長は主導権をにぎり、救出作戦を率いた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The young captain took the initiative and led the rescue mission. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 164. institution（機関）　id 361
例文: The royal institution trains young mages from every land.　／　王立の機関は、あらゆる土地から若い魔法使いを育てている。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The royal institution trains young mages from every land. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 165. investment（投資）　id 362
例文: The king's investment in new ships brought great riches.　／　王の新しい船への投資は、大きな富をもたらした。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king's investment in new ships brought great riches. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 166. mechanism（仕組み）　id 363
例文: A hidden mechanism opened the door of the ancient vault.　／　隠された仕組みが、古代の宝物庫の扉を開いた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: A hidden mechanism opened the door of the ancient vault. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 167. principle（原則）　id 366
例文: The guild lives by one principle: never leave a friend behind.　／　ギルドは、ひとつの原則に従う。仲間を決して置き去りにしない、というものだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The guild lives by one principle: never leave a friend behind. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 168. proposal（提案）　id 368
例文: The council rejected the queen's proposal to open the gates.　／　評議会は、城門を開けるという女王の提案を退けた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The council rejected the queen's proposal to open the gates. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 169. sector（部門）　id 370
例文: The trade sector of the kingdom grew rapidly after the war.　／　戦争のあと、王国の交易部門は急速に成長した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The trade sector of the kingdom grew rapidly after the war. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 170. standard（標準）　id 371
例文: The blacksmith's swords set a new standard for quality.　／　その鍛冶師の剣は、品質の新しい標準を打ち立てた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The blacksmith's swords set a new standard for quality. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 171. theory（理論）　id 372
例文: The professor's theory explained how the floating islands stay in the air.　／　教授の理論は、浮かぶ島が空にとどまる理由を説明した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The professor's theory explained how the floating islands stay in the air. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 172. adapt（適応する）　id 373
例文: The elves adapted quickly to life in the snowy mountains.　／　エルフたちは、雪山での暮らしにすばやく適応した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The elves adapted quickly to life in the snowy mountains. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 173. adjust（調整する）　id 374
例文: The pilot adjusted the sails to catch the wind.　／　操舵手は、風をとらえるように帆を調整した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The pilot adjusted the sails to catch the wind. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 174. apply（適用する）　id 377
例文: Mages must apply the same rule to every spell.　／　魔法使いは、どの呪文にも同じ規則を適用しなければならない。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Mages must apply the same rule to every spell. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 175. attain（到達する）　id 380
例文: After years of training, she attained the rank of archmage.　／　何年もの修行のあと、彼女は大魔導師の位に到達した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: After years of training, she attained the rank of archmage. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 176. convince（納得させる）　id 385
例文: She could not convince the council to open the gates.　／　彼女は、評議会に城門を開けるよう納得させられなかった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: She could not convince the council to open the gates. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 177. deliver（届ける）　id 386
例文: The courier delivered the royal message before sunrise.　／　使者は、日の出前に王の伝言を届けた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The courier delivered the royal message before sunrise. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 178. distribute（配る）　id 387
例文: The monks distribute bread to the poor every morning.　／　修道士たちは、毎朝、貧しい人々にパンを配る。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The monks distribute bread to the poor every morning. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 179. emphasize（強調する）　id 390
例文: The teacher emphasized the importance of teamwork before the battle.　／　先生は、戦いの前にチームワークの大切さを強調した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The teacher emphasized the importance of teamwork before the battle. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 180. estimate（見積もる）　id 393
例文: The engineers estimate that the bridge will take a year to build.　／　技師たちは、その橋を作るのに一年かかると見積もっている。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The engineers estimate that the bridge will take a year to build. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 181. extend（延ばす）　id 395
例文: The king decided to extend the road to the northern coast.　／　王は、道を北の海岸まで延ばすことに決めた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The king decided to extend the road to the northern coast. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 182. generate（発生させる）　id 396
例文: The crystal can generate enough energy to light the whole city.　／　その水晶は、街じゅうを照らすほどのエネルギーを発生させられる。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The crystal can generate enough energy to light the whole city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 183. illustrate（例で示す）　id 397
例文: The teacher drew a map to illustrate the hero's long journey.　／　先生は、勇者の長い旅をわかりやすく示すために地図を描いた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The teacher drew a map to illustrate the hero's long journey. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 184. interpret（解釈する）　id 399
例文: Only the oracle could interpret the meaning of the strange dream.　／　神託者だけが、その不思議な夢の意味を解釈できた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Only the oracle could interpret the meaning of the strange dream. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 185. justify（正当化する）　id 401
例文: How can you justify such a dangerous plan?　／　どうして、そんな危険な計画を正当化できるのですか？
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: How can you justify such a dangerous plan? 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 186. modify（修正する）　id 402
例文: Can the smith modify this sword to fit a smaller hand?　／　鍛冶師は、この剣を小さな手に合わせて修正できるだろうか？
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Can the smith modify this sword to fit a smaller hand? 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 187. adequate（十分な）　id 403
例文: The tent was adequate shelter against the mountain wind.　／　そのテントは、山の風をしのぐのに十分な避難所だった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The tent was adequate shelter against the mountain wind. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 188. appropriate（適切な）　id 404
例文: It is not appropriate to draw a sword inside the temple.　／　神殿の中で剣を抜くのは、適切ではない。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: It is not appropriate to draw a sword inside the temple. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 189. consistent（一貫した）　id 406
例文: The archer was consistent, hitting the target every single time.　／　その弓兵は一貫していて、毎回まとに当てた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The archer was consistent, hitting the target every single time. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 190. diverse（多様な）　id 408
例文: The market was crowded with diverse peoples from every land.　／　市場は、あらゆる土地からの多様な人々でにぎわっていた。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The market was crowded with diverse peoples from every land. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 191. essential（不可欠な）　id 409
例文: Clean water is essential for anyone crossing the desert.　／　砂漠を越える人にとって、きれいな水は不可欠だ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Clean water is essential for anyone crossing the desert. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 192. fundamental（根本的な）　id 410
例文: Trust is the fundamental rule of a good guild.　／　信頼は、よいギルドの根本的な決まりだ。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Trust is the fundamental rule of a good guild. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 193. innovative（革新的な）　id 411
例文: The innovative smith invented a sword that could sing.　／　革新的な鍛冶師は、歌う剣を発明した。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The innovative smith invented a sword that could sing. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 194. relevant（関連のある）　id 412
例文: Only the relevant pages of the ancient book were saved.　／　古書のうち、関連のあるページだけが残された。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Only the relevant pages of the ancient book were saved. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 195. sufficient（足りる）　id 413
例文: Three days of food is sufficient for the mountain trip.　／　三日分の食料が、山の旅には足りる。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: Three days of food is sufficient for the mountain trip. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 196. valid（有効な）　id 415
例文: The ticket is valid only until the moon sets.　／　その切符は、月が沈むまでしか有効ではない。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The ticket is valid only until the moon sets. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 197. consequently（その結果）　id 417
例文: The bridge collapsed; consequently, the army had to turn back.　／　橋が崩れ、その結果、軍は引き返さなければならなかった。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The bridge collapsed; consequently, the army had to turn back. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 198. essentially（本質的に）　id 420
例文: The two spells are essentially the same, but one is faster.　／　二つの呪文は本質的には同じだが、片方のほうが速い。
```
very luxurious painted epic fantasy illustration, strong magical effects, dramatic lighting, intricate details, jewels and golden ornaments in the setting, complex composition. Scene: The two spells are essentially the same, but one is faster. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.3 RARE（この一覧に99語）

### 199. consider（検討する）　id 42　敵役: vampire
例文: The council must consider the vampire's strange offer.　／　議会は、ヴァンパイアの奇妙な申し出を検討しなければならない。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The council must consider the vampire's strange offer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 200. suggest（提案する）　id 43　敵役: werewolf
例文: The guide suggested a route that avoids the werewolf woods.　／　案内人は、人狼の森を避ける道を提案した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The guide suggested a route that avoids the werewolf woods. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 201. increase（増える）　id 46　敵役: werewolf
例文: The number of werewolves increases with every full moon.　／　満月ごとに、人狼の数が増える。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The number of werewolves increases with every full moon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 202. reduce（減らす）　id 47　敵役: werewolf
例文: Silver armor reduces the damage from a werewolf's claws.　／　銀の鎧は、人狼の爪による損害を減らす。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Silver armor reduces the damage from a werewolf's claws. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 203. opportunity（機会）　id 50　敵役: vampire
例文: Dawn gave the hunters their only opportunity against the vampire.　／　夜明けが、狩人たちにヴァンパイアへの唯一の機会を与えた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Dawn gave the hunters their only opportunity against the vampire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 204. effective（効果的な）　id 52　敵役: wraith
例文: Holy water proved effective against the wandering wraiths.　／　聖水は、さまようレイスに対して効果的だった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Holy water proved effective against the wandering wraiths. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 205. describe（描写する）　id 56　敵役: troll
例文: The survivor described the troll that crushed the gate.　／　生き残りが、門を叩き壊したトロルを描写した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The survivor described the troll that crushed the gate. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 206. influence（影響）　id 57　敵役: werewolf
例文: The full moon has a strong influence on werewolves.　／　満月は、人狼に強い影響をあたえる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The full moon has a strong influence on werewolves. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 207. challenge（挑戦）　id 60　敵役: vampire
例文: The young hero accepted the vampire lord's challenge.　／　若き勇者は、ヴァンパイア卿の挑戦を受けた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young hero accepted the vampire lord's challenge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 208. treasure（宝物）　id 261　敵役: pirate
例文: The pirates buried a golden treasure on the island.　／　海賊たちは、島に金色の宝物を埋めた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates buried a golden treasure on the island. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 209. victory（勝利）　id 265　敵役: troll
例文: The victory over the troll army was celebrated for days.　／　トロルの軍への勝利は、何日も祝われた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The victory over the troll army was celebrated for days. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 210. leader（指導者）　id 269　敵役: werewolf
例文: The leader of the werewolf pack howled on the ridge.　／　人狼の群れの指導者が、尾根の上で吠えた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The leader of the werewolf pack howled on the ridge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 211. danger（危険）　id 271　敵役: shadow
例文: Danger waited in the shadows of the ruined castle.　／　崩れた城の影に、危険が待ちかまえていた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Danger waited in the shadows of the ruined castle. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 212. speed（速さ）　id 281　敵役: harpy
例文: The harpies dived at terrible speed over the cliffs.　／　ハーピーたちが、恐ろしい速さで崖の上から急降下した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The harpies dived at terrible speed over the cliffs. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 213. evidence（証拠）　id 282　敵役: vampire
例文: They found evidence of a vampire in the empty crypt.　／　彼らは空の地下墓所で、ヴァンパイアの証拠を見つけた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: They found evidence of a vampire in the empty crypt. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 214. expert（専門家）　id 283　敵役: werewolf
例文: An expert on werewolves examined the tracks by the river.　／　人狼の専門家が、川辺の足跡を調べた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: An expert on werewolves examined the tracks by the river. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 215. ability（能力）　id 284　敵役: bat, vampire
例文: A vampire has the ability to turn into a bat.　／　ヴァンパイアは、コウモリに変わる能力を持つ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A vampire has the ability to turn into a bat. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 216. advantage（利点）　id 285　敵役: vampire
例文: Daylight gives every hunter an advantage over a vampire.　／　日の光は、すべての狩人にヴァンパイアへの利点を与える。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Daylight gives every hunter an advantage over a vampire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 217. damage（損害）　id 286　敵役: troll
例文: The troll's club caused heavy damage to the castle gate.　／　トロルの棍棒が、城門に大きな損害を与えた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The troll's club caused heavy damage to the castle gate. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 218. region（地域）　id 292　敵役: harpy
例文: Harpies nest all across the northern region.　／　ハーピーたちは、北の地域のいたるところに巣を作る。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Harpies nest all across the northern region. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 219. destroy（破壊する）　id 294　敵役: golem
例文: A stone golem destroyed the old wooden bridge.　／　石のゴーレムが、古い木の橋を破壊した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A stone golem destroyed the old wooden bridge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 220. hide（隠す）　id 295　敵役: vampire
例文: Vampires hide in the crypt while the sun is up.　／　ヴァンパイアたちは、日が出ている間、地下墓所に隠れる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Vampires hide in the crypt while the sun is up. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 221. survive（生き残る）　id 297　敵役: ogre
例文: Only two hunters could survive the ogre's ambush.　／　オーガの待ち伏せを生き残れたのは、二人の狩人だけだった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Only two hunters could survive the ogre's ambush. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 222. gather（集まる）　id 299　敵役: wraith
例文: Wraiths gather around the old battlefield at midnight.　／　レイスたちが、真夜中に古戦場へ集まる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Wraiths gather around the old battlefield at midnight. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 223. defend（防衛する）　id 302　敵役: ogre
例文: The knights defend the gate against the ogre warband.　／　騎士たちが、オーガの一団から門を防衛する。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The knights defend the gate against the ogre warband. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 224. attract（引きつける）　id 303　敵役: vampire
例文: Fresh blood will attract every vampire in the valley.　／　新しい血は、谷のすべてのヴァンパイアを引きつける。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Fresh blood will attract every vampire in the valley. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 225. avoid（避ける）　id 304　敵役: cursed
例文: We must avoid the cursed swamp at all costs.　／　私たちは、何としても呪われた沼を避けなければならない。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: We must avoid the cursed swamp at all costs. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 226. contain（含む）　id 309　敵役: vampire
例文: The sealed coffin may contain a sleeping vampire.　／　封じられた棺は、眠るヴァンパイアを含んでいるかもしれない。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The sealed coffin may contain a sleeping vampire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 227. control（操る）　id 310　敵役: werewolf
例文: A werewolf cannot control himself under a full moon.　／　人狼は、満月の下で自分を操ることができない。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A werewolf cannot control himself under a full moon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 228. notice（気づく）　id 314　敵役: basilisk
例文: She noticed a basilisk's scales beside the dry well.　／　彼女は、枯れた井戸のそばでバジリスクの鱗に気づいた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She noticed a basilisk's scales beside the dry well. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 229. prepare（準備する）　id 316　敵役: werewolf
例文: The village prepares carefully for the night of the werewolf.　／　村は、人狼の夜に向けて注意深く準備する。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The village prepares carefully for the night of the werewolf. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 230. prevent（防ぐ）　id 317　敵役: vampire
例文: Garlic and silver prevent a vampire from entering a house.　／　ニンニクと銀が、ヴァンパイアの侵入を防ぐ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Garlic and silver prevent a vampire from entering a house. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 231. recover（回復する）　id 319　敵役: troll
例文: It took a week to recover from the troll's heavy blow.　／　トロルの重い一撃から回復するのに、一週間かかった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It took a week to recover from the troll's heavy blow. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 232. powerful（強力な）　id 325　敵役: vampire
例文: The vampire lord is the most powerful creature in this land.　／　ヴァンパイア卿は、この地でもっとも強力な存在だ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The vampire lord is the most powerful creature in this land. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 233. valuable（貴重な）　id 326　敵役: pirate
例文: The pirates stole a valuable jewel from the royal vault.　／　海賊たちは、王の宝物庫から貴重な宝石を盗んだ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The pirates stole a valuable jewel from the royal vault. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 234. enormous（巨大な）　id 328　敵役: troll
例文: An enormous troll blocks the narrow mountain pass.　／　巨大なトロルが、狭い山道をふさいでいる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: An enormous troll blocks the narrow mountain pass. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 235. serious（真剣な）　id 334　敵役: vampire
例文: The hunters gave the village a serious warning about vampires.　／　狩人たちは村に、ヴァンパイアについて真剣な警告をした。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The hunters gave the village a serious warning about vampires. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 236. actually（実は）　id 337　敵役: monster
例文: It was actually a friendly dragon, not a monster.　／　それは実は、怪物ではなく友好的なドラゴンだった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It was actually a friendly dragon, not a monster. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 237. especially（特に）　id 338　敵役: troll
例文: The swamp is especially dangerous when the trolls wake.　／　その沼は、トロルが目覚めるときに特に危険だ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The swamp is especially dangerous when the trolls wake. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 238. recently（最近）　id 339　敵役: werewolf
例文: Werewolf tracks have appeared near the village recently.　／　最近、村の近くに人狼の足跡が現れている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Werewolf tracks have appeared near the village recently. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 239. probably（たぶん）　id 340　敵役: vampire
例文: The vampire will probably return before dawn.　／　ヴァンパイアはたぶん、夜明け前に戻ってくる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The vampire will probably return before dawn. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 240. improve（改善する）　id 41
例文: With daily practice, the young mage began to improve.　／　毎日の練習で、若い魔法使いは上達し始めた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With daily practice, the young mage began to improve. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 241. develop（発展する）　id 45
例文: The small village developed into a great magical city.　／　小さな村は、偉大な魔法都市へと発展した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The small village developed into a great magical city. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 242. environment（環境）　id 48
例文: The elves work hard to protect their forest environment.　／　エルフたちは、森の環境を守るために懸命に働く。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The elves work hard to protect their forest environment. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 243. relationship（関係）　id 49
例文: The two kingdoms have a strong relationship.　／　二つの王国は強い関係で結ばれている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The two kingdoms have a strong relationship. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 244. responsibility（責任）　id 51
例文: A guardian carries a heavy responsibility.　／　守護者は重い責任を背負っている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A guardian carries a heavy responsibility. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 245. available（利用できる）　id 53
例文: Two rooms are available at the inn.　／　宿には二部屋空いている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Two rooms are available at the inn. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 246. achieve（達成する）　id 54
例文: She worked for years to achieve her dream.　／　彼女は夢を達成するために何年も努力した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: She worked for years to achieve her dream. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 247. compare（比べる）　id 55
例文: The merchant compared the two swords carefully.　／　商人は二本の剣を注意深く比べた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The merchant compared the two swords carefully. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 248. purpose（目的）　id 58
例文: What is the purpose of this ancient tower?　／　この古い塔の目的は何だろう。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: What is the purpose of this ancient tower? 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 249. popular（人気のある）　id 59
例文: The bard is popular in every town.　／　その吟遊詩人はどの町でも人気だ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The bard is popular in every town. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 250. mystery（謎）　id 262
例文: Nobody could solve the mystery of the silent tower.　／　誰も、静かな塔の謎を解けなかった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Nobody could solve the mystery of the silent tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 251. secret（秘密）　id 263
例文: A secret door opened behind the old bookshelf.　／　古い本棚の裏で、秘密の扉が開いた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A secret door opened behind the old bookshelf. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 252. wisdom（知恵）　id 264
例文: The old wizard shared his wisdom with the young heroes.　／　老魔法使いは、若い勇者たちに知恵を分け与えた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The old wizard shared his wisdom with the young heroes. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 253. power（力）　id 266
例文: A strange power flowed through the ancient crystal.　／　不思議な力が、古代の水晶の中を流れた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A strange power flowed through the ancient crystal. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 254. memory（記憶）　id 267
例文: A warm memory returned when she smelled the old flowers.　／　古い花の香りをかぐと、温かい記憶がよみがえった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A warm memory returned when she smelled the old flowers. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 255. journey（旅路）　id 268
例文: The long journey across the desert tested their courage.　／　砂漠を越える長い旅路が、彼らの勇気を試した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The long journey across the desert tested their courage. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 256. promise（約束）　id 270
例文: He made a promise to return before the winter.　／　彼は、冬が来る前に戻ると約束した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: He made a promise to return before the winter. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 257. energy（エネルギー）　id 272
例文: Blue energy gathered around the mage's hands.　／　青いエネルギーが、魔法使いの手のまわりに集まった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Blue energy gathered around the mage's hands. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 258. nature（自然）　id 273
例文: The elves live in harmony with nature.　／　エルフたちは、自然と調和して暮らしている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The elves live in harmony with nature. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 259. peace（平和）　id 274
例文: After the war, peace finally returned to the valley.　／　戦いのあと、ついに谷へ平和が戻った。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: After the war, peace finally returned to the valley. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 260. freedom（自由）　id 275
例文: The birds flew away with a sense of freedom.　／　鳥たちは、自由を感じながら飛び去った。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The birds flew away with a sense of freedom. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 261. knowledge（知識）　id 276
例文: The library holds the knowledge of a thousand years.　／　その図書館には、千年の知識がおさめられている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The library holds the knowledge of a thousand years. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 262. history（歴史）　id 277
例文: The history of the kingdom is carved into the wall.　／　王国の歴史が、壁に刻まれている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The history of the kingdom is carved into the wall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 263. tradition（伝統）　id 278
例文: Every spring, the village keeps an old tradition.　／　毎年春になると、村は古い伝統を守る。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Every spring, the village keeps an old tradition. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 264. culture（文化）　id 279
例文: The festival showed the culture of the mountain people.　／　その祭りは、山の民の文化を伝えていた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The festival showed the culture of the mountain people. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 265. science（科学）　id 280
例文: In the tower, scholars studied science and magic together.　／　塔の中で、学者たちは科学と魔法を一緒に研究した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: In the tower, scholars studied science and magic together. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 266. community（地域社会）　id 287
例文: The whole community worked together to rebuild the town.　／　地域の人々みんなが、力を合わせて町を建て直した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The whole community worked together to rebuild the town. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 267. effort（努力）　id 288
例文: With great effort, the boy lifted the stone door.　／　大きな努力で、少年は石の扉を持ち上げた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: With great effort, the boy lifted the stone door. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 268. invention（発明）　id 289
例文: The inventor's newest invention floated above the workshop.　／　発明家の最新の発明が、工房の上に浮かんでいた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The inventor's newest invention floated above the workshop. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 269. truth（真実）　id 290
例文: The magic mirror in the hall always tells the truth.　／　広間の魔法の鏡は、いつも真実を語る。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The magic mirror in the hall always tells the truth. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 270. rule（規則）　id 291
例文: Every student must follow the rule of the academy.　／　生徒は皆、学院の規則に従わなければならない。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Every student must follow the rule of the academy. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 271. discover（発見する）　id 293
例文: Explorers discover a hidden city beneath the ice.　／　探検家たちは、氷の下に隠された都市を発見する。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Explorers discover a hidden city beneath the ice. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 272. reveal（明かす）　id 296
例文: The map will reveal the way to the lost temple.　／　その地図は、失われた神殿への道を明かすだろう。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The map will reveal the way to the lost temple. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 273. create（生み出す）　id 298
例文: The artist can create living flowers from light.　／　その芸術家は、光から生きた花を生み出せる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The artist can create living flowers from light. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 274. imagine（想像する）　id 300
例文: Can you imagine a city floating in the sky?　／　空に浮かぶ町を、想像できますか？
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Can you imagine a city floating in the sky? 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 275. explore（探検する）　id 301
例文: The young heroes explore the ruins of an ancient temple.　／　若い勇者たちは、古代神殿の遺跡を探検する。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The young heroes explore the ruins of an ancient temple. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 276. belong（属する）　id 305
例文: This golden sword belongs to the first king.　／　この金の剣は、初代の王のものだ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This golden sword belongs to the first king. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 277. cause（引き起こす）　id 306
例文: A single spark can cause a great fire.　／　ひとつの火花が、大きな火事を引き起こすことがある。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A single spark can cause a great fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 278. collect（集める）　id 307
例文: The children collect shining stones by the river.　／　子どもたちは、川辺で光る石を集める。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The children collect shining stones by the river. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 279. connect（つなぐ）　id 308
例文: A long bridge connects the two floating islands.　／　長い橋が、二つの浮かぶ島をつないでいる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A long bridge connects the two floating islands. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 280. depend（頼る）　id 311
例文: The whole village depends on the river for water.　／　村じゅうが、水を川に頼っている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The whole village depends on the river for water. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 281. exist（存在する）　id 312
例文: Some say dragons no longer exist in this world.　／　この世界にもうドラゴンはいない、と言う人もいる。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Some say dragons no longer exist in this world. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 282. expect（期待する）　id 313
例文: Nobody expected a small girl to win the contest.　／　小さな少女が大会に勝つとは、誰も予想しなかった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Nobody expected a small girl to win the contest. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 283. offer（差し出す）　id 315
例文: The merchant offered a silver coin for the magic ring.　／　商人は、魔法の指輪に銀貨を差し出した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The merchant offered a silver coin for the magic ring. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 284. recognize（見分ける）　id 318
例文: Even after ten years, he could recognize her voice.　／　十年たっても、彼は彼女の声を聞き分けられた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Even after ten years, he could recognize her voice. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 285. refuse（断る）　id 320
例文: The proud king refused to listen to any advice.　／　誇り高い王は、どんな助言にも耳を貸そうとしなかった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The proud king refused to listen to any advice. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 286. release（解き放つ）　id 321
例文: The hero released the bird from the golden cage.　／　勇者は、金のかごから鳥を解き放った。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The hero released the bird from the golden cage. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 287. solve（解く）　id 322
例文: Only a clever mind can solve this old riddle.　／　賢い頭脳だけが、この古いなぞを解ける。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Only a clever mind can solve this old riddle. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 288. ancient（古代の）　id 323
例文: Ancient symbols glow on the walls of the cave.　／　古代の記号が、洞くつの壁で光っている。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: Ancient symbols glow on the walls of the cave. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 289. mysterious（神秘的な）　id 324
例文: A mysterious traveler arrived in the village at midnight.　／　神秘的な旅人が、真夜中に村へやって来た。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A mysterious traveler arrived in the village at midnight. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 290. curious（好奇心の強い）　id 327
例文: The curious kitten followed the glowing light.　／　好奇心の強い子猫が、光を追いかけた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The curious kitten followed the glowing light. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 291. familiar（見慣れた）　id 329
例文: The song was familiar, but she could not remember why.　／　その歌には聞き覚えがあったが、なぜか思い出せなかった。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The song was familiar, but she could not remember why. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 292. generous（寛大な）　id 330
例文: The generous king gave food to every hungry traveler.　／　気前のよい王は、飢えた旅人みんなに食べ物を与えた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The generous king gave food to every hungry traveler. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 293. honest（正直な）　id 331
例文: The honest merchant returned the lost purse.　／　正直な商人は、落とされた財布を返した。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The honest merchant returned the lost purse. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 294. ordinary（ふつうの）　id 332
例文: It looked like an ordinary stone, but it glowed at night.　／　それはふつうの石に見えたが、夜には光った。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: It looked like an ordinary stone, but it glowed at night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 295. rare（まれな）　id 333
例文: A rare flower blooms only once in a hundred years.　／　まれな花が、百年にたった一度だけ咲く。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: A rare flower blooms only once in a hundred years. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 296. useful（役に立つ）　id 335
例文: This old compass is very useful in the fog.　／　この古いコンパスは、霧の中でとても役に立つ。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: This old compass is very useful in the fog. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 297. wise（賢明な）　id 336
例文: The wise owl gave the travelers good advice.　／　賢いフクロウは、旅人たちによい助言を与えた。
```
rich painted anime fantasy illustration, dramatic lighting, golden accents, floating light particles, detailed scene. Scene: The wise owl gave the travelers good advice. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```


## Lv.2 UNCOMMON（この一覧に94語）

### 298. remember（覚えている）　id 27　敵役: orc
例文: The old knight remembers the orc war as he holds his broken helmet by the fire.　／　年老いた騎士は、火のそばで壊れた兜を手に、オークとの戦いを思い出す。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old knight remembers the orc war as he holds his broken helmet by the fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 299. arrive（到着する）　id 30　敵役: bandit
例文: The bandits arrive at the village before dawn.　／　山賊たちが夜明け前に村へ到着する。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The bandits arrive at the village before dawn. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 300. problem（問題）　id 33　敵役: ogre
例文: An ogre asleep on the only road is a big problem for the merchants.　／　一本しかない道でオーガが寝ていて、商人たちは困っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: An ogre asleep on the only road is a big problem for the merchants. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 301. experience（経験）　id 35　敵役: spider, giant
例文: An old hunter with long experience traps a giant spider in the woods.　／　経験豊かな老狩人が、森で大蜘蛛をわなにかける。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: An old hunter with long experience traps a giant spider in the woods. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 302. forget（忘れる）　id 40　敵役: ghost
例文: At the tower, the sleepy guard forgets to lock the door and a ghost slips in.　／　塔で、眠そうな見張りが扉の鍵をかけ忘れ、幽霊がすべり込む。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: At the tower, the sleepy guard forgets to lock the door and a ghost slips in. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 303. kitchen（台所）　id 182　敵役: witch
例文: The witch cooks a magic soup in the kitchen.　／　魔女が台所で魔法のスープを作っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The witch cooks a magic soup in the kitchen. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 304. village（村）　id 184　敵役: bandit
例文: Bandits watch the small village from the hill.　／　山賊たちが丘から小さな村を見張っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Bandits watch the small village from the hill. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 305. cave（洞くつ）　id 188　敵役: skeleton
例文: Skeletons guard the treasure inside the cave.　／　スケルトンたちが洞くつの中で宝を守っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons guard the treasure inside the cave. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 306. gate（門）　id 190　敵役: orc
例文: The orcs break the stone gate with a log.　／　オークたちが丸太で石の門を破る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs break the stone gate with a log. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 307. dream（夢）　id 199　敵役: ghost
例文: A ghost visits the boy in his dream.　／　幽霊が、少年の夢に現れる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A ghost visits the boy in his dream. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 308. number（数）　id 202　敵役: orc
例文: A large number of orcs march on the road.　／　大きな数のオークが、道を進んでくる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A large number of orcs march on the road. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 309. mirror（鏡）　id 214　敵役: ghost
例文: A pale ghost appears in the old mirror.　／　青白い幽霊が、古い鏡に映る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A pale ghost appears in the old mirror. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 310. candle（ろうそく）　id 215　敵役: ghost
例文: A single candle keeps the ghosts away in the dark hall.　／　暗い広間で、一本のろうそくが幽霊を遠ざけている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A single candle keeps the ghosts away in the dark hall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 311. crown（王冠）　id 217　敵役: skeleton
例文: A skeleton king wears a broken crown on his throne.　／　玉座のスケルトンの王が、壊れた冠をかぶっている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A skeleton king wears a broken crown on his throne. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 312. shield（盾）　id 218　敵役: orc
例文: His shield stops the orc's heavy axe in the battle.　／　戦いの中、彼の盾がオークの重い斧を受け止める。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: His shield stops the orc's heavy axe in the battle. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 313. wait（待つ）　id 219　敵役: gargoyle
例文: The gargoyles wait on the roof at night.　／　ガーゴイルたちが、夜、屋根の上で待っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The gargoyles wait on the roof at night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 314. bring（持ってくる）　id 221　敵役: ghost
例文: The squire brings silver arrows to fight the ghosts in the graveyard.　／　従者が、墓地の幽霊と戦うための銀の矢を運んでくる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The squire brings silver arrows to fight the ghosts in the graveyard. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 315. catch（つかまえる）　id 223　敵役: spider, giant
例文: The hunters catch a giant spider with a big net in the woods.　／　狩人たちが、森で大きな網を使って大蜘蛛をつかまえる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hunters catch a giant spider with a big net in the woods. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 316. climb（登る）　id 225　敵役: spider, giant
例文: Giant spiders climb up the tower walls at night.　／　夜、大蜘蛛たちが塔の壁をよじ登る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Giant spiders climb up the tower walls at night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 317. cross（渡る）　id 227　敵役: orc
例文: The orcs cross the river at the shallow point.　／　オークたちが、浅い場所で川を渡る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orcs cross the river at the shallow point. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 318. find（見つける）　id 232　敵役: skeleton
例文: We find skeleton bones in the old well.　／　古い井戸で、スケルトンの骨を見つける。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We find skeleton bones in the old well. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 319. follow（ついていく）　id 233　敵役: harpy
例文: The brave hunter follows the harpy into the cliffs.　／　勇敢な狩人が、ハーピーを追って崖の奥へ入っていく。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The brave hunter follows the harpy into the cliffs. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 320. teach（教える）　id 243　敵役: zombie
例文: The old hunter teaches the villagers how to fight zombies in the square.　／　年老いた狩人が、広場で村人たちにゾンビとの戦い方を教える。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old hunter teaches the villagers how to fight zombies in the square. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 321. careful（注意深い）　id 245　敵役: troll
例文: The careful thief tiptoes past the sleeping troll in the cave.　／　用心深い泥棒が、洞窟で眠るトロルの横を忍び足で通り過ぎる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The careful thief tiptoes past the sleeping troll in the cave. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 322. dangerous（危険な）　id 246　敵役: orc
例文: The knights creep into the dangerous orc camp at night.　／　騎士たちが、夜の危険なオークの野営地へ忍び込む。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knights creep into the dangerous orc camp at night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 323. quiet（静かな）　id 247　敵役: skeleton
例文: The skeleton army waits in quiet rows in the tomb.　／　墓所の中で、スケルトンの軍勢が静かに列をなして待っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The skeleton army waits in quiet rows in the tomb. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 324. brave（勇敢な）　id 248　敵役: orc
例文: The brave girl faces the orc alone on the bridge.　／　勇敢な少女が、橋の上でたった一人オークに立ち向かう。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The brave girl faces the orc alone on the bridge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 325. clever（賢い）　id 249　敵役: witch, troll
例文: A clever witch tricks the hungry troll under the bridge.　／　賢い魔女が、橋の下の腹ぺこのトロルをだます。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A clever witch tricks the hungry troll under the bridge. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 326. empty（空の）　id 250　敵役: ghost
例文: Only ghosts live in the empty castle.　／　空の城には、幽霊だけが住んでいる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Only ghosts live in the empty castle. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 327. heavy（重い）　id 252　敵役: orc
例文: The orc swings a heavy iron club in the forest.　／　森の中で、オークが重い鉄のこん棒を振り回す。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The orc swings a heavy iron club in the forest. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 328. safe（安全な）　id 254　敵役: bandit
例文: The knights keep the villagers safe from the bandits on the road.　／　騎士たちが、道中の山賊から村人たちを守り、無事に送り届ける。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knights keep the villagers safe from the bandits on the road. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 329. ready（準備ができた）　id 255　敵役: orc
例文: The guards stand ready on the walls for the orc attack.　／　衛兵たちが、オークの襲撃に備えて城壁の上で身構える。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The guards stand ready on the walls for the orc attack. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 330. always（いつも）　id 257　敵役: skeleton
例文: Skeletons always rise again from the graves after sunset.　／　スケルトンは、日が沈むといつも墓からよみがえる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Skeletons always rise again from the graves after sunset. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 331. never（決して〜ない）　id 258　敵役: spider
例文: The hunter never goes into the spider cave without a torch.　／　狩人は、たいまつを持たずに蜘蛛の洞窟へ入ることは決してない。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hunter never goes into the spider cave without a torch. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 332. suddenly（突然）　id 259　敵役: ghost
例文: Suddenly, a ghost appears behind the door.　／　突然、ドアの後ろに幽霊が現れる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Suddenly, a ghost appears behind the door. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 333. finally（ついに）　id 260　敵役: orc
例文: Finally, the orc chief falls to the ground in the arena.　／　ついに、闘技場でオークの族長が地面に倒れる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Finally, the orc chief falls to the ground in the arena. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 334. decide（決める）　id 28
例文: At the forest crossroads, the traveler decides which way to go.　／　森の分かれ道で、旅人はどちらへ進むかを決める。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: At the forest crossroads, the traveler decides which way to go. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 335. continue（続ける）　id 29
例文: The dwarves continue to dig deeper into the mountain.　／　ドワーフたちは、山の奥へとさらに掘り進め続ける。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dwarves continue to dig deeper into the mountain. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 336. possible（可能な）　id 31
例文: The scout points to a possible path over the snowy mountain.　／　斥候が、雪山を越えられそうな道を指さす。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The scout points to a possible path over the snowy mountain. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 337. future（未来）　id 32
例文: The oracle sees the future in a crystal.　／　神託者は水晶の中に未来を見る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The oracle sees the future in a crystal. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 338. reason（理由）　id 34
例文: The knight finds the reason for the strange light in the cave: a glowing crystal.　／　騎士は、洞窟の不思議な光の理由を見つける。光る水晶だった。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knight finds the reason for the strange light in the cave: a glowing crystal. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 339. learn（学ぶ）　id 36
例文: Young mages learn spells at the tower.　／　若い魔法使いは塔で呪文を学ぶ。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Young mages learn spells at the tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 340. difficult（難しい）　id 37
例文: The young knight climbs a difficult, icy cliff up a frozen mountain.　／　若い騎士が、凍った山の険しい氷の崖をよじ登る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The young knight climbs a difficult, icy cliff up a frozen mountain. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 341. travel（旅する）　id 38
例文: Merchants travel across the desert.　／　商人たちは砂漠を旅する。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Merchants travel across the desert. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 342. believe（信じる）　id 39
例文: The little girl believes in fairies and leaves milk for them by the door.　／　少女は妖精を信じていて、戸口に妖精のためのミルクを置く。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The little girl believes in fairies and leaves milk for them by the door. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 343. garden（庭）　id 181
例文: Glowing flowers bloom in the secret garden.　／　光る花が、秘密の庭に咲いている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Glowing flowers bloom in the secret garden. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 344. market（市場）　id 183
例文: The village market is full of strange fruit.　／　村の市場は、不思議な果物でいっぱいだ。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The village market is full of strange fruit. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 345. forest（森）　id 185
例文: Tiny lights dance in the dark forest.　／　小さな光が、暗い森の中で舞っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Tiny lights dance in the dark forest. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 346. island（島）　id 186
例文: A floating island appears above the clouds.　／　浮かぶ島が、雲の上に現れる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A floating island appears above the clouds. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 347. desert（砂漠）　id 187
例文: The travelers cross the hot desert at night.　／　旅人たちは、夜に熱い砂漠を渡る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The travelers cross the hot desert at night. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 348. tower（塔）　id 189
例文: The wizard lives in the tallest tower.　／　魔法使いは、いちばん高い塔に住んでいる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard lives in the tallest tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 349. ship（船）　id 191
例文: A silver ship sails through the night sky.　／　銀の船が、夜空を進んでいく。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A silver ship sails through the night sky. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 350. station（駅）　id 192
例文: Horses rest at the old coach station by the road.　／　道ばたの古い馬車の宿場で、馬たちが休んでいる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Horses rest at the old coach station by the road. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 351. hospital（病院）　id 193
例文: Monks care for sick travelers in the stone hospital.　／　石造りの施療院で、修道士たちが病気の旅人を看病する。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Monks care for sick travelers in the stone hospital. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 352. library（図書館）　id 194
例文: Ancient books sleep in the silent library.　／　古い本たちが、静かな図書館で眠っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Ancient books sleep in the silent library. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 353. ticket（切符）　id 195
例文: She shows her ticket to the guard at the harbour.　／　彼女は港で、見張りに乗船券を見せる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She shows her ticket to the guard at the harbour. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 354. map（地図）　id 196
例文: On the table, the old map shows a hidden island.　／　テーブルの上の古い地図に、隠された島が描かれている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: On the table, the old map shows a hidden island. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 355. letter（手紙）　id 197
例文: A magic letter arrives at the window.　／　魔法の手紙が、窓辺に届く。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: A magic letter arrives at the window. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 356. story（物語）　id 198
例文: Grandma tells a story about a dragon by the fire.　／　おばあちゃんが、火のそばで竜の物語を語る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Grandma tells a story about a dragon by the fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 357. question（質問）　id 200
例文: The sphinx asks a difficult question at the desert temple.　／　砂漠の神殿で、スフィンクスが難しい問いを投げかける。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The sphinx asks a difficult question at the desert temple. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 358. answer（答え）　id 201
例文: In the temple, the hero gives the answer and the stone door opens.　／　神殿で勇者が答えを告げると、石の扉が開く。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: In the temple, the hero gives the answer and the stone door opens. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 359. color（色）　id 203
例文: The dragon changes color in the sun.　／　ドラゴンは、日差しの中で色を変える。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dragon changes color in the sun. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 360. weather（天気）　id 204
例文: In fine weather, travelers set out along the sunny road.　／　よい天気の中、旅人たちが日の当たる道を歩き出す。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: In fine weather, travelers set out along the sunny road. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 361. summer（夏）　id 205
例文: Fireflies fill the air over the meadow in summer.　／　夏には、草原の上をホタルが飛びかう。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Fireflies fill the air over the meadow in summer. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 362. winter（冬）　id 206
例文: Snow falls softly on the village in winter.　／　冬には、村に雪が静かに降り積もる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Snow falls softly on the village in winter. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 363. holiday（休日）　id 207
例文: The whole town celebrates the holiday in the square.　／　町じゅうの人が、広場で祝日を祝う。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The whole town celebrates the holiday in the square. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 364. bicycle（自転車）　id 208
例文: The young inventor rides a wooden bicycle through the village.　／　若い発明家が、木の自転車に乗って村を走り抜ける。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The young inventor rides a wooden bicycle through the village. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 365. brother（兄弟）　id 209
例文: My big brother practices with his sword in the yard.　／　兄が、中庭で剣のけいこをしている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: My big brother practices with his sword in the yard. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 366. sister（姉妹）　id 210
例文: Her little sister makes a magic potion in the kitchen.　／　彼女の妹が、台所で魔法の薬を作る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Her little sister makes a magic potion in the kitchen. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 367. mother（母）　id 211
例文: His mother sings by the fire.　／　彼の母は、火のそばで歌っている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: His mother sings by the fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 368. father（父）　id 212
例文: The father teaches his son to swim in the river.　／　父親が、川で息子に泳ぎを教える。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The father teaches his son to swim in the river. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 369. umbrella（傘）　id 213
例文: She opens an umbrella in the rain.　／　少女は、雨の中で傘を開く。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She opens an umbrella in the rain. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 370. ring（指輪）　id 216
例文: The hero wears a silver ring on his hand.　／　勇者は、手に銀の指輪をはめている。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hero wears a silver ring on his hand. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 371. ask（尋ねる）　id 220
例文: The traveler asks a farmer the way at the crossroads.　／　旅人が、分かれ道で農夫に道をたずねる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The traveler asks a farmer the way at the crossroads. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 372. carry（運ぶ）　id 222
例文: Two strong horses carry heavy bags up the hill.　／　二頭のたくましい馬が、重い荷物を運んで丘をのぼる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Two strong horses carry heavy bags up the hill. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 373. choose（選ぶ）　id 224
例文: In the shop, the young wizard chooses a wand from the shelf.　／　店で、若い魔法使いが棚から杖を選ぶ。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: In the shop, the young wizard chooses a wand from the shelf. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 374. cook（料理する）　id 226
例文: He cooks a fresh fish over the fire.　／　彼は、火の上で新鮮な魚を料理する。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: He cooks a fresh fish over the fire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 375. dance（踊る）　id 228
例文: The fairies dance under the moon.　／　妖精たちが、月の下で踊る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The fairies dance under the moon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 376. draw（描く）　id 229
例文: She draws a dragon on the wall.　／　少女は、壁にドラゴンを描く。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: She draws a dragon on the wall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 377. enjoy（楽しむ）　id 230
例文: We enjoy a warm meal at the inn.　／　私たちは、宿で温かい食事を楽しむ。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We enjoy a warm meal at the inn. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 378. explain（説明する）　id 231
例文: The old teacher explains the magic rules to his students in the tower.　／　年老いた先生が、塔で弟子たちに魔法のきまりを説明する。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The old teacher explains the magic rules to his students in the tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 379. join（加わる）　id 234
例文: Many young heroes join the guild at the great hall.　／　大広間で、多くの若い勇者がギルドに加わる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Many young heroes join the guild at the great hall. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 380. leave（去る）　id 235
例文: The knight leaves the village at dawn on his horse.　／　騎士は、夜明けに馬に乗って村を出ていく。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The knight leaves the village at dawn on his horse. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 381. meet（会う）　id 236
例文: We meet at the old bridge at noon.　／　私たちは、正午に古い橋で会う。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: We meet at the old bridge at noon. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 382. protect（守る）　id 237
例文: The dragon protects the sleeping village from the storm.　／　竜が、眠っている村を嵐から守る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The dragon protects the sleeping village from the storm. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 383. save（救う）　id 238
例文: The hero jumps into the river to save the child.　／　勇者が、子どもを救うために川へ飛び込む。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The hero jumps into the river to save the child. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 384. search（探す）　id 239
例文: They search in the forest for the lost key.　／　彼らは、なくした鍵を森の中で探す。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: They search in the forest for the lost key. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 385. send（送る）　id 240
例文: The wizard sends a message by owl from his tower.　／　魔法使いが、塔からフクロウに手紙を託して送る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The wizard sends a message by owl from his tower. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 386. share（分け合う）　id 241
例文: The friends share bread and warm tea at the campfire.　／　仲間たちが、たき火を囲んでパンと温かいお茶を分け合う。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The friends share bread and warm tea at the campfire. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 387. show（見せる）　id 242
例文: The guide shows us the secret path through the mountains.　／　案内人が、山を抜ける秘密の道を私たちに教える。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The guide shows us the secret path through the mountains. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 388. visit（訪れる）　id 244
例文: Many travelers visit the ancient temple in the mountains.　／　多くの旅人が、山の中の古い神殿を訪れる。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: Many travelers visit the ancient temple in the mountains. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 389. famous（有名な）　id 251
例文: The famous bard sings in the town.　／　有名な吟遊詩人が、町で歌う。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The famous bard sings in the town. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 390. tired（疲れた）　id 253
例文: The tired traveler falls asleep under a tree.　／　疲れた旅人が、木の下で眠り込む。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The tired traveler falls asleep under a tree. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

### 391. special（特別な）　id 256
例文: The princess wears a special dress for the festival in the palace.　／　王女が、宮殿の祭りのために特別なドレスを着る。
```
hand-painted anime fantasy illustration, visible brush texture, matte finish, a small magical touch, gentle glow, slightly richer details, clear subject. Scene: The princess wears a special dress for the festival in the palace. 3:2 wide landscape, the subject is unmistakably the main thing in the picture, important parts kept inside the middle horizontal band, no text, no letters, no logo, no border, no frame
```

