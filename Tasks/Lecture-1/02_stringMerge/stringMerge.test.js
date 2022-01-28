import {stringMerge} from './stringMerge';

describe('stringMerge accepts two words and a letter, merged words at the point where the given letter first appears in each word', () => {

  test('Accepts: hello, world. Should return held', () => {
    expect(stringMerge('hello', 'world', 'l')).toBe('held');
  });

  test('Accepts: coding, anywhere. Should return codinywhere', () => {
    expect(stringMerge('coding', 'anywhere', 'n')).toBe('codinywhere');
  });

  test('Accepts: jason, samson. Should return jasamson', () => {
    expect(stringMerge('jason', 'samson', 's')).toBe('jasamson');
  });

  test('Accepts: wonderful, people. Should return wondeople', () => {
    expect(stringMerge('wonderful', 'people', 'e')).toBe('wondeople');
  });
  
});
