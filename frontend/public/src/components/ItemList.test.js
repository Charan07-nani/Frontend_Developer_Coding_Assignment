import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ItemList from './Itemslist';
import { setFilter } from '../store/itemsSlice';

test('ItemList displays items correctly', () => {
  render(
    <Provider store={store}>
      <ItemList />
    </Provider>
  );

  // Check if a default item is rendered
  expect(screen.getByText(/Apple/i)).toBeInTheDocument();
});

test('ItemList filters items based on search input', () => {
  // Dispatch a filter action to change the filter state
  store.dispatch(setFilter('Banana'));

  render(
    <Provider store={store}>
      <ItemList />
    </Provider>
  );

  expect(screen.getByText(/Banana/i)).toBeInTheDocument();
});
