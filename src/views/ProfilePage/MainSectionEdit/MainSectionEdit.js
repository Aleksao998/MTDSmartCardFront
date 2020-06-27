import React from "react";
import { Input, Label } from "reactstrap";
//modal
import ImageModal from "../imageModal/imageModal";
const MainSectionEdit = (props) => (
  <div>
    <div className="owner">
      <ImageModal
        setImageUrl={props.setImageUrl}
        id={props.id}
        modalIsOpen={props.modalIsOpen}
        afterOpenModal={props.afterOpenModal}
        closeModal={props.closeModal}
      />

      <div className="avatar">
        <button className="imageButton" onClick={() => props.openModal()}>
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src={props.imageUrl}
          />
        </button>
      </div>
      <p style={{ paddingBottom: "15px" }}> Click on image to change </p>
      <div className="name">
        <div className="row" style={{ marginBottom: "5px" }}>
          <div className="col-4" style={{ textAlign: "left" }}>
            <h5 className="title editTitle">
              <Label>Name </Label>
            </h5>
          </div>
          <div className="col-8" style={{ marginTop: "-4px" }}>
            <Input
              name="firstName"
              type="text"
              value={props.state.firstName}
              placeholder="First name"
              onChange={props.handleOnChange}
            ></Input>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "5px" }}>
          <div className="col-4" style={{ textAlign: "left" }}>
            <h5 className="title editTitle">
              <Label>Lastname </Label>
            </h5>
          </div>
          <div className="col-8" style={{ marginTop: "-4px" }}>
            <Input
              name="lastName"
              type="text"
              value={props.state.lastName}
              placeholder="Last name"
              onChange={props.handleOnChange}
            ></Input>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "5px" }}>
          <div className="col-4" style={{ textAlign: "left" }}>
            <h5 className="title editTitle">
              <Label>Company </Label>
            </h5>
          </div>
          <div className="col-8" style={{ marginTop: "-4px" }}>
            <Input
              name="companyName"
              type="text"
              value={props.state.companyName}
              placeholder="Company name"
              onChange={props.handleOnChange}
            ></Input>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "5px" }}>
          <div className="col-4" style={{ textAlign: "left" }}>
            <h5 className="title editTitle">
              <Label>JobTitle </Label>
            </h5>
          </div>
          <div className="col-8" style={{ marginTop: "-4px" }}>
            <Input
              name="jobTitle"
              type="text"
              value={props.state.jobTitle}
              placeholder="jobTitle"
              onChange={props.handleOnChange}
            ></Input>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainSectionEdit;
