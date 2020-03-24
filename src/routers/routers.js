import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//Pages

import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import RegisterPage from "views/RegistrationPage/RegisterPage";
const AppRoutes = () =>(
    <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <LandingPage {...props} />} exact={true}/>

      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />

      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />

      <Redirect to="/index" />

    </Switch>
  </BrowserRouter>
)

export default AppRoutes;