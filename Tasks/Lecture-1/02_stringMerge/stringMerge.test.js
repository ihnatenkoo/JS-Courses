import {stringMerge} from './stringMerge';

describe('stringMerge function', () => {
  test('Should merged two words with the dividing letter in the middle', () => {
    expect(stringMerge('hellol', 'world', 'l')).toBe('held');
    expect(stringMerge('codingl', 'anywhere', 'n')).toBe('codinywhere');
    expect(stringMerge('jasonl', 'samson', 's')).toBe('jasamson');
    expect(stringMerge('wonderfull', 'people', 'e')).toBe('wondeople');
  });
});