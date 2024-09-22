import itemsReducer, { setFilter } from './itemsSlice';

describe('itemsSlice', () => {
  const initialState = {
    items: ['Apple', 'Banana', 'Cherry', 'Dates', 'Elderberry'],
    filter: ''
  };

  it('should return the initial state when passed an empty action', () => {
    const result = itemsReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should handle setting the filter', () => {
    const action = { type: setFilter.type, payload: 'Apple' };
    const result = itemsReducer(initialState, action);
    expect(result.filter).toBe('Apple');
  });

  it('should return filtered items correctly', () => {
    const action = { type: setFilter.type, payload: 'Ch' };
    const result = itemsReducer(initialState, action);
    expect(result.filter).toBe('Ch');
  });
});
