import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NavBar } from '../nav-bar/NavBar';

export const Dashboard = () => {

    const { auth: user } = useSelector(state => state);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user]);

    return (
        <div>
            <NavBar />
            <h1>Dashboard</h1>
        </div>
    )
}
