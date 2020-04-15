import React from "react";
// reactstrap components
import { Button, Row, Col } from "reactstrap";
//modal
import ImageModal from "../imageModal/imageModal";
const MainSectionEdit = (props) => (
  <div>
    <div className="owner">
      <ImageModal
        modalIsOpen={props.modalIsOpen}
        afterOpenModal={props.afterOpenModal}
        closeModal={props.closeModal}
      />
      <div className="avatar">
        <button className="imageButton" onClick={() => props.openModal()}>
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src={require("assets/img/faces/joe-gardner-2.jpg")}
          />
        </button>
      </div>
      <div className="name">
        <h4 className="title">
          <input
            name="firstName"
            type="text"
            value={props.state.firstName}
            placeholder="First name"
            onChange={props.handleOnChange}
          ></input>
          <input
            name="lastName"
            type="text"
            value={props.state.lastName}
            placeholder="Last name"
            onChange={props.handleOnChange}
          ></input>
        </h4>
        <h6 className="description">
          <input
            name="companyName"
            type="text"
            value={props.state.companyName}
            placeholder="Company name"
            onChange={props.handleOnChange}
          ></input>
          <input
            name="jobTitle"
            type="text"
            value={props.state.jobTitle}
            placeholder="jobTitle"
            onChange={props.handleOnChange}
          ></input>
        </h6>
      </div>
    </div>
  </div>
);

export default MainSectionEdit;
