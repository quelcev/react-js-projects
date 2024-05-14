import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeCartItem: (state, { payload: { id } }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    toggleAmount: (state, { payload: { type, id } }) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      if (type === "increase") {
        state.cartItems[itemIndex].amount += 1;
      } else {
        state.cartItems[itemIndex].amount -= 1;
        if (state.cartItems[itemIndex].amount === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { clearCart, removeCartItem, toggleAmount } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
