import { dashBoardReducer } from "../../reducers/dashboardReducer";
import { types } from "../../types/types";

describe('Testing dashboardReducer', () => {
   
    test('should start loading stores', () => {
        let initialState = { };
        let action = {
            type: types.dasboardStartLoadingStores,
            payload: {
                stores: []
            }
        }

        let result = dashBoardReducer( initialState, action );

        expect( result.stores ).toEqual([]);
    });

    test('should to do logout', () => {
        let initialState = { };
        let action = {
            type: types.logout
        }

        let result = dashBoardReducer( initialState, action );

        expect( result ).toEqual({});
    });
    
});
