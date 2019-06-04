import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';

import routes from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: routes.login }} />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired,
};

export default PrivateRoute;
