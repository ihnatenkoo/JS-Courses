import {vowelCount} from './vowelCount';

describe('vowelCount function', () => {
  test('Should return the count of vowels in the given string', () => {
    expect(vowelCount('abracadabra')).toBe(5);
    expect(vowelCount('letter')).toBe(2);
    expect(vowelCount('toy')).toBe(1);
    expect(vowelCount('555')).toBe(0);
  });
});