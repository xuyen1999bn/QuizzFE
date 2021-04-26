import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from '../../pages/PublicPage/Home/Home';
import JoinPlay from '../../pages/PublicPage/JoinPlay/JoinPlay';
import Ranked from '../../pages/PublicPage/Ranked/Ranked';
import QuizzUserCreate from '../../pages/PublicPage/QuizzUserCreate';
import PlayingGame from '../../pages/PublicPage/PlayingGame';
import PublicLayout from '../../layouts/PublicLayout/PublicLayout';
import PlayingLayout from '../../layouts/PlayingLayout/PlayingLayout';

function PublicRoute() {
    return (
        <>
            <Switch>
                <Redirect from='/home' to='/home/join' exact />
                <Route path="/home/join" exact>
                    <PublicLayout>
                        <Home />
                    </PublicLayout>
                </Route>
                <Route path="/home/playing/:gameId" exact>
                    <PlayingLayout>
                        <PlayingGame />
                    </PlayingLayout>
                </Route>
                <Route path="/home/ranked/:subjectId" exact>
                    <PublicLayout>
                        <Ranked />
                    </PublicLayout>
                </Route>
                <Route path="/home/joinPlay" extra>
                    <PublicLayout>
                        <JoinPlay />
                    </PublicLayout>
                </Route>
                <Route path="/home/sendQuestions" extra>
                    <PublicLayout>
                        <QuizzUserCreate />
                    </PublicLayout>
                </Route>
                <Redirect from='/home/*' to="/404" />
            </Switch>
        </>
    );
}

export default PublicRoute;