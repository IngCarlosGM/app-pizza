import { shallow } from "enzyme";
import { DescriptionPage } from "../../../components/templates/DescriptionPage";

describe('Teting DescriptionPage component', () => {

    const description= "Mi descripción";

    const wrapper = shallow(
        <DescriptionPage 
            description={ description }
        />
    )
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a div', () => {
        expect( wrapper.exists('div') ).toBe( true );
    });

    test('should to have a description', () => {
        expect( wrapper.find('div').at(0).text() ).toBe( description );
    });
    
});
