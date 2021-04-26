import React, { useReducer } from "react";
import {
    subjectReducer,
    initSubjectListState,
    initSubjectCreateState,
    initSubjectDeleteState,
    initSubjectEditState,
    subjectCreateReducer,
    subjectDeleteReducer,
    subjectEditReducer,
    initSubjectSingleState,
    subjectSingleReducer,
} from "../reducer/subjectReducer";

const SubjectStateContext = React.createContext();
const Provider = SubjectStateContext.Provider;

export function GetSubjectStateContext() {
    const context = React.useContext(SubjectStateContext);
    if (context === undefined) {
        throw new Error("SubjectStateContext not found");
    }
    return context;
}

// Provider
export const SubjectStateProvider = ({ children }) => {
    const [subjectListState, listDispatch] = useReducer(subjectReducer, initSubjectListState);
    const [subjectDeleteState, deleteDispatch] = useReducer(subjectDeleteReducer, initSubjectDeleteState);
    const [subjectEditState, editDispatch] = useReducer(subjectEditReducer, initSubjectEditState);
    const [subjectCreateState, createDispatch] = useReducer(subjectCreateReducer, initSubjectCreateState);
    const [subjectSingleState, singleDispatch] = useReducer(subjectSingleReducer, initSubjectSingleState);

    return <Provider value={{
        subjectListState, listDispatch,
        subjectDeleteState, deleteDispatch,
        subjectEditState, editDispatch,
        subjectCreateState, createDispatch,
        subjectSingleState, singleDispatch
    }}>{children}</Provider>;
};
