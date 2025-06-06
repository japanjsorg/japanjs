export class MorseCode {
  static toMorseCode(inputData: string): string {
    // 数字は全角に変換
    const returnValue = inputData.replace(/[0-9]/g, function(char) {
        return String.fromCharCode(char.charCodeAt(0) + 0xFEE0)
      })

    const kanaMap: Record<string, string> = {
      'ガ': '・－・・　・・　', 'ギ': '－・－・・　・・　', 'グ': '・・・－　・・　', 'ゲ': '－・－－　・・　', 'ゴ': '－－－－　・・　',
      'ザ': '－・－・－　・・　', 'ジ': '－－・－・　・・　', 'ズ': '－－－・－　・・　', 'ゼ': '・－－－・　・・　', 'ゾ': '－－－・　・・　',
      'ダ': '－・　・・　', 'ヂ': '・・－・　・・　', 'ヅ': '・－－・　・・　', 'デ': '・－・－－　・・　', 'ド': '・・－・・　・・　',
      'バ': '－・・・　・・　', 'ビ': '－－・・－　・・　', 'ブ': '－－・・　・・　', 'ベ': '・　・・　', 'ボ': '－・・　・・　',
      'パ': '－・・・　・・－－・　', 'ピ': '－－・・－　・・－－・　', 'プ': '－－・・　・・－－・　', 'ペ': '・　・・－－・　', 'ポ': '－・・　・・－－・　',

      'ア': '－－・－－　', 'イ': '・－　', 'ウ': '・・－　', 'エ': '－・－－－　', 'オ': '・－・・・　',
      'カ': '・－・・　', 'キ': '－・－・・　', 'ク': '・・・－　', 'ケ': '－・－－　', 'コ': '－－－－　',
      'サ': '－・－・－　', 'シ': '－－・－・　', 'ス': '－－－・－　', 'セ': '・－－－・　', 'ソ': '－－－・　',
      'タ': '－・　', 'チ': '・・－・　', 'ツ': '・－－・　', 'テ': '・－・－－　', 'ト': '・・－・・　',
      'ナ': '・－・　', 'ニ': '－・－・　', 'ヌ': '・・・・　', 'ネ': '－－・－　', 'ノ': '・・－－　',
      'ハ': '－・・・　', 'ヒ': '－－・・－　', 'フ': '－－・・　', 'ヘ': '・　', 'ホ': '－・・　',
      'マ': '－・・－　', 'ミ': '・・－・－　', 'ム': '－　', 'メ': '－・・・－　', 'モ': '－・・－・　',
      'ヤ': '・－－　', 'ユ': '－・・－－　', 'ヨ': '－－　',
      'ラ': '・・・　', 'リ': '－－・　', 'ル': '－・－－・　', 'レ': '－－－　', 'ロ': '・－・－　',
      'ワ': '－・－　', 'ヲ': '・－－－　', 'ン': '・－・－・　',

      'ァ': '－－・－－　', 'ィ': '・－　', 'ゥ': '・・－　', 'ェ': '－・－－－　', 'ォ': '・－・・・　',
      'ッ': '・－－・　',
      'ャ': '・－－　', 'ュ': '－・・－－　', 'ョ': '－－　',
      'ヰ': '・－・・－　', 'ヱ': '・－－・・　',

      // 濁点、半濁点
      '゛': '・・　', '゜': '・・－－・　', 

      // 数字
      '１': '・－－－－　', '２': '・・－－－　', '３': '・・・－－　',
      '４': '・・・・－　', '５': '・・・・・　', '６': '－・・・・　',
      '７': '－－・・・　', '８': '－－－・・　', '９': '－－－－・　',
      '０': '－－－－－　', 

      // 和文記号
      'ー': '・－－・－　', // 長音
      '、': '・－・－・－　', '」': '・－・－・・　',
      '（': '－・－－・－　', ' ）': '・－・・－・　',
      
      // 欧文アルファベット
      'Ａ': '・－　',
      'Ｂ': '－・・・　',
      'Ｃ': '－・－・　',
      'Ｄ': '－・・　',
      'Ｅ': '・　',
      'Ｆ': '・・－・　',
      'Ｇ': '－－・　',
      'Ｈ': '・・・・　', 
      'Ｉ': '・・　',
      'Ｊ': '・－－－　',
      'Ｋ': '－・－　',
      'Ｌ': '・－・・　',
      'Ｍ': '－－　',
      'Ｎ': '－・　',
      'Ｏ': '－－－　',
      'Ｐ': '・－－・　', 
      'Ｑ': '－－・－　',
      'Ｒ': '・－・　',
      'Ｓ': '・・・　',
      'Ｔ': '－　',
      'Ｕ': '・・－　',
      'Ｖ': '・・・－　',
      'Ｗ': '・－－　',
      'Ｘ': '－・・－　', 
      'Ｙ': '－・－－　',
      'Ｚ': '－－・・　',
      
      '.': '・－・－・－　', ',': '－－・・－－　', ':': '－－－・・・　',
      '-': '－・・・・－　',

      // 乗算"×"
      // 大文字がない？
      '×': '－・・－　', 
      // べき乗"^"
      // 大文字がない？
      '^': '・・・・・・　',

      '/': '－・・－・　', '@': '・－－・－・　',
      '(': '－・－－・　', ')': '－・－－・－　',
      '"': '・－・・－・　',
      '\'': '・－－－－・　',
    }

    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g')
    const withTrailingSpace = returnValue.replace(reg, function(kana) {
      const key = kana
      return kanaMap[key] !== undefined ? kanaMap[key] : kana;
    })

    const withoutTrailingSpace = withTrailingSpace.slice(0, -1)

    return withoutTrailingSpace
  }

  static toKatakana(inputData: string): string {
    inputData += '　'
      
    const returnValue = inputData.replace(/[0-9]/g, function(char) {
      return String.fromCharCode(char.charCodeAt(0) + 0xFEE0)
    })

    const kanaMap: Record<string, string> = {
      '・－・・　・・　': 'ガ', '－・－・・　・・　': 'ギ', '・・・－　・・　': 'グ', '－・－－　・・　': 'ゲ', '－－－－　・・　': 'ゴ',
      '－・－・－　・・　': 'ザ', '－－・－・　・・　': 'ジ', '－－－・－　・・　': 'ズ', '・－－－・　・・　': 'ゼ', '－－－・　・・　': 'ゾ',
      '－・　・・　': 'ダ', '・・－・　・・　': 'ヂ', '・－－・　・・　': 'ヅ', '・－・－－　・・　': 'デ', '・・－・・　・・　': 'ド',
      '－・・・　・・　': 'バ', '－－・・－　・・　': 'ビ', '－－・・　・・　': 'ブ', '・　・・　': 'ベ', '－・・　・・　': 'ボ',
      '・・－－・　': 'パ', '－－・・－　・・－－・　': 'ピ', '－－・・　・・－－・　': 'プ', '・　・・－－・　': 'ペ', '－・・　・・－－・　': 'ポ',

      '－－・－－　': 'ア', '・－　': 'イ', '・・－　': 'ウ', '－・－－－　': 'エ', '・－・・・　': 'オ',
      '・－・・　': 'カ', '－・－・・　': 'キ', '・・・－　': 'ク', '－・－－　': 'ケ', '－－－－　': 'コ',
      '－・－・－　': 'サ', '－－・－・　': 'シ', '－－－・－　': 'ス', '・－－－・　': 'セ', '－－－・　': 'ソ',
      '－・　': 'タ', '・・－・　': 'チ', '・－－・　': 'ツ', '・－・－－　': 'テ', '・・－・・　': 'ト',
      '・－・　': 'ナ', '－・－・　': 'ニ', '・・・・　': 'ヌ', '－－・－　': 'ネ', '・・－－　': 'ノ',
      '－・・・　': 'ハ', '－－・・－　': 'ヒ', '－－・・　': 'フ', '・　': 'ヘ', '－・・　': 'ホ',
      '－・・－　': 'マ', '・・－・－　': 'ミ', '－　': 'ム', '－・・・－　': 'メ', '－・・－・　': 'モ',
      '・－－　': 'ヤ', '－・・－－　': 'ユ', '－－　': 'ヨ',
      '・・・　': 'ラ', '－－・　': 'リ', '－・－－・　': 'ル', '－－－　': 'レ', '・－・－　': 'ロ',
      '－・－　': 'ワ', '・－－－　': 'ヲ', '・－・－・　': 'ン',

      '・－・・－　': 'ヰ', '・－－・・ ': 'ヱ'
    }

    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g')
    return returnValue.replace(reg, function(kana) {
      const key = kana
      return kanaMap[key]
    })
  }
}
