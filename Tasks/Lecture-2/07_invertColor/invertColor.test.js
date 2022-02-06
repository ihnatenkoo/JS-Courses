import { invertColor } from './invertColor';

describe('invertColor function which accepts 6 digit HEX color with a leading #', () => {
  test('Should return #ffffff, when pass #000000', () => {
    expect(invertColor('#000000')).toBe('#ffffff');
  });

  test('Should return #221155, when pass #DDEEAA', () => {
    expect(invertColor('#DDEEAA')).toBe('#221155');
  });

  test('Should return #fedcba, when pass #012345', () => {
    expect(invertColor('#012345')).toBe('#fedcba');
  });

  test('Shuld throw error when pass incorect value', () => {
    expect(() => invertColor(123)).toThrowError(
      'Error! Value 123 - is not a string. Pleace pass to the function correct value',
    );

    expect(() => invertColor([1, 2, 3])).toThrowError(
      'Error! Value 1,2,3 - is not a string. Pleace pass to the function correct value',
    );

    expect(() => invertColor({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not a string. Pleace pass to the function correct value',
    );

    expect(() => invertColor(true)).toThrowError(
      'Error! Value true - is not a string. Pleace pass to the function correct value',
    );

    expect(() => invertColor(null)).toThrowError(
      'Error! Value null - is not a string. Pleace pass to the function correct value',
    );

    expect(() => invertColor(undefined)).toThrowError(
      'Error! Value undefined - is not a string. Pleace pass to the function correct value',
    );
  });
});
