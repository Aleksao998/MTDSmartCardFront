import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
// styles
import "assets/css/bootstrap.min.css";

import "./styles/style.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

//Router
import AppRoutes from "./routers/routers";



ReactDOM.render(
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
    ,document.getElementById("root"));
