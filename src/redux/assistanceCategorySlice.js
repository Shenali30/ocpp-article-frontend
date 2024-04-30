import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastSearchPrams: {},
};

export const assistanceCategorySlice = createSlice({
  name: 'assistanceCategoryData',
  initialState,
  reducers: {
    saveLastSearchPrams: (state, action) => {
      state.lastSearchPrams = action.payload;
    },
  },
});

export const { saveLastSearchPrams } = assistanceCategorySlice.actions;

export const selectLastSearchPrams = (state) => state.assistanceCategoryData.lastSearchPrams;

export default assistanceCategorySlice.reducer;
