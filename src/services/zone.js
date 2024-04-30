import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const getAllZones = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'zones/list',
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

export const updateZone = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'zones/add-update',
      data: {
        zoneList: data,
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

export const printZones = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'zones/print',
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
