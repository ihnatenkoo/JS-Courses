import { isPrime } from './isPrime';

describe(' isPrime takes one integer argument and returns the logical value true or false depending on if the integer is a prime', () => {

  test('Should return true, when pass 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  test('Should return true, when pass 73', () => {
    expect(isPrime(73)).toBe(true);
  });

  test('Should return false, when pass 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  test('Should return false, when pass 75', () => {
    expect(isPrime(75)).toBe(false);
  });

  test('Should return false, when pass -1', () => {
    expect(isPrime(-1)).toBe(false);
  });
});