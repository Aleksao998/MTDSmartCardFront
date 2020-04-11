import React, { useState, useEffect } from "react";
import validator from "validator";
// reactstrap components
import { Button, Card, Form, Container, Row, Col } from "reactstrap";

// core components

function RegisterPage(props) {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    repassword: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const createNewProfile = (event) => {
    event.preventDefault();

    //Check if all fields are filed
    if (
      state.email === "" ||
      state.password === "" ||
      state.firstName === "" ||
      state.lastName === "" ||
      state.repassword === ""
    ) {
      setError("All field must be filed!");
      return;
    }
    //Check for valid email format
    if (validator.isEmail(state.email) !== true) {
      setError("Email is not valid format!");
      return;
    }

    //simple password validate
    state.password = state.password.trim();
    var mediumRegexPassword = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    );

    if (mediumRegexPassword.test(state.password) !== true) {
      setError(
        "Password must contain min 8 caracters, 1 lower letter, 1 upper letter, 1 number!"
      );
      return;
    }
    //Check if password match
    if (state.password !== state.repassword) {
      setError("Password does not match!");
      return;
    }

    //if check button is checked
    if (check !== true) {
      setError("Need to check checkbox!");
      return;
    }

    //Check if email already exist
    fetch("http://localhost:3003/profile/checkEmail?email=" + state.email)
      .then((res) => {
        console.log("asdadasdasd");
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Email already exists!");
        }

        return fetch("http://localhost:3003/auth/signup", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: props.id,
            email: state.email,
            password: state.password,
            firstName: state.firstName,
            lastName: state.lastName,
          }),
        });
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        props.useForceUpdate();
      })
      .catch((err) => {
        if (err.message === "Failed to fetch")
          err.message = "Techical problems with server, please trt later!";
        setError(err.message);
      });
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <div className="page-header" style={{}}>
        <div className="container registration">
          <div class="card-5">
            <h3 className="titleRegistration">Welcome</h3>
            <br />
            <Form className="register-form">
              {error ? <div> {error} </div> : null}
              <div class="row m-b-55-20">
                <div className="col-md-3">
                  <div class="form-name">Name</div>
                </div>

                <div className="col-md-9">
                  <div class="form-value">
                    <div class="row row-space">
                      <div class="col-md-6">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="firstName"
                            onChange={handleOnChange}
                          />
                          <label class="label--desc">first name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="lastName"
                            onChange={handleOnChange}
                          />
                          <label class="label--desc">last name</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row m-b-55-20">
                <div className="col-md-3">
                  <div class="form-name">Email</div>
                </div>
                <div className="col-md-9">
                  <div class="form-value">
                    <div class="input-group">
                      <input
                        class="input--style-5"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row m-b-55-20">
                <div className="col-md-3">
                  <div class="form-name">Password</div>
                </div>

                <div className="col-md-9">
                  <div class="form-value">
                    <div class="row row-space">
                      <div class="col-md-6">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                          />
                          <label class="label--desc">password</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="password"
                            name="repassword"
                            onChange={handleOnChange}
                          />
                          <label class="label--desc">repeat password</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div class="row m-b-55-20">
                <div className="col-3">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    class="agree-term"
                    onChange={handleCheck}
                  />
                </div>
                <div className="col-9">
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="/#" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
              </div>

              <div class="row m-b-10">
                <Button
                  block
                  className="form-submit"
                  color="danger"
                  onClick={createNewProfile}
                >
                  Create account
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
