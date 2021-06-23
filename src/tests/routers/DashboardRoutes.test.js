import React from 'react';
import { mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
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


describe('Pruebas en <DashboardRoutes />', () => {

    const props = {
        location: {
            pathname: '/',
            search: ''
        }
    }

    test('should render correctly', () => {
        
        const wrapper = mount(
            <Provider store={ store } >
                <MemoryRouter>
                    <DashboardRoutes {...props}/>
                </MemoryRouter>
            </Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    })
    
})
