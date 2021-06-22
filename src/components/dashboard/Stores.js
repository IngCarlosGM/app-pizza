import React from 'react';

import { ItemStore } from './ItemStore';

export const Stores = ({ stores, history }) => {

    return (
        <div className="grid-shop mt-secondary">
            {
                stores && stores.map( itemStore => {
                    return <ItemStore 
                                key={ `itemStore${ itemStore.id }` } 
                                itemStore={ itemStore }
                                history= { history }
                            />
                })
            }
        </div>
    )
}