import { configureStore } from "@reduxjs/toolkit";
import numbersSlice from "./features/numbers/numbersSlice";

export const store = configureStore({
  reducer: {
    numbers: numbersSlice,
  },
});
