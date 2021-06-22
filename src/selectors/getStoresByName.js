
export const getStoresByName = ( name = '', stores= [] ) => {

    if ( name === '' ) {
        return stores;
    }

    name = name.toLocaleLowerCase();
    return stores.filter( store => store.name.toLocaleLowerCase().includes( name )  );

}