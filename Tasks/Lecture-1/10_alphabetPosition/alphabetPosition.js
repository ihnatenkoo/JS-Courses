function alphabetPosition(str) {
  let result = "";
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];

  for (i of str) {
    const index = alphabet.indexOf(i.toLowerCase())+1;

    if (index > 0) {
      result += `${index.toString()} `
    }
  }
  result = result.trim();

  return result;
}

module.exports = alphabetPosition;