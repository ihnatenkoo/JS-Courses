import { createUrl } from './createUrl';

describe('createUrl function takes a string (template) and object (params). It returns a URL based on the template', 
  () => {

    test('Should return "/api/0", when pass "/api/{id}, {id: 0}"', () => {
      expect(createUrl('/api/{id}', {id: 0})).toBe('/api/0');
    });

    test('Should return "/api/undefined", when pass "api/{id}, {name: Petya}"', () => {
      expect(createUrl('/api/{id}', {name: 'Petya'})).toBe('/api/undefined');
    });

    test('Should return /api/items/0, when pass "/api/{list}/{id}, {list: items, id: 0}"', () => {
      expect(createUrl('/api/{list}/{id}', {
        list: 'items', id: 0,
      })).toBe('/api/items/0');
    });
  });