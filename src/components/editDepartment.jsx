import React from "react";
import Form from "./common/form";
import {
  getDepartment,
  putDepartment,
  deleteDepartment
} from "../services/department.service";
import NavBar from "./navBar";
import Spinner from "./spinner";
import { routeCanActivate } from "../services/auth.service";

class EditDepartment extends Form {
  state = {
    data: {
      id: null,
      name: null,
      description: null,
      head: null,
      code: null
    }
  };

  async componentDidMount() {
    if (!routeCanActivate()) this.props.history.replace("/");

    this._loadDepartment();
  }

  handleOnChange = ({ currentTarget }) => {
    this._formToModel(currentTarget);
  };

  handleOnUpdate = async event => {
    event.preventDefault();
    if (!routeCanActivate()) this.props.history.replace("/");

    this._updateSelectedDepartment();
  };

  handleOnDelete = async () => {
    if (!routeCanActivate()) this.props.history.replace("/");

    const response = window.confirm("Are you sure you want to delete this?");
    if (!response) return;

    this._deleteSelectedDepartment();
  };

  _loadDepartment = async () => {
    try {
      const id = this.props.match.params.id;
      const { data: department } = await getDepartment(id);
      this.setState({ data: department });
    } catch (e) {
      alert(`Something happened: ${e.message}`);
    }
  };

  _formToModel = currentTarget => {
    const updatedDepartment = { ...this.state.data };
    const { name, value } = currentTarget;
    updatedDepartment[name] = value;
    this.setState({ data: updatedDepartment });
  };

  _updateSelectedDepartment = async () => {
    try {
      await putDepartment(this.state.data);
      this.props.history.goBack();
    } catch (e) {
      alert(`Cannot process this time. ${e.message}`);
    }
  };

  _deleteSelectedDepartment = async () => {
    try {
      await deleteDepartment(this.state.data.id);
      this.props.history.replace("/");
    } catch (e) {
      alert(`Cannot process this time. ${e.message}`);
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <h2 className="text-center m-4">Edit Details</h2>
        {this.state.data.name ? (
          <div className="container py-5">
            <div className="form-row">
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
            </div>
            <div className="container">
              <div className="row">
                {Form.renderButton(
                  "Update",
                  "btn btn-warning col m-2",
                  "button",
                  this.handleOnUpdate
                )}
                {Form.renderButton(
                  "Delete",
                  "btn btn-outline-danger col m-2",
                  "button",
                  this.handleOnDelete
                )}
              </div>
            </div>
            <div className="text-center">
              <strong>Values to be sent: </strong>
              <span>{JSON.stringify(this.state.data)}</span>
            </div>
          </div>
        ) : (
          <div className="row h-100 justify-content-center align-items-center">
            <Spinner />
          </div>
        )}
      </>
    );
  }
}

export default EditDepartment;
