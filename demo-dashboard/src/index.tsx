import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routes/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "./styles/fonts.css";
import "./styles/fontawesome.css";
import "./styles/tailwind.css";

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
