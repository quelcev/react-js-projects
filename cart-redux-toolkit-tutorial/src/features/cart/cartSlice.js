import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../utils";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const response = await fetch(cartApi);
    const { ok } = response;
    let data = [];
    if (ok) {
      data = await response.json();
    }
    return { data };
  }
);

const initialState = {
  cartItems: [],
  amount: 0,
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
      const newCartItems = state.cartItems.filter((item) => item.id !== id);
      state.cartItems = newCartItems;
    },
    toggleAmount: (state, { payload: { type, id } }) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      if (type === "increase") {
        state.cartItems[itemIndex].amount += 1;
      } else if (type === "decrease") {
        state.cartItems[itemIndex].amount -= 1;
      }

      if (state.cartItems[itemIndex].amount === 0) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
    setAmount: (state) => {
      state.amount = state.cartItems.reduce((accumulator, { amount }) => {
        return accumulator + amount;
      }, 0);
    },
    setTotal: (state) => {
      state.total = state.cartItems.reduce((accumulator, { amount, price }) => {
        return accumulator + amount * price;
      }, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload.data;
        state.isLoading = false;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeCartItem, toggleAmount, setAmount, setTotal } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
