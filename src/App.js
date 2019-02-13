import React, { Component } from "react";
import Router from "./router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Router />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
