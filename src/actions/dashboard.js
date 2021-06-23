import getData from "../helpers/getData";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoadingStore = ( ) => {
    return ( dispatch ) => {
        dispatch(startLoading);
        
        getData().then(( resp ) => {
            dispatch(setStores( resp.data.response.stores ));

        }).catch( err => {
            dispatch( finishLoading );
        });

        dispatch(finishLoading);
    }
}

export const setStores = ( stores ) => ({
    type: types.dasboardStartLoadingStores,
    payload: {
        stores
    }
});

