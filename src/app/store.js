import { configureStore } from "@reduxjs/toolkit";
import newReducer from "./../feature/new.slice";

export default configureStore({
  reducer: newReducer,
});
