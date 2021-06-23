import { getStoresByName } from "../../selectors/getStoresByName";
import dataApp from '../data/dataApp.json';

describe('Testing in getStoresByName', () => {
   
    test('should get a store with id=1', () => {
        const name = 'Capitan';
        const [ store ] = getStoresByName(name, dataApp.response.stores);

        expect( store.name ).toContain( name );
    });
    
});
