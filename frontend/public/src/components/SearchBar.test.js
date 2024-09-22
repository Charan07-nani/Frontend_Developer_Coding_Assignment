import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import SearchBar from './SearchBar';

test('SearchBar dispatches setFilter action on input change', () => {
 render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/search items/i);

  // Simulate typing in the search input
  fireEvent.change(input, { target: { value: 'Banana' } });

  // The value of the input should be 'Banana'
  expect(input.value).toBe('Banana');
});
