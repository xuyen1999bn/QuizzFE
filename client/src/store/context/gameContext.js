import React, { useReducer } from "react";
import {
    gameCreateReducer,
    gameEditReducer,
    gameReducer,
    gameSingleReducer,
    initGameCreateState,
    initGameEditState,
    initGameListState,
    initGameSingleState,
    rankReducer,
    initRankState
} from "../reducer/gameReducer";

const GameStateContext = React.createContext();
const Provider = GameStateContext.Provider;

export function GetGameStateContext() {
    const context = React.useContext(GameStateContext);
    if (context === undefined) {
        throw new Error("GameStateContext not found");
    }
    return context;
}

// Provider
export const GameStateProvider = ({ children }) => {
    const [gameListState, listDispatch] = useReducer(gameReducer, initGameListState);
    const [gameSingleState, singleDispatch] = useReducer(gameSingleReducer, initGameSingleState);
    const [gameEditState, editDispatch] = useReducer(gameEditReducer, initGameEditState);
    const [gameCreateState, createDispatch] = useReducer(gameCreateReducer, initGameCreateState);
    const [rankState, rankDispatch] = useReducer(rankReducer, initRankState);

    return <Provider value={{
        gameListState, listDispatch,
        gameEditState, editDispatch,
        gameCreateState, createDispatch,
        gameSingleState, singleDispatch,
        rankState, rankDispatch
    }}>{children}</Provider>;
};
