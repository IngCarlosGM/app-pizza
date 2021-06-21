import React from 'react';
import PropTypes from 'prop-types';

export const ItemStore = ({ itemStore }) => {
    return (
        <div className="container-item-store pointer">
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