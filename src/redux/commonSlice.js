import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
};

export const commonSlice = createSlice({
  name: 'commonData',
  initialState,
  reducers: {
    saveIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { saveIsDrawerOpen } = commonSlice.actions;

export const selectIsDrawerOpen = (state) => state.commonData.isDrawerOpen;

export default commonSlice.reducer;
