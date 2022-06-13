import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
function NavBar({ loggedIn, checkIfLoggedIn }) {
  return (
    <div>
      <Nav
        pills
        style={{
          background: "teal",
          padding: "10px",
          color: "white",
          fontSize: "1.5rem"
        }}
      >
        <NavItem>
          <NavLink active={true}>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={false}>
            <Link to="/about" style={{ color: "white" }}>
              About
            </Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink>
            {!loggedIn ? (
              <Link to="/login" style={{ color: "white" }}>
                Log in
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => checkIfLoggedIn(false)}
                style={{ color: "white" }}
              >
                Logout
              </Link>
            )}
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
