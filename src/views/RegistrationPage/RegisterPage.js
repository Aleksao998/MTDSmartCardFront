import React, { useState } from "react";
import validator from "validator";
import { withRouter } from "react-router-dom";
// reactstrap components
import { Button, Form } from "reactstrap";

// core components

function RegisterPage(props) {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    repassword: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheck = () => {
    setCheck(!check);
  };
  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
  };
  const createNewProfile = (event) => {
    event.preventDefault();
    //Check if all fields are filed
    if (
      state.email === "" ||
      state.password === "" ||
      state.firstName === "" ||
      state.lastName === "" ||
      state.companyName === "" ||
      state.jobTitle === "" ||
      state.repassword === "" ||
      selectedOption === ""
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
    fetch(
      "https://cors-anywhere.herokuapp.com/http://ec2-35-158-214-30.eu-central-1.compute.amazonaws.com:3001/profile/checkEmail?email=" +
        state.email
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Email already exists!");
        }

        return fetch("http://localhost:3001/auth/signup", {
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
            companyName: state.companyName,
            jobTitle: state.jobTitle,
            gender: selectedOption,
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
        props.history.push("/fill-data/" + resData.id);
      })
      .catch((err) => {
        if (err.message === "Failed to fetch")
          err.message = "Techical problems with server, please trt later!";
        setError(err.message);
      });
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);
  return (
    <>
      <div className="page-headerReg paddingReg" style={{}}>
        <div className="container registration">
          <div className="card-5">
            <h3 className="titleRegistration">Welcome</h3>
            <br />
            <Form className="register-form">
              {error ? <div> {error} </div> : null}
              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Personal info</div>
                </div>

                <div className="col-md-9">
                  <div className="form-value">
                    <div className="row row-space">
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="text"
                            name="firstName"
                            onChange={handleOnChange}
                          />
                          <label className="label--desc">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="text"
                            name="lastName"
                            onChange={handleOnChange}
                          />
                          <label className="label--desc">Last Name</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Personal info</div>
                </div>

                <div className="col-md-9">
                  <div className="form-value">
                    <div className="row row-space">
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="text"
                            name="companyName"
                            onChange={handleOnChange}
                          />
                          <label className="label--desc">Company Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="text"
                            name="jobTitle"
                            onChange={handleOnChange}
                          />
                          <label className="label--desc">Job Title</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Gender</div>
                </div>
                <div className="col-md-9">
                  <div className="form-value">
                    <div className="input-group">
                      <label className="containerCheck">
                        <input
                          type="radio"
                          value="female"
                          checked={selectedOption === "female"}
                          onChange={handleOptionChange}
                        />
                        Female
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerCheck">
                        <input
                          type="radio"
                          value="male"
                          checked={selectedOption === "male"}
                          onChange={handleOptionChange}
                        />
                        Male
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Email</div>
                </div>
                <div className="col-md-9">
                  <div className="form-value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-b-55-20">
                <div className="col-md-3">
                  <div className="form-name">Password</div>
                </div>

                <div className="col-md-9">
                  <div className="form-value">
                    <div className="row row-space">
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                          />
                          <label className="label--desc">password</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="password"
                            name="repassword"
                            onChange={handleOnChange}
                          />
                          <label className="label--desc">repeat password</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="row m-b-55-20">
                <div className="col-3">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                    onChange={handleCheck}
                  />
                </div>
                <div className="col-9">
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="/#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
              </div>

              <div className="row m-b-10">
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

export default withRouter(RegisterPage);
