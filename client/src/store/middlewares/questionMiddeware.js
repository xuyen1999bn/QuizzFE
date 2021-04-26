import { message } from "antd";
import {
    getQuestionsPending,
    getQuestionsSuccess,
    getQuestionsFailed,
    deleteQuestionFailed,
    deleteQuestionPending,
    deleteQuestionSuccess,
    createQuestionPending,
    createQuestionSuccess,
    createQuestionFailed,
    editQuestionPending,
    editQuestionSuccess,
    editQuestionFailed,
    getQuestionByIdPending,
    getQuestionByIdSuccess,
    getQuestionByIdFailed,
    getQuestionsNotActiveFailed,
    getQuestionsNotActivePending,
    getQuestionsNotActiveSuccess,
    activeQuestionPending,
    activeQuestionFailed,
    activeQuestionSuccess,
} from "../actions/questionAction/questionAction";

import {
    getQuestionListEffect,
    deleteQuestionEffect,
    createQuestionEffect,
    editQuestionEffect,
    getQuestionByIdEffect,
    getQuestionListNotActiveEffect,
    activeQuestionEffect
} from "../effects/questionEffect";

const messKeyCreate = 'messKeyCreate';
const messKeyDelete = 'messKeyDelete';
const messKeyActive = 'messKeyActive';

export const getQuestionList = async (dispatch) => {
    dispatch(getQuestionsPending());
    const res = await getQuestionListEffect();
    if (res && res.status >= 200 && res.status <= 300) {
        const questions = res?.data?.questions;
        dispatch(getQuestionsSuccess(questions || []));
    } else {
        dispatch(getQuestionsFailed(res?.data?.message || 'Get Questions Failed'));
    }
};

export const getQuestionNotActiveList = async (dispatch) => {
    dispatch(getQuestionsNotActivePending());
    const res = await getQuestionListNotActiveEffect();
    if (res && res.status >= 200 && res.status <= 300) {
        const questions = res?.data?.questions;
        dispatch(getQuestionsNotActiveSuccess(questions || []));
    } else {
        dispatch(getQuestionsNotActiveFailed(res?.data?.message || 'Get Questions Failed'));
    }
};

export const getQuestionById = async (dispatch, { questionId }) => {
    dispatch(getQuestionByIdPending());
    const res = await getQuestionByIdEffect(questionId);
    if (res && res.status >= 200 && res.status <= 300) {
        const question = res?.data?.question;
        dispatch(getQuestionByIdSuccess(question || []));
        return true
    } else {
        dispatch(getQuestionByIdFailed(res?.data?.message || 'Get Question Fail'));
        return false
    }
};


export const deleteQuestion = async (dispatch, { questionId }) => {
    message.loading({
        key: messKeyDelete,
        content: 'Deleting ...'
    });
    dispatch(deleteQuestionPending());
    const res = await deleteQuestionEffect(questionId);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(deleteQuestionSuccess(questionId));
        message.success({
            key: messKeyDelete,
            content: 'Delete successfully',
            duration: 2
        });
    } else {
        dispatch(deleteQuestionFailed('Delete Failed'));
        message.error({
            key: messKeyDelete,
            content: 'Delete failed',
            duration: 2
        });
    }
}

export const createQuestion = async (dispatch, data) => {
    message.loading({
        key: messKeyCreate,
        content: 'Creating ...'
    });
    dispatch(createQuestionPending());
    const res = await createQuestionEffect(data);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(createQuestionSuccess());
        message.success({
            key: messKeyCreate,
            content: 'Create successfully',
            duration: 2
        });
        return {
            result: true
        };
    } else {
        dispatch(createQuestionFailed('Create Failed'));
        message.error({
            key: messKeyCreate,
            content: 'Create failed',
            duration: 2
        });
        return {
            result: true
        };
    }
}

export const editQuestion = async (dispatch, data) => {
    message.loading({
        key: messKeyCreate,
        content: 'Updating ...'
    });
    dispatch(editQuestionPending());
    const res = await editQuestionEffect(data);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(editQuestionSuccess());
        message.success({
            key: messKeyCreate,
            content: 'Updating successfully',
            duration: 2
        });
    } else {
        dispatch(editQuestionFailed('Updating Failed'));
        message.error({
            key: messKeyCreate,
            content: 'Updating failed',
            duration: 2
        });
    }
}

export const activeQuestion = async (dispatch, { questionId }) => {
    message.loading({
        key: messKeyActive,
        content: 'activating ...'
    });
    dispatch(activeQuestionPending());
    const res = await activeQuestionEffect(questionId);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(activeQuestionSuccess(questionId));
        message.success({
            key: messKeyActive,
            content: 'active successfully',
            duration: 2
        });
    } else {
        dispatch(activeQuestionFailed('Delete Failed'));
        message.error({
            key: messKeyActive,
            content: 'active failed',
            duration: 2
        });
    }
}