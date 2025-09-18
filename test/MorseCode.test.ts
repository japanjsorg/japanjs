import { describe, it, expect } from 'vitest';
import { MorseCode } from '../lib/MorseCode';

// https://ja.wikipedia.org/wiki/モールス符号
describe('MorseCode', () => {
  describe('toMorseCode', () => {
    it('should convert katakana to morse code correctly', () => {
      // 例: ア (A) は "－－・－－" に変換されるべき
      expect(MorseCode.toMorseCode('ア')).toBe('－－・－－');
      // 他のカタカナに対するテストを追加
      expect(MorseCode.toMorseCode('イ')).toBe('・－');
      expect(MorseCode.toMorseCode('ロ')).toBe('・－・－');
      expect(MorseCode.toMorseCode('ハ')).toBe('－・・・');
      expect(MorseCode.toMorseCode('ニ')).toBe('－・－・');
      // expect(MorseCode.toMorseCode('')).toBe('');
    });

    it('半角数字の変換を確認', () => {
      expect(MorseCode.toMorseCode('1')).toBe('・－－－－')
      expect(MorseCode.toMorseCode('2')).toBe('・・－－－')
      expect(MorseCode.toMorseCode('3')).toBe('・・・－－');
      expect(MorseCode.toMorseCode('4')).toBe('・・・・－');
      expect(MorseCode.toMorseCode('5')).toBe('・・・・・');
      expect(MorseCode.toMorseCode('6')).toBe('－・・・・');
      expect(MorseCode.toMorseCode('7')).toBe('－－・・・');
      expect(MorseCode.toMorseCode('8')).toBe('－－－・・');
      expect(MorseCode.toMorseCode('9')).toBe('－－－－・');
      expect(MorseCode.toMorseCode('0')).toBe('－－－－－');
    })

    it('全角数字の変換を確認', () => {
      expect(MorseCode.toMorseCode('１')).toBe('・－－－－')
      expect(MorseCode.toMorseCode('２')).toBe('・・－－－')
      expect(MorseCode.toMorseCode('３')).toBe('・・・－－');
      expect(MorseCode.toMorseCode('４')).toBe('・・・・－');
      expect(MorseCode.toMorseCode('５')).toBe('・・・・・');
      expect(MorseCode.toMorseCode('６')).toBe('－・・・・');
      expect(MorseCode.toMorseCode('７')).toBe('－－・・・');
      expect(MorseCode.toMorseCode('８')).toBe('－－－・・');
      expect(MorseCode.toMorseCode('９')).toBe('－－－－・');
      expect(MorseCode.toMorseCode('０')).toBe('－－－－－');
    })
    it('パ行と半濁点の変換を確認', () => {
      expect(MorseCode.toMorseCode('パ')).toBe('－・・・　・・－－・');
      expect(MorseCode.toMorseCode('ポ')).toBe('－・・　・・－－・');
      expect(MorseCode.toMorseCode('゜')).toBe('・・－－・');
    });

  });

  describe('toKatakana', () => {
    it('should convert morse code to katakana correctly', () => {
      expect(MorseCode.toKatakana('－－・－－')).toBe('ア');
      expect(MorseCode.toKatakana('・－')).toBe('イ');
      expect(MorseCode.toKatakana('－－－－')).toBe('コ');
      expect(MorseCode.toKatakana('－－・－－　・－・－')).toBe('アロ');
    });

    it('濁点・半濁点を含むモールス信号をカタカナに変換できる', () => {
      expect(MorseCode.toKatakana('・－・・　・・')).toBe('ガ');
      expect(MorseCode.toKatakana('－・・　・・－－・')).toBe('ポ');
      expect(MorseCode.toKatakana('－・・・　・・－－・')).toBe('パ');
      expect(MorseCode.toKatakana('・・－－・')).toBe('゜');
    });

    it('toMorseCodeとの往復で文字列が保持される', () => {
      const encoded = MorseCode.toMorseCode('テスト');
      expect(MorseCode.toKatakana(encoded)).toBe('テスト');
    });
  });
});
