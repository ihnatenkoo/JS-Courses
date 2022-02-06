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

  test('Shuld throw error when pass incorect value', () => {
    expect(() => isPrime([1, 2, 3])).toThrowError(
      'Error! Value 1,2,3 - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => isPrime('123')).toThrowError(
      'Error! Value 123 - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => isPrime({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => isPrime(true)).toThrowError(
      'Error! Value true - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => isPrime(null)).toThrowError(
      'Error! Value null - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => isPrime(undefined)).toThrowError(
      'Error! Value undefined - is not a Number. Pleace pass to the function correct value',
    );
  });
});
