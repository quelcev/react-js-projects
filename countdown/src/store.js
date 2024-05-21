import { configureStore } from "@reduxjs/toolkit";
import countdownSlice from "./features/countdown/countdownSlice";

const store = configureStore({
  reducer: {
    countdown: countdownSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
