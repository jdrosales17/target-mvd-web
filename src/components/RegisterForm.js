import React, { Component } from 'react';
import { bool, array, func } from 'prop-types';

import FormInput from './common/FormInput';
import Loading from './common/Loading';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nickname: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  validateForm = () => {
    const { name, nickname, email, password, confirmPassword } = this.state;

    return (!name || !nickname || !email || !password || !confirmPassword);
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
    const { name, nickname, email, password, confirmPassword } = this.state;
    const { isLoading, errors } = this.props;

    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <FormInput
          name="name"
          label="NAME"
          type="text"
          value={name}
          handleInputChange={this.handleInputChange}
        />
        <FormInput
          name="nickname"
          label="NICKNAME"
          type="text"
          value={nickname}
          handleInputChange={this.handleInputChange}
        />
        <FormInput
          name="email"
          label="EMAIL"
          type="email"
          value={email}
          handleInputChange={this.handleInputChange}
        />
        <FormInput
          name="password"
          label="PASSWORD"
          placeholder="MIN. 8 CHARACTERS LONG"
          type="password"
          value={password}
          handleInputChange={this.handleInputChange}
        />
        <FormInput
          name="confirmPassword"
          label="CONFIRM PASSWORD"
          type="password"
          value={confirmPassword}
          handleInputChange={this.handleInputChange}
        />
        <button type="submit" className="form-button" disabled={this.validateForm()}>
          {isLoading ? <Loading fixed={false} /> : 'SIGN IN'}
        </button>
        {errors.map(error => <p className="form-error" key={error}>{error}</p>)}
      </form>
    );
  }
}

RegisterForm.propTypes = {
  isLoading: bool.isRequired,
  errors: array.isRequired,
  onSubmit: func.isRequired,
};

export default RegisterForm;
