import React, { Component } from "react";
import NavBar from "./navBar";
import Spinner from "./spinner";
import { NavLink, Link } from "react-router-dom";
import { getDepartments } from "../services/department.service";
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
          <NavLink to="/new-department">
            <button className="btn btn-primary btn-lg">Create New</button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default Home;
