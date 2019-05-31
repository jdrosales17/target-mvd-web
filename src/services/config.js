import axios from 'axios';

import { store } from '../store/config';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
);

axiosInstance.interceptors.request.use(
  (config) => {
    const { session: { authHeaders: { token, ...restHeaders } } } = store.getState();
    const headers = { 'access-token': token, ...restHeaders };
    return { ...config, headers };
  },
  error => Promise.reject(error)
);

export default axiosInstance;
