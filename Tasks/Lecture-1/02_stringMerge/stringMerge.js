function stringMerge(word1, word2, sep) {
  const newWord = word1.slice(0,word1.indexOf(sep)) + word2.slice(word2.indexOf(sep));
  return newWord;
}

module.exports = stringMerge;
