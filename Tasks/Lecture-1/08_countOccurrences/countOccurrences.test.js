import {countOccurrences} from './countOccurrences';

describe('countOccurrences function takes a phrase and a letter and calculates the number of times the letter appears in the phrase', () => {

  test('Should return 2, when pass ability - i', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
  });

  test('Should return 1, when pass abc - a', () => {
    expect(countOccurrences('abc', 'a')).toBe(1);
  });

  test('Should return 1, when pass ABC - a', () => {
    expect(countOccurrences('ABC', 'a')).toBe(1);
  });

});