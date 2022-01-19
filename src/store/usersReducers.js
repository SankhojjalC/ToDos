import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDataSet: false,
  userData: [],
};

export const userDataSlice = createSlice({
  name: "usersReducers",
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      if (!state.isDataSet) {
        state.userData = [...state.userData, ...action.payload];
        state.isDataSet = true;
      }
    },
  },
});

export const { fetchUsers } = userDataSlice.actions;
export default userDataSlice.reducer;
