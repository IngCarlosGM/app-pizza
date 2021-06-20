import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { Dashboard } from '../components/dashboard/Dashboard';
import { useDispatch } from 'react-redux';
// import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import BackgroundAside from '../components/BackgroundAside';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if( !loggedIn ) {
            // setLoggedIn( true );
            setChecking( false );
        }
        
    }, [ dispatch, setChecking, setLoggedIn, loggedIn ]);

    if( checking ) {
        return (
            <h1>Wait...</h1>
        );
    }

    return (
        <Router>
            <div className="grid-layaout overflow-hidden">
                
                <BackgroundAside />
                
                <Switch>


                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        loggedIn= { loggedIn }
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        component={ Dashboard }
                        loggedIn={ loggedIn }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
