import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
// nodejs library that concatenates strings
import classnames from "classnames";
import { Button } from "reactstrap";

// reactstrap components
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
//Modal Setting
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minheight: "450px",
    transform: "translate(-50%, -50%)",
  },
};
function ExamplesNavbar(props) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const profileUrl = "/profile-page/" + props.userId;
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    if (navbarCollapse) {
      console.log("usao");
      setNavbarCollapse(!navbarCollapse);
    }
  }, [props.pageChange]);

  const deleteUser = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://ec2-35-158-214-30.eu-central-1.compute.amazonaws.com:3001/profile/deleteUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: props.userId,
        }),
      }
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Creating or editing a post failed!");
        }
        console.log("usao");
        props.history.push("/");
        props.logout();
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {};

  const toggle = () => setDropdownOpen(!dropdownOpen);
  React.useEffect(() => {
    setNavbarColor("");
  }, [navbarColor]);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="modalImageTitle">Are you sure ?</p>
        <div className="modalButton">
          <Button
            style={{ marginRight: "5px", width: "80px" }}
            className="btn-round"
            color="danger"
            onClick={closeModal}
          >
            close
          </Button>
          <Button
            style={{ width: "80px" }}
            className="btn-round"
            color="success"
            onClick={deleteUser}
          >
            Save
          </Button>
        </div>
      </Modal>

      <Navbar
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="200"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              title="Coded by Creative Tim"
              tag={Link}
            >
              MDT Smart Card
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
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

              {props.isAuth ? (
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle nav caret>
                    Profile
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        props.setEditProfileFromMenu(0);
                      }}
                      tag={Link}
                      to={profileUrl}
                    >
                      My profile
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        props.setEditProfileFromMenu(1);
                      }}
                      tag={Link}
                      to={profileUrl + "?edit=true"}
                    >
                      Setting
                    </DropdownItem>
                    <DropdownItem onClick={openModal}>
                      Delete account
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={props.logout} tag={Link} to="/">
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavItem>
                  <NavLink to="/login-page" tag={Link}>
                    Login
                  </NavLink>
                </NavItem>
              )}
              {props.isAuth ? (
                <NavItem onClick={props.logout}>
                  <NavLink to="/" tag={Link}>
                    logout
                  </NavLink>
                </NavItem>
              ) : null}

              {props.isAuth ? null : (
                <NavItem onClick={props.logout}>
                  <NavLink to="/checkout" tag={Link}>
                    Buy card
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ExamplesNavbar;
