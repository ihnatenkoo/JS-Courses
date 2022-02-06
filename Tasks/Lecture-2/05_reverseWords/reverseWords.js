export const reverseWords = (sentense) => {
  if ('string' !== typeof sentense) {
    throw new Error(
      `Error! Value ${sentense} - is not a string. Pleace pass to the function correct value`,
    );
  }

  const reverseWordsResult = sentense
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');

  return reverseWordsResult;
};
