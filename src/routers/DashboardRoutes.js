import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../components/dashboard/Dashboard';

export const DashboardRoutes = ({ location }) => {

    localStorage.setItem('lastPath', location.pathname+location.search);

    return (
        <>
            <Switch>
                <Route path="/" component={ Dashboard }/>
                <Route exact path="/search/:q" component={ Dashboard }/>
                <Route exact path="/search/:id/:show" component={ Dashboard }/>
                <Route exact path="/search/:q/:id/:show" component={ Dashboard }/>

                <Redirect to="/" />
            </Switch>
        </>
    )
}

