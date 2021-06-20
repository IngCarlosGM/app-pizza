import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { Dashboard } from '../components/dashboard/Dashboard';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import BackgroundAside from '../components/BackgroundAside';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { logged, name } = useSelector( state => state.auth );

    const [checking, setChecking] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        let loggedLocalstorage = JSON.parse(localStorage.getItem('user')) || { name: '', logged: false };
        
        if( logged || loggedLocalstorage.logged ) {
            dispatch( login( name || loggedLocalstorage.name )); 
            setLoggedIn( true );
            
        } else {
            setLoggedIn( false );
        }
        
        setChecking( false );
    }, [ dispatch, setChecking, setLoggedIn, logged ]);

    if( checking ) {
        return (
            <h1>Por favor espere...</h1>
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
