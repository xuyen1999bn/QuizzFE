import Axios from "axios";

export const axiosInstance = Axios.create({
  // baseURL: 'http://localhost:5000/api/v1'
  baseURL: "https://api-for-quizziz-game-v1.herokuapp.com/api/v1",
});

axiosInstance.interceptors.request.use(function (config) {
  const _localToken = localStorage.getItem("token_access");
  if (_localToken) config.headers.Authorization = "Bearer " + _localToken;
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const resError = error.response;
    if (resError?.status === 401) {
      localStorage.removeItem("token_access");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export const axiosInstanceAuth = Axios.create({
  // baseURL: 'http://localhost:5000/api/v1'
  baseURL: "https://api-for-quizziz-game-v1.herokuapp.com/api/v1",
});
