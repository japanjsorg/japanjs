import { describe, expect, test } from 'vitest'
import { Character } from '../lib/Character';

describe('Character class', () => {
  // Testing toHiragana
  test('toHiragana converts Katakana to Hiragana', () => {
    expect(Character.toHiragana('カタカナ')).toBe('かたかな');
    expect(Character.toHiragana('コンピューター')).toBe('こんぴゅーたー');
    expect(Character.toHiragana('')).toBe('');
    expect(Character.toHiragana('テスト123')).toBe('てすと123');
  });

  // Testing toKatakana
  test('toKatakana converts Hiragana to Katakana', () => {
    expect(Character.toKatakana('ひらがな')).toBe('ヒラガナ');
    expect(Character.toKatakana('あいうえお')).toBe('アイウエオ');
    expect(Character.toKatakana('')).toBe('');
    expect(Character.toKatakana('てすと123')).toBe('テスト123');
  });
});
