export  const fearNotLetter = (stringValue) => {
  if ('string' === typeof stringValue) {

    const letters  = stringValue.toLowerCase();
    let startCharCode = letters.charCodeAt(0);

    for (let i = 0; i < letters.length; i++) {
      const charCode = letters.charCodeAt(i);

      if (charCode === startCharCode) {
        startCharCode++;

      } else {

        return String.fromCharCode(startCharCode);
      }
    }
  
    return undefined;
  } else {
    throw new Error(`Error! Value ${stringValue} - is not a string. Pleace pass to the function correct string value`);
  }
};
