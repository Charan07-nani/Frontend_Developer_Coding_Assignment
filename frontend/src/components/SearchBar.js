import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/itemsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
