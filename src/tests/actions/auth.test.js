import { login, startLoginEmailPassword, startLogout } from "../../actions/auth";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from "../../types/types";
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
    auth: {
        name: 'Pepito Perez',
        logged: true
    },
    ui: {
        loading: false,
        msgError: null
    },
    dashboard: {
        
    }
}

let store = mockStore(initialState);

describe('Testing the auth.js actions', () => {

    beforeEach(() => {
        store = mockStore(initialState)
    });

    test('should get action empty', async() => {
        let { email, password } = { email: "carlos@test.com", password:"test" };
        await store.dispatch(startLoginEmailPassword(email, password));
        const actions = store.getActions();
        expect(actions.length).toBe(0);
    });

    test('should authenticate a user', async() => {
        let name = "Carlos";
        await store.dispatch(login(name));
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: types.login, payload: { name } })
    });

    test('should to do logout', async() => {
        await store.dispatch(startLogout());
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: types.logout });
    });
    
});
