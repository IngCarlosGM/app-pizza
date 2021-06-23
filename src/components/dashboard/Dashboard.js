import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { NavBar } from '../nav-bar/NavBar';
import { RouteNavigation } from '../templates/RouteNavigation';
import { TitlePage } from '../templates/TitlePage';
import { DescriptionPage } from '../templates/DescriptionPage';
import { Stores } from './Stores';
import { Footer } from '../Footer';
import { useForm } from '../../hooks/useForm';
import { getStoresByName } from '../../selectors/getStoresByName';
import { FormSearch } from './FormSearch';
import { startLoadingStore } from '../../actions/dashboard';
import ModalCarrousel from '../modals/body-carrousel/ModalCarrousel';

export const Dashboard = ({ history }) => {

    const location = useLocation();
    const dispatch = useDispatch();

    const params = queryString.parse(location.search);
    const currentItem = parseInt(((params.id !== undefined) && params.id)  ||  0); //Store selected

    const { auth: user, dashboard: { stores } } = useSelector(state => state); //User authenticate and Store loaded
    const { q: query = '' } = queryString.parse( location.search ); //Text search on query
    const [ formValues, handleInputChange ] = useForm({
        searchText: query
    }); //Handle input to search stores
    const { searchText } = formValues;

    useEffect(() => {
        dispatch( startLoadingStore() );
        localStorage.setItem( 'user', JSON.stringify(user) );
        
        const logoAside = document.getElementById("logo-best-pizza-aside");
        if( logoAside && logoAside !== undefined ) {
            logoAside.style.display = "block";
        }
    }, [user, dispatch]);
    
    //Memorize results
    const storesFiltered = useMemo(() => getStoresByName( query, stores ), [query, stores]);

    return (
        <div className="scroll-y container-dashboard">
            {
                (currentItem !== 0) 
                    && <ModalCarrousel 
                        show={ params.show || 'false'}
                        currentItem={ currentItem }
                        stores={ storesFiltered }
                        history={ history }
                    />
            }
            <NavBar history={ history }/>
            <RouteNavigation route="Pizzerías"/>
            <TitlePage title="Tiendas" myStyle="mt-secondary"/>
            <DescriptionPage description="Escoge tu pizzería favorita"/>

            <FormSearch 
                history={ history }
                searchText={ searchText }
                handleInputChange={ handleInputChange }
            />

            {
                (storesFiltered.length === 0) 
                    && <div className="mt-third not-store-founds">No se han encontrado tiendas que coincidan con la búsqueda</div>
            }

            <Stores 
                stores={ storesFiltered }
                history={ history }
            />
            <Footer />
        </div>
    )
}
