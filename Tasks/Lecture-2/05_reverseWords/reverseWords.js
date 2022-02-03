export const reverseWords = (sentense) => {
  if ('string' === typeof sentense) {
    const reverseWordsResult = sentense
      .split(' ')
      .map((word) => {
        return word.split('').reverse().join('');
      })
      .join(' ');

    return reverseWordsResult;
  } else {
    console.error(
      `Error! Value ${sentense} - is not a string. Pleace pass to the function correct string value`,
    );
  }
};