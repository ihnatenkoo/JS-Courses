import { createPrevArgSaver } from './createPrevArgSaver';

const argSaver = createPrevArgSaver();

describe('createPrevArgSaver creating a function returning its first argument from the previous call. The first call should return undefined', () => {
  test('Should return undefined, when pass 123', () => {
    expect(argSaver(123)).toBe(undefined);
  });

  test('Then Should return 123, when pass 456', () => {
    expect(argSaver(456)).toBe(123);
  });

  test('Then Should return 456, when pass (100, 200, 300)', () => {
    expect(argSaver(100, 200, 300)).toBe(456);
  });

  test('Then Should return 100, when pass ()', () => {
    expect(argSaver()).toBe(100);
  });

  test('Then Should return undefined, when pass 741', () => {
    expect(argSaver(741)).toBe(undefined);
  });
});
