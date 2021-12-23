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

// The function below is called a selector and allows us to select a value from
// the state. 
// Selectors can also be defined inline where they're used instead of
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
