import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={props => {
      if (sessionStorage.getItem("token")) {
        return <Component {...props} />;
      } else {
        return <Redirect to='/login' />;
      }
    }}
  />;
};
