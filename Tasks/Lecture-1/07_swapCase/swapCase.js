function swapCase(str) {
  const arrOfLetters = str.split('');

  const swapCaseWord = arrOfLetters.map (i => {
    if (i === i.toLowerCase()) {
       return i.toUpperCase()
    }
    else {
      return i.toLowerCase()
    }
  })
  .join('')

  return swapCaseWord;
}

module.exports = swapCase;