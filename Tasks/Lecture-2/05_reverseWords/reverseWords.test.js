import { reverseWords } from './reverseWords';

describe('reverseWords function accepts a string, and reverses each word in the string. All spaces in the string should be retained', () => {
  test('Should return elbuod  secaps, when pass double  spaces', () => {
    expect(reverseWords('double  spaces')).toBe('elbuod  secaps');
  });

  test('Should return ehT kciuq nworb xof spmuj revo eht yzal .god, when pass The quick brown fox jumps over the lazy dog.', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe(
      'ehT kciuq nworb xof spmuj revo eht yzal .god',
    );
  });

  test('Shuld throw error when pass incorect value', () => {
    expect(() => reverseWords(123)).toThrowError(
      'Error! Value 123 - is not a string. Pleace pass to the function correct value',
    );

    expect(() => reverseWords([1, 2, 3])).toThrowError(
      'Error! Value 1,2,3 - is not a string. Pleace pass to the function correct value',
    );

    expect(() => reverseWords({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not a string. Pleace pass to the function correct value',
    );

    expect(() => reverseWords(true)).toThrowError(
      'Error! Value true - is not a string. Pleace pass to the function correct value',
    );

    expect(() => reverseWords(null)).toThrowError(
      'Error! Value null - is not a string. Pleace pass to the function correct value',
    );

    expect(() => reverseWords(undefined)).toThrowError(
      'Error! Value undefined - is not a string. Pleace pass to the function correct value',
    );
  });
});
