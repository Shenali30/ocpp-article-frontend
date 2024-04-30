import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const getCelebrants = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'celebrations/view',
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
