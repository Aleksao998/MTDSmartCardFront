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



function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const profileUrl="/profile-page/"+props.userId;
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    
      setNavbarColor("");
    

  },[navbarColor]);
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

            {
              props.isAuth ?       
                          <NavItem>
                                <NavLink to={profileUrl} tag={Link}>
                                  Profile
                                </NavLink>
                          </NavItem>
                          :
                          <NavItem>
                            <NavLink to="/login-page" tag={Link}>
                              Login
                            </NavLink>
                          </NavItem>
            }
            {
              props.isAuth ?                         
                          <NavItem onClick={props.logout}>
                          <NavLink to="/" tag={Link}>
                          logout
                          </NavLink>
                          </NavItem>
                          :
                          null
            }
                          
            
            


            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
