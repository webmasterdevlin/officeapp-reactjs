import React from "react";
import { postRegister } from "../services/user.service";
import Form from "./common/form";

class Signup extends Form {
  state = {
    data: {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    this._sendRegistration();
  };

  handleOnChange = ({ currentTarget }) => {
    this._formToModel(currentTarget);
  };

  _sendRegistration = async () => {
    try {
      await postRegister(this.state.data);
      window.location = "/login";
    } catch (e) {
      alert(`Can't process right now: ${e.message}`);
    }
  };

  _formToModel = currentTarget => {
    const user = { ...this.state.data };
    const { name, value } = currentTarget;
    user[name] = value;
    this.setState({ data: user });
  };

  render() {
    return (
      <>
        <div className="login-signup-bg">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 mx-auto">
                    <div className="card border-secondary opaq">
                      <div className="card-header">
                        <h3 className="mb-0 my-2">Sign up Page</h3>
                      </div>
                      <form
                        className="card-body form-group"
                        onSubmit={this.handleOnSubmit}
                      >
                        {this.renderInput("username", "Username")}
                        {this.renderInput("email", "Email", "email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderInput(
                          "confirmPassword",
                          "Confirm Password"
                        )}

                        <div className="form-group">
                          {Form.renderButton(
                            "Register",
                            "mr-1 btn btn-success btn-lg float-right",
                            "submit"
                          )}
                          {Form.renderButton(
                            "Cancel",
                            "mr-1 btn btn-default btn-lg float-right",
                            "button",
                            () => this.props.history.goBack()
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center outside-form">
            <strong>Values to be sent: </strong>
            <span>{JSON.stringify(this.state.data)}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
