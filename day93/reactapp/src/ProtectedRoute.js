import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={() => {
      if (localStorage.getItem("token")) {
        <Component {...props} />;
      } else {
        <Redirect path="/login" />;
      }
    }}
  />;
};

export default ProtectedRoute;
