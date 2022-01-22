import React from "react";
import { useHistory } from "react-router-dom";

import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/usersReducers";

export const TableBody = ({ userDataList }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditData = (data) => {
    if (hasRights) {
      const { id } = data;
      history.push(`/edit/${id}`);
    }
  };
  const hasRights = useSelector(
    (state) => state.logedInReducer?.loggedInUser?.hasRights
  );

  const handleDeleteData = (data) => {
    if (hasRights) {
      dispatch(deleteUser(data));
    }
  };

  return userDataList.map((item) => (
    <React.Fragment key={item.id}>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.Age}</td>
        <td>
          {item.Gender === "Male" ? <BsGenderMale /> : <BsGenderFemale />}
        </td>
        <td>{item.isMarried ? "Y" : "N"}</td>
        <td onClick={() => handleEditData(item)}>
          <FaUserEdit />
        </td>
        <td onClick={() => handleDeleteData(item)}>
          <AiFillDelete />
        </td>
      </tr>
    </React.Fragment>
  ));
};
