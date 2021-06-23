import { shallow } from "enzyme";

import { ItemStore } from '../../../components/dashboard/ItemStore';
import dataApp from '../../data/dataApp.json';

describe('Testing ItemStore Component', () => {

    const itemStore = dataApp.response.stores[0];

    const history = {
        location: {
            search: "url-test"
        }
    }

    const wrapper = shallow(
            <ItemStore 
                itemStore= { itemStore }
                history= { history }
            />
    );

    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a img', () => {
        expect( wrapper.find('img').length ).toBe(1);
    });

    test('should to have a span with text Pizzeria Capitan America', () => {
        expect( wrapper.find('span').at(0).text() ).toBe( itemStore.name );
    });

    test('should to have a span with text Calle 1 #2-3', () => {
        expect( wrapper.find('span').at(1).text() ).toBe( itemStore.address );
    });
    
});
