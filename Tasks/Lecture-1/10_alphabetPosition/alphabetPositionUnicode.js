export function alphabetPositionUnicode(string) {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const index = string.toUpperCase().charCodeAt(i) - 64;

    if (index >= 1 && index <= 26) {
      result.push(index);
    }
   
  }

  return result.join(' ');
}