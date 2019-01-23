import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {}
  };

  renderInput(name, label, type = "text") {
    const { data } = this.state;
    return (
      <Input
        label={label}
        id={name}
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label, style, type, func) {
    return (
      <button type={type} className={`${style}`} onClick={func}>
        {label}
      </button>
    );
  }
}

export default Form;
