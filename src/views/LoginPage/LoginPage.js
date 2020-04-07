
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
          
        }}
      >
        <div className="container login">
          <div class="card-5">
            <h3 className="titleRegistration">Welcome again</h3>
            <br/>
            <Form className="register-form">
            {
              props.error ? 
                    <div> {props.error} </div>
                    :
                    null
            }
              <div class="row m-b-55-20">
                  <div className="col-md-3" >
                    <div class="form-name">Email</div>
                  </div>
                  <div className="col-md-9">
                    <div class="form-value">
                        <div class="input-group">
                        <input type="email" class="input--style-5" name="email" id="email" onChange={handleOnChange}  placeholder="Your Email"/>
                        </div>
                    </div>
                  </div>
              </div>   

              <div class="row m-b-55-20">
              <div className="col-md-3" >
                <div class="form-name">Password</div>
              </div>
              <div className="col-md-9">
                <div class="form-value">
                    <div class="input-group">
                    <input type="password" class="input--style-5" name="password" id="password" onChange={handleOnChange}  placeholder="Password"/>
                   
                    </div>
                </div>
              </div>
          </div>  

            <div class="row m-b-10">
            <Button block className="form-submit"  onClick={(event) => {props.login(event,state.email,state.password)}} color="danger">
            Login
          </Button>
            </div>
            </Form>
            
          </div>  
          
        </div>
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
