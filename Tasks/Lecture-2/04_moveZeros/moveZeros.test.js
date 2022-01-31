import { moveZeros } from './moveZeros';

describe('moveZeros takes an array and moves all of the zeros to the end, preserving the order of the other elements', () => {
  
  test('Should return [false,1,1,2,1,3,"a",0,0], when pass [false,1,0,1,2,0,1,3,"a"]', () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,'a'])).toEqual([false,1,1,2,1,3,'a',0,0]);
  });
});