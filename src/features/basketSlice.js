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

        // whenever I dispatch action for "addItemToBasket", updae the state of items
        // array as whatever is inside the items array keep it and add a new action.payload to it.
        state.items = [...state.items, action.payload];
    },
    removeItemFromBakset: (state, action) => {

        // use the id that we passed and remove the item from basket with that id
        let copyOfBasket = [...state.items];

        // find the index of the element in the items array with the id.
        const index = state.items.findIndex((item) => {
            return item.id === action.payload.id;
        });

       if(index !== -1) {

         // Splice the item out of the basket
         copyOfBasket.splice(index, 1);
         state.items = copyOfBasket;
       } 
       else {
         alert('Item does not exist in the basket');
       }


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
