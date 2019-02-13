import React from "react";
import Form from "./common/form";
import { postDepartment } from "../services/department.service";
import NavBar from "./navBar";
import { routeCanActivate } from "../services/auth.service";

class NewDepartment extends Form {
  state = {
    data: {
      name: null,
      description: null,
      head: null,
      code: null
    }
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    if (this._checkNameIfEmpty()) return;

    if (!routeCanActivate()) this.props.history.replace("/");

    this._saveDepartment();
  };

  handleOnChange = ({ currentTarget: input }) => {
    this._formToModel(input);
  };

  _checkNameIfEmpty = () => {
    const { name } = this.state.data;
    if (!(name === null || name === "")) return false;

    alert("Name can't be empty");
    return true;
  };

  _saveDepartment = async () => {
    try {
      await postDepartment(this.state.data);
      this.props.history.replace("/");
    } catch (e) {
      alert(`Can't process right now: ${e.message}`);
    }
  };

  _formToModel = input => {
    const user = { ...this.state.data };
    user[input.name] = input.value;
    console.log(input.value);
    this.setState({ data: user });
  };

  render() {
    return (
      <>
        <NavBar />
        <h2 className="text-center m-4">Add New Department</h2>
        <div className="container py-5">
          <form className="form-row" onSubmit={this.handleOnSubmit}>
            <div className="form-group col-md-6">
              {this.renderInput("name", "Name")}
            </div>
            <div className="form-group col-md-6">
              {this.renderInput("description", "Description")}
            </div>
            <div className="form-group col-md-6">
              {this.renderInput("head", "Head")}
            </div>
            <div className="form-group col-md-6">
              {this.renderInput("code", "Code")}
            </div>
            {Form.renderButton(
              "Add",
              "btn btn-success btn-lg btn-block my-4",
              "submit"
            )}
          </form>
        </div>
      </>
    );
  }
}

export default NewDepartment;
