import React from 'react';
import PropTypes from 'prop-types';

export const RouteNavigation = ({ route }) => {
    return (
        <span className="route-navigation">
            { route }
        </span>
    )
}

RouteNavigation.propTypes = {
    route: PropTypes.string.isRequired
}