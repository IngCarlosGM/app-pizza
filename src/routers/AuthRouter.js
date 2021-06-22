import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login } from '../components/auth/Login';

export const AuthRouter = () => {
    return (
        <main className="auth__main">
            <Switch>
                <Route 
                    exact
                    path="/auth/login"
                    component={ Login }
                />

                <Redirect to="/auth/login" />


            </Switch>
        </main>
    )
}
