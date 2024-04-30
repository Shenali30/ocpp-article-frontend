import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const getNovenaGraph = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'graph/novena/family',
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

export const getZoneGraph = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'graph/zone/family',
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

export const getAgeGraph = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'graph/age',
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
