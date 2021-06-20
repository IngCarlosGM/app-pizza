import getUsers from "../helpers/getUsers";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        dispatch(startLoading);

        getUsers().then(( resp ) => {

            let user = (resp.data.response.users).find( user => user.email === email);
            
            if( user && user.password === password ) {
                dispatch(login( user.name ));
                localStorage.setItem('user','{"name":"' + user.name + '", "logged":true}');
                dispatch( finishLoading() );
            }

        }).catch( err => {
            dispatch( finishLoading() );
            console.log(err);
        });

        dispatch(finishLoading);
    }
}

export const login = ( name ) => ({
    type: types.login,
    payload: {
        name
    }
});

export const startLogout = () => {
    return async(dispatch) => {
    }
}

