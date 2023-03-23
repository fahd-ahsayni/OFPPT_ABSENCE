import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

// Define the stagiaire slice with a single reducer for updating the modal detail
const stagiaireSlice = createSlice({
  name: "stagiaireSlice",
  initialState,
  reducers: {
    setModalDetail: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

// Export the action creator for updating the modal detail
export const { setModalDetail } = stagiaireSlice.actions;

// Define a selector to compute a derived value from the state (optional)
export const selectIsOpen = state => state.isOpen

// Export the reducer for the stagiaire slice
export default stagiaireSlice.reducer;
