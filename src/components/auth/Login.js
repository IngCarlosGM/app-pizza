import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const Login = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        usuario: 'jgonzalez@gonzalez.com',
        password: 'jgonzalez123'
    });

    const { usuario, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( usuario, password ) );
    }

    return (
        <div className="welcome mt-primary mb-primary">
            <img 
                id="logo-aside-best-pizza"
                className="welcome__size-logo"
                src={`../assets/Login-Best-Pizza.png`} 
                alt="Logo de Best pizza"
            />

            <h1 className="mt-secondary welcome__title">Bienvenido</h1>
            <h3 className="mt-third welcome__text">A las mejores pizzas del país</h3>

            <div className="container-inputs mt-secondary">
                
                <input 
                    type="text"
                    placeholder="Usuario"
                    name="usuario"
                    className="input input--block input--user"
                    autoComplete="off"
                    value={ usuario }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="input--block input--password mt-input"
                    value={ password }
                    onChange={ handleInputChange }
                />

            </div>

            <a href="#" className="mt-third pointer">¿Olvidaste tu contraseña?</a>

            <button
                className="btn__primary btn-block mt-secondary"
                onClick={(e) => { handleLogin(e) }}
                disabled= { loading }
            >Iniciar sesión</button>
        </div>
    )
}
