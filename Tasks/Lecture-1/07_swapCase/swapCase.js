export function swapCase(string) {
  const arrOfLetters = string.split('');

  const swapCaseWord = arrOfLetters.map (letter => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join('');

  return swapCaseWord;
}