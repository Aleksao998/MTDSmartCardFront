import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";
import { useAlert } from "react-alert";
const CheckoutPage = (props) => {
  document.documentElement.classList.remove("nav-open");

  const alert = useAlert();
  const [validateName, setValidateName] = useState("");
  const [validateLastName, setValidateLastName] = useState("");
  const [validateAddress, setValidateAddress] = useState("");
  const [validateCity, setValidateCity] = useState("");
  const [validatePostCode, setValidatePostCode] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePhoneNumber, setValidatePhoneNumber] = useState("");
  const [validateNumberCard, setValidateNumberCard] = useState("");
  const [state, setState] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    postCode: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const submit = () => {
    var error = false;
    if (state.name === "") {
      setValidateName("has-danger");

      error = true;
    } else {
      setValidateName("has-success");
    }
    if (state.lastName === "") {
      setValidateLastName("has-danger");
      error = true;
    } else {
      setValidateLastName("has-success");
    }
    if (state.address === "") {
      setValidateAddress("has-danger");
      error = true;
    } else {
      setValidateAddress("has-success");
    }
    if (state.city === "") {
      setValidateCity("has-danger");
      error = true;
    } else {
      setValidateCity("has-success");
    }
    if (state.postCode === "") {
      setValidatePostCode("has-danger");
      error = true;
    } else {
      setValidatePostCode("has-success");
    }
    if (state.email === "") {
      setValidateEmail("has-danger");
      error = true;
    } else {
      setValidateEmail("has-success");
    }
    if (state.phoneNumber === "") {
      setValidatePhoneNumber("has-danger");
      error = true;
    } else {
      setValidatePhoneNumber("has-success");
    }
    if (state.cardNumber === "") {
      setValidateNumberCard("has-danger");
      error = true;
    } else {
      setValidateNumberCard("has-success");
    }
    if (error === true) {
      console.log("error");
      return;
    } else {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://ec2-35-158-214-30.eu-central-1.compute.amazonaws.com:3001/order/createOrder",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            number: state.cardNumber,
            name: state.name,
            lastName: state.lastName,
            address: state.address,
            city: state.city,
            postCode: state.postCode,
            email: state.email,
            phoneNumber: state.phoneNumber,
          }),
        }
      )
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Error creating User");
          }
          return res.json();
        })
        .then((resData) => {
          console.log(resData);
          setState({
            name: "",
            lastName: "",
            address: "",
            city: "",
            postCode: "",
            email: "",
            phoneNumber: "",
            cardNumber: "",
          });
          setValidateName("");
          setValidateLastName("");
          setValidateAddress("");
          setValidateCity("");
          setValidatePostCode("");
          setValidateEmail("");
          setValidatePhoneNumber("");
          setValidateNumberCard("");
          alert.success("Purchase completed");
        })
        .catch((err) => {
          alert.error("Technical error");
        });
    }
    console.log(state);
  };
  React.useEffect(() => {
    props.setPageChange(!props.pageChange);
  }, []);
  return (
    <div className="checkoutPage">
      <div className="checkout container" style={{ marginBottom: "40px" }}>
        <div className="row">
          <div className="col-md-8" style={{ backgroundColor: "white" }}>
            <div style={{ textAlign: "center" }}>
              <h3>Buy card</h3>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h5>Customer information</h5>
            </div>
            <form style={{ marginTop: "30px" }}>
              <div className="form-row">
                <Col className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="First name"
                    name="name"
                    value={state.name}
                    onChange={handleOnChange}
                    valid={validateName === "has-success"}
                    invalid={validateName === "has-danger"}
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    placeholder="Last name"
                    required="true"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleOnChange}
                    valid={validateLastName === "has-success"}
                    invalid={validateLastName === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col md="5" className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={state.address}
                    onChange={handleOnChange}
                    valid={validateAddress === "has-success"}
                    invalid={validateAddress === "has-danger"}
                  />
                </Col>
                <Col md="5" className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={state.city}
                    onChange={handleOnChange}
                    valid={validateCity === "has-success"}
                    invalid={validateCity === "has-danger"}
                  />
                </Col>
                <Col md="2">
                  <Input
                    type="text"
                    placeholder="Post code"
                    name="postCode"
                    value={state.postCode}
                    onChange={handleOnChange}
                    valid={validatePostCode === "has-success"}
                    invalid={validatePostCode === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col>
                  <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleOnChange}
                    valid={validateEmail === "has-success"}
                    invalid={validateEmail === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col md="9" className="marginBottomColCheckOut">
                  <Input
                    type="text"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    onChange={handleOnChange}
                    valid={validatePhoneNumber === "has-success"}
                    invalid={validatePhoneNumber === "has-danger"}
                  />
                </Col>
                <Col>
                  <Input
                    type="number"
                    placeholder="Number of cards"
                    name="cardNumber"
                    value={state.cardNumber}
                    onChange={handleOnChange}
                    valid={validateNumberCard === "has-success"}
                    invalid={validateNumberCard === "has-danger"}
                  />
                </Col>
              </div>
              <div className="form-row">
                <Col>
                  <Button
                    block
                    className="form-submit"
                    color="success"
                    onClick={submit}
                  >
                    {" "}
                    Buy{" "}
                  </Button>
                </Col>
              </div>
            </form>
          </div>
          <div className="col-md-4" style={{ backgroundColor: "#f7fbff" }}>
            <div style={{ textAlign: "center" }}>
              <h4 className="borderBottomCart">Shopping cart</h4>
            </div>
            <div style={{ marginTop: "50px" }} className="borderBottomCart">
              <h5 className="bolderChartText">
                Number of cards:
                <span style={{ fontWeight: "300", float: "right" }}>
                  {state.cardNumber}
                </span>
              </h5>
              <h5 className="bolderChartText">
                Card Price:
                <span style={{ fontWeight: "300", float: "right" }}>
                  25 euro
                </span>
              </h5>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "50px" }}>
              <h5 className="bolderChartText">
                Total price:
                <span style={{ fontWeight: "300", float: "right" }}>
                  {parseInt(state.cardNumber) * 25} euro
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
