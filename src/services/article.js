import { API_BASED_ERROR_MESSAGE } from "constants";
import axiosInstance from "./axiosService";

export const publishArticle = async (data) => {
    try {
      let response = await axiosInstance({
        method: 'POST',
        url: 'writer/article/publish',
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

  export const getArticles = async () => {
    try {
      let response = await axiosInstance({
        method: 'GET',
        url: 'reader/article/view',
        params: {
          categoryId:1,
          pageNo:1,
          pageSize:100
        }
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