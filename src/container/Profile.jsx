import Table from "react-bootstrap/Table";
import { FaMale, FaFemale, FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export const Profile = () => {
  return (
    <>
      <Table striped bordered hover>
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>@mdo</td>
            <td>{true ? <FaMale /> : <FaFemale />}</td>
            <td>@mdo</td>
            <td>
              <FaUserEdit />
            </td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>
              <FaUserEdit />
            </td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>@twitter</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>
              <FaUserEdit />
            </td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
