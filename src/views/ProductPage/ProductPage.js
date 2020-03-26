import React from "react";
import Navbar from "components/Navbars/NavbarBlack.js";


//Sections
import FeatureSection from "./FeatureSection/FeatureSection";
import VideoSection from "./VideoSection/VideoSection";
import PricingSection from "./PricingSection/PricingSection";
import TitleSection from "./TitleSection/TitleSection";
import DetailSection from "./DetailSection/DetailSection";
import UniqueSection from "./UniqueSections/UniqueSections";
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
            <DetailSection/>
            <VideoSection/>
            <UniqueSection/>
        </div>
    </div>
  );
}

export default ProductPage;
