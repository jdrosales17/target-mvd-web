import React, { Component } from 'react';
import { connect } from "react-redux";
import { func } from 'prop-types';

import LandingLayout from '../components/LandingLayout';
import Smilies from '../assets/images/Smilies';
import LoginForm from '../components/LoginForm';
import { signIn } from '../actions/sessionActions';

class LoginPage extends Component {
  render() {
    const { signIn, isLoading, errors } = this.props;

    return (
      <LandingLayout>
        <div className="Login">
          <Smilies className="app-logo"/>
          <h1 className="app-header"> TARGET MVD </h1>
          <h2 className="app-subtitle"> Find people near you & Connect </h2>
          <p className="app-description"> Create a target wherever on the map, specify your interest (Travel, Dating, Music, etc.) and start conecting with others who share your interest. </p>
          <LoginForm
            isLoading={isLoading}
            errors={errors}
            onSubmit={signIn}
          />
          <p className="forgot-password-link"> Forgot your password? </p>
          <p className="facebook-link"> CONNECT WITH FACEBOOK </p>
          <hr className="separator" />
          <p className="sign-up-link"> SIGN UP </p>
        </div>
      </LandingLayout>
    );
  }
}

LoginPage.propTypes = {
  signIn: func.isRequired,
}

const mapStateToProps = ({ session }) => ({
  isLoading: session.isLoading,
  errors: session.errors,
});

export default connect(mapStateToProps, { signIn })(LoginPage);
