import React from 'react'
import { useDispatch } from 'react-redux'
import { startLoginEmailPassword } from '../../actions/auth';

export const Login = () => {

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword("jgonzalez@gonzalez.com", "jgonzalez123") );
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={(e) => { handleLogin(e) }}>Login</button>
        </div>
    )
}
