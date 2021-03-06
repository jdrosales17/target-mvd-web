import axios from './config';

export const signIn = credentials => (
  axios.post('/auth/sign_in', credentials)
);

export const signUp = user => (
  axios.post('/auth', user)
);
