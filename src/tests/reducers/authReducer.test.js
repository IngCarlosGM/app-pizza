import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Testing authReducer', () => {
   
    test('should to do login', () => {
        let initialState = { }

        let action = {
            type: types.login,
            payload: {
                name: "Carlos"
            }
        }

        const login = authReducer(initialState, action);
        
        expect( login ).toEqual({
            name: action.payload.name,
            logged: true
        });
    });

    test('should to do logout', () => {
        let initialState = { }

        let action = {
            type: types.logout
        }
        
        const logout = authReducer(initialState, action);
        
        expect( logout ).toEqual({ });
    });

    test('should return initialState', () => {
        let initialState = { }

        let action = {
            type: '[test] Action test'
        }
        
        const sameState = authReducer(initialState, action);
        
        expect( sameState ).toEqual( initialState );
    });
    
});
