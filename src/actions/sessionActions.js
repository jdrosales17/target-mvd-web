import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAIL } from './actionTypes';
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

export const signIn = credentials => async (dispatch) => {
  dispatch(signInStart());
  try {
    const {
      headers: { 'access-token': token, client, uid },
      data: { data }
    } = await sessionService.signIn(credentials);
    dispatch(signInSuccess({ token, client, uid }, data));
  } catch ({ data: { errors } }) {
    dispatch(signInFail(errors));
  }
};
