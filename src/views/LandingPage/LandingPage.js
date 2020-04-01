
import React from "react";



// core components

import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//Sections 
import DetailSection from "./DetailSection/DetailSection";
import CredentialSection from "./CreadentialsSection/CredentialSection";
import ContactSection from "./ContactSection/ContactSection";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <div>
      <LandingPageHeader />
      <div className="main">
        <DetailSection/>
        <CredentialSection/>
        <ContactSection/>
      </div>
        <DemoFooter />
      
    </div>
  );
}

export default LandingPage;
