import React from "react";
import { Route, Redirect } from "react-router-dom";

import routes from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: routes.home }} />
      )
    }
  />
);

export default PrivateRoute;
