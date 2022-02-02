import { squareList } from './squareList';

describe('squareList function accepts array of munber and should return a new array containing the squares of only the positive integers ', () => {
  test('Should return [16, 1764, 36], when pass [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]', () => {
    expect(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])).toEqual([
      16, 1764, 36,
    ]);
  });

  test('Should return [9, 100, 49], when pass [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]', () => {
    expect(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])).toEqual([
      9, 100, 49,
    ]);
  });
});
