import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingStore } from '../../actions/dashboard';
import { ItemStore } from './ItemStore';

export const Stores = () => {

    const { stores }= useSelector(state => state.dashboard);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingStore() );
    }, [dispatch]);

    return (
        <div className="grid-shop mt-secondary">
            {
                stores && stores.map( itemStore => {
                    return <ItemStore 
                                key={ `itemStore${ itemStore.id }` } 
                                itemStore={ itemStore }
                            />
                })
            }
        </div>
    )
}