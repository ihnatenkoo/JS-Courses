import {isPalindrome} from './isPalindrome';

describe('isPalindrome function', () => {
  test('Shoul return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome('Was it a cat I saw?')).toBe(true);
    expect(isPalindrome('7ab7ba7')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });
});