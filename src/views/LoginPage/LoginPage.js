
import React, {useState} from "react";

// reactstrap components
import { Button, Card, Form, Container, Row, Col } from "reactstrap";



function LoginPage(props) {
  const [state, setState] = useState({
    email:"",
    password:"",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({...state,[name]: value });
  };

  

  

  

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <div>
  
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
                <h3 className="title mx-auto">Welcome Again</h3>
                
                <Form className="register-form">
                  
                  <div class="form-group">
                      <input type="email" class="form-input" name="email" id="email" onChange={handleOnChange}  placeholder="Your Email"/>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-input" name="password" id="password" onChange={handleOnChange}  placeholder="Password"/>
                      <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                  </div>
                  <Button block className="form-submit"  onClick={(event) => {props.login(event,state.email,state.password)}} color="danger">
                    Login
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6 style={{marginBottom:"0px"}}>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Modern Technology Development
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
