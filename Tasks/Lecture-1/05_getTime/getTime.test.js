import {getTime} from './getTime';

describe('getTime Function takes string and returns first valid time in this string. Valid time has format hh:mm', 
  () => {

    test('Should return 09:00, when pass Breakfast at 09:00', () => {
      expect(getTime('Breakfast at 09:00')).toBe('09:00');
    });

    test('Should return 21:00, when pass Breakfast at 09:60, Dinner at 21:00', () => {
      expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
    });

    test('Should return 09:59, when pass Breakfast at 09:59, Dinner at 21:00', () => {
      expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
    });

    test('Should return 23:59, when pass Breakfast at 10:72, Dinner at 21:81, Sleep at 23:59', () => {
      expect(getTime('Breakfast at 10:72, Dinner at 21:81, Sleep at 23:59')).toBe('23:59');
    });

    test('Should return empty string when time is not found', () => {
      expect(getTime('Breakfast at')).toBe('');
    });

  });