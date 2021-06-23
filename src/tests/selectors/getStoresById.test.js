import { getStoresById } from "../../selectors/getStoresById";
import dataApp from '../data/dataApp.json';

describe('Testing in getStoresById', () => {
   
    test('should get a store with id=1', () => {
        const id = 1;
        const [ store ] = getStoresById(id, dataApp.response.stores);
        
        expect( store.id ).toBe( id );
    });
    
});
