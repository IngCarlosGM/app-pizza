import { shallow } from "enzyme";
import HeaderModal from "../../../../components/modals/body-carrousel/HeaderModal";
import dataApp from '../../../data/dataApp.json';

describe('Testing component HeaderModal', () => {

    const history = {
        location: {
            search: "url-test"
        }
    }
    
    const wrapper = shallow(
        <HeaderModal
            currentItem= { 1 }
            storeToShow= { dataApp.response.stores[0] }
            history= { history }
        />
    );

    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a modal title', () => {
        expect( wrapper.exists('h5') ).toBe( true );
        expect( wrapper.find('h5').at(0).text() ).toBe( dataApp.response.stores[0].name );
    });

    test('should to have a image', () => {
        expect( wrapper.exists('img') ).toBe( true );
    });

    test('should to have a image correct', () => {
        expect( wrapper.find('img').at(0).prop('src') ).toBe( `../assets/store/store-${ dataApp.response.stores[0].id }.png` );
    });
    
});
