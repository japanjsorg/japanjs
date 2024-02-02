import { describe, expect, test } from 'vitest'
import { nationalHolidays } from '../lib/NationalHolidays';

describe('National Holidays', () => {
  test('元日 is on January 1st', () => {
    const newYearsDay = nationalHolidays.find(holiday => holiday.name === "元日");
    expect(newYearsDay?.date).toEqual(new Date(2024, 0, 1));
  });

  test('成人の日 is on the second Monday of January', () => {
    const comingOfAgeDay = nationalHolidays.find(holiday => holiday.name === "成人の日");
    const expectedDate = new Date(2024, 0, 8);
    expect(comingOfAgeDay?.date).toEqual(expectedDate);
  });

  test('勤労感謝の日 is on November 23rd', () => {
    const laborThanksgivingDay = nationalHolidays.find(holiday => holiday.name === "勤労感謝の日");
    expect(laborThanksgivingDay?.date).toEqual(new Date(2024, 10, 23));
  });
});
