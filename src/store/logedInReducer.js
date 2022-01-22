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
    logOut: (state) => {
      state.isloggedIn = initialState.isloggedIn;
      state.loggedInUser = initialState.loggedInUser;
    },
  },
});

export const { logIn, logOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
