import { configureStore } from "@reduxjs/toolkit";

import logedInReducer from "./logedInReducer";
import usersReducers from "./usersReducers";

export const store = configureStore({
  reducer: {
    logedInReducer,
    usersReducers,
  },
});
