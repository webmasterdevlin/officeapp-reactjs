import { Component } from "react";
import { logOut } from "../services/auth.service";

class Logout extends Component {
  componentDidMount() {
    logOut();
  }
  render() {
    return null;
  }
}

export default Logout;
