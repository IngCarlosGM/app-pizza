import { shallow } from "enzyme";
import { RouteNavigation } from "../../../components/templates/RouteNavigation";

describe('Teting DescriptionPage component', () => {

    const route= "mi-route";

    const wrapper = shallow(
        <RouteNavigation
            route={ route }
        />
    )
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a span', () => {
        expect( wrapper.exists('span') ).toBe( true );
    });

    test('should to have a route', () => {
        expect( wrapper.find('span').at(0).text() ).toBe( route );
    });
    
});
