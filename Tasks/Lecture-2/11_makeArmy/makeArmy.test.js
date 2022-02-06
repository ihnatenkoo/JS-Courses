import { makeArmy } from './makeArmy';

const shooters = makeArmy(10);

describe('makeArmy takes count and generates an array with count elements. Each element is a function that returns its position in the array', () => {
  test('Should return 0, when pass shooters[0]()', () => {
    expect(shooters[0]()).toBe(0);
  });

  test('Should return 5, when pass shooters[5]()', () => {
    expect(shooters[5]()).toBe(5);
  });

  test('Should return 9, when pass shooters[9]()', () => {
    expect(shooters[9]()).toBe(9);
  });

  test('Shuld throw error when pass incorect value', () => {
    expect(() => makeArmy([1, 2, 3])).toThrowError(
      'Error! Value 1,2,3 - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => makeArmy('123')).toThrowError(
      'Error! Value 123 - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => makeArmy({ a: 1 })).toThrowError(
      'Error! Value [object Object] - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => makeArmy(true)).toThrowError(
      'Error! Value true - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => makeArmy(null)).toThrowError(
      'Error! Value null - is not a Number. Pleace pass to the function correct value',
    );

    expect(() => makeArmy(undefined)).toThrowError(
      'Error! Value undefined - is not a Number. Pleace pass to the function correct value',
    );
  });
});
