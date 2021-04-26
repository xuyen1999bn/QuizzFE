import React, { useReducer } from "react";
import {
    questionReducer,
    initQuestionListState,
    initQuestionCreateState,
    initQuestionDeleteState,
    initQuestionEditState,
    initQuestionSingleState,
    questionCreateReducer,
    questionDeleteReducer,
    questionEditReducer,
    questionSingleReducer,
    questionNotActiveReducer,
    initQuestionListNotActiveState,
    initQuestionActiveState,
    questionActiveReducer,
} from "../reducer/questionReducer";

const QuestionStateContext = React.createContext();
const Provider = QuestionStateContext.Provider;

export function GetQuestionStateContext() {
    const context = React.useContext(QuestionStateContext);
    if (context === undefined) {
        throw new Error("QuestionStateContext not found");
    }
    return context;
}

// Provider
export const QuestionStateProvider = ({ children }) => {
    const [questionListState, listDispatch] = useReducer(questionReducer, initQuestionListState);
    const [questionListNotActiveState, listNotActiveDispatch] = useReducer(questionNotActiveReducer, initQuestionListNotActiveState);
    const [questionSingleState, singleDispatch] = useReducer(questionSingleReducer, initQuestionSingleState);
    const [questionDeleteState, deleteDispatch] = useReducer(questionDeleteReducer, initQuestionDeleteState);
    const [questionEditState, editDispatch] = useReducer(questionEditReducer, initQuestionEditState);
    const [questionCreateState, createDispatch] = useReducer(questionCreateReducer, initQuestionCreateState);
    const [questionActiveState, activeDispatch] = useReducer(questionActiveReducer, initQuestionActiveState);

    return <Provider value={{
        questionListState, listDispatch,
        questionDeleteState, deleteDispatch,
        questionEditState, editDispatch,
        questionCreateState, createDispatch,
        questionSingleState, singleDispatch,
        questionListNotActiveState, listNotActiveDispatch,
        questionActiveState, activeDispatch
    }}>{children}</Provider>;
};
