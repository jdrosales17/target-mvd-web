import React, { Component } from 'react';
import { bool, array, func } from 'prop-types';

import FormInput from './common/FormInput';
import Loading from './common/Loading';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { target: { name, value } } = event;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    const { isLoading, errors } = this.props;

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <FormInput
          name="email"
          label="EMAIL"
          placeholder="Enter your email..."
          type="email"
          value={email}
          handleInputChange={this.handleInputChange}
        />
        <FormInput
          name="password"
          label="PASSWORD"
          placeholder="Enter your password..."
          type="password"
          value={password}
          handleInputChange={this.handleInputChange}
        />
        <button type="submit" className="login-form-button" disabled={!email || !password}>
          {isLoading ? <Loading fixed={false} /> : 'SIGN IN'}
        </button>
        {errors.map(error => <p className="login-form-error" key={error}>{error}</p>)}
      </form>
    );
  }
}

LoginForm.propTypes = {
  isLoading: bool.isRequired,
  errors: array.isRequired,
  onSubmit: func.isRequired,
};

export default LoginForm;
