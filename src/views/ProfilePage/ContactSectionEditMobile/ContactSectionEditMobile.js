import React from "react";
import { Input, Label, FormGroup, Button } from "reactstrap";
// reactstrap components

function ContactEditSection(props) {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);

  return (
    <div className="service_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col" style={{ textAlign: "center" }}>
            <Button onClick={props.editProfile} color="success">
              Sacuvaj
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-mobile"></i>
                    </div>
                  </td>
                  <td className="tablePadding">
                    <div>
                      <Input
                        name="mobileNumber"
                        type="txt"
                        value={props.state.mobileNumber}
                        onChange={props.handleOnChange}
                      ></Input>
                    </div>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.mobilePhone}
                          onClick={props.handleOnChangeCheckBox}
                          name="mobilePhone"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-phone"></i>
                    </div>
                  </td>

                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="homeNumber"
                      type="tel"
                      value={props.state.homeNumber}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.homePhone}
                          onClick={props.handleOnChangeCheckBox}
                          name="homePhone"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="email"
                      type="text"
                      value={props.state.email}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.email}
                          onClick={props.handleOnChangeCheckBox}
                          name="email"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="workEmail"
                      type="text"
                      value={props.state.workEmail}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.workEmail}
                          onClick={props.handleOnChangeCheckBox}
                          name="workEmail"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="twitter"
                      type="text"
                      value={props.state.twitter[0]}
                      onChange={props.handleOnChangeSocial}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.twitter}
                          onClick={props.handleOnChangeCheckBox}
                          name="twitter"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="instagram"
                      type="text"
                      value={props.state.instagram[0]}
                      onChange={props.handleOnChangeSocial}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.instagram}
                          onClick={props.handleOnChangeCheckBox}
                          name="instagram"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="linkedin"
                      type="text"
                      value={props.state.linkedin[1]}
                      onChange={props.handleOnChangeSocial}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.linkedIn}
                          onClick={props.handleOnChangeCheckBox}
                          name="linkedIn"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "3!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="facebook"
                      type="text"
                      value={props.state.facebook[1]}
                      onChange={props.handleOnChangeSocial}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.facebook}
                          onClick={props.handleOnChangeCheckBox}
                          name="facebook"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-snapchat-ghost"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="snapchat"
                      type="text"
                      value={props.state.snapchat[0]}
                      onChange={props.handleOnChangeSocial}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.snapchat}
                          onClick={props.handleOnChangeCheckBox}
                          name="snapchat"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-youtube"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="youtube"
                      type="text"
                      value={props.state.youtube[1]}
                      onChange={props.handleOnChangeSocial}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.youtube}
                          onClick={props.handleOnChangeCheckBox}
                          name="youtube"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="whatsapp"
                      type="tel"
                      value={props.state.whatsapp}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.whatsapp}
                          onClick={props.handleOnChangeCheckBox}
                          name="whatsapp"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fab fa-viber "></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="viber"
                      type="tel"
                      value={props.state.viber}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.viber}
                          onClick={props.handleOnChangeCheckBox}
                          name="viber"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-home"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="address"
                      type="text"
                      value={props.state.address}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.adress}
                          onClick={props.handleOnChangeCheckBox}
                          name="adress"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>

                <tr className="contactRow">
                  <td className="tablePadding">
                    <div className="social-icons icon-circle list-unstyled list-inline">
                      <i className="fas fa-birthday-cake"></i>
                    </div>
                  </td>
                  <td
                    className="tablePadding"
                    style={{
                      columnSpan: "2!important",
                      textAlign: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    <Input
                      name="birthday"
                      type="text"
                      value={props.state.birthday}
                      onChange={props.handleOnChange}
                    ></Input>
                  </td>
                  <td className="tablePadding">
                    <FormGroup check style={{ marginTop: "-25px" }}>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={props.showData.birthday}
                          onClick={props.handleOnChangeCheckBox}
                          name="birthday"
                        />
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactEditSection;
