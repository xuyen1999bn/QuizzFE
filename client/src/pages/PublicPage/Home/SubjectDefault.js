import React, { useEffect } from 'react';
import SubjectList from '../../../components/public/SubjectList/SubjectList';
import { GetSubjectStateContext } from '../../../store/context/subjectContext';
import { getSubjectList } from '../../../store/middlewares/subjectMiddleware';

function SubjectDefault() {
    const { subjectListState, listDispatch } = GetSubjectStateContext();
    useEffect(() => {
        getSubjectList(listDispatch);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <SubjectList
                title='Subject Default'
                subjects={subjectListState.subjects || []}
                loading={subjectListState.pending}
                errorMsg={subjectListState.error}
            />
        </>
    );
}

export default SubjectDefault;