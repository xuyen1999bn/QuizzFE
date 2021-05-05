import {
    GetSubjectsPending,
    GetSubjectsSuccess,
    GetSubjectsFailed,
    CreateSubjectFailed,
    CreateSubjectPending,
    CreateSubjectSuccess,
    DeleteSubjectFailed,
    DeleteSubjectPending,
    DeleteSubjectSuccess,
    EditSubjectFailed,
    EditSubjectPending,
    EditSubjectSuccess,
    GetSubjectByNameFailed,
    GetSubjectByNamePending,
    GetSubjectByNameSuccess,
    GetSubjectSingleSuccess,
    GetSubjectSingleFailed,
    GetSubjectSinglePending,    
} from "./subjectActionType";

// GetSubjects
export function getSubjectsPending() {
    return {
        type: GetSubjectsPending,
    };
}

export function getSubjectsFailed(error) {
    return {
        type: GetSubjectsFailed,
        payload: error,
    };
}

export function getSubjectsSuccess(subjects) {
    return {
        type: GetSubjectsSuccess,
        payload: subjects,
    };
}

// Get a Subject
export function getSubjectSinglePending() {
    return {
        type: GetSubjectSinglePending,
    };
}

export function getSubjectSingleFailed(error) {
    return {
        type: GetSubjectSingleFailed,
        payload: error,
    };
}

export function getSubjectSingleSuccess(subject) {
    return {
        type: GetSubjectSingleSuccess,
        payload: subject,
    };
}

// subject create
export function createSubjectPending() {
    return {
        type: CreateSubjectPending,
    };
}

export function createSubjectSuccess(subjects) {
    return {
        type: CreateSubjectSuccess,
        payload: subjects
    };
}

export function createSubjectFailed(err) {
    return {
        type: CreateSubjectFailed,
        payload: err
    };
}


// subject edit
export function editSubjectPending() {
    return {
        type: EditSubjectPending,
    };
}

export function editSubjectSuccess(subjects) {
    return {
        type: EditSubjectSuccess,
        payload: subjects
    };
}

export function editSubjectFailed(err) {
    return {
        type: EditSubjectFailed,
        payload: err
    };
}


// subject find one
export function getSubjectByNamePending() {
    return {
        type: GetSubjectByNamePending,
    };
}

export function getSubjectByNameSuccess(subjects) {
    return {
        type: GetSubjectByNameSuccess,
        payload: subjects
    };
}

export function getSubjectByNameFailed(err) {
    return {
        type: GetSubjectByNameFailed,
        payload: err
    };
}


// subject delete
export function deleteSubjectPending() {
    return {
        type: DeleteSubjectPending,
    };
}

export function deleteSubjectSuccess(subjectId) {
    return {
        type: DeleteSubjectSuccess,
        payload: subjectId
    };
}

export function deleteSubjectFailed(err) {
    return {
        type: DeleteSubjectFailed,
        payload: err
    };
}