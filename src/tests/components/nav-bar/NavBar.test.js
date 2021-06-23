import { mount } from "enzyme";
import { Provider } from "react-redux";
import { NavBar } from '../../../components/nav-bar/NavBar';
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

describe('Testing NavBar component', () => {

    const replace = jest.fn();

    const history = {
        replace
    }
   
    const wrapper = mount(
        <Provider store={ store } >
            <NavBar 
                history= { history }
            />
        </Provider>
    );

    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should to have a img', () => {
        expect( wrapper.exists('img') ).toBe( true );
    });

    test('should to have a span', () => {
        expect( wrapper.exists('span') ).toBe( true );
    });

    test('should to call the replace function', () => {
        wrapper.find('span').at(0).simulate('click');
        expect( replace ).toHaveBeenCalledTimes( 1 );
    });
});
