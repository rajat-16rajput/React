import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      console.log(state);
      state.items.push(action.payload);
      console.log("action.payload : " + action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
