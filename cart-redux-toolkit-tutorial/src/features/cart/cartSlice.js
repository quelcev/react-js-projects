import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../utils";
import axios from "axios";
// import { toggleModal } from "../modal/modalSlice";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
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
        console.log("fetchCartItems.pending");
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        console.log("fetchCartItems.fulfilled");
        state.cartItems = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        console.log("fetchCartItems.rejected");
        console.log(action.payload.msg);
        state.isLoading = false;
      });
  },
});

const asyncActions = {
  fetchCartItems: createAsyncThunk(
    "cart/fetchCartItems",
    async (_, thunkAPI) => {
      try {
        const { data } = await axios(cartApi);
        // thunkAPI.dispatch(toggleModal("show"));
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  ),
};

export const { clearCart, removeCartItem, toggleAmount, setAmount, setTotal } =
  cartSlice.actions;
export const { fetchCartItems } = asyncActions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
