import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadedGraphData: null
};

export const dashboardSlice = createSlice({
  name: 'dashboardData',
  initialState,
  reducers: {
    saveGraphData: (state, action) => {
      state.loadedGraphData = action.payload;
    },
  },
});

export const { saveGraphData } = dashboardSlice.actions;

export const selectLoadedGraphData = (state) => state.dashboardData.loadedGraphData;

export default dashboardSlice.reducer;
