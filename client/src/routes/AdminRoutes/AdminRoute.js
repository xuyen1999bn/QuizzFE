import React from 'react';
import { Route, Switch } from 'react-router';
import SubjectList from '../../components/admin/Subject/SubjectList/SubjectList';
import SubjectCreate from '../../components/admin/Subject/SubjectCreate/SubjectCreate';
import SubjectEdit from '../../components/admin/Subject/SubjectEdit/SubjectEdit'
import QuestionCreate from '../../components/admin/Question/QuestionCreate/QuestionCreate';
import QuestionEdit from '../../components/admin/Question/QuestionEdit/QuestionEdit';
import QuestionList from '../../components/admin/Question/QuestionList/QuestionList';
import QuestionPending from '../../components/admin/Question/QuestionPending/QuestionPending';
import { SubjectStateProvider } from '../../store/context/subjectContext';
import { QuestionStateProvider } from '../../store/context/questionContext';
// import SubjectEdit from '../../components/admin/Question/QuestionList/QuestionList';

function AdminRoute() {
    return (
        <>
            <SubjectStateProvider>
                <QuestionStateProvider>
                    <Switch>
                        <Route path="/" exact>
                            Welcome Admin
                        </Route>
                        <Route path="/subject">
                            <Route path="/subject/list" exact>
                                <SubjectList />
                            </Route>
                            <Route path="/subject/create" exact>
                                <SubjectCreate />
                            </Route>
                            <Route path="/subject/edit/:subjectId" exact>
                                <SubjectEdit />
                            </Route>
                        </Route>
                        <Route path="/question">
                            <Route path="/question/list" exact>
                                <QuestionList />
                            </Route>
                            <Route path="/question/create" exact>
                                <QuestionCreate />
                            </Route>
                            <Route path="/question/edit/:questionId" exact>
                                <QuestionEdit />
                            </Route>
                            <Route path="/question/pending" exact>
                                <QuestionPending />
                            </Route>
                        </Route>
                    </Switch>
                </QuestionStateProvider>
            </SubjectStateProvider>

        </>
    );
}

export default AdminRoute;