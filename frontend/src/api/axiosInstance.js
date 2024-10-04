import axios from 'axios';
import { getCookie, setCookie } from '@/lib/utils';
import { refreshTokenAPI } from './auth';

const baseURL = import.meta.env.VITE_REACT_APP_API;
const token = getCookie('access_token') || '';
const refrToken = getCookie('refresh_token') || '';

const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
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
  async (response) => {
    if (response.status === 401) {
      try {
        const resp = await refreshTokenAPI(refrToken);
        const { accessToken, refreshToken } = resp.data;
        let exp = jwtDecode(accessToken)?.exp;
        let d = new Date(exp * 1000);
        setCookie('access_token', accessToken, { path: '/', expires: d });
        setCookie('refresh_token', refreshToken, { path: '/', expires: d });
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return response;
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
