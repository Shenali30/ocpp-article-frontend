import axiosInstance from './axiosService';

export const getFamilyBookDropdownValues = async () => {
  try {
    let response = await axiosInstance({
      method: 'GET',
      url: 'family-books/drop-down-values',
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

export const getUserDropdownValues = async () => {
    try {
      let response = await axiosInstance({
        method: 'GET',
        url: 'users/drop-down-values',
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
