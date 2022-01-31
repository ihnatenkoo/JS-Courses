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
});