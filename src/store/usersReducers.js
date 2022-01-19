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
    addUsers: (state, action) => {
      console.log("INSIDE reducers", action.payload);
      console.log("DONE WITH reducer", action.payload);
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { fetchUsers, deleteUser, addUsers } = userDataSlice.actions;
export default userDataSlice.reducer;
