import { shallow } from "enzyme";
import { Pizzas } from "../../../components/templates/Pizzas";
import dataApp from '../../data/dataApp.json';

describe('Testing ItemPizza component', () => {

    const pizzas = dataApp.response.stores[0].products;

    const wrapper = shallow(
        <Pizzas 
            pizzas= { pizzas }
        />
    );
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have pizzas', () => {
       expect( wrapper.find('ItemPizza').length ).toBe( pizzas.length );
    });
    
    
});
