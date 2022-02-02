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
});
