import {createPhoneNumber} from './createPhoneNumber';

describe('createPhoneNumber accepts an array of 10 integers, should returns a string of those numbers in the form of a phone number', () => {

  test('Ckecked correct number. Accepts: [1,2,3,4,5,6,7,8,9,0]. Should returns (123) 456-7890', () => {
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toBe('(123) 456-7890');
  });

  test('Ckecked correct length. Accepts: [1,2,3,4,5,6,7,8,9,0]. Should returns 14', () => {
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toHaveLength(14);
  });
  
});