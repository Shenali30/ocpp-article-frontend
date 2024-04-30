import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const getAllNovenas = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'novenas/list',
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

export const updateNovena = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'novenas/add-update',
      data: {
        novenaList: data,
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

export const printNovenas = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'novenas/print',
      params:{
        church: `St. Joseph's Church, Kanuwana`
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
}
