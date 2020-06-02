import React from "react";
import { withRouter } from "react-router-dom";
// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/image.JPG") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div
            className="motto text-center"
            style={{ color: "black", marginTop: "-190px" }}
          >
            <h1 style={{ fontWeight: "bold" }}>Smart Card</h1>
            <h3></h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round btn-info mr-1"
              color="primary"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>

            <Button
              onClick={() => {
                props.history.push("/checkout");
              }}
              className="btn-round btn-info mr-1"
              color="primary"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Buy Product
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default withRouter(LandingPageHeader);
