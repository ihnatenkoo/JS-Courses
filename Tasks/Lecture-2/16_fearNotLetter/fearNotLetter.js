export const fearNotLetter = (stringValue) => {
  if ('string' !== typeof stringValue) {
    throw new Error(
      `Error! Value ${stringValue} - is not a string. Pleace pass to the function correct value`,
    );
  }

  const stringLowerCase = stringValue.toLowerCase();
  const firstLetterNumber = stringLowerCase.charCodeAt(0);

  for (let i = 0; i < stringLowerCase.length; i++) {
    if (stringLowerCase[i].charCodeAt() !== firstLetterNumber + i) {
      return String.fromCharCode(firstLetterNumber + i);
    }
  }

  return undefined;
};
