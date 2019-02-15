import React, { Component } from "react";
import NavBar from "./navBar";
import Spinner from "./spinner";
import { NavLink, Link } from "react-router-dom";
import {
  getDepartments,
  deleteDepartment
} from "../services/department.service";
import { routeCanActivate } from "../services/auth.service";
import "../styles/home.css";

class Home extends Component {
  state = {
    departments: []
  };

  async componentDidMount() {
    if (!routeCanActivate()) this.props.history.replace("/");

    await this._loadDepartments();
  }

  _loadDepartments = async () => {
    try {
      const { data } = await getDepartments();
      this.setState({ departments: data });
    } catch (e) {
      alert(`Something happened: ${e.message}`);
    }
  };

  handleOnDelete = id => {
    if (!routeCanActivate()) this.props.history.replace("/");

    const response = window.confirm("Are you sure you want to delete this?");
    if (!response) return;

    this._deleteSelectedDepartment(id);
  };

  _deleteSelectedDepartment = async id => {
    let previousDepartments;
    try {
      previousDepartments = this.state.departments;
      const departments = this.state.departments.filter(d => d.id !== id);
      await deleteDepartment(id);
      this.setState({ departments });
    } catch (e) {
      alert(`Cannot process this time. ${e.message}`);
      this.setState({ departments: previousDepartments });
    }
  };

  render() {
    const { departments } = this.state;

    return (
      <>
        <NavBar />
        <table className="table table-dark">
          <thead>
            <tr className="header">
              <th scope="col">#CODE</th>
              <th scope="col">NAME</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">HEAD</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {departments.map(item => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.head}</td>
                <td>
                  <Link className="links" to={`/edit-detail/${item.id}`}>
                    <button className="btn btn-info mr-1">Edit</button>
                  </Link>
                  <button
                    onClick={() => this.handleOnDelete(item.id)}
                    className="btn btn-outline-warning ml-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {departments.length ? (
          ""
        ) : (
          <div className="row h-100 justify-content-center align-items-center">
            <Spinner />
          </div>
        )}
        <div className="text-center m-5">
          <NavLink to="/new-department">
            <button className="btn btn-primary btn-lg">Create New</button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default Home;
