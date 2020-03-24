import React from "react";
import ReactDOM from "react-dom";

// styles
import "assets/css/bootstrap.min.css";
import "./styles/style.scss"
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

//Router
import AppRoutes from "./routers/routers"

ReactDOM.render(<AppRoutes/>,document.getElementById("root"));
