import { createSlice } from '@reduxjs/toolkit';


const initialState = {

  items: []
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItemToBakset: (state, action) => {
      state.value += action.payload;
    },
    removeItemFromBakset: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToBakset, removeItemFromBakset } = basketSlice.actions;

// Selector
// The function below is called a selector and allows us to select a value from
// the state. 
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;

export default basketSlice.reducer;
