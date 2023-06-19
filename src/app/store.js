import { configureStore } from "@reduxjs/toolkit";
import assignReducer from "../features/assignSlice";

export default configureStore({
  reducer: {
    assign: assignReducer,
  },
});
