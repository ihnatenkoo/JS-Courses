import {isPalindrome} from './isPalindrome';

describe('isPalindrome function given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases', () => {

  test('Should return true, when pass Eva, can I see bees in a cave?', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true);
  });

  test('Should return false, when pass race a car', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('Should return true, when pass Was it a cat I saw?', () => {
    expect(isPalindrome('Was it a cat I saw?')).toBe(true);
  });

  test('Should return true, when pass empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

});