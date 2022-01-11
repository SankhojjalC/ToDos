import { configureStore } from "@reduxjs/toolkit";

import logedInReducer from "./logedInReducer";

export const store = configureStore({
  reducer: {
    logedInReducer,
  },
});
