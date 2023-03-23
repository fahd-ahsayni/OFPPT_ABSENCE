import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "./slices/stagiaireSlice";

const store = configureStore({
    reducer: {
      stagiaire: stagiaireReducer,
  },
});

// Export the store
export default store;
