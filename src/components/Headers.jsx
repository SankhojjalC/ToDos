import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Headers = () => {
  const isloggedIn = useSelector((state) => state.logedInReducer.isloggedIn);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="profile">React-Bootstrap</Navbar.Brand>
        {isloggedIn ? (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="profile">Profiles</Nav.Link>
                <Nav.Link href="add">Add Profiles</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : null}
      </Container>
    </Navbar>
  );
};
