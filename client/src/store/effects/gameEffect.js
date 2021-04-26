import { axiosInstance } from "../../configs/axiosInstance";

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getGameListEffect = async () => {
    let res = {};
    try {
        res = await axiosInstance.get(
            "/game",
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const getGameByIdEffect = async (gameId) => {
    let res = {};
    try {
        res = await axiosInstance.get(
            "/game/" + gameId,
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const createGameEffect = async (data) => {
    let res = {};
    try {
        res = await axiosInstance.post("/game", {
            subject: data._id
        }, config);
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const editGameEffect = async (data) => {
    let res = {};
    try {
        res = await axiosInstance.put("/game/" + data.gameId, data, config);
    } catch (error) {
        res = error.response;
    }
    return res;
};

export const getRankedListEffect = async (subjectId) => {
    let res = {};
    try {
        res = await axiosInstance.get(
            "/game/rank/" + subjectId,
        );
    } catch (error) {
        res = error.response;
    }
    return res;
};

