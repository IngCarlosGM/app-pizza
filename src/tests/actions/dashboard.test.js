import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from "../../types/types";
import { setStores, startLoadingStore } from "../../actions/dashboard";
 
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

describe('Testing the dashboard.js actions', () => {

    beforeEach(() => {
        store = mockStore(initialState)
    });

    test('should get action empty', async() => {
        await store.dispatch(startLoadingStore());
        const actions = store.getActions();
        expect(actions.length).toBe(0);
    });

    test('should authenticate a user', async() => {
        await store.dispatch(setStores([]));
        const actions = store.getActions();
        expect(actions[0]).toEqual({ type: types.dasboardStartLoadingStores, payload: { stores: [] } })
    });
    
});
