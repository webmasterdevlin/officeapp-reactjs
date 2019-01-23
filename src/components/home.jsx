import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import { loadDepartments } from "../services/department.service";
import NavBar from "./navBar";
import Spinner from "./spinner";
import "../styles/home.css";

class Home extends Component {
  state = {
    departments: []
  };

  async componentDidMount() {
    const { data } = await loadDepartments();
    this.setState({ departments: data });
  }

  render() {
    const departments = this.state.departments;

    return (
      <React.Fragment>
        <NavBar />
        <table className="table table-dark">
          <thead>
            <tr className="header">
              <th scope="col">#CODE</th>
              <th scope="col">NAME</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">HEAD</th>
            </tr>
          </thead>
          <tbody>
            {departments.map(item => (
              <tr key={item.id}>
                <td>
                  <Link className="links" to={`/edit-detail/${item.id}`}>
                    {item.code}
                  </Link>
                </td>
                <td>
                  <Link className="links" to={`/edit-detail/${item.id}`}>
                    {item.name}
                  </Link>
                </td>
                <td>
                  <Link className="links" to={`/edit-detail/${item.id}`}>
                    {item.description}
                  </Link>
                </td>
                <td>
                  <Link className="links" to={`/edit-detail/${item.id}`}>
                    {item.head}
                  </Link>
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
          <NavLink
            type="button"
            className="btn btn-primary btn-lg"
            to="/new-department"
          >
            Create New
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
