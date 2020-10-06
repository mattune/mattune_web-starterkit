# web-starterkit
個人的によく使うWEB開発環境


## 構成
- develop 開発環境
- htdocs 実行環境  


## 仕様
- htdocs/material/tpl/config.php でサイト名やdescription等の情報を設定。
- 画像圧縮は外部ツールを使う。
- ローカルサーバーはMAMPを使う。
- リセットCSSは [formula-css](https://github.com/mattune/formula-css) を使う。
- jsは基本的にはES6で書く。
- jsライブラリは基本的にはnpmで使う。
- gulpに極力無駄なタスクは入れない（重要）

### develop
* node.js 12.x
* babel 7
* gulp 4
* webpack 4

#### インストール
```bash
cd develop
npm install -D gulp
npm i
```

#### 実行
非圧縮で書き出し

```bash
npx gulp
```

納品用に書き出し

```bash
npx gulp --prd
```


#### CSSについて
PCファーストで構築。  
PC > 最大幅 > タブレット > スマホの順にCSSを上書きしている。  
※ 最大幅以上の時は指定がなければ削除でも構わない。

``` scss
// PC
@import "base/_config.scss";

// MAX
@include max {
  
}

// TB
@include tb {
  @import "tb/_config.scss";
}

// SP
@include sp {
  @import "sp/_config.scss";
}
```

#### フォルダ構成
* 共通設定ファイル -> _module
* PC -> base
* タブレット -> tb
* スマホ -> sp
* 最大幅以上 -> max

各フォルダのconfig.scssでデフォルト設定などを書いておく。

#### サイズ指定
PCは等倍、タブレット・スマホはリキッドレイアウトを使用。  
pxの替わりにfunctionのvw()を使用する。  
タブレットやスマホのサイズ指定を切り替えを楽にできる。  
※ vw()は各フォルダのconfig.scssで定義している。

使用例
``` scss
margin: vw(20);
font-size: vw(16);
```