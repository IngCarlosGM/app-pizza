import { mount } from "enzyme";
import { FormSearch } from "../../../components/dashboard/FormSearch";

describe('Testing FormSeach component', () => {

    const push = jest.fn();
    const handleInputChange = jest.fn();

    const history = {
        push
    }

    let wrapper = mount(
        <FormSearch
            history= { history }
            searchText= { "Texto de búsqueda" }
            handleInputChange= { handleInputChange }
        />
    );

    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to call handleInputChange one times and to have been called with ¡Hola!', () => {
        const valueInput = "¡Hola!"
        wrapper.find('input').simulate('change', { target: { valueInput }});
        expect( handleInputChange ).toHaveBeenCalledTimes(1);
    });

    test('should to do submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( push ).toHaveBeenCalled();
    });    
});
