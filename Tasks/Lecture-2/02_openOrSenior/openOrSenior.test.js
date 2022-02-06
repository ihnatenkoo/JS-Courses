import { openOrSenior } from './openOrSenior';

describe('openOrSenior function takes a list of pairs [age, experience] Should return member Status Senior or Open', () => {
  test('Should return [Open, Senior, Open, Senior], when pass [[31, 10],[55,23],[20, 0],[41, 16]]', () => {
    expect(
      openOrSenior([[31, 10],[55, 23],[20, 0],[41, 16]])).toEqual(['Open', 'Senior', 'Open', 'Senior']);
  });

  test('Should return [Open, Open, Open, Open], when pass [[34, 11],[55,7],[39, 16],[38, 14]]', () => {
    expect(
      openOrSenior([[34, 11],[55, 7],[39, 16],[38, 14]])).toEqual(['Open', 'Open', 'Open', 'Open']);
  });

  test('Shuld throw error when pass incorect value', () => {
    expect(() => openOrSenior(123)).toThrowError(
      'Error! Value 123 - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => openOrSenior('123')).toThrowError(
      'Error! Value 123 - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => openOrSenior({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => openOrSenior(true)).toThrowError(
      'Error! Value true - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => openOrSenior(null)).toThrowError(
      'Error! Value null - is not an Array. Pleace pass to the function correct value',
    );

    expect(() => openOrSenior(undefined)).toThrowError(
      'Error! Value undefined - is not an Array. Pleace pass to the function correct value',
    );
  });
});
