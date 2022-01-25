const countOccurrences = require('./countOccurrences');

describe('countOccurrences function', () => {
  test('Should calculates the number of times the letter appears in the phrase', () => {
    expect(countOccurrences('ability', 'i')).toBe(2);
    expect(countOccurrences('abc', 'a')).toBe(1);
    expect(countOccurrences('ABC', 'a')).toBe(1);
  })
})