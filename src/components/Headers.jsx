import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../store/logedInReducer";
import { clearUserDataOnLogout } from "../store/usersReducers";

export const Headers = () => {
  const dispatch = useDispatch();
  const localStorageLoggedInUserObj = JSON.parse(
    localStorage.getItem("loginUserDetails")
  );
  const isloggedIn =
    useSelector((state) => state.logedInReducer.isloggedIn) ||
    localStorage.getItem("loginUserDetails");
  const userDataList = useSelector(
    (state) => state.logedInReducer.loggedInUser
  );

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(clearUserDataOnLogout());
    localStorage.clear();
  };

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
                {(userDataList?.hasRights ||
                  localStorageLoggedInUserObj?.hasRights) && (
                  <Nav.Link>
                    <Link to="/add">Add Profiles</Link>
                  </Nav.Link>
                )}

                <Nav.Link>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : null}
      </Container>
    </Navbar>
  );
};
