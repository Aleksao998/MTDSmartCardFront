
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/Navbar.js";

function RegisterPage(props) {
  const [state, setState] = useState({
    email:"",
    password:"",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({...state,[name]: value });
  };

  const createNewProfile = (event) =>{
    event.preventDefault();
    console.log(state.email,state.password);
    const phoneURL="http://172.20.10.4:3003/profile/createProfile";
    const desctopeURL="http://localhost:3003/profile/createProfile";
    fetch(phoneURL,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password
      })
    })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Creating or editing a post failed!');
      }
      //redirect
      console.log("redirect");
    })
    .catch(err => {
      console.log(err);
    });

  }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <Navbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                
                <Form className="register-form">

                  <div class="form-group">
                    <input type="text" class="form-input" name="firstName" id="firstName" onChange={handleOnChange}  placeholder="Your firstName"/>
                    
                  </div>

                  <div class="form-group">
                   <input type="text" class="form-input" name="lastName" id="lastName" onChange={handleOnChange}  placeholder="Your lastName"/>
                  </div>

                  <div class="form-group">
                      <input type="email" class="form-input" name="email" id="email" onChange={handleOnChange}  placeholder="Your Email"/>
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-input" name="password" id="password" onChange={handleOnChange}  placeholder="Password"/>
                      <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                  </div>
                  <div class="form-group">
                      <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                      <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                  </div>
                  <Button block className="form-submit" color="danger"   onClick={createNewProfile}>
                    Create account
                  </Button>
                </Form>
                
              </Card>
            </Col>
          </Row>
        </Container>
        <br/>
        <div className="footer register-footer text-center ">
          <h6 style={{marginBottom:"0px"}}>
            © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Modern Technology Development
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
