import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './styles/app.scss';
import PublicRoute from './components/common/PublicRoute';
import PrivateRoute from './components/common/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import routes from './constants/routes';

const App = () => (
  <Router>
    <Switch>
      <PublicRoute path={routes.login} exact component={LoginPage} />
      <PrivateRoute path={routes.home} component={HomePage} />
    </Switch>
  </Router>
);

export default App;
