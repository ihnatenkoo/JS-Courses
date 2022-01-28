import {swapCase} from './swapCase';

describe('swapCase function given a string, swap the case for each of the letters', () => {

  test('Should swap the case for each of the letters', () => {
    expect(swapCase('aBc')).toBe('AbC');
  });

  test('Should swap the case for each of the letters', () => {
    expect(swapCase('GooD')).toBe('gOOd');
  });

  test('Should swap the case for each of the letters', () => {
    expect(swapCase('hello')).toBe('HELLO');
  });

});


