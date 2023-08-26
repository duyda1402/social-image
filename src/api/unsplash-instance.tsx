import axios from "axios";

export const apiUnsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 100000,
  headers: {
    Authorization: "Client-ID " + import.meta.env.VITE_CLIENT_ID,
  },
});

apiUnsplash.interceptors.request.use(
  function (config) {
    //     config.headers.Authorization =
    //       "Client-ID " + "uowwd1dT98YhLviD2j_J0Q0w4TdC3KLBDeU7Pjm3MEw";
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
