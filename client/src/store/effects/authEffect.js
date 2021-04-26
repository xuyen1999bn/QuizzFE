import { axiosInstance, axiosInstanceAuth } from "../../configs/axiosInstance";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const authEffect = async () => {
  let res = {};
  try {
    res = await axiosInstance.get("/profile/me");
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const loginEffect = async (data) => {
  const dataSend = {
    email: data.email,
    password: data.password
  };
  let res = {};
  try {
    res = await axiosInstanceAuth.post(
      "/auth/login",
      dataSend,
      config,
    );
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const registerEffect = async (data) => {
  let res = {};
  debugger;
  const dataSend = {
    email: data.email,
    name: data.username,
    password: data.password
  };
  try {
    res = await axiosInstanceAuth.post(
      "/auth/signup",
      dataSend,
      config,
    );
  } catch (error) {
    res = error.response;
  }
  return res;
};
