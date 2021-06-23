import getData from "../helpers/getData";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        dispatch(startLoading);

        getData().then(( resp ) => {

            let user = (resp.data.response.users).find( user => user.email === email);
            
            if( user && user.password === password ) {
                dispatch(login( user.name ));
                localStorage.setItem('user','{"name":"' + user.name + '", "logged":true}');
                dispatch( finishLoading() );
            }

        }).catch( err => {
            dispatch( finishLoading() );
        });

        dispatch(finishLoading);
    }
}

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.setItem('user', '{"name":"","logged":false}');
        dispatch( logout() );
    }
}

export const login = ( name ) => ({
    type: types.login,
    payload: {
        name
    }
});

export const logout = () => ({
    type: types.logout,
});

