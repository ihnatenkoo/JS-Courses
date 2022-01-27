export function alphabetPosition(string) {
  const result = [];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

  for (const i of string) {
    const index = alphabet.indexOf(i.toLowerCase())+1;

    if (index > 0) {
      result.push(index);
    }
  }

  return result.join(' ');
}