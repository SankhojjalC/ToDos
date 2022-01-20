import { useEffect } from "react";

import { TableComponent } from "../components/Table";

import userList from "../utils/Data/user.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersReducers";

export const Profile = () => {
  const dispatch = useDispatch();
  const userDataList = useSelector((state) => state.usersReducers.userData);

  useEffect(() => {
    dispatch(fetchUsers(userList.users));
  }, [dispatch]);

  console.log("USERS Profile------>", userDataList);

  return <TableComponent userDataList={userDataList} />;
};
