import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

export default axiosInstance;
