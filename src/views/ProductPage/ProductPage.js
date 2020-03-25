import React from "react";
import Navbar from "components/Navbars/NavbarBlack.js";


//Sections
import FeatureSection from "./FeatureSection/FeatureSection";
import VideoSection from "./VideoSection/VideoSection";
import PricingSection from "./PricingSection/PricingSection";
import TitleSection from "./TitleSection/TitleSection";

function ProductPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("landing-page");
      return function cleanup() {
        document.body.classList.remove("landing-page");
      };
    });
  return (
    <div>
        <Navbar />
        
        <div id='main-wrapper' >  
            <TitleSection/>
            <FeatureSection/>
            <VideoSection/>
            <PricingSection/>	
        </div>
    </div>
  );
}

export default ProductPage;
