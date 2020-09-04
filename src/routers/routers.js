import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import validator from "validator";
import NavBar from "../components/Navbars/Navbar";
import NavBarProfile from "../components/Navbars/NavBarProfile";

//Redux store
import { connect } from "react-redux";
import { addProfileData } from "../actions/userProfile";

//Pages
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfileRegistrationVerification from "../views/ProfilRegistrationVerification/ProfileRegistrationVerification";
import NotFoundPage from "views/ErrorPages/404ErrorPage/NotFoundPage";
import ProductPage from "views/ProductPage/ProductPage";
import LoginPage from "views/LoginPage/LoginPage";
import ProfileActivation from "views/ProfileActivation/ProfileActivation";
import FillDataForm from "views/ProfilRegistrationVerification/FillDataForm/FillDataForm";
import CheckoutPage from "views/CheckoutPage/CheckoutPage";
//localSTorage
import { removeStore } from "../localStorage/localStorage";

const AppRoutes = (props) => {
  const [error, setError] = useState("");
  const [token, setToken] = useState(null);
  const [isAuth, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loginButton, setLoginButton] = useState(false);
  const [buttonText, setButtonText] = useState("Login");
  const [editProfileFromMenu, setEditProfileFromMenu] = useState(0);
  const [pageChange, setPageChange] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const userId = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    setToken(token);
    setUserId(userId);
    setAuth(true);
    setAutoLogout(remainingMilliseconds);
  });

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };
  const setLocalStorage = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);

    setToken(token);
    setAuth(true);
    setUserId(userId);
    setAutoLogout(remainingMilliseconds);
    localStorage.setItem("expiryDate", expiryDate.toISOString());
  };
  const logoutHandler = () => {
    setEditProfileFromMenu(0);
    setError("");
    setToken(null);
    setAuth(false);
    setUserId(null);

    localStorage.removeItem("store");
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };
  const login = (event, email, password) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setError("All field must be filed!");
      return;
    }
    if (validator.isEmail(email) !== true) {
      setError("Email format is incorect");
      return;
    }
    setButtonText(null);
    setLoginButton(true);
    fetch("http://192.168.0.32:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 500) {
          throw new Error("Techical problems with server, please trt later!");
        }
        if (res.status === 401) {
          throw new Error("Email or password are incorect!");
        }
        if (res.status === 429) {
          throw new Error("To many failed attemps, try in 1 hour!");
        }

        return res.json();
      })
      .then((resData) => {
        console.log(resData.user);
        props.dispatch(
          addProfileData(
            resData.user.profileData.firstName,
            resData.user.profileData.lastName,
            resData.user.profileData.companyName,
            resData.user.profileData.jobTitle,
            resData.user.profileData.gender,
            resData.user.profileData.contactInfo.mobilePhone,
            resData.user.profileData.contactInfo.homePhone,
            resData.user.profileData.contactInfo.email,
            resData.user.profileData.contactInfo.workEmail,
            resData.user.profileData.socialNetwork.twitter,
            resData.user.profileData.socialNetwork.linkedIn,
            resData.user.profileData.socialNetwork.facebook,
            resData.user.profileData.socialNetwork.snapchat,
            resData.user.profileData.socialNetwork.youtube,
            resData.user.profileData.socialNetwork.instagram,
            resData.user.profileData.directMessage.whatsapp,
            resData.user.profileData.directMessage.viber,
            resData.user.profileData.personalInfo.adress,
            resData.user.profileData.personalInfo.birthday,
            resData.profileImage
          )
        );
        setButtonText("login");
        setLoginButton(false);
        setLocalStorage(resData.token, resData.userId);
        const url = "/profile-page/" + resData.userId;
        props.history.replace(url);
      })
      .catch((err) => {
        setButtonText("login");
        setLoginButton(false);
        if (err.message === "Failed to fetch")
          err.message = "Techical problems with server, please trt later!";
        setError(err.message);
      });
  };

  return (
    <div>
      {window.location.pathname.startsWith("/profile-page") &&
      window.location.pathname.substring(14, window.location.pathname.length) !=
        userId ? (
        <NavBarProfile />
      ) : (
        <NavBar
          pageChange={pageChange}
          setPageChange={setPageChange}
          setEditProfileFromMenu={setEditProfileFromMenu}
          isAuth={isAuth}
          userId={userId}
          logout={logoutHandler}
          reload={reload}
          setReload={setReload}
          {...props}
        />
      )}
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
              reload={reload}
            />
          )}
          exact={true}
        />

        <Route
          path="/profile-page/:id"
          render={(props) => (
            <ProfileRegistrationVerification
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
              setEditProfileFromMenu={setEditProfileFromMenu}
              editProfileFromMenu={editProfileFromMenu}
              token={token}
              userId={userId}
              setLocalStorage={setLocalStorage}
              reload={reload}
            />
          )}
        />

        <Route
          path="/auth/:id"
          render={(props) => (
            <ProfileActivation
              {...props}
              setLocalStorage={setLocalStorage}
              setPageChange={setPageChange}
              pageChange={pageChange}
            />
          )}
        />

        <Route
          path="/product-page"
          render={(props) => (
            <ProductPage
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
              reload={reload}
            />
          )}
        />

        <Route
          path="/fill-data/:id"
          render={(props) => (
            <FillDataForm
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
            />
          )}
        />

        <Route
          path="/checkout"
          render={(props) => (
            <CheckoutPage
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
              reload={reload}
            />
          )}
        />

        <Route
          path="/login-page"
          render={(props) => (
            <LoginPage
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
              buttonText={buttonText}
              setButtonText={setButtonText}
              setLoginButton={setLoginButton}
              login={login}
              error={error}
              loginButton={loginButton}
              reload={reload}
            />
          )}
        />

        <Route
          render={(props) => (
            <NotFoundPage
              {...props}
              setPageChange={setPageChange}
              pageChange={pageChange}
            />
          )}
        />
      </Switch>
    </div>
  );
};

const ConnectedAppRoutes = connect((state) => {
  return {
    store: state,
  };
})(AppRoutes);

export default withRouter(ConnectedAppRoutes);
