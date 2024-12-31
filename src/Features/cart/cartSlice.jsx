import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.value += 1;
      // state.product = action.payload;
      state.value += 1; // Increment the item count
      state.product.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload; // ID of the item to remove
      state.product = state.product.filter((item) => item.id !== itemId); // Remove item
      state.value = state.product.length; // Update the total count
    },

    increaseQuantity: (state, action) => {
      const itemindex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.value[itemindex].quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemindex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0 && state.value[itemindex].quantity > 1) {
        state.value[itemindex].quantity -= 1;
      } else if (state.value[itemindex].quantity === 1) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    resetCart: (state) => {
      state.value = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
