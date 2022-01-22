import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Headers = () => {
  const isloggedIn = useSelector((state) => state.logedInReducer.isloggedIn);
  const userDataList = useSelector(
    (state) => state.logedInReducer.loggedInUser
  );

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
                <Nav.Link>
                  <Link to="/profile">Profiles</Link>
                </Nav.Link>
                {userDataList?.hasRights && (
                  <Nav.Link>
                    <Link to="/add">Add Profiles</Link>
                  </Nav.Link>
                )}

                <Nav.Link>
                  <Link to="/">Logout</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : null}
      </Container>
    </Navbar>
  );
};
