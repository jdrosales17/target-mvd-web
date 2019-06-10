import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool, array } from 'prop-types';

import LandingLayout from '../components/LandingLayout';
import Smilies from '../assets/images/Smilies';
import LoginForm from '../components/LoginForm';
import { signIn } from '../actions/sessionActions';
import routes from '../constants/routes';

const LoginPage = (props) => {
  const { signIn, isLoading, errors } = props;

  return (
    <LandingLayout>
      <div className="landing-sub-container">
        <Smilies className="landing-logo" />
        <h1 className="landing-header"> TARGET MVD </h1>
        <h2 className="landing-subtitle"> Find people near you & Connect </h2>
        <p className="landing-description">
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
        <Link className="sign-up-link" to={routes.register}> SIGN UP </Link>
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
