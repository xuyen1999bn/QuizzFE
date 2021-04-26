import React from 'react';
import QuestionCreate from '../../../components/public/QuestionCreate/QuestionCreate';
import { QuestionStateProvider } from '../../../store/context/questionContext';
import { SubjectStateProvider } from '../../../store/context/subjectContext';

function QuizzUserCreate(props) {
    return (
        <>
            <SubjectStateProvider>
                <QuestionStateProvider>
                    <QuestionCreate />
                </QuestionStateProvider>
            </SubjectStateProvider>
        </>
    );
}

export default QuizzUserCreate;