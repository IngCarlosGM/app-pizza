import { mount } from "enzyme";
import { Router } from "react-router-dom";

import { Stores } from "../../../components/dashboard/Stores";
import dataApp from '../../data/dataApp.json';

describe('Testing Stores component', () => {

    const history = {
        location: {
            search: "url-test"
        },
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const wrapper = mount(
        <Router history= { history }>
            <Stores 
                history= { history }
                stores= { dataApp.response.stores }
            />
        </Router>
    );
    
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have itemStores', () => {
        expect( wrapper.find('ItemStore').length ).toBe( dataApp.response.stores.length );
    });

});
