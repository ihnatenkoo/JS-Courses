import { fearNotLetter } from './fearNotLetter';

describe('fearNotLetter accepts string of letters. Find the missing letter in the passed letter range and return it', () => {
  test('Should return letter "d", when pass "abce"', () => {
    expect(fearNotLetter('abce')).toBe('d');
  });

  test('Should return letter "i", when pass "abcdefghjklmno"', () => {
    expect(fearNotLetter('abcdefghjklmno')).toBe('i');
  });

  test('Should return letter "u", when pass "stvwx"', () => {
    expect(fearNotLetter('stvwx')).toBe('u');
  });

  test('Should return undefined, when pass full alphabet', () => {
    expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toBe(undefined);
  });
 
  test('Shuld throw error when pass incorect value', () => {
    expect(() => fearNotLetter(123)).toThrowError('Error! Value 123 - is not a string. Pleace pass to the function correct string value');

    expect(() => fearNotLetter([1,2,3])).toThrowError('Error! Value 1,2,3 - is not a string. Pleace pass to the function correct string value');

    expect(() => fearNotLetter({a: 1})).toThrowError('Error! Value [object Object] - is not a string. Pleace pass to the function correct string');

    expect(() => fearNotLetter(true)).toThrowError('Error! Value true - is not a string. Pleace pass to the function correct string value');

    expect(() => fearNotLetter(null)).toThrowError('Error! Value null - is not a string. Pleace pass to the function correct string value');
    
    expect(() => fearNotLetter(undefined)).toThrowError('Error! Value undefined - is not a string. Pleace pass to the function correct string value');
  });
});

