import { shallow } from "enzyme";
import { TitlePage } from "../../../components/templates/TitlePage";

describe('Teting DescriptionPage component', () => {

    const title= "mi-title";

    const wrapper = shallow(
        <TitlePage
            title={ title }
        />
    )
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a h1', () => {
        expect( wrapper.exists('h1') ).toBe( true );
    });

    test('should to have a title', () => {
        expect( wrapper.find('h1').at(0).text() ).toBe( title );
    });
    
});
