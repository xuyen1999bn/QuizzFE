import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from './store/middlewares/authMiddleware';
//route nested
import AuthRoute from './routes/AuthRoutes/AuthRoute';
import PublicRoute from './routes/PublicRoutes/PublicRoute';
import AdminRoute from './routes/AdminRoutes/AdminRoute';
//layout
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
//page
import NotFound from './pages/PublicPage/NotFound/NotFound';
import { GetAuthStateContext } from './store/context/authContext';

function Routes() {
    const { authState, dispatch } = GetAuthStateContext();
    useEffect(() => {
        if (authState?.accessToken)
            Auth(dispatch);
        // eslint-disable-next-line
    }, [authState.accessToken]);
    return (
        <>
            {
                authState.auth?.role === 2 ?
                    <Switch>
                        <AdminLayout>
                            <AdminRoute />
                        </AdminLayout>
                    </Switch>
                    :
                    authState.auth?.role === 1 || !(authState.accessToken) ?
                        <Switch>
                            <Redirect from='/' to='/home/join' exact />
                            <Route path='/home'>
                                <PublicRoute />
                            </Route>
                            <Route path='/auth'>
                                <AuthLayout>
                                    <AuthRoute />
                                </AuthLayout>
                            </Route>
                            <Route path="/404">
                                <NotFound />
                            </Route>
                            <Redirect from='*' to="/404" />
                        </Switch>
                        :
                        <></>
            }
        </>
    );
}

export default Routes;