import {getOperands} from './getOperands';

describe('getOperands function takes string which is Math expression of 2 numbers, returns operands in the next format: a: first, b: second', () => {

  test('Accepts: 1 + 2. Should return a: 1, b: 2', () => {
    expect(getOperands('1 + 2')).toBe('a: 1, b: 2');
  });

  test('Accepts: 1.2 * -3.4. Should return a: 1.2, b: -3.4', () => {
    expect(getOperands('1.2 * -3.4')).toBe('a: 1.2, b: -3.4');
  });

  test('Accepts: 1 - 2. Should return a: 1, b: 2', () => {
    expect(getOperands('1 - 2')).toBe('a: 1, b: 2');
  });

  test('Accepts: 1 - -2. Should return a: 1, b: -2', () => {
    expect(getOperands('1 - -2')).toBe('a: 1, b: -2');
  });
  
});