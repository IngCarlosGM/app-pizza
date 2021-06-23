import { shallow } from "enzyme";
import { Footer } from "../../components/Footer";

describe('Teting DescriptionPage component', () => {

    const wrapper = shallow(
        <Footer />
    )
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have tow <a/>', () => {
        expect( wrapper.find('a').length ).toBe( 2 );
    });

    test('should to have three <img/>', () => {
        expect( wrapper.find('img').length ).toBe( 3 );
    });

    test('should to have a Link', () => {
        expect( wrapper.exists('Link') ).toBe( true );
    });
    
});
