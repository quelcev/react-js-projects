import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./features/navbar/navbarSlice";
import scrollSlice from "./features/scroll/scrollSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    scroll: scrollSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
