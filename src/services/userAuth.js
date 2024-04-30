import axios from 'axios';
import { API_BASED_ERROR_MESSAGE } from 'constants';
import { API_BASE_URL, TEST_RESPONSES } from 'services';

export const userLogin = async (userId, password, macAddress) => {
  try {
    return TEST_RESPONSES.USER_LOGIN;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const userLogOut = async (username) => {
  try {
    return true;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const checkAuthRefreshToken = async (token, username) => {
  try {
    return TEST_RESPONSES.REFRESH_TOKEN;
  } catch (error) {
    console.log('error => ', error);
  }
};
