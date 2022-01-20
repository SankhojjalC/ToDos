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
      state.userData = [...state.userData, action.payload];
    },
    editUser: (state, action) => {
      console.log("EDIT Reducer----->", action.payload);
      const { id } = action.payload;
      const index = state.userData.findIndex((user) => user.id === id);
      state.userData.splice(index, 1, action.payload);
    },
  },
});

export const { fetchUsers, deleteUser, addUsers, editUser } =
  userDataSlice.actions;
export default userDataSlice.reducer;
