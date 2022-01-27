export function isPalindrome(sentence) {

  const string = sentence.split('')
    .filter(i => i.match(/[A-Za-z0-9]/))
    .join('')
    .toLowerCase();

  const reverseString = sentence.split('')
    .reverse()
    .filter(i => i.match(/[A-Za-z0-9]/))
    .join('')
    .toLowerCase();

  return string === reverseString;
}

