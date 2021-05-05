import {
    CreateGameFailed,
    CreateGamePending,
    CreateGameSuccess,
    EditGameFailed,
    EditGamePending,
    EditGameSuccess,
    GetGameByIdFailed,
    GetGameByIdPending,
    GetGameByIdSuccess,
    GetGamesFailed,
    GetGamesPending,
    GetGamesSuccess,
    GetRankedListFailed,
    GetRankedListPending,
    GetRankedListSuccess,
} from "../actions/gameAction/gameActionType";

export const initGameListState = {
    games: [],
    pending: false,
    error: ''
};

export function gameReducer(state = initGameListState, action) {
    const { type, payload } = action;
    switch (type) {
        // Game
        case GetGamesPending:
            return {
                ...state,
                pending: true,
            };
        case GetGamesFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetGamesSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                games: payload,
            };
        default:
            return state;
    }
}

export const initGameSingleState = {
    game: null,
    pending: false,
    error: '',
};

export function gameSingleReducer(state = initGameSingleState, action) {
    const { type, payload } = action;
    switch (type) {
        // Game
        case GetGameByIdPending:
            return {
                ...state,
                pending: true,
            };
        case GetGameByIdFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetGameByIdSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                game: payload,
                currentQuestionPosition: payload.currentQuestionPosition
            };
        case EditGamePending:
            return {
                ...state,
                pending: true,
            };
        case EditGameFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case EditGameSuccess:
            return {
                ...state,
                error: {},
                pending: false,
                game: payload
            }
        default:
            return state;
    }
}


export const initGameCreateState = {
    pending: false,
    error: null,
};

export const gameCreateReducer = (state = initGameCreateState, action) => {
    const { type, payload } = action;
    switch (type) {
        // create game
        case CreateGamePending:
            return {
                ...state,
                pending: true,
                error: {},
            };
        case CreateGameFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case CreateGameSuccess:
            return {
                ...state,
                error: {},
                pending: false,
            }
        default:
            return { ...state };
    }
}

export const initGameEditState = {
    pending: false,
    error: null,
    game: null
};

export const gameEditReducer = (state = initGameEditState, action) => {
    const { type, payload } = action;
    switch (type) {
        // edit game

        default:
            return { ...state };
    }
}

export const initRankState = {
    pending: false,
    error: null,
    rank: null
};

export const rankReducer = (state = initRankState, action) => {
    const { type, payload } = action;
    switch (type) {
        // edit game
        case GetRankedListPending:
            return {
                ...state,
                pending: true,
            };
        case GetRankedListFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case GetRankedListSuccess:
            return {
                ...state,
                error: null,
                pending: false,
                rank: payload
            }
        default:
            return { ...state };
    }
}
