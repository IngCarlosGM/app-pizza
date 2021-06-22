import React from 'react';
import PropTypes from 'prop-types';

export const ItemPizza = ({ itemPizza }) => {

    return (
        <div className="container-item-store pointer animate__bounceIn">
            <div className="item-store">
                <img 
                    className="img-item-store"
                    src={ `../assets/pizzas/pizza-${itemPizza.id}.png` } 
                    alt="Logo pizza" 
                />
            </div>
            <div className="flex-column">
                <span className="title-item-store">{ itemPizza.name }</span>
            </div>
        </div>
    )
}

ItemPizza.propTypes = {
    itemPizza: PropTypes.object.isRequired
}