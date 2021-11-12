import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter,Switch } from "react-router-dom";
import App from './components/App'



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);