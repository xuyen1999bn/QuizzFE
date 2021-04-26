import {
    GetSubjectsFailed,
    GetSubjectsPending,
    GetSubjectsSuccess,
    CreateSubjectFailed,
    CreateSubjectPending,
    CreateSubjectSuccess,
    DeleteSubjectFailed,
    DeleteSubjectPending,
    DeleteSubjectSuccess,
    EditSubjectFailed,
    EditSubjectPending,
    EditSubjectSuccess,
    GetSubjectSingleSuccess,
    GetSubjectSingleFailed,
    GetSubjectSinglePending,
} from "../actions/subjectAction/subjectActionType";

export const initSubjectListState = {
    subjects: [],
    pending: false,
    error: ''
};

export function subjectReducer(state = initSubjectListState, action) {
    const { type, payload } = action;
    switch (type) {
        // Subject
        case GetSubjectsPending:
            return {
                ...state,
                pending: true,
            };
        case GetSubjectsFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetSubjectsSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                subjects: payload,
            };
        default:
            return state;
    }
}


export const initSubjectSingleState = {
    subject: null,
    pending: false,
    error: ''
};

export function subjectSingleReducer(state = initSubjectSingleState, action) {
    const { type, payload } = action;
    switch (type) {
        // Subject
        case GetSubjectSinglePending:
            return {
                ...state,
                pending: true,
            };
        case GetSubjectSingleFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetSubjectSingleSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                subject: payload,
            };
        default:
            return state;
    }
}

export const initSubjectCreateState = {
    pending: false,
    error: null,
};

export const subjectCreateReducer = (state = initSubjectCreateState, action) => {
    const { type, payload } = action;
    switch (type) {
        // create subject
        case CreateSubjectPending:
            return {
                ...state,
                pending: true,
                error: {},
            };
        case CreateSubjectFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case CreateSubjectSuccess:
            return {
                ...state,
                error: {},
                pending: false,
            }
        default:
            return { ...state };
    }
}

export const initSubjectEditState = {
    pending: false,
    error: null,
};

export const subjectEditReducer = (state = initSubjectEditState, action) => {
    const { type, payload } = action;
    switch (type) {
        // edit subject
        case EditSubjectPending:
            return {
                ...state,
                pending: true,
            };
        case EditSubjectFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case EditSubjectSuccess:
            return {
                ...state,
                error: {},
                pending: false,
            }
        default:
            return { ...state };
    }
}

export const initSubjectDeleteState = {
    pending: false,
    error: null,
    subjectDeleted: {}
};

export const subjectDeleteReducer = (state = initSubjectDeleteState, action) => {
    const { type, payload } = action;
    switch (type) {
        // delete subject
        case DeleteSubjectPending:
            return {
                ...state,
                pending: true,
            };
        case DeleteSubjectFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case DeleteSubjectSuccess:
            return {
                ...state,
                error: {},
                pending: false,
                subjectDeleted: payload
            }
        default:
            return { ...state };
    }
}