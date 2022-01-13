import Table from "react-bootstrap/Table";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import React from "react";

const TableHeader = () => (
  <>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Is Married</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
    </thead>
  </>
);

const TableBody = ({ userDataList }) =>
  userDataList.map((item) => (
    <React.Fragment key={item.id}>
      <tbody>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.Age}</td>
          <td>
            {item.Gender === "Male" ? <BsGenderMale /> : <BsGenderFemale />}
          </td>
          <td>{item.isMarried ? "Y" : "N"}</td>
          <td>
            <FaUserEdit />
          </td>
          <td>
            <AiFillDelete />
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  ));

export const TableComponent = ({ userDataList }) => {
  return (
    <>
      <Table striped bordered hover>
        <TableHeader />
        <TableBody userDataList={userDataList} />
      </Table>
    </>
  );
};
