const getTime = require('./getTime');

describe('getTime function', () => {
  test('Should return correct time', () => {
    expect(getTime('Breakfast at 09:00')).toBe('09:00');
    expect(getTime('Breakfast at 09:60, Dinner at 21:00')).toBe('21:00');
    expect(getTime('Breakfast at 09:59, Dinner at 21:00')).toBe('09:59');
    expect(getTime('Breakfast at 10:72, Dinner at 21:81, Sleep at 23:59')).toBe('23:59');
    expect(getTime('Breakfast at 10:72@!#@!#, Sleep 23:59#rete')).toBe('23:59');
    expect(getTime('Breakfast at')).toBe('');
  })
})