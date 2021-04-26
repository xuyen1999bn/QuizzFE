import { axiosInstance } from "../../configs/axiosInstance";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getSubjectListEffect = async () => {
  let res = {};
  try {
    res = await axiosInstance.get(
      "/subject",
    );
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const geSubjectSingleEffect = async (subjectId) => {
  let res = {};
  try {
    res = await axiosInstance.get(
      "/subject/" + subjectId,
    );
  } catch (error) {
    res = error.response;
  }
  return res;
};



export const deleteSubjectEffect = async (subjectId) => {
  let res = {};
  try {
    res = await axiosInstance.delete(
      "/subject/" + subjectId
    );
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const createSubjectEffect = async (data) => {
  let res = {};
  try {
    res = await axiosInstance.post("/subject", data, config);
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const editSubjectEffect = async (data) => {
  let res = {};
  try {
    res = await axiosInstance.put("/subject/" + data.subjectId, data, config);
  } catch (error) {
    res = error.response;
  }
  return res;
};