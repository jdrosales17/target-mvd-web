import React from 'react';
import { connect } from 'react-redux';
import { func, bool, array } from 'prop-types';

import LandingLayout from '../components/LandingLayout';
import Smilies from '../assets/images/Smilies';
import LoginForm from '../components/LoginForm';
import { signIn } from '../actions/sessionActions';

const LoginPage = (props) => {
  const { signIn, isLoading, errors } = props;

  return (
    <LandingLayout>
      <div className="login-container">
        <Smilies className="app-logo" />
        <h1 className="app-header"> TARGET MVD </h1>
        <h2 className="app-subtitle"> Find people near you & Connect </h2>
        <p className="app-description">
          Create a target wherever on the map, specify your
          interest (Travel, Dating, Music, etc.) and start
          conecting with others who share your interest.
        </p>
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
};

LoginPage.propTypes = {
  signIn: func.isRequired,
  isLoading: bool.isRequired,
  errors: array.isRequired,
};

const mapStateToProps = ({ session }) => ({
  isLoading: session.isLoading,
  errors: session.errors,
});

export default connect(mapStateToProps, { signIn })(LoginPage);
