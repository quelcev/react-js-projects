import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  currentImageIndex: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      const { show } = action.payload;
      if (show) {
        state.showModal = true;
      } else {
        state.showModal = false;
      }
    },
    setCurrentImageIndex: (state, action) => {
      state.currentImageIndex = action.payload;
    },
  },
});

export const { setShowModal, setCurrentImageIndex } = gallerySlice.actions;

export default gallerySlice.reducer;
