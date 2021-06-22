import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const NavBar = ({ history }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
        history.replace("/auth/login");
    }

    return (
        <nav className="align-center-right">
            <img 
                className="img_responsive size-icon-logout" 
                src={`../assets/ic_contrasena.png`} 
                alt="ícono candado"
            />
            <span 
                className="text-logout pointer"
                onClick={ handleLogout }
            >Salir</span>
        </nav>
    )
}