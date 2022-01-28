import {swapCase} from './swapCase';

describe('swapCase function given a string, swap the case for each of the letters', () => {

  test('Should return AbC, when pass aBc', () => {
    expect(swapCase('aBc')).toBe('AbC');
  });

  test('Should return gOOd, when pass GooD', () => {
    expect(swapCase('GooD')).toBe('gOOd');
  });

  test('Should return HELLO, when pass hello', () => {
    expect(swapCase('hello')).toBe('HELLO');
  });

});


