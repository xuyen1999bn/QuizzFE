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
    UpdateQuestionPosition
} from "./gameActionType";

// GetGames
export function getGamesPending() {
    return {
        type: GetGamesPending,
    };
}

export function getGamesFailed(error) {
    return {
        type: GetGamesFailed,
        payload: error,
    };
}

export function getGamesSuccess(games) {
    return {
        type: GetGamesSuccess,
        payload: games,
    };
}


// game create
export function createGamePending() {
    return {
        type: CreateGamePending,
    };
}

export function createGameSuccess(games) {
    return {
        type: CreateGameSuccess,
        payload: games
    };
}

export function createGameFailed(err) {
    return {
        type: CreateGameFailed,
        payload: err
    };
}


// game edit
export function editGamePending() {
    return {
        type: EditGamePending,
    };
}

export function editGameSuccess(game) {
    return {
        type: EditGameSuccess,
        payload: game
    };
}

export function editGameFailed(err) {
    return {
        type: EditGameFailed,
        payload: err
    };
}


// game find one
export function getGameByIdPending() {
    return {
        type: GetGameByIdPending,
    };
}

export function getGameByIdSuccess(game) {
    return {
        type: GetGameByIdSuccess,
        payload: game
    };
}

export function getGameByIdFailed(err) {
    return {
        type: GetGameByIdFailed,
        payload: err
    };
}
export function updateQuestionPosition(positionQuestion) {
    return {
        type: UpdateQuestionPosition,
        payload: positionQuestion
    }
}

// get rank list
export function getRankedListPending() {
    return {
        type: GetRankedListPending,
    };
}

export function getRankedListSuccess(ranks) {
    return {
        type: GetRankedListSuccess,
        payload: ranks
    };
}

export function getRankedListFailed(err) {
    return {
        type: GetRankedListFailed,
        payload: err
    };
}