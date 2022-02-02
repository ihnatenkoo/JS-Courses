import { createAdder } from './createAdder';

const adder1 = createAdder();

describe('createAdder returning the sum of initialValue and all the arguments of current and all previous calls. Test initialValue = 0', () => {
  test('Should return 0, when pass empty arguments()', () => {
    expect(adder1()).toBe(0);
  });

  test('Then Should return 30, when pass (10,20)', () => {
    expect(adder1(10, 20)).toBe(30);
  });

  test('Then Should return 100, when pass (30,40)', () => {
    expect(adder1(30, 40)).toBe(100);
  });
});

const adder2 = createAdder(100);

describe('createAdder returning the sum of initialValue and all the arguments of current and all previous calls. Test initialValue = 100', () => {
  test('Should return 110, when pass empty (10)', () => {
    expect(adder2(10)).toBe(110);
  });

  test('Then Should return 200, when pass (20, 30, 40)', () => {
    expect(adder2(20, 30, 40)).toBe(200);
  });

  test('Then Should return 200, when pass empty arguments()', () => {
    expect(adder2()).toBe(200);
  });
});
