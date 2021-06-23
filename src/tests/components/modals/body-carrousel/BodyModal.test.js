import { mount } from "enzyme";
import BodyModal from "../../../../components/modals/body-carrousel/BodyModal";
import dataApp from '../../../data/dataApp.json';

describe('Testing BodyModal component', () => {

    const wrapper = mount(
        <BodyModal 
            storeToShow= { dataApp.response.stores[0] }
        />
    );
    
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a description', () => {
        expect( wrapper.find('span').at(0).text() ).toBe( dataApp.response.stores[0].description );
    });

    test('should to have a description', () => {
        expect( wrapper.find('span').at(1).text() ).toBe( dataApp.response.stores[0].address );
    });

    test('should to have a description', () => {
        expect( wrapper.exists('Pizzas') ).toBe( true );
    });
    
});
