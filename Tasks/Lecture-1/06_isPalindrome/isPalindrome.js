export function isPalindrome(string) {
  const sentence = string.toLowerCase()
    .split('')
    .filter(i => i.match(/[a-z0-9]/));
   
  const reversSentence = [...sentence].reverse();

  return sentence.join('') === reversSentence.join('');
}
