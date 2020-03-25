import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//Pages

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import RegisterPage from "views/RegistrationPage/RegisterPage";
import NotFoundPage from "views/ErrorPages/404ErrorPage/NotFoundPage";
import ProductPage from "views/ProductPage/ProductPage";
const AppRoutes = () =>(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" render={props => <LandingPage {...props} />} exact={true}/>

      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />

      <Route
      path="/product-page"
      render={props => <ProductPage {...props} />}
    />

      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />

      <Route component={NotFoundPage}/>

    </Switch>
  </BrowserRouter>
)

export default AppRoutes;