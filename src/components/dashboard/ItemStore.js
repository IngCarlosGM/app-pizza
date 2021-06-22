import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

export const ItemStore = ({ itemStore, history }) => {

    const params = queryString.parse(history.location.search);

    const handleShowStore = () => {
        let q = (params.q) ? `?q=${params.q}&`: '?';        
        history.push(`${ q }id=${ itemStore.id }&show=true`);
    } 

    return (
        <div 
            onClick={ handleShowStore }
            className="container-item-store pointer animate__bounceIn"
        >
            <div className="item-store">
                <img 
                    className="img-item-store"
                    src={ `../assets/store/store-${itemStore.id}.png` } 
                    alt="Logo pizza" 
                />
            </div>
            <div className="flex-column">
                <span className="title-item-store">{ itemStore.name }</span>
                <span className="addres-item-store">{ itemStore.address }</span>
            </div>
        </div>
    )
}

ItemStore.propTypes = {
    itemStore: PropTypes.object.isRequired
}