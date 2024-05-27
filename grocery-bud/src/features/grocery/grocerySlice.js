import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeToLocalStorage,
} from "../../utils";

const initialState = {
  groceryItems: getFromLocalStorage("grocery-list") ?? [],
  groceryInput: "",
  isEditing: false,
  editingItemId: "",
  refs: {
    groceryInputRef: null,
  },
  alert: {
    show: false,
    text: "",
    alertType: "",
  },
};

const grocerySlice = createSlice({
  name: "grocery",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state.alert = { ...payload };
    },
    setGroceryItems: (state, { payload }) => {
      if (!state.isEditing) {
        state.groceryItems = [...state.groceryItems, payload];
      } else {
        const { id, value: newValue } = payload;
        state.groceryItems = state.groceryItems.map((item) => {
          if (item.id === id) {
            item = { ...item, value: newValue };
          }
          return item;
        });
      }
      addToLocalStorage("grocery-list", state.groceryItems);
    },
    setGroceryInput: (state, { payload }) => {
      state.groceryInput = payload;
    },
    deleteItem: (state, { payload }) => {
      state.groceryItems = state.groceryItems.filter(
        (item) => item.id !== payload
      );
      addToLocalStorage("grocery-list", state.groceryItems);
      state.editingItemId = "";
      state.isEditing = false;
      state.groceryInput = "";
    },
    editItem: (state, { payload }) => {
      state.groceryInput = payload;
    },
    setRef: (state, { payload }) => {
      const { name, ref } = payload;
      state.refs[name] = ref;
    },
    setIsEditing: (state, { payload }) => {
      const { editing, id } = payload;
      state.editingItemId = id;
      state.isEditing = editing;
    },
    clearItems: (state) => {
      state.groceryItems = [];
      removeToLocalStorage("grocery-list");
    },
    setTimeoutId: (state, { payload }) => {
      state.timeoutId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setAlertWitReset.fulfilled, (state) => {
      state.alert = { show: false, text: "", alertType: "" };
    });
  },
});

export const {
  setGroceryItems,
  deleteItem,
  setGroceryInput,
  editItem,
  setRef,
  setIsEditing,
  clearItems,
  setTimeoutId,
  setAlert,
} = grocerySlice.actions;

let timeoutId = null;
export const setAlertWitReset = createAsyncThunk(
  "grocery/setAlertWitReset",
  (payload, thunkAPI) => {
    clearTimeout(timeoutId);
    thunkAPI.dispatch(setAlert(payload));
    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
);

export default grocerySlice.reducer;
