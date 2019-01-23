import React from "react";

const Input = ({ name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} className="form-control" />
    </div>
  );
};

export default Input;
