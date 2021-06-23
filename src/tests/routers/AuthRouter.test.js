import React from 'react';
import { mount } from 'enzyme';
import { AuthRouter } from '../../routers/AuthRouter';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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

describe('Testing in AuthRouter component', () => {
    
    let props = {
        location: {
            pathname: "/auth/login"
        }
    }

    test('should render correctly', () => {
        const wrapper = mount(
            <Provider store= { store } >
                <MemoryRouter>
                    <AuthRouter 
                        { ...props }
                        component={ () => <span>Listo!</span> }
                    />
                </MemoryRouter>
            </Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();
    });
    

    test('should load the screen Login', () => {
        
        const wrapper = mount(
            <Provider store= { store } >
                <MemoryRouter>
                    <AuthRouter 
                        { ...props }
                        component={ () => <span>Listo!</span> }
                    />
                </MemoryRouter>
            </Provider>
        );

        expect( wrapper.find('button').at(0).text() ).toBe( 'Iniciar sesión' );
    });
});
