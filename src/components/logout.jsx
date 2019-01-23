import { Component } from "react";
import auth from "../services/auth.service";

class Logout extends Component {
  componentDidMount() {
    auth.logOut();
  }
  render() {
    return null;
  }
}

export default Logout;
