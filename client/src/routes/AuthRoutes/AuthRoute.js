import React from 'react';
import { Route, Switch } from 'react-router';
import Register from '../../pages/PublicPage/Register/Register';
import Login from '../../pages/PublicPage/Login/Login';
import { AuthStateProvider } from '../../store/context/authContext';

function AuthRoute() {
    return (
        <>
            <AuthStateProvider>
                <Switch>
                    <Route path="/auth/login" exact>
                        <Login />
                    </Route>
                    <Route path="/auth/register" exact>
                        <Register />
                    </Route>
                </Switch>
            </AuthStateProvider>
        </>
    );
}

export default AuthRoute;