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
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.userData = state.userData.filter((item) => item.id !== id);
    },
  },
});

export const { fetchUsers, deleteUser } = userDataSlice.actions;
export default userDataSlice.reducer;
