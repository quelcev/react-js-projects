import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currIndex: 0,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setCurrIndex: (state, action) => {
      const { type } = action.payload;
      if (type === "next") {
        state.currIndex += 1;
      }
      if (type === "prev") {
        state.currIndex -= 1;
      }
    },
  },
});

export const { setCurrIndex } = sliderSlice.actions;

export default sliderSlice.reducer;
