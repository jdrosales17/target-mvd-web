import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from './actionTypes';
import * as sessionService from '../services/session';

export const signInStart = () => ({ type: SIGN_IN_START });

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  user,
});

export const signInFail = (errors) => ({
  type: SIGN_IN_FAIL,
  errors,
});

// Thunks
export const signIn = (credentials) => async dispatch => {
  dispatch(signInStart());
  try {
    const { data: { data }} = await sessionService.signIn(credentials);
    dispatch(signInSuccess(data));
  } catch ({ data: { errors }}) {
    dispatch(signInFail(errors));
  }
};
