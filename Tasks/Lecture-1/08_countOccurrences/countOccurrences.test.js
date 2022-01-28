import {countOccurrences} from './countOccurrences';

describe('countOccurrences function takes a phrase and a letter and calculates the number of times the letter appears in the phrase', () => {

  test('Should calculates the number of times the letter appears in the phrase', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
  });

  test('Should calculates the number of times the letter appears in the phrase', () => {
    expect(countOccurrences('abc', 'a')).toBe(1);
  });

  test('Should calculates the number of times the letter appears in the phrase', () => {
    expect(countOccurrences('ABC', 'a')).toBe(1);
  });

});