import React from "react";
import { Redirect, Route, Switch } from "react-router";

import NewDepartment from "./components/newDepartment";
import Home from "./components/home";
import EditDepartment from "./components/editDepartment";
import Signup from "./components/signup";
import Login from "./components/login";
import Logout from "./components/logout";

import ProtectedRoute from "./components/common/protectedRoute";

const Router = () => (
  <Switch>
    <ProtectedRoute path="/new-department" component={NewDepartment} />
    <ProtectedRoute path="/home" component={Home} />
    <ProtectedRoute path="/edit-detail/:id" component={EditDepartment} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />

    <Redirect from="/" exact to="/home" />
    <Redirect from="/edit-detail" exact to="/home" />
  </Switch>
);

export default Router;
