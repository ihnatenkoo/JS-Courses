const getOperands = require('./getOperands');

describe('getOperands function', () => {
  test('Should return operands', () => {
    expect(getOperands('1 + 2')).toBe('a: 1, b: 2');
    expect(getOperands('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
    expect(getOperands('1 - 2')).toBe('a: 1, b: 2');
    expect(getOperands('1 - -2')).toBe('a: 1, b: -2');
  })
})