import { getData } from './main';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ category: 'a' }, { category: 'b' }]),
  })
);

describe('GET request', () => {

  beforeEach(() => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ category: 'a' }, { category: 'b' }]),
      })
    );
  });

  test('should return value from backend', async () => {
    const result = await getData('https://fakestoreapi.com/products');

    expect(result).toEqual([{ category: 'a' }, { category: 'b' }]);
  });

  test('should catch error', async () => {
    try {
      await getData('https://fakestoreapi.com/products');
    }
    catch (error) {
      expect(error.message).toBe('Error');
    }
  });
});
