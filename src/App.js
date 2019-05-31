import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/app.scss';
import LoginPage from './containers/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
