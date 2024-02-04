import { describe, it, expect } from 'vitest';
import { MorseCode } from '../lib/MorseCode';

describe('MorseCode', () => {
  describe('toMorseCode', () => {
    it('should convert katakana to morse code correctly', () => {
      // 例: ア (A) は "－－・－－　" に変換されるべき
      expect(MorseCode.toMorseCode('ア')).toBe('－－・－－　');
      // 他のカタカナに対するテストを追加
    });

    // 数字が正しく変換されるかのテスト
    it('should convert digits to full-width characters', () => {
      // 例: '1' は '１' に変換される
      expect(MorseCode.toMorseCode('1')).toBe('１');
      // 他の数字に対するテストを追加
    });
  });

  describe('toKatakana', () => {
    it('should convert morse code to katakana correctly', () => {
      // MorseCode.toKatakanaのテストケースを追加
      // このメソッドのロジックに合わせたテストを書いてください
    });

    // 全角数字が正しく変換されるかのテスト
    it('should convert full-width digits to normal digits', () => {
      // 例: '１' は '1' に変換される
      expect(MorseCode.toKatakana('１')).toBe('1');
      // 他の全角数字に対するテストを追加
    });
  });
});
