import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    linksHeight: 0,
    navbarFixed: false,
  },
  reducers: {
    toggleLinksHeight: (state, action) => {
      state.linksHeight = action.payload;
    },
    toggleNavbarFixed: (state, action) => {
      state.navbarFixed = action.payload;
    },
  },
});

export const { toggleLinksHeight, toggleNavbarFixed } = navbarSlice.actions;

export default navbarSlice.reducer;
