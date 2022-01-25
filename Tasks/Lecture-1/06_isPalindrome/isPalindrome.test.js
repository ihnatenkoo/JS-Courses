const isPalindrome = require('./isPalindrome')

describe('isPalindrome function', () => {
  test('Shoul return boolean, checks if a word is palindrome', () => {
    expect(isPalindrome('Eva, can I see bees in a cave?')).toBeTruthy();
    expect(isPalindrome('race a car')).toBeFalsy();
    expect(isPalindrome('Was it a cat I saw?')).toBeTruthy();
    expect(isPalindrome('7ab7ba7')).toBeTruthy();
    expect(isPalindrome('')).toBeTruthy();
  })
})