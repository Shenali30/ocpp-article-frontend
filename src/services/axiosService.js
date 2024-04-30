import axios from 'axios';
import store from 'redux/store';
import { setAuthFailAndLogout, updateTokens } from 'redux/userSlice';
import { API_BASE_URL } from 'services';
import { checkAuthRefreshToken } from './userAuth';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let useAuthData = store.getState()?.userAuthDetails;
    let authToken = useAuthData?.auth?.token?.accessToken;
    let userId = useAuthData?.auth?.user?.username;
    config.headers['Authorization'] = `Bearer ${authToken}`;
    if(userId) config.headers['user-id'] = userId;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('ins response => ', response);
    return response;
  },
  async (error) => {
    console.log('ins error => ', error);
    let originalRequest = error?.config;
    if (
      (error?.response?.status === 401 || error?.response?.status === 403 || error?.response?.data?.responseHeader?.responseDesc === 'Invalid Token. Access Denied') &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const dispatch = store.dispatch;

      let useAuthData = store.getState()?.userAuthDetails;
      let userId = useAuthData?.auth?.user?.username;
      let refreshToken = useAuthData?.auth?.token?.refreshToken;

      console.log('refreshToken token => ', refreshToken);

      await checkAuthRefreshToken(refreshToken, userId)
        .then((res) => {
          console.log('new token response => ', res?.tokenDto?.accessToken);
          if (res) {
            dispatch(updateTokens({ tokens: res.tokenDto }));
          } else {
            dispatch(setAuthFailAndLogout());
            window.location.href = '/';
          }
        })
        .catch((error) => {
          dispatch(setAuthFailAndLogout());
          window.location.href = '/';
        });
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
