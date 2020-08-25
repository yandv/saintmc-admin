import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth/index";

function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem("userData") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
