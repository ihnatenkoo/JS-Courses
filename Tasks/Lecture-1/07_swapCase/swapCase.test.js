import {swapCase} from './swapCase';

describe('swapCase function', () => {
  test('Should swap the case for each of the letters', () => {
    expect(swapCase('aBc')).toBe('AbC');
    expect(swapCase('GooD')).toBe('gOOd');
    expect(swapCase('hello')).toBe('HELLO');
  });
});