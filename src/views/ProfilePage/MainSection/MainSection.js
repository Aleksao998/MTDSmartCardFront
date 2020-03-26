import React from "react";
// reactstrap components
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
  } from "reactstrap";

const MainSection = () => (
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
                    Jane Faker 
                </h4>
                <h6 className="description">- Company name, job title -</h6>
            </div>
        </div>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
            <Button className="btn-round" color="default" outline>
                <i className="fa fa-save" /> Save Contact
            </Button>
            
            </Col>
        </Row>
    </div>
);

export default MainSection;
