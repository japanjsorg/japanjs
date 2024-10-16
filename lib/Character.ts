export class Character {
  // カタカナをひらがなに変換する
  static toHiragana(str: string): string {
    return str.replace(/[\u30A1-\u30F6]/g, (match) => {
      return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
  }

  // ひらがなをカタカナに変換する
  static toKatakana(str: string): string {
    return str.replace(/[\u3041-\u3096]/g, (match) => {
      return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });
  }

  static toFullWidthAlphanumeric(value: string): string {
    return value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(char) {
        return String.fromCharCode(char.charCodeAt(0) - 0xFEE0)
      })
  }

  static toChineseNumeral(value: string): string {
    const convertMap: { [key: string]: string } = {
      '一': '壱',
      '二': '弐',
      '三': '参',
      '十': '拾'
    }
  
    const reg = new RegExp('(' + Object.keys(convertMap).join('|') + ')', 'g')
    return value.replace(reg, function(character) {
      const key = character
      return convertMap[key]
    })
  }

  static convertToFull(inputData: string) {
    const returnValue = inputData.replace(/[0-9]/g, function(char) {
        return String.fromCharCode(char.charCodeAt(0) + 0xFEE0)
      })
  
    const kanaMap: { [key: string]: string } = {
      'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
      'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
      'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
      'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
      'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
  
      'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
      'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
      'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
      'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
      'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
      'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
      'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
      'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
      'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
      'ワ': 'ワ', 'ヲ': 'ヲ', 'ン': 'ン',
      'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
      'ｯ': 'ッ',
      'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
      'ｰ': 'ー'
    }
  
    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g')
    return returnValue.replace(reg, function(kana) {
      const key = kana
      return kanaMap[key]
    })
  }

  static convertToHalf(inputData: string) {
    const returnValue = inputData.replace(/[０-９]/g, function(char) {
        return String.fromCharCode(char.charCodeAt(0) - 0xFEE0)
      })
  
    const kanaMap: { [key: string]: string } = {
      'ガ': 'ｶﾞ', 'ギ': 'ｷﾞ', 'グ': 'ｸﾞ', 'ゲ': 'ｹﾞ', 'ゴ': 'ｺﾞ',
      'ザ': 'ｻﾞ', 'ジ': 'ｼﾞ', 'ズ': 'ｽﾞ', 'ゼ': 'ｾﾞ', 'ゾ': 'ｿﾞ',
      'ダ': 'ﾀﾞ', 'ヂ': 'ﾁﾞ', 'ヅ': 'ﾂﾞ', 'デ': 'ﾃﾞ', 'ド': 'ﾄﾞ',
      'バ': 'ﾊﾞ', 'ビ': 'ﾋﾞ', 'ブ': 'ﾌﾞ', 'ベ': 'ﾍﾞ', 'ボ': 'ﾎﾞ',
      'パ': 'ﾊﾟ', 'ピ': 'ﾋﾟ', 'プ': 'ﾌﾟ', 'ペ': 'ﾍﾟ', 'ポ': 'ﾎﾟ',
  
      'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
      'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
      'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
      'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
      'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
      'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
      'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
      'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
      'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
      'ワ': 'ﾜ', 'ヲ': 'ｦ', 'ン': 'ﾝ',
      'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ',
      'ッ': 'ｯ',
      'ャ': 'ｬ', 'ュ': 'ｭ', 'ョ': 'ｮ',
      'ー': 'ｰ'
    }
  
    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g')
    return returnValue.replace(reg, function(kana) {
      const key = kana
      return kanaMap[key]
    })
  }

  static toHalfNumeric(value: string) {
    return value.replace(/[０-９]/g, function(char) {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0)
    })
  }

  // https://ja.wikipedia.org/wiki/ヘボン式ローマ字
  static convertToModifiedHepburn(inputData: string) {

    const returnValue = inputData
    
    const kanaMap = {
      'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
      'きゃ': 'kya', 'きぃ': 'kyi', 'きゅ': 'kyu', 'きぇ': 'kye', 'きょ': 'kyo',
      'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
      'ぎゃ': 'gya', 'ぎぃ': 'gyi', 'ぎゅ': 'gyu', 'ぎぇ': 'gye', 'ぎょ': 'gyo',
      'さ': 'sa', 'し': 'si', 'す': 'su', 'せ': 'se', 'そ': 'so',
      'しゃ': 'sha', 'しぃ': 'shi', 'しゅ': 'shu', 'しぇ': 'she', 'しょ': 'sho',
      'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
      'じゃ': 'ja', 'じぃ': 'ji', 'じゅ': 'ju', 'じぇ': 'je', 'じょ': 'jo',
      'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
      'ちゃ': 'cha', 'ちぃ': 'chi', 'ちゅ': 'chu', 'ちぇ': 'che', 'ちょ': 'cho',
      'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
      'ぢゃ': 'dya', 'ぢぃ': 'dyi', 'ぢゅ': 'dyu', 'ぢぇ': 'dye', 'ぢょ': 'dyo',
      'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
      'にゃ': 'nya', 'にぃ': 'nyi', 'にゅ': 'nyu', 'にぇ': 'nye', 'にょ': 'nyo',
      'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
      'ひゃ': 'hya', 'ひぃ': 'hyi', 'ひゅ': 'hyu', 'ひぇ': 'hye', 'ひょ': 'hyo',
      'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
      'びゃ': 'bya', 'びぃ': 'byi', 'びゅ': 'byu', 'びぇ': 'bye', 'びょ': 'byo',
      'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
      'ぴゃ': 'pya', 'ぴぃ': 'pyi', 'ぴゅ': 'pyu', 'ぴぇ': 'pye', 'ぴょ': 'pyo',
      'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
      'みゃ': 'mya', 'みぃ': 'myi', 'みゅ': 'myu', 'みぇ': 'mye', 'みょ': 'myo',
      'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
      'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
      'りゃ': 'rya', 'りぃ': 'ryi', 'りゅ': 'ryu', 'りぇ': 'rye', 'りょ': 'ryo',
      'ら゚': 'la', 'り゚': 'li', 'る゚': 'lu', 'れ゚': 'le', 'ろ゚': 'lo',
      'り゚ゃ': 'lya', 'り゚ぃ': 'lyi', 'り゚ゅ': 'lyu', 'り゚ぇ': 'lye', 'り゚ょ': 'lyo',
      'わ': 'wa', 'ゐ': 'i', 'ゑ': 'e', 'を': 'o',
      'わ゙': 'va', 'ゐ゙': 'vi', 'ゔ': 'vu', 'ゑ゙': 've', 'を゙': 'vo',
      'ん': 'n',
      'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    }
    
    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g')
    return returnValue.replace(reg, function(kana) {
      const key= kana
      return kanaMap[key]
    })
  }

  static convertToHiragana(inputData: string) {
    const returnValue = inputData
  
    const kanaMap = {
      'ka': 'か',
      'ki': 'き',
      'ku': 'く',
      'ke': 'け',
      'ko': 'こ',

      'kya': 'きゃ',
      'kyi': 'きぃ',
      'kyu': 'きゅ',
      'kye': 'きぇ',
      'kyo': 'きょ',

      'ga': 'が',
      'gi': 'ぎ',
      'gu': 'ぐ',
      'ge': 'げ',
      'go': 'ご',

      'gya': 'ぎゃ',
      'gyi': 'ぎぃ',
      'gyu': 'ぎゅ',
      'gye': 'ぎぇ',
      'gyo': 'ぎょ',

      'sa': 'さ',
      'si': 'し',
      'su': 'す',
      'se': 'せ',
      'so': 'そ',

      'sha': 'しゃ',
      'shi': 'しぃ',
      'shu': 'しゅ',
      'she': 'しぇ',
      'sho': 'しょ',

      'za': 'ざ',
      'ji': 'じ',
      'zu': 'ず',
      'ze': 'ぜ',
      'zo': 'ぞ',

      'ja': 'じゃ',
      // 'ji': 'じぃ',
      'ju': 'じゅ',
      'je': 'じぇ',
      'jo': 'じょ',

      'ta': 'た',
      'chi': 'ち',
      'tsu': 'つ',
      'te': 'て',
      'to': 'と',

      'cha': 'ちゃ',
      // 'chi': 'ちぃ',
      'chu': 'ちゅ',
      'che': 'ちぇ',
      'cho': 'ちょ',

      'da': 'だ',
      // 'ji': 'ぢ',
      // 'zu': 'づ',
      'de': 'で',
      'do': 'ど',

      'dya': 'ぢゃ',
      'dyi': 'ぢぃ',
      'dyu': 'ぢゅ',
      'dye': 'ぢぇ',
      'dyo': 'ぢょ',

      'na': 'な',
      'ni': 'に',
      'nu': 'ぬ',
      'ne': 'ね',
      'no': 'の',

      'nya': 'にゃ',
      'nyi': 'にぃ',
      'nyu': 'にゅ',
      'nye': 'にぇ',
      'nyo': 'にょ',
      
      'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
      'hya': 'ひゃ', 'hyi': 'ひぃ', 'hyu': 'ひゅ', 'hye': 'ひぇ', 'hyo': 'ひょ',
      'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
      'bya': 'びゃ', 'byi': 'びぃ', 'byu': 'びゅ', 'bye': 'びぇ', 'byo': 'びょ',
      'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',
      'pya': 'ぴゃ', 'pyi': 'ぴぃ', 'pyu': 'ぴゅ', 'pye': 'ぴぇ', 'pyo': 'ぴょ',
      'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
      'mya': 'みゃ', 'myi': 'みぃ', 'myu': 'みゅ', 'mye': 'みぇ', 'myo': 'みょ',
      'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
      'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
      'rya': 'りゃ', 'ryi': 'りぃ', 'ryu': 'りゅ', 'rye': 'りぇ', 'ryo': 'りょ',
      'la': 'ら゚', 'li': 'り゚', 'lu': 'る゚', 'le': 'れ゚', 'lo': 'ろ゚',
      'lya': 'り゚ゃ', 'lyi': 'り゚ぃ', 'lyu': 'り゚ゅ', 'lye': 'り゚ぇ', 'lyo': 'り゚ょ',
  
      'va': 'わ゙', 'vi': 'ゐ゙', 'vu': 'ゔ', 've': 'ゑ゙', 'vo': 'を゙',
      'n': 'ん',
      'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
  
      // 'wa': 'わ', 'i': 'ゐ', 'e': 'ゑ', 'o': 'を',
      'wa': 'わ' // , 'i': 'ゐ', 'e': 'ゑ', 'o': 'を',
    }
  
    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g')
    return returnValue.replace(reg, function(kana) {
      const key = kana
      return kanaMap[key]
    })
  }
}
