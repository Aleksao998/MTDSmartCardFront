
import React, { useState,useEffect } from 'react';

// reactstrap components
import { Button, Card, Form, Container, Row, Col } from "reactstrap";

// core components


function RegisterPage(props) {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [state, setState] = useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    repassword:"",
  });
 
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({...state,[name]: value });
  };

  const handleCheck = () =>{
    setCheck(!check);
  }
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const createNewProfile = (event) =>{
    event.preventDefault();
    console.log(state.email,state.firstName,state.lastName,state.password,state.repassword, check);
    //Check if email already exist
    fetch("http://localhost:3003/profile/checkEmail?email="+state.email,)
    .then(res => {
      console.log("status: "+res.status);
      if (res.status !== 200) {
        console.log("Email already exist!");
        setError("Email already exist!");
        return;
      }

        //Check if all fields are filed
        if(state.email==="" || state.password==="" || state.firstName==="" || state.lastName==="" || state.repassword===""){
    
        console.log("All field must be filed!");
        setError("All field must be filed!");
        return;
      }

      
      //Check if password match
      if(state.password !== state.repassword){
        setError("Password does not match!");
        return;
      }

        //Check if password match
      if(state.password !== state.repassword){
        setError("Password does not match!");
        return;
      }

      //if check button is checked
      if(check !== true){
        setError("Need to check checkbox!");
        return;
      }

      return fetch("http://localhost:3003/auth/signup",{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:props.id,
          email: state.email,
          password: state.password,
          firstName:state.firstName,
          lastName:state.lastName,

          })
        })
     })
    .then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Creating or editing a post failed!');
      }
      props.useForceUpdate();
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
                  {
                    error ? 
                          <div> {error} </div>
                          :
                          null
                  }
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
                      <input type="password" class="form-input" name="repassword" id="repassword" onChange={handleOnChange}  placeholder="Repeat your password"/>
                  </div>
                  <div class="form-group">
                      <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" onChange={handleCheck} />
                      <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="/#" class="term-service">Terms of service</a></label>
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
