import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Dashboard } from "../../../components/dashboard/Dashboard";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import dataApp from '../../data/dataApp.json';
 
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

describe('Tenting Dashboard component', () => {

    const history = {
        location: {
            search: "url-test"
        },
        listen: jest.fn(),
        createHref: jest.fn()
    }
   
    const wrapper = mount(
        <Provider store= { store }>
            <BrowserRouter>
                <Dashboard 
                    history= { history }
                />
            </BrowserRouter>
        </Provider>
    );

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render without modal', () => {
        expect(wrapper.exists('ModalCarrousel')).toBe(false);
    });

    test('should to have a nav', () => {
        expect(wrapper.exists('nav')).toBe(true);
    });

    test('should to have a title Tiendas', () => {
        expect(wrapper.find('h1').text()).toBe('Tiendas');
    });

    test('should to have a description page', () => {
        expect(wrapper.exists('DescriptionPage') ).toBe( true );
    });

    test('should un footer', () => {
        expect(wrapper.exists('footer')).toBe(true);
    });

    test('should render Stores', () => {
        expect(wrapper.exists('Stores') ).toBe( true );
    });

    test('should to have a FormSearch', () => {
        expect(wrapper.exists('FormSearch')).toBe( true );
    });

    test('should to have a RouteNavigation', () => {
        expect(wrapper.exists('RouteNavigation')).toBe( true );
    });
    
});
