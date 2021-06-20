import { types } from "../types/types";

/*
    {
        name: 'Carlos Gamboa',
        logged: false
    }
*/

export const authReducer = (state = {}, action) => {
    switch( action.type ) {
        case types.login:
        return {
            name: action.payload.name,
            logged: true
        }

        case types.logout:
            return {  }

        default:
            return state;
    }
}