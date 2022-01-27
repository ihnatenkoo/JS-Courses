export function countOccurrences(string, letter) {
  let counter = 0;

  for (const i of string.toLowerCase()) {
    if (i === letter) {
      counter++;
    }
  }

  return counter;
}