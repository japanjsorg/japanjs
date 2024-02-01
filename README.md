# JapanJS

JapanJS は日本特有の機能を提供するライブラリです。
カナ変換、都道府県の一覧データなど、日本特有のめんどくさい実装を肩代わりします。Tree Shaking なライブラリなのでバンドルサイズが重くなりません。

JapanJS is a library that provides Japan-specific functions.
It is a tree-shaking library, so the bundle size is not heavy.

- カナ変換
- 都道府県一覧
- 国民の祝日一覧

## Usage

```js
import { Character } from 'jspanjs';

console.log(Character.toHiragana('カタカナ'))
// かたかな

Character.toKatakana('ひらがな')
// ヒラガナ

```

## Document

[japanjs.org](https://japanjs.org)
