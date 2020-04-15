import React from "react";
// reactstrap components

const ContactSection = (props) => (
  <div class="service_area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-md-4">
          <div
            class="single_service text-center wow fadeInLeft"
            data-wow-duration="1.2s"
            data-wow-delay=".4s"
          >
            <div className="center">
              <h3 className="contactTitle"> Contact info</h3>
            </div>
            <table style={{ width: "100%" }}>
              <tbody>
                {props.state.mobileNumber ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fas fa-mobile"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Mobile phone:</p>
                        <a
                          href="tel:0621204030"
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          +381{props.state.mobileNumber}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.homeNumber ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fas fa-phone"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Home phone:</p>
                        <a
                          href="tel:+381113808624"
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          +381{props.state.homeNumber}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.email ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fas fa-envelope"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Email</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.email}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.workEmail ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fas fa-envelope-open"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Work Email</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.workEmail}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-xl-4 col-md-4">
          <div
            class="single_service text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{ height: "550px" }}
          >
            <div className="center">
              <h3 className="contactTitle">Social Network</h3>
            </div>
            <table style={{ width: "100%" }}>
              <tbody>
                {props.state.twitter ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-twitter"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Twitter:</p>
                        <a
                          href=""
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.twitter}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.linkedin ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-linkedin-in"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">LinkedIn:</p>
                        <a
                          href="tel:+381113808624"
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.linkedin}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}
                {props.state.instagram ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-instagram"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Instagram:</p>
                        <a
                          href="tel:+381113808624"
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.instagram}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.facebook ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-facebook-f"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "3!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Facebook</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.facebook}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.snapchat ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-snapchat-ghost"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Snapchat</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.snapchat}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.youtube ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-youtube"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Youtube</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.youtube}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-xl-4 col-md-4">
          <div
            class="single_service text-center wow fadeInRight"
            data-wow-duration="1.2s"
            data-wow-delay=".4s"
          >
            <div className="center">
              <h3 className="contactTitle">
                Direct messages <br></br> & <br></br> personal info
              </h3>
            </div>
            <table style={{ width: "100%" }}>
              <tbody>
                {props.state.whatsapp ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-whatsapp"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">WhatsApp:</p>
                        <a
                          href="tel:0621204030"
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.whatsapp}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.viber ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fab fa-viber "></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Viber:</p>
                        <a
                          href="tel:+381113808624"
                          style={{ fontWeight: "500", color: "black" }}
                        >
                          {props.state.viber}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}
                {props.state.address ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fas fa-home"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">Adress:</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.address}
                        </a>
                      </td>
                    </tr>
                    <br></br>
                  </>
                ) : null}

                {props.state.birthday ? (
                  <>
                    <tr className="contactRow">
                      <td>
                        <div className="social-icons icon-circle list-unstyled list-inline">
                          <i class="fas fa-birthday-cake"></i>
                        </div>
                      </td>
                      <td
                        style={{
                          columnSpan: "2!important",
                          textAlign: "left",
                          paddingLeft: "5px",
                        }}
                      >
                        <p className="contactIconTitle">BirthDay</p>
                        <a style={{ fontWeight: "500", color: "black" }}>
                          {props.state.birthday}
                        </a>
                      </td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
