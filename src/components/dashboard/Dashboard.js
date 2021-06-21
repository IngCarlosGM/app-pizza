import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NavBar } from '../nav-bar/NavBar';
import { RouteNavigation } from '../templates/RouteNavigation';
import { TitlePage } from '../templates/TitlePage';
import { DescriptionPage } from '../templates/DescriptionPage';
import { Stores } from './Stores';
import { Footer } from '../Footer';

export const Dashboard = () => {

    const { auth: user } = useSelector(state => state);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
        document.getElementById("logo-best-pizza-aside").style.display = "block";
    }, [user]);

    return (
        <div className="scroll-y container-dashboard">
            <NavBar />
            <RouteNavigation route="Pizzerías"/>
            <TitlePage title="Tiendas" myStyle="mt-secondary"/>
            <DescriptionPage description="Escoge tu pizzería favorita"/>
            <Stores />
            <Footer />
        </div>
    )
}
