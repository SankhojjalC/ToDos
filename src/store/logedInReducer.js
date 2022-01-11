import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedIn: false,
  user: {},
};

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isloggedIn = true;
      state.user = action.user;
    },
  },
});

export const { logIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
