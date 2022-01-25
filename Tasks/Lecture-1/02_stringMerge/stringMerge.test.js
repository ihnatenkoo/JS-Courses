const stringMerge = require('./stringMerge');

describe('stringMerge function', () => {
  test('Should merged two words with the dividing letter in the middle', () => {
    expect(stringMerge("hello", "world", "l")).toBe('held')
    expect(stringMerge("coding", "anywhere", "n")).toBe("codinywhere")
    expect(stringMerge("jason", "samson", "s")).toBe("jasamson")
    expect(stringMerge("wonderful", "people", "e")).toBe("wondeople")
  })
})