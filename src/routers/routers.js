import React, {useState} from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import NavBar from "../components/Navbars/Navbar";
//Pages

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfileRegistrationVerification from "../views/ProfilRegistrationVerification/ProfileRegistrationVerification";
import NotFoundPage from "views/ErrorPages/404ErrorPage/NotFoundPage";
import ProductPage from "views/ProductPage/ProductPage";
import LoginPage from "views/LoginPage/LoginPage"
const AppRoutes = (props) =>{
  const [token,  setToken] = useState(null);
  const [isAuth, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  const setAutoLogout = milliseconds => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };
  
  const logoutHandler = () => {
    console.log("logout");
    setToken(null);
    setAuth(false);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
 
  };

  const login= (event,email,password) =>{
    event.preventDefault();
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
       return res.json();
    })
    .then(resData=>{
      localStorage.setItem('token', resData.token);
      localStorage.setItem('userId', resData.userId);
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(
        new Date().getTime() + remainingMilliseconds
      );
      console.log("usao");
      setToken(resData.token);
      setAuth(true);
      setUserId(resData.userId);
      setAutoLogout(remainingMilliseconds);
      localStorage.setItem('expiryDate', expiryDate.toISOString());
      const url = "/profile-page/"+resData.userId;
      props.history.replace(url);
    })
    .catch(err =>{
        console.log(err);  
    });
  }

  return (
    <div>
      <NavBar isAuth={isAuth} userId={userId} logout={logoutHandler}/>
      <Switch>
        <Route path="/" render={props => <LandingPage {...props} />} exact={true}/>

        <Route
          path="/profile-page/:id"
          render={props => <ProfileRegistrationVerification {...props} />}
        />

        <Route
        path="/product-page"
        render={props => <ProductPage {...props} />}
        />
        <Route
          path="/login-page"
          render={props => <LoginPage {...props} login={login} />}
        />

        <Route component={NotFoundPage}/>

      </Switch>

    </div>
  )
}
   

export default withRouter(AppRoutes);