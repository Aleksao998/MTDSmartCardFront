import React from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";



function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    
      setNavbarColor("");
    

  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="200"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="Coded by Creative Tim"
            tag={Link}
          >
            MDT Smart Card
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

            <NavItem>
              <NavLink to="/" tag={Link}>
                 Home Page
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/product-page" tag={Link}>
                 Product Page
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/profile-page/5e7f53c3f60905250856fde3" tag={Link}>
                 Profile page
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/login-page" tag={Link}>
                 Login
              </NavLink>
            </NavItem>


            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
