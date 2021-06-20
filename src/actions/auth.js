import getUsers from "../helpers/getUsers";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        dispatch(startLoading);

        getUsers().then(( resp ) => {

            let user = (resp.data.response.users).find( user => user.email === email);
            
            if( user ) {
                dispatch(login( user.name ));
            }

        }).catch( err => {
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
        // await firebase.auth().signOut();
        // dispatch( logout() );
        // dispatch( noteLogout() );
    }
}