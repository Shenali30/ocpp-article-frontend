import { API_BASED_ERROR_MESSAGE } from 'constants';
import axiosInstance from './axiosService';

export const checkBookAvailability = async (bookId) => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'family-books/number/check',
      params: {
        bookNumber: bookId,
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

export const saveFamilyBook = async (data) => {
  try {
    let response = await axiosInstance({
      method: 'POST',
      url: 'family-books/add-update',
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

export const getFamilyBookById = async (bookId) => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'family-books/view',
      params: {
        id: bookId,
      },
    })
      .then((response) => {
        let result = response.status === 200 ? response : null;
        return result.data;
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

export const searchFamilyBooks = async (key, value) => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'family-books/search',
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

export const deleteBooks = async (bookIds) => {
  try {
    let response = await axiosInstance({
      method: 'DELETE',
      url: 'family-books/delete',
      data: {
        familyBookNumberListToDelete: bookIds,
      },
    })
      .then((response) => {
        let result = response.status === 200 ? response : null;
        return result.data;
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
