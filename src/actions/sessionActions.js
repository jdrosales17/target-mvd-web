import {
  SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
} from './actionTypes';

import * as sessionService from '../services/session';

export const signInStart = () => ({ type: SIGN_IN_START });

export const signInSuccess = (headers, user) => ({
  type: SIGN_IN_SUCCESS,
  headers,
  user,
});

export const signInFail = errors => ({
  type: SIGN_IN_FAIL,
  errors,
});

export const signUpStart = () => ({ type: SIGN_UP_START });

export const signUpSuccess = (headers, user) => ({
  type: SIGN_UP_SUCCESS,
  headers,
  user,
});

export const signUpFail = errors => ({
  type: SIGN_UP_FAIL,
  errors,
});

export const signIn = credentials => async (dispatch) => {
  dispatch(signInStart());
  try {
    const {
      headers: { 'access-token': token, client, uid },
      data
    } = await sessionService.signIn(credentials);
    dispatch(signInSuccess({ token, client, uid }, data));
  } catch ({ errors }) {
    dispatch(signInFail(errors));
  }
};

export const signUp = user => async (dispatch) => {
  dispatch(signUpStart());
  try {
    const response = await sessionService.signUp(user);
    dispatch(signUpSuccess(response));
  } catch ({ errors }) {
    dispatch(signUpFail(errors.fullMessages));
  }
};
