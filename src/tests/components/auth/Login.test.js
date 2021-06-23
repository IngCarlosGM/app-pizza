import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Login } from '../../../components/auth/Login';
 
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

describe('Testing component Login.js', () => {

    const history = {
        replace: jest.fn()
    }
    
    const wrapper = mount(
        <Provider store= { store }>
            <Login history= { history } />
        </Provider>
    );

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a image', () => {
        expect(wrapper.find('img').length).toBe(1);
    });

    test('should have a Login button', () => {
        expect(wrapper.find('button').length).toBe(1);
    });

    test('should to call replace function one times', () => {
        wrapper.find('button').simulate('click');
        expect(history.replace).toBeCalledTimes(1);
    });

    test('should have a forget your password', () => {
        expect(wrapper.find('a').length).toBe(1);
    });
    
});
