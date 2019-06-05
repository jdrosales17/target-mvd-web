import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { isEmpty } from 'lodash';

import routes from '../../constants/routes';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isEmpty(rest.authHeaders) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: routes.home }} />
      )
    )}
  />
);

PublicRoute.propTypes = {
  component: func.isRequired,
};

const mapStateToProps = ({ session }) => ({
  authHeaders: session.authHeaders,
});

export default connect(mapStateToProps, {})(PublicRoute);
