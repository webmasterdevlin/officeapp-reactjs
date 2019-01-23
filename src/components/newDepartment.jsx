import React from "react";
import Form from "./common/form";
import * as departmentService from "../services/department.service";
import NavBar from "./navBar";

class NewDepartment extends Form {
  nameRef = React.createRef();
  descriptionRef = React.createRef();
  headRef = React.createRef();
  codeRef = React.createRef();

  state = {
    data: {
      name: "",
      description: "",
      head: "",
      code: ""
    }
  };

  handleSubmit = async event => {
    event.preventDefault();

    await departmentService.addDepartment(this.state.data);

    this.props.history.replace("/");
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.data };
    user[input.name] = input.value;
    console.log(input.value);
    this.setState({ data: user });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h2 className="text-center m-4">Add New Department</h2>
        <div className="container py-5">
          <form className="form-row" onSubmit={this.handleSubmit}>
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
            {this.renderButton(
              "Save",
              "btn btn-success btn-lg btn-block my-4",
              "submit"
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default NewDepartment;
