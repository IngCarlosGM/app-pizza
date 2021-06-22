import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

export const ItemStore = ({ itemStore, history }) => {

    const params = queryString.parse(history.location.search);

    let q = (params.q) ? `q=${params.q}&`: '';

    return (
        <Link to={ `/search?${ q }id=${ itemStore.id }&show=true` }
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
        </Link>
    )
}

ItemStore.propTypes = {
    itemStore: PropTypes.object.isRequired
}