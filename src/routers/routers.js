import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import validator from 'validator';
import NavBar from "../components/Navbars/Navbar";
//Pages

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfileRegistrationVerification from "../views/ProfilRegistrationVerification/ProfileRegistrationVerification";
import NotFoundPage from "views/ErrorPages/404ErrorPage/NotFoundPage";
import ProductPage from "views/ProductPage/ProductPage";
import LoginPage from "views/LoginPage/LoginPage"
const AppRoutes = (props) =>{
  const [error, setError] = useState("");
  const [token,  setToken] = useState(null);
  const [isAuth, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);


  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    setToken(token);
    setUserId(userId);
    setAuth(true);
    setAutoLogout(remainingMilliseconds);
  });

  const setAutoLogout = milliseconds => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };
  const setLocalStorage = (token, userId) => {
    console.log("registerHandler");
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(
      new Date().getTime() + remainingMilliseconds
    );
    console.log("Set local storage")
    setToken(token);
    setAuth(true);
    setUserId(userId);
    setAutoLogout(remainingMilliseconds);
    localStorage.setItem('expiryDate', expiryDate.toISOString());
  }
  const logoutHandler = () => {
    console.log("logout");
    setError("");
    setToken(null);
    setAuth(false);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
 
  };

  const login= (event,email,password) =>{
    event.preventDefault();
    if(email==="" || password===""){
      setError("All field must be filed!");
      return;
    }
    if(validator.isEmail(email)!==true){
      setError("Email format is incorect");
      return;
    }
    fetch("http://localhost:3003/auth/login",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        })
    })
    .then(res => {
       if(res.status===500){
        throw new Error('Techical problems with server, please trt later!');
       }
       if(res.status===401){
        throw new Error('Email or password are incorect!');
       }
       return res.json()
       
    })
    .then(resData=>{
      setLocalStorage(resData.token,resData.userId);
      const url = "/profile-page/"+resData.userId;
      console.log(resData.userId);
      props.history.replace(url);
    })
    .catch(err =>{
        if(err.message === "Failed to fetch") err.message='Techical problems with server, please trt later!';
        setError(err.message);
    });
  }

  return (
    <div>
      <NavBar isAuth={isAuth} userId={userId} logout={logoutHandler}/>
      <Switch>
        <Route path="/" render={props => <LandingPage {...props} />} exact={true}/>

        <Route
          path="/profile-page/:id"
          render={props => <ProfileRegistrationVerification {...props} token={token} userId={userId}  setLocalStorage={setLocalStorage}/>}
        />

        <Route
        path="/product-page"
        render={props => <ProductPage {...props} />}
        />
        <Route
          path="/login-page"
          render={props => <LoginPage {...props} login={login} error={error}/>}
        />

        <Route component={NotFoundPage}/>

      </Switch>

    </div>
  )
}
   

export default withRouter(AppRoutes);