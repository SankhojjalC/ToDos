import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedIn: false,
  loggedInUser: {},
};

export const loggedInSlice = createSlice({
  name: "logedInReducer",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isloggedIn = true;
      state.loggedInUser = { ...action.payload };
    },
  },
});

export const { logIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
