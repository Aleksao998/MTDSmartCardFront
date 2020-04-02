import React from "react";
// reactstrap components
import {
    Button,
    Row,
    Col
  } from "reactstrap";

const MainSectionEdit = (props) => (
 
    <div>
        <div className="owner">
            <div className="avatar">
                <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/joe-gardner-2.jpg")}
                />
            </div>
            <div className="name">
                <h4 className="title">
                <input name="firstName" type="text" value={props.state.firstName}  placeholder="First name" onChange={props.handleOnChange}></input> 
                <input name="lastName" type="text" value={props.state.lastName}    placeholder="Last name" onChange={props.handleOnChange}></input>
                </h4>
                <h6 className="description">
                <input name="companyName" type="text" value={props.state.companyName}  placeholder="Company name"  onChange={props.handleOnChange}></input> 
                <input name="jobTitle" type="text" value={props.state.jobTitle}  placeholder="jobTitle"  onChange={props.handleOnChange}></input>
                </h6>
            </div>
        </div>

    </div>
);

export default MainSectionEdit;
