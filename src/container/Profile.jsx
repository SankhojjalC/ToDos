import { useEffect } from "react";

import { TableComponent } from "../components/Table";
// import Table from "react-bootstrap/Table";
// import { FaMale, FaFemale, FaUserEdit } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";

import userList from "../utils/Data/user.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/usersReducers";

export const Profile = () => {
  const dispatch = useDispatch();
  const userDataList = useSelector((state) => state.usersReducers.userData);

  useEffect(() => {
    dispatch(fetchUsers(userList.users));
  }, []);

  return <TableComponent userDataList={userDataList} />;
};
