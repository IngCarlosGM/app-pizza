
export const getStoresById = ( id = 0, stores= [] ) => {

    if ( id === 0 ) {
        return null;
    }

    return stores.filter( store => store.id === id );

}