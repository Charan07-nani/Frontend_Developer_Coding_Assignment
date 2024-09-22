import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: ['Apple', 'Banana', 'Cherry', 'Dates', 'Elderberry'],
  filter: ''
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { setFilter } = itemsSlice.actions;

export default itemsSlice.reducer;
