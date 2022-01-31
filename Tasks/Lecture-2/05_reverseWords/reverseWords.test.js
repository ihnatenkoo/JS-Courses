import { reverseWords } from './reverseWords';

describe('reverseWords function accepts a string, and reverses each word in the string. All spaces in the string should be retained', () => {

  test('Should return elbuod  secaps, when pass double  spaces', () => {
    expect(reverseWords('double  spaces')).toBe('elbuod  secaps');
  });

  test('Should return ehT kciuq nworb xof spmuj revo eht yzal .god, when pass The quick brown fox jumps over the lazy dog.', () => {
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
  });

});