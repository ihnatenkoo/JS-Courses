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


});