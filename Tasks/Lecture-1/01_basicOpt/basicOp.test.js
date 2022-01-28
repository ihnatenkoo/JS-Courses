import {basicOp} from './basicOp';

describe('basicOp function accepts mathematical operand and two numbers.Should return the result of numbers after applying the chosen operation', 
  () => {

    test('Accepts: 10 + 2. Should return 12', () => {
      expect(basicOp('+', 10, 2)).toBe(12);
    });

    test('Accepts: 10 - 2. Should return 8', () => {
      expect(basicOp('-', 10, 2)).toBe(8);
    });

    test('Accepts: 10 * 2. Should return 20', () => {
      expect(basicOp('*', 10, 2)).toBe(20);
    });

    test('Accepts: 10 / 2. Should return 5', () => {
      expect(basicOp('/', 10, 2)).toBe(5);
    });

    test('Accepts: No mathematical operand. Should return 0', () => {
      expect(basicOp('something else', 10, 2)).toBe(0);
    });
    
  });