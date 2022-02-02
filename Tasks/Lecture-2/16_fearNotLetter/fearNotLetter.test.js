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
});

