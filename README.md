# yane-boilerplate-nuxt

> Boilerplate for static
> 静的サイト  

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# ホットリロードつきローカルサーバーの起動
$ npm run dev

# generate static project
# 静的サイトの生成（納品ファイル用に画像、CSSファイル等圧縮あり）
$ npm run generate
```

## Directories
| Directory name | Usage |
| ------ | ------ |
| src/assets | Un-compiled assets such as Post css or Sass files, images, or fonts. <br> 未圧縮のアセットファイル（CSSやimg, フォントなど） |
| src/components | Vue.js Components, import these from pages etc <br> インポート用のコンポーネントファイル（ヘッダー・フッター等） |
| src/layouts | basic layouts for html <br> 基本レイアウトファイル |
| src/pages | html basic files <br> 各ページのファイル。HTML記述はこちら。templateのlang="pug"を外すと通常のHTMLで記述可能 |
| src/static | Contains files that likely won't be changed (i.e. the favicon) <br> 圧縮させないアセットファイル等はこちらへ |
| dist | Static files (generate this with 'npm run generate') <br> npm run generateした際に吐き出されるディレクトリ。納品ファイル |

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
