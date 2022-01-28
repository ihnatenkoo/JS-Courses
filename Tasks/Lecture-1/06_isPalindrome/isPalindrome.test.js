import {isPalindrome} from './isPalindrome';

describe('isPalindrome function given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases', () => {

  test('Should return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
  });

  test('Should return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('Should return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('Was it a cat I saw?')).toBe(true);
  });

  test('Should return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('7ab7ba7')).toBe(true);
  });

  test('Should return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

});