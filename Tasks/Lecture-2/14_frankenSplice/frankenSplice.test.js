import { frankenSplice } from './frankenSplice';

describe('frankenSplice copys each element of 1 array into 2 array, in order. Begin inserting elements at index n of the second array', () => {
  test('Should return [4, 1, 2, 3, 5], when pass ([1, 2, 3], [4, 5], 1)', () => {
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  });

  test('Should return [head, shoulders, claw, tentacle, knees, toes], when pass a long list of arguments', () => {
    expect(
      frankenSplice(
        ['claw', 'tentacle'],
        ['head', 'shoulders', 'knees', 'toes'],
        2,
      ),
    ).toEqual(['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']);
  });

  test('Should return [1, 2, 3, 4], when pass ([1, 2, 3, 4], [], 0)', () => {
    expect(frankenSplice([1, 2, 3, 4], [], 0)).toEqual([1, 2, 3, 4]);
  });
});
