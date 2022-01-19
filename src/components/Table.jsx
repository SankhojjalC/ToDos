import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

import Table from "react-bootstrap/Table";

export const TableComponent = ({ userDataList }) => {
  return (
    <>
      <Table striped bordered hover>
        <TableHeader />
        <tbody>
          <TableBody userDataList={userDataList} />
        </tbody>
      </Table>
    </>
  );
};
