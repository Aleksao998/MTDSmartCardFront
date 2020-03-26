
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections
import MainSection from "./MainSection/MainSection"
import ContactSection from "./ContactSection/ContactSection"
function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Navbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <div className="container noPaddingProfilePage">
          <MainSection/>
          <ContactSection/>
        
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
