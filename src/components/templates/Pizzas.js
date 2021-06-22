import React from 'react';

import { ItemPizza } from './ItemPizza';

export const Pizzas = ({ pizzas }) => {

    return (
        <div className="grid-pizzas mt-third">
            {
                pizzas && pizzas.map( itemPizza => {
                    return <ItemPizza 
                                key={ `itemPizza${ itemPizza.id }` } 
                                itemPizza={ itemPizza }
                            />
                })
            }
        </div>
    )
}