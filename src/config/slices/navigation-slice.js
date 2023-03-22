import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};
// Define the navigation slice with a single reducer for updating the selected link
const navigationSlice = createSlice({
  name: "navigationSlice",
  initialState,
  reducers: {
    selectedLink: (state, action) => (state.selectedLink = action.payload),
  },
});

// Export the action creator for updating the selected link
export const { selectedLink } = navigationSlice.actions;

// Export the reducer for the navigation slice
export default navigationSlice.reducer;
