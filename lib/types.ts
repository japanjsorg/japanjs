// 都道府県の情報を持つ型
export type Prefecture = {
  name: string;
  capital: string;
  region: string;
};
  
// Prefecture型の配列
export type Prefectures = Prefecture[];

export type NationalHoliday = {
  name: string
  date: string
}

export type NationalHolidays = NationalHoliday[]
