import { shallow } from "enzyme";
import BackgroundAside from "../../components/BackgroundAside";

describe('Teting DescriptionPage component', () => {

    const wrapper = shallow(
        <BackgroundAside />
    )
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a src equal to ../assets/imagebkg.png', () => {
        expect( wrapper.find('img').at(0).prop('src') ).toBe( '../assets/imagebkg.png' );
    });

    test('should to have a src equal to ../assets/Pizza.png', () => {
        expect( wrapper.find('img').at(1).prop('src') ).toBe( '../assets/Pizza.png' );
    });

    test('should to have a src equal to ../assets/Logo.png', () => {
        expect( wrapper.find('img').at(2).prop('src') ).toBe( '../assets/Logo.png' );
    });
    
});
