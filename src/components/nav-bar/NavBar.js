import React from 'react';

export const NavBar = () => {
    return (
        <nav className="align-center-right">
            <img className="img_responsive size-icon-logout" src={`../assets/ic_contrasena.png`} alt="ícono candado"/>
            <span className="text-logout pointer">Salir</span>
        </nav>
    )
}