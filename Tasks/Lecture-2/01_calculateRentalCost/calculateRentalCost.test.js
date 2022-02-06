import { calculateRentalCost } from './calculateRentalCost';

describe('calculateRentalCost returns the total rent amount for a different count of days,cost 40$ day, 3+ days 20$ off, 7+ days 50$ off', () => {
  test('Should return 80, when pass 2 days', () => {
    expect(calculateRentalCost(2)).toBe(80);
  });

  test('Should return 100, when pass 3 days', () => {
    expect(calculateRentalCost(3)).toBe(100);
  });

  test('Should return 230, when pass 7 days', () => {
    expect(calculateRentalCost(7)).toBe(230);
  });

  test('Shuld throw error when pass incorect value', () => {
    expect(() => calculateRentalCost([1, 2, 3])).toThrowError(
      'Error! Value 1,2,3 - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => calculateRentalCost('123')).toThrowError(
      'Error! Value 123 - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => calculateRentalCost({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => calculateRentalCost(true)).toThrowError(
      'Error! Value true - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => calculateRentalCost(null)).toThrowError(
      'Error! Value null - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => calculateRentalCost(undefined)).toThrowError(
      'Error! Value undefined - is not a Number. Pleace pass to the function correct value',
    );
  });
});
