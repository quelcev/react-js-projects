import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, { payload }) => {
      if (payload === "show") {
        state.showModal = true;
      } else if (payload === "hide") {
        state.showModal = false;
      }
    },
  },
});

export const { toggleModal } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;
