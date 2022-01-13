import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const userDataSlice = createSlice({
  name: "usersReducers",
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      state.userData = [...state.userData, ...action.payload];
    },
  },
});

export const { fetchUsers } = userDataSlice.actions;
export default userDataSlice.reducer;
