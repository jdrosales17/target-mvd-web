import axios from "./config";

export const signIn = credentials => {
  return axios.post('/auth/sign_in', credentials);
}
