import {
    GetQuestionsPending,
    GetQuestionsSuccess,
    GetQuestionsFailed,
    CreateQuestionFailed,
    CreateQuestionPending,
    CreateQuestionSuccess,
    DeleteQuestionFailed,
    DeleteQuestionPending,
    DeleteQuestionSuccess,
    EditQuestionFailed,
    EditQuestionPending,
    EditQuestionSuccess,
    GetQuestionByIdFailed,
    GetQuestionByIdPending,
    GetQuestionByIdSuccess,
    GetQuestionsNotActivePending,
    GetQuestionsNotActiveFailed,
    GetQuestionsNotActiveSuccess,
    ActiveQuestionSuccess,
    ActiveQuestionFailed,
    ActiveQuestionPending,    
} from "./questionActionType";

// GetQuestions
export function getQuestionsPending() {
    return {
        type: GetQuestionsPending,
    };
}

export function getQuestionsFailed(error) {
    return {
        type: GetQuestionsFailed,
        payload: error,
    };
}

export function getQuestionsSuccess(questions) {
    return {
        type: GetQuestionsSuccess,
        payload: questions,
    };
}

// GetQuestions Not Active
export function getQuestionsNotActivePending() {
    return {
        type: GetQuestionsNotActivePending,
    };
}

export function getQuestionsNotActiveFailed(error) {
    return {
        type: GetQuestionsNotActiveFailed,
        payload: error,
    };
}

export function getQuestionsNotActiveSuccess(questions) {
    return {
        type: GetQuestionsNotActiveSuccess,
        payload: questions,
    };
}


// question create
export function createQuestionPending() {
    return {
        type: CreateQuestionPending,
    };
}

export function createQuestionSuccess(questions) {
    return {
        type: CreateQuestionSuccess,
        payload: questions
    };
}

export function createQuestionFailed(err) {
    return {
        type: CreateQuestionFailed,
        payload: err
    };
}


// question edit
export function editQuestionPending() {
    return {
        type: EditQuestionPending,
    };
}

export function editQuestionSuccess(questions) {
    return {
        type: EditQuestionSuccess,
        payload: questions
    };
}

export function editQuestionFailed(err) {
    return {
        type: EditQuestionFailed,
        payload: err
    };
}


// question find one
export function getQuestionByIdPending() {
    return {
        type: GetQuestionByIdPending,
    };
}

export function getQuestionByIdSuccess(question) {
    return {
        type: GetQuestionByIdSuccess,
        payload: question
    };
}

export function getQuestionByIdFailed(err) {
    return {
        type: GetQuestionByIdFailed,
        payload: err
    };
}

// question delete
export function deleteQuestionPending() {
    return {
        type: DeleteQuestionPending,
    };
}

export function deleteQuestionSuccess(questionId) {
    return {
        type: DeleteQuestionSuccess,
        payload: questionId
    };
}

export function deleteQuestionFailed(err) {
    return {
        type: DeleteQuestionFailed,
        payload: err
    };
}


// question delete
export function activeQuestionPending() {
    return {
        type: ActiveQuestionPending,
    };
}

export function activeQuestionSuccess(questionId) {
    return {
        type: ActiveQuestionSuccess,
        payload: questionId
    };
}

export function activeQuestionFailed(err) {
    return {
        type: ActiveQuestionFailed,
        payload: err
    };
}