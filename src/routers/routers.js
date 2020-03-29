import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//Pages

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfileRegistrationVerification from "../views/ProfilRegistrationVerification/ProfileRegistrationVerification";
import NotFoundPage from "views/ErrorPages/404ErrorPage/NotFoundPage";
import ProductPage from "views/ProductPage/ProductPage";
import LoginPage from "views/LoginPage/LoginPage"
const AppRoutes = () =>(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        render={props => <LoginPage {...props} />}
      />

      <Route component={NotFoundPage}/>

    </Switch>
  </BrowserRouter>
)

export default AppRoutes;