import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./features/slider/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
  },
});
