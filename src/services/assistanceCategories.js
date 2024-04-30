import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const searchFamilyBooksAssistanceCategories = async (key, value) => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'assistance-categories/search',
      params: {
        key: key,
        value: value,
      },
    })
      .then((response) => {
        let result = response.status === 200 ? response : null;
        return result.data;
      })
      .catch((error) => {
        console.log('error => ', error);
        return;
      });
    return response;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const getCategories = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'assistance-categories/view',
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

export const addEditCategory = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'assistance-categories/add-update',
      data: {
        ...data,
      },
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

export const deleteCategory = async (id) => {
  try {
    let response = await axiosInstance({
      method: 'DELETE',
      url: 'assistance-categories/delete',
      params: {
        id: id,
      },
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

export const printAssistanceData = async (key, value) => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'assistance-categories/print',
      params: {
        church: `St. Joseph's Church, Kanuwana`,
        key,
        value,
      },
      responseType: 'blob',
    })
      .then((response) => {
        let result = response?.status === 200 ? response : null;
        return result;
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
