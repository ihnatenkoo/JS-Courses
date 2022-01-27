export function vowelCount(string) {
  let counter = 0;

  for (const letter of string) {
    if (letter.match(/a|e|i|o|u/)) {
      counter++;
    }
  }

  return counter;
}

