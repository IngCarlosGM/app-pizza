import { types } from "../types/types";
import PropTypes from 'prop-types';

export const dashBoardReducer = (state = {}, action) => {
    switch( action.type ) {
        case types.dasboardStartLoadingStores:
            
            return {
                stores: action.payload.stores
            }

        default:
            return state;
    }
}

dashBoardReducer.propTypes = {
    state: PropTypes.object,
    action: PropTypes.object.isRequired
}