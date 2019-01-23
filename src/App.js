import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Router from "./router";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ToastContainer />
          <Router />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
