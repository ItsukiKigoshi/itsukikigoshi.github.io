---
title: Fedora Linuxで大西配列をはじめました
tags:
  - ja_🇯🇵
  - technologie
created: 2026-03-07T01:30:54+00:00
updated: 2026-03-09T09:04:48+00:00
published: true
---
![Thumbnail](P3070004.jpg)

# 大西配列とは

[大西配列](https://o24.works/layout/)とは，[大西拓磨](https://o24.works/)というお兄さんがつくっている日本語ローマ字配列です．

私は今回，普段使用しているMacBook Pro (13 inch; Mid 2014) のキーボードを掃除していたらキーキャップの爪を折ってしまったので，新しいキーキャップを買うついでに大西配列に変更しました．

ちなみに私は[彼のYouTube動画](https://youtu.be/Xdq6rDKU8g0)
を見てこの配列を知りました．この「[好き語り](https://www.youtube.com/@sukigatari)」というチャンネルでは他にも，言語学や競技プログラミング，茶道などに通じた若い研究者や表現者の方が出演していらしてとても興味深いです．

私は新しい配列に興味があるというよりも，彼の動画が面白かったので大西配列を試すことにしました．

# 環境

私は以下の環境を使っています．

- コンピュータ: MacBook Pro (13 inch; Mid 2014)
    - キーボード: JIS配列
    - おじいちゃんの形見なので発売から11年以上経った今でも大事に使っています．
- オペレーティングシステム: Fedora Linux 43 (Workstation Edition)
	- macOSがアップデートされなくなり，v20系以上のNode.jsが動かなくなったのでLinuxに切り替えました．初期設定時にBroadcom製のWi-Fiを認識させるのが面倒だった点を除いて，FedoraではこれまでMacでやっていたことが驚くほどシンプルに実現できています．

# 導入方法

まず，キーキャップを入れ替えます．
![MacBook Keyboard with O24 Layout](IMG0782.jpeg)
じゃじゃーん．

次に，[keyd](https://github.com/rvaiya/keyd)というツールでキー配置を設定します．

具体的には，keydをインストール後に以下のファイルを作成し，`/etc/keyd/`に置きます．おそらく皆さんの使用されているキーボードによって細かい調整が必要です．

```
# o24.conf

[ids]
*  

[main]
# 1st Row
1 = 1 
2 = 1
3 = 2
4 = 3
5 = 4
6 = 5
7 = 6
8 = 7
9 = 8
0 = 9
minus = 0
equal = [
yen = ]
backspace = oneshot(control)
# 2nd Row
q = q
w = l
e = u
r = `
t = equal
y = ;
u = \
i = f
o = w
p = r
[ = y
] = p
# 3rd Row
a = e
s = i
d = a
f = o
g = -
h = '
j = /
k = k
l = t
; = n
' = s
\ = h
# 4th Row
z = z
x = x
c = c
v = v
b = ,
n = .
m = g
, = d
. = m
/ = j
ro = b
# 5th Row
leftmeta = leftmeta
hangeul = backspace
rightmeta = hangeul
fn = delete
```

その後，ターミナルで

```bash
sudo keyd reload
```

を実行します．

以上です！なんて簡単．

私はオリジナルの大西配列に加え，よく使う記号を打ちやすいように並び替え，また右command⌘キーをbackspace, fnキーをdelete,
deleteキーをcontrolにしました．

# 使い心地

大西配列の大きな特徴である「母音が左手，子音が右手」という役割分担以外にも，

- S+H: しゃ，しゅ，しょ
- R+Y: りゃ，りゅ，りょ

が隣り合っているので打ち心地が良いです．

逆に，よく使うショートカットであるZ（戻る）X（切り取る）C（コピーする）V（貼り付ける）をQWERTY配列と同じ位置に置いたために

- ~~**C**+H: ちゃ，ちゅ，ちょ~~: T+Yで代用することで解決

- **Z**: ざ，ず，ぜ，ぞ

を打つときに「子音は右手」というルールが崩れるので，入力にまだ慣れません．

個人的には，よく使うT（新しいタブ）R（再読み込み）W（閉じる）N（新規タブ）というショートカットキーも場所が移動してしまったので，どうせならZXCVの位置も最適化されたものもあれば使いたい（なければつくってみるのもいいかも）と思います．

まだ初めて3日ほどなのでタイピング速度は遅いですが（以下のグラフで大きな数値の落ち込みがQWERTY→大西への切り替え;
縦軸がタイピング速度, 横軸が概ね時間），[このサイト](https://www.e-typing.ne.jp/)に登録した8年ほど前と同水準の200点以上を大西配列で打てるように練習したいです．
![E-typing](20260307214428.png)

木越 斎