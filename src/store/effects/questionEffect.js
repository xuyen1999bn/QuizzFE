import { axiosInstance } from "../../configs/axiosInstance";

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getQuestionListEffect = async () => {
    let res = {};
    try {
        res = await axiosInstance.get(
            "/question",
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const getQuestionListNotActiveEffect = async () => {
    let res = {};
    try {
        res = await axiosInstance.get(
            "/question/pending",
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const getQuestionByIdEffect = async (questionId) => {
    let res = {};
    try {
        res = await axiosInstance.get(
            "/question/" + questionId,
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};


export const deleteQuestionEffect = async (questionId) => {
    let res = {};
    try {
        res = await axiosInstance.delete(
            "/question/" + questionId
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const activeQuestionEffect = async (questionId) => {
    let res = {};
    try {
        res = await axiosInstance.put(
            "question/activate/" + questionId
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};


export const createQuestionEffect = async (data) => {
    let res = {};
    data.point = getPoint(data.level);
    try {
        res = await axiosInstance.post("/question", data, config);
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const editQuestionEffect = async (data) => {
    let res = {};
    data.point = getPoint(data.level);
    try {
        res = await axiosInstance.put("/question/" + data.questionId, data, config);
    } catch (error) {
        res = error.response;
    }
    return res;
};

const getPoint = (levelQuestion) => {
    switch (levelQuestion) {
        case "EASY":
            return 10;
        case "MEDIUM":
            return 20;
        case "HARD":
            return 50;
        default:
            return 10;
    }
}