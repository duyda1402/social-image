import axios from "axios";

export const apiUnsplash = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: 100000,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_CLIENT_ID}`,
  },
});

apiUnsplash.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiUnsplash.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  }
);
