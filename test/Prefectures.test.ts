import { describe, expect, test } from 'vitest'
import { prefectures } from '../lib/Prefectures';

describe('Prefectures array', () => {
  test('contains the correct number of prefectures', () => {
    expect(prefectures).toHaveLength(47);
  });

  test('includes specific prefectures', () => {
    const expectedPrefectures = ["北海道", "東京", "大阪", "沖縄"];
    expectedPrefectures.forEach(prefectureName => {
      expect(prefectures).toEqual(
        expect.arrayContaining([{ name: prefectureName }])
      );
    });
  });

  test('does not have duplicate prefectures', () => {
    const uniquePrefectures = new Set(prefectures.map(prefecture => prefecture.name));
    expect(uniquePrefectures.size).toBe(prefectures.length);
  });
});