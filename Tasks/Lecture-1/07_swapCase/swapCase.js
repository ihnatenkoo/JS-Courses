export function swapCase(string) {
  const swapCaseWord = string.split('').map(letter => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join('');

  return swapCaseWord;
}