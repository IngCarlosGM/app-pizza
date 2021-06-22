import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './styles/styles.scss'
import { authReducer } from './reducers/authReducer';
import { AuthContext } from './components/auth/AuthContext';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { name: '', logged: false };
}

export const App = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user]);

    return (
        <Provider store={ store }>
            <AuthContext.Provider value={{ user, dispatch }}>
                <AppRouter />
            </AuthContext.Provider>
        </Provider>
    )
}