const createPhoneNumber = require('./createPhoneNumber');

describe('createPhoneNumber function', () => {
  test('Should return a string of array numbers in the form of a phone number', () => {
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toBe('(123) 456-7890')
    expect(createPhoneNumber([0,9,5,4,8,3,4,1,3,3])).toBe('(095) 483-4133')
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toHaveLength(14)
  })
})