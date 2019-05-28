import React, { Component } from 'react';
import { bool, array, func } from 'prop-types';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.props.onSubmit(this.state);
    event.preventDefault();
  }

  render() {
    const { isLoading, errors } = this.props;

    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <label className="login-form-label" htmlFor="email">EMAIL</label>
        <input
          className="login-form-input"
          id="email"
          name="email"
          placeholder="Enter your email..."
          type="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label className="login-form-label" htmlFor="password">PASSWORD</label>
        <input
          className="login-form-input"
          id="password"
          name="password"
          placeholder="Enter your password..."
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="login-form-button" disabled={!this.state.email || !this.state.password}>
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin/> : 'SIGN IN'}
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
}

export default LoginForm;
