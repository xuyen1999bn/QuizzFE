import { message } from "antd";
import { createGameFailed, createGamePending, createGameSuccess, editGameFailed, editGamePending, editGameSuccess, getGameByIdFailed, getGameByIdPending, getGameByIdSuccess, getGamesFailed, getGamesPending, getGamesSuccess, getRankedListFailed, getRankedListPending, getRankedListSuccess } from "../actions/gameAction/gameAction";
import {
    getGameListEffect,
    createGameEffect,
    editGameEffect,
    getGameByIdEffect,
    getRankedListEffect,
} from "../effects/gameEffect";
import { rankDefault } from '../../constants/rank';

const messKeyCreate = 'messKeyCreate';

export const getGameList = async (dispatch) => {
    dispatch(getGamesPending());
    const res = await getGameListEffect();
    if (res && res.status >= 200 && res.status <= 300) {
        const game = res?.data?.games;
        dispatch(getGamesSuccess(game || []));
    } else {
        dispatch(getGamesFailed(res?.data?.message || 'Get Game List Failed'));
    }
};

export const getGameById = async (dispatch, { gameId }, user) => {
    dispatch(getGameByIdPending());
    const res = await getGameByIdEffect(gameId);
    if (res && res.status >= 200 && res.status <= 300) {
        const data = res?.data;
        if (user._id !== data.player) {
            return {
                result: false,
            }
        }
        if (data.isFinished) {
            return {
                result: false,
            }
        }
        dispatch(getGameByIdSuccess(data));
        return {
            result: true,
        }
    } else {
        dispatch(getGameByIdFailed(res?.data?.message || 'Get A Game Failed'));
        return {
            result: false,
        }
    }
};


export const createGame = async (dispatch, data) => {
    dispatch(createGamePending());
    const res = await createGameEffect(data);
    if (res && res.status >= 200 && res.status <= 300) {
        const game = res.data;
        dispatch(createGameSuccess());
        return {
            result: true,
            game: game
        };
    } else {
        dispatch(createGameFailed('Create Failed'));
        return {
            result: false
        };
    }
}

export const editGame = async (dispatchEdit, data) => {
    dispatchEdit(editGamePending());
    const res = await editGameEffect(data);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatchEdit(editGameSuccess(res.data.game));
        return {
            result: true,
            checked: res.data.isCorrect
        }
    } else {
        dispatchEdit(editGameFailed('Updating Failed'));
        message.error({
            key: messKeyCreate,
            content: 'Updating failed',
            duration: 2
        });
        return {
            result: false,
        }
    }
}


export const getRankedList = async (dispatch, { subjectId }) => {
    dispatch(getRankedListPending());
    const res = await getRankedListEffect(subjectId);
    if (res && res.status >= 200 && res.status <= 300) {
        const ranks = setRankDefaults(res.data);
        dispatch(getRankedListSuccess(ranks));
        return {
            result: true
        }
    } else {
        dispatch(getRankedListFailed('Get Ranked Failed'));
        return {
            result: false
        }
    }
}

const setRankDefaults = (ranks) => {
    if (ranks?.length < 10) {
        const rankPush = rankDefault.length - ranks.length;
        for (let i = 0; i < rankPush; i++) {
            ranks.push(rankDefault[i]);
        }
        return ranks.sort(function (b, a) {
            return parseFloat(a.score) - parseFloat(b.score);
        });
    }
    return ranks.sort(function (b, a) {
        return parseFloat(a.score) - parseFloat(b.score);
    });
}