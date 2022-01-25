function vowelCount(srt) {
  let counter = 0;
  for (i of srt) {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
      counter++
    }
  }

  return counter;
}

module.exports = vowelCount;
