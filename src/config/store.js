import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./slices/navigation-slice";

const store = configureStore({
  reducer: {
    navigationSlice,
  },
});

// Export the store
export default store;
