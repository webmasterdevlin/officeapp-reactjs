import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Office App React.js
      </Link>
      <form className="form-inline">
        <Link className="m-2 p-2 my-sm-0 links" to="/logout">
          <span style={{ color: "lightblue" }}>Logout</span>
        </Link>
      </form>
    </nav>
  );
};

export default NavBar;
