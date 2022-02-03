export const fearNotLetter = (letters) => {
  if ('string' === typeof letters) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

    let startIndex = alphabet.indexOf(letters[0], 0);

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === alphabet[startIndex]) {
        startIndex++;
      } else {
      
        return alphabet[startIndex];
      }
    }

    return undefined;
  } else {
    console.error(
      `Error! Value ${letters} - is not a string. Pleace pass to the function correct string value`,
    );
  }
  
};

