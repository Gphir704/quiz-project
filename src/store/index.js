import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./singup.slice";

export const store = configureStore({
  reducer: {
    signup: singupReducer,
  },
});
