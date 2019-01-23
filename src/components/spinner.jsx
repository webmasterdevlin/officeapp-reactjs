import Loader from "react-loader-spinner";
import React from "react";

class Spinner extends React.Component {
  render() {
    return <Loader type="Oval" color="dodgerblue" height="80" width="80" />;
  }
}
export default Spinner;
