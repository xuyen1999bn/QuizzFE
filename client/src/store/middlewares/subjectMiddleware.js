import { message } from "antd";
import {
    getSubjectsPending,
    getSubjectsSuccess,
    getSubjectsFailed,
    deleteSubjectFailed,
    deleteSubjectPending,
    deleteSubjectSuccess,
    createSubjectPending,
    createSubjectSuccess,
    createSubjectFailed,
    editSubjectPending,
    editSubjectSuccess,
    editSubjectFailed,
    getSubjectSinglePending,
    getSubjectSingleSuccess,
    getSubjectSingleFailed,
} from "../actions/subjectAction/subjectAction";

import {
    getSubjectListEffect,
    deleteSubjectEffect,
    createSubjectEffect,
    editSubjectEffect,
    geSubjectSingleEffect
} from "../effects/subjectEffect";

const messKeyCreate = 'messKeyCreate';
const messKeyDelete = 'messKeyDelete';

export const getSubjectList = async (dispatch) => {
    dispatch(getSubjectsPending());
    const res = await getSubjectListEffect();
    if (res && res.status >= 200 && res.status <= 300) {
        const subjects = res?.data?.subjects;
        dispatch(getSubjectsSuccess(subjects || []));
        return true;
    } else {
        dispatch(getSubjectsFailed(res?.data?.message || 'Failed to fetch'));
        return false
    }
};

export const getSubjectById = async (dispatch, { subjectId }) => {
    dispatch(getSubjectSinglePending());
    const res = await geSubjectSingleEffect(subjectId);
    if (res && res.status >= 200 && res.status <= 300) {
        const subject = res?.data?.subject;
        dispatch(getSubjectSingleSuccess(subject || null));
        return true;
    } else {
        dispatch(getSubjectSingleFailed(res?.data?.message || 'Failed to fetch'));
        return false
    }
};

export const deleteSubject = async (dispatch, { subjectId }) => {
    message.loading({
        key: messKeyDelete,
        content: 'Deleting ...'
    });
    dispatch(deleteSubjectPending());
    const res = await deleteSubjectEffect(subjectId);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(deleteSubjectSuccess(subjectId));
        message.success({
            key: messKeyDelete,
            content: 'Delete successfully',
            duration: 2
        });
    } else {
        dispatch(deleteSubjectFailed('Delete Failed'));
        message.error({
            key: messKeyDelete,
            content: 'Delete failed',
            duration: 2
        });
    }
}

export const createSubject = async (dispatch, data) => {
    message.loading({
        key: messKeyCreate,
        content: 'Creating ...'
    });
    dispatch(createSubjectPending());
    const res = await createSubjectEffect(data);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(createSubjectSuccess());
        message.success({
            key: messKeyCreate,
            content: 'Create successfully',
            duration: 2
        });
    } else {
        dispatch(createSubjectFailed('Create Failed'));
        message.error({
            key: messKeyCreate,
            content: 'Create failed',
            duration: 2
        });
    }
}

export const editSubject = async (dispatch, data) => {
    message.loading({
        key: messKeyCreate,
        content: 'Updating ...'
    });
    dispatch(editSubjectPending());
    const res = await editSubjectEffect(data);
    if (res && res.status >= 200 && res.status <= 300) {
        dispatch(editSubjectSuccess());
        message.success({
            key: messKeyCreate,
            content: 'Update successfully',
            duration: 2
        });
    } else {
        dispatch(editSubjectFailed('Create Failed'));
        message.error({
            key: messKeyCreate,
            content: 'Update failed',
            duration: 2
        });
    }
}