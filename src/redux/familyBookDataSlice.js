import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  familyBookData: {},
  lastSearchPrams: {},
  dropdownData: {}
};

export const familyBookSlice = createSlice({
  name: 'familyBookManagement',
  initialState,
  reducers: {
    saveFamilyBookData: (state, action) => {
      state.familyBookData = action.payload;
    },
    saveLastSearchPrams: (state, action) => {
      state.lastSearchPrams = action.payload;
    },
    saveDropdownData: (state, action) => {
      state.dropdownData = action.payload;
    },
  },
});

export const { saveFamilyBookData, saveLastSearchPrams, saveDropdownData } = familyBookSlice.actions;

export const selectFamilyBookData = (state) => state.familyBookManagement.familyBookData;
export const selectLastSearchPrams = (state) => state.familyBookManagement.lastSearchPrams;
export const selectDropdownData = (state) => state.familyBookManagement.dropdownData;

export default familyBookSlice.reducer;
