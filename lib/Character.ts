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
}
