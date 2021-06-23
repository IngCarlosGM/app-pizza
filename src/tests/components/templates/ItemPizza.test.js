import { shallow } from "enzyme";
import { ItemPizza } from "../../../components/templates/ItemPizza";
import dataApp from '../../data/dataApp.json';

describe('Testing ItemPizza component', () => {

    const itemPizza = dataApp.response.stores[0].products[0];

    const wrapper = shallow(
        <ItemPizza 
            itemPizza= { itemPizza }
        />
    );
   
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should to have a image correct', () => {
        expect( wrapper.find('img').at(0).prop('src') ).toBe( `../assets/pizzas/pizza-${ itemPizza.id }.png` );
    });

    test('should to have a image correct', () => {
        expect( wrapper.find('span').at(0).text() ).toBe( itemPizza.name );
    });
    
});
