import { moveZeros } from './moveZeros';

describe('moveZeros takes an array and moves all of the zeros to the end, preserving the order of the other elements', () => {
  test('Should return [false,1,1,2,1,3,"a",0,0], when pass [false,1,0,1,2,0,1,3,"a"]', () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual([false,1,1,2,1,3,'a',0,0]);
  });

  test('Shuld throw error when pass incorect value', () => {
    expect(() => moveZeros(123)).toThrowError(
      'Error! Value 123 - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => moveZeros('123')).toThrowError(
      'Error! Value 123 - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => moveZeros({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => moveZeros(true)).toThrowError(
      'Error! Value true - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => moveZeros(null)).toThrowError(
      'Error! Value null - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => moveZeros(undefined)).toThrowError(
      'Error! Value undefined - is not an Array. Pleace pass to the function correct value',
    );
  });
});
