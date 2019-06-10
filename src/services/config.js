import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { store } from '../store/config';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

axiosInstance.interceptors.response.use(
  ({ data, headers, status }) => ({ data: camelizeKeys(data.data), headers, status }),
  ({ response: { data, status } }) => {
    const error = { errors: camelizeKeys(data.errors), status };
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const { session: { authHeaders: { token, ...restHeaders } } } = store.getState();
    const headers = { 'access-token': token, ...restHeaders };
    const data = decamelizeKeys({ ...config.data });
    return { ...config, data, headers };
  },
  error => Promise.reject(error)
);

export default axiosInstance;
