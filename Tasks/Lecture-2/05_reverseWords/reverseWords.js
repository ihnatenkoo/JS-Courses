export const reverseWords = (sentense) => {

  const reverseWordsResult = sentense.split(' ')
    .map(word => {
      return word.split('').reverse().join('');
    })
    .join(' ');

  return reverseWordsResult;
};