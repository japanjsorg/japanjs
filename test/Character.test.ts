import { describe, expect, test } from 'vitest'
import { Character } from '../lib/Character'

describe('Character class', () => {
  // Testing toHiragana
  test('toHiragana converts Katakana to Hiragana', () => {
    expect(Character.toHiragana('カタカナ')).toBe('かたかな')
    expect(Character.toHiragana('コンピューター')).toBe('こんぴゅーたー')
    expect(Character.toHiragana('')).toBe('')
    expect(Character.toHiragana('テスト123')).toBe('てすと123')
  })

  // Testing toKatakana
  test('toKatakana converts Hiragana to Katakana', () => {
    expect(Character.toKatakana('ひらがな')).toBe('ヒラガナ')
    expect(Character.toKatakana('あいうえお')).toBe('アイウエオ')
    expect(Character.toKatakana('')).toBe('')
    expect(Character.toKatakana('てすと123')).toBe('テスト123')
  })

  // toChineseNumeral
  test('toChineseNumeral', () => {
    expect(Character.toChineseNumeral('一')).toBe('壱')
    expect(Character.toChineseNumeral('二')).toBe('弐')
    expect(Character.toChineseNumeral('三')).toBe('参')
    expect(Character.toChineseNumeral('十')).toBe('拾')
  })

  test('toChineseNumeral は大字を広く変換する', () => {
    expect(Character.toChineseNumeral('四')).toBe('肆')
    expect(Character.toChineseNumeral('五')).toBe('伍')
    expect(Character.toChineseNumeral('六')).toBe('陸')
    expect(Character.toChineseNumeral('七')).toBe('漆')
    expect(Character.toChineseNumeral('八')).toBe('捌')
    expect(Character.toChineseNumeral('九')).toBe('玖')
    expect(Character.toChineseNumeral('百')).toBe('佰')
    expect(Character.toChineseNumeral('千')).toBe('仟')
    expect(Character.toChineseNumeral('万')).toBe('萬')
  })

  test('convertToFull は半角かなや数字を全角へ変換する', () => {
    expect(Character.convertToFull('ﾜｼﾝﾄﾝ')).toBe('ワシントン')
    expect(Character.convertToFull('ｦﾝﾜ')).toBe('ヲンワ')
    expect(Character.convertToFull('123')).toBe('１２３')
  })

  test('convertToHalf は全角の濁音や小書き文字を半角へ変換する', () => {
    expect(Character.convertToHalf('ヴァイオリン')).toBe('ｳﾞｧｲｵﾘﾝ')
    expect(Character.convertToHalf('ヲンワ')).toBe('ｦﾝﾜ')
  })

  test('convertToModifiedHepburn はひらがなをヘボン式ローマ字へ変換する', () => {
    expect(Character.convertToModifiedHepburn('しんかんせん')).toBe('shinkansen')
    expect(Character.convertToModifiedHepburn('まって')).toBe('matte')
    expect(Character.convertToModifiedHepburn('ぢゃんぷ')).toBe('jampu')
  })

  test('convertToModifiedHepburn は撥音が母音の前に来た場合にアポストロフィを付与する', () => {
    expect(Character.convertToModifiedHepburn('しんいち')).toBe("shin'ichi")
    expect(Character.convertToModifiedHepburn('かんおけ')).toBe("kan'oke")
  })

  test('convertToModifiedHepburn は撥音が唇音の前に来た場合に m に同化する', () => {
    expect(Character.convertToModifiedHepburn('しんぶん')).toBe('shimbun')
    expect(Character.convertToModifiedHepburn('さんぽ')).toBe('sampo')
  })

  test('convertToModifiedHepburn は長音記号やカタカナ入力も処理する', () => {
    expect(Character.convertToModifiedHepburn('スーパー')).toBe('suupaa')
    expect(Character.convertToModifiedHepburn('キャベツ')).toBe('kyabetsu')
  })

  test('convertToHiragana はローマ字をひらがなへ変換する', () => {
    expect(Character.convertToHiragana('shi')).toBe('し')
    expect(Character.convertToHiragana('sha')).toBe('しゃ')
    expect(Character.convertToHiragana('kyo')).toBe('きょ')
  })
})
