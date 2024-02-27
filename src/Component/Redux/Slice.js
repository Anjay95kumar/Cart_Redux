import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    removeTocart: (state, action) => {
      state.data = state.data.filter((val) => {
        return val.id !== action.payload;
      });
      
    },
    Increment_Cart: (state, action) => { 

      const itemId = action.payload;
      const item = state.data.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    Decriment_Cart:(state,action)=>{
      
      const item = state.data.find(item => item.id === action.payload);
      if (item) {
        item.quantity--;
      }
      if (item.quantity === 0) {
        state.data = state.data.filter((val) => {
          return val.id !== action.payload;
        });}
      
    }
  },
});

export const { addToCart, removeTocart, Increment_Cart,Decriment_Cart } = cartSlice.actions;

export default cartSlice.reducer;
