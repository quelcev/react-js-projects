import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./features/gallery/gallerySlice";

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});
