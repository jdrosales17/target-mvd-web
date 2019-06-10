import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool, array } from 'prop-types';

import LandingLayout from '../components/LandingLayout';
import RegisterForm from '../components/RegisterForm';
import { signUp } from '../actions/sessionActions';
import routes from '../constants/routes';

const RegisterPage = (props) => {
  const { signUp, isLoading, errors } = props;

  return (
    <LandingLayout>
      <div className="landing-sub-container">
        <h1 className="landing-header"> SIGN UP </h1>
        <RegisterForm
          isLoading={isLoading}
          errors={errors}
          onSubmit={signUp}
        />
        <hr className="separator" />
        <Link className="sign-in-link" to={routes.login}> SIGN IN </Link>
      </div>
    </LandingLayout>
  );
};

RegisterPage.propTypes = {
  signUp: func.isRequired,
  isLoading: bool.isRequired,
  errors: array.isRequired,
};

const mapStateToProps = ({ session }) => ({
  isLoading: session.isLoading,
  errors: session.errors,
});

export default connect(mapStateToProps, { signUp })(RegisterPage);
