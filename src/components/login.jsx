import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import { login } from "../services/auth.service";
import "../styles/login.css";

class Login extends Form {
  state = {
    data: {
      email: null,
      password: null
    }
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    this._sendLogin();
  };

  handleOnChange = ({ currentTarget }) => {
    this._formToModel(currentTarget);
  };

  handleOnReset = () => {
    this._reset();
  };

  _sendLogin = async () => {
    try {
      await login(this.state.data);
      window.location = "/";
    } catch (e) {
      alert(`Can't process right now: ${e.message}`);
    }
  };

  _formToModel = currentTarget => {
    const loginModel = { ...this.state.data };
    const { name, value } = currentTarget;
    loginModel[name] = value;
    this.setState({ data: loginModel });
  };

  _reset = () => {
    const response = prompt("Enter your email here");
    if (response) {
      // Sendgrid email reset here
      alert("Please check your email");
      return;
    }
    alert("Please try again");
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
                        <h3 className="mb-0 my-2">Login Page</h3>
                      </div>
                      <form
                        onSubmit={this.handleOnSubmit}
                        className="card-body form-group"
                      >
                        <div className="form-group">
                          {this.renderInput("email", "Email", "email")}
                        </div>
                        <div className="form-group">
                          {this.renderInput("password", "Password", "password")}
                        </div>
                        <div className="form-group">
                          {Form.renderButton(
                            "Login",
                            "mr-1 btn btn-success btn-lg float-right",
                            "password"
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outside-form">
            <p className="text-center">
              Forgot your password?{" "}
              <button
                className="link-button"
                type="button"
                onClick={this.handleOnReset}
              >
                Reset
              </button>
            </p>
            <p className="text-center">
              Not yet a member?{" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/signup"
              >
                Sign up
              </Link>{" "}
              here.
            </p>
            <div className="text-center">
              <strong>Values to be sent: </strong>
              <span>{JSON.stringify(this.state.data)}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
