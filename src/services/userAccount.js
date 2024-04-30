import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const checkUserIdAvailability = async (username, email) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'users/registration/check',
      data: { username, email },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const createSystemUser = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'users/create',
      data: { ...data },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const updateSystemUser = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'PATCH',
      url: 'users/edit',
      data: { ...data },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const updateUserProfile = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'PATCH',
      url: 'this-user/edit',
      data: { ...data },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const getUserProfile = async (username, email) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'this-user/profile',
      data: { username, email },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const getAllUsersList = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'users/view',
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const resetPasswordRequest = async (username, email) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'users/reset-password',
      data: { username, email },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const changeUserPassword = async (username, email, currentPassword, newPassword, reEnteredNewPassword) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'this-user/change-password',
      data: { username, email, currentPassword, newPassword, reEnteredNewPassword },
      headers: { 'user-id': username },
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result?.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return error?.response?.data?.responseHeader?.displayDesc || API_BASED_ERROR_MESSAGE;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};
