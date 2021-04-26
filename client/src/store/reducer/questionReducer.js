import {
    GetQuestionsFailed,
    GetQuestionsPending,
    GetQuestionsSuccess,
    CreateQuestionFailed,
    CreateQuestionPending,
    CreateQuestionSuccess,
    DeleteQuestionFailed,
    DeleteQuestionPending,
    DeleteQuestionSuccess,
    EditQuestionFailed,
    EditQuestionPending,
    EditQuestionSuccess,
    GetQuestionByIdPending,
    GetQuestionByIdFailed,
    GetQuestionByIdSuccess,
    GetQuestionsNotActivePending,
    GetQuestionsNotActiveSuccess,
    GetQuestionsNotActiveFailed,
    ActiveQuestionPending,
    ActiveQuestionSuccess,
    ActiveQuestionFailed,
} from "../actions/questionAction/questionActionType";

export const initQuestionListState = {
    questions: [],
    pending: false,
    error: ''
};

export function questionReducer(state = initQuestionListState, action) {
    const { type, payload } = action;
    switch (type) {
        // Question
        case GetQuestionsPending:
            return {
                ...state,
                pending: true,
            };
        case GetQuestionsFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetQuestionsSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                questions: payload,
            };
        default:
            return state;
    }
}


export const initQuestionListNotActiveState = {
    pending: false,
    error: '',
    questions: []
};

export function questionNotActiveReducer(state = initQuestionListNotActiveState, action) {
    const { type, payload } = action;
    switch (type) {
        // Question
        case GetQuestionsNotActivePending:
            return {
                ...state,
                pending: true,
            };
        case GetQuestionsNotActiveFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetQuestionsNotActiveSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                questions: payload,
            };
        default:
            return state;
    }
}

export const initQuestionSingleState = {
    question: null,
    pending: false,
    error: ''
};

export function questionSingleReducer(state = initQuestionSingleState, action) {
    const { type, payload } = action;
    switch (type) {
        // Question
        case GetQuestionByIdPending:
            return {
                ...state,
                pending: true,
            };
        case GetQuestionByIdFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case GetQuestionByIdSuccess:
            return {
                ...state,
                error: '',
                pending: false,
                question: payload,
            };
        default:
            return state;
    }
}


export const initQuestionCreateState = {
    pending: false,
    error: null,
};

export const questionCreateReducer = (state = initQuestionCreateState, action) => {
    const { type, payload } = action;
    switch (type) {
        // create question
        case CreateQuestionPending:
            return {
                ...state,
                pending: true,
                error: {},
            };
        case CreateQuestionFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case CreateQuestionSuccess:
            return {
                ...state,
                error: {},
                pending: false,
            }
        default:
            return { ...state };
    }
}

export const initQuestionEditState = {
    pending: false,
    error: null,
};

export const questionEditReducer = (state = initQuestionEditState, action) => {
    debugger;
    const { type, payload } = action;
    switch (type) {
        // edit question
        case EditQuestionPending:
            return {
                ...state,
                pending: true,
            };
        case EditQuestionFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case EditQuestionSuccess:
            return {
                ...state,
                error: {},
                pending: false,
            }
        default:
            return { ...state };
    }
}

export const initQuestionDeleteState = {
    pending: false,
    error: null,
    questionDeleted: {}
};

export const questionDeleteReducer = (state = initQuestionDeleteState, action) => {
    const { type, payload } = action;
    switch (type) {
        // delete question
        case DeleteQuestionPending:
            return {
                ...state,
                pending: true,
            };
        case DeleteQuestionFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case DeleteQuestionSuccess:
            return {
                ...state,
                error: {},
                pending: false,
                questionDeleted: payload
            }
        default:
            return { ...state };
    }
}


export const initQuestionActiveState = {
    pending: false,
    error: null,
    questionActive: {}
};

export const questionActiveReducer = (state = initQuestionActiveState, action) => {
    const { type, payload } = action;
    switch (type) {
        // delete question
        case ActiveQuestionPending:
            return {
                ...state,
                pending: true,
            };
        case ActiveQuestionFailed:
            return {
                ...state,
                pending: false,
                error: payload,
            }
        case ActiveQuestionSuccess:
            return {
                ...state,
                error: {},
                pending: false,
                questionActive: payload
            }
        default:
            return { ...state };
    }
}