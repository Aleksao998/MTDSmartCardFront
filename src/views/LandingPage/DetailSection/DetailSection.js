import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import uputstvo1 from "../../../assets/img/landingPage/testEditPage.png";
import uputstvo3 from "../../../assets/img/landingPage/testUputtsvo3.jpg";
import uputstvo2 from "../../../assets/img/landingPage/testUputstvo2.jpg";
const DetailSection = (props) => (
  <div className="section text-center">
    <div className="container">
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">Share Your Contact Details With a TAP</h2>
          <h5 className="description"></h5>
          <br />
          <Button
            className="btn-round"
            color="primary"
            href="#pablo"
            onClick={() => {
              props.history.push("/product-page");
            }}
          >
            See Details
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md="4">
          <div className="info">
            <img src={uputstvo1} />
            <div className="description">
              <h4 className="info-title">Configurate profile</h4>
              <p className="description">
                You decide which information you would like to be displayed
                (email, mobile numbers, social networks, company infomration...)
              </p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="info">
            <img src={uputstvo2} />
            <div className="description">
              <h4 className="info-title">Touch & Connect</h4>
              <p>
                When wanting to exchange business cards, simply press onto the
                phone.Phones with Nfc enabled will open profile automaticaly,
                for other use camera to scan QR code
              </p>
              <Button
                className="btn-link"
                color="primary"
                href="#pablo"
                style={{ marginBottom: "60px" }}
              >
                Phones with Nfc Enabled
              </Button>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="info">
            <img src={uputstvo3} />
            <div className="description">
              <h4 className="info-title">View profile</h4>
              <p>
                Inside user proifle, you can view their data and downalod
                contact directly to your phone clicking on button Contact.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default withRouter(DetailSection);
