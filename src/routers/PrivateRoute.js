import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
    loggedIn,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname); 

    return (
        <Route { ...rest }
            component={ (props) => (
                ( loggedIn )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/auth/login" /> )
            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
