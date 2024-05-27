import { configureStore } from "@reduxjs/toolkit";
import grocerySlice from "./features/grocery/grocerySlice";

const store = configureStore({
  reducer: {
    grocery: grocerySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
