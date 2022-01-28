import {vowelCount} from './vowelCount';

describe('vowelCount function return the count of vowels in the given string. We will consider a, e, i, o, u as vowels (but not y)', () => {

  test('Should return 5, when pass abracadabra', () => {
    expect(vowelCount('abracadabra')).toBe(5);
  });

  test('Should return 2, when pass letter', () => {
    expect(vowelCount('letter')).toBe(2);
  });

  test('Should return 1, when pass toy', () => {
    expect(vowelCount('toy')).toBe(1);
  });

  test('Accepts numbers. Should return 0', () => {
    expect(vowelCount('555')).toBe(0);
  });

});