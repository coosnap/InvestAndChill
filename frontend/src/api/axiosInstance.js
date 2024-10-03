import axios from 'axios';
import { getCookie, setCookie } from '@/lib/utils';
import { refreshTokenAPI } from './auth';

const baseURL = import.meta.env.VITE_REACT_APP_API;
const token = getCookie('access_token') || '';
const refrToken = getCookie('refresh_token') || '';

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

axiosInstance.interceptors.request.use(
  (request) => {
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await refreshTokenAPI(refrToken);
        const { accessToken, refreshToken } = response.data;
        let exp = jwtDecode(accessToken)?.exp;
        let d = new Date(exp * 1000);
        setCookie('access_token', accessToken, { path: '/', expires: d });
        setCookie('refresh_token', refreshToken, { path: '/', expires: d });
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
