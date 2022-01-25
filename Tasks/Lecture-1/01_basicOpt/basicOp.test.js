const basicOp = require('./basicOp');

describe('basicOp function', () => {
  test('Should return correct result after applying the chosen operation', () => {
    expect(basicOp("+", 10, 2)).toBe(12);
    expect(basicOp("-", 10, 2)).toBe(8);
    expect(basicOp("*", 10, 2)).toBe(20);
    expect(basicOp("/", 10, 2)).toBe(5);
    expect(basicOp("something else", 10, 2)).toBe(0);
  })
})