import {alphabetPositionUnicode} from './alphabetPositionUnicode';

describe('alphabetPositionUnicode function', () => {
  test('Should replace every letter with its position in the alphabet using Unicode', () => {
    expect(alphabetPositionUnicode('The sunset sets at twelve o\' clock.'))
      .toBe('20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
    expect(alphabetPositionUnicode('AaBbCc')).toBe('1 1 2 2 3 3');
  });
});