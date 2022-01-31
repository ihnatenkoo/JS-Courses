import { transformState } from './transformState';

describe('transformState accepting 2 arguments state and transforms. It should change the state based on the given transforms and return it', () => {

  test('Should work with a long list of operations', () => {
    expect(transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    ]),
    ).toEqual({
      foo: 'bar', name: 'Jim',
    });
  });
  
  test('Test addProperties operation with empty object', () => {
    expect(transformState(
      {},
      [{
        operation: 'addProperties', properties: {
          name: 'Jim', 
        },
      }],
    ),
    ).toEqual(
      {
        name: 'Jim',
      });
  });

  test('Test clear operation', () => {
    expect(transformState(
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
      [
        { operation: 'clear' },
      ],
    ))
      .toEqual({});
  });

  test('Should work with a long list of operations', () => {
    expect(transformState(
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
      [
        {
          operation: 'removeProperties', properties: ['another'],
        },
        { operation: 'clear' },
        { operation: 'clear' },
        { operation: 'clear' },
        {
          operation: 'addProperties', properties: { yet: 'another property' },
        },
        { operation: 'clear' },
        {
          operation: 'addProperties', properties: { 
            foo: 'bar', name: 'Jim',
          },
        },
        {
          operation: 'removeProperties', properties: ['name', 'hello'],
        },
      ],
    )).toEqual({foo: 'bar'});
  });

});