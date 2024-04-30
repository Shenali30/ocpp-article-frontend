import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import familyBookSlice  from "./familyBookDataSlice";
import commonSlice from "./commonSlice";
import userSlice from "./userSlice";
import assistanceCategorySlice from "./assistanceCategorySlice";
import dashboardSlice from "./dashboardSlice";

export default configureStore({
    reducer: {
      familyBookManagement: familyBookSlice,
      commonData: commonSlice,
      userAuthDetails: userSlice,
      assistanceCategoryData: assistanceCategorySlice,
      dashboardData: dashboardSlice
    },
    middleware: [thunk],
  });