function countOccurrences(str, letter) {
  let counter = 0;
  for (i of str.toLowerCase()) {
    if (i === letter) {
      counter++
    }
  }
  return counter;
}

module.exports = countOccurrences;