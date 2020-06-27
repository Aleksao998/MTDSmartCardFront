import React from "react";

//Sections
import FeatureSection from "./FeatureSection/FeatureSection";
import VideoSection from "./VideoSection/VideoSection";
import TitleSection from "./TitleSection/TitleSection";
import DetailSection from "./DetailSection/DetailSection";
import UniqueSection from "./UniqueSections/UniqueSections";
function ProductPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
    document.body.classList.add("profile-page");
  }, [props.reload]);

  return (
    <div>
      <div id="main-wrapper">
        <TitleSection />
        <FeatureSection />
        <DetailSection />
        <VideoSection />
        <UniqueSection />
      </div>
    </div>
  );
}

export default ProductPage;
