import React from 'react';
import PropTypes from 'prop-types';
import { Pizzas } from '../../templates/Pizzas';

const BodyModal = ({ storeToShow }) => {

    return (
        <div className="container__modal-body">
            <div className="flex-column">
                <span className="modal-body__text-description">{ storeToShow.description }</span>
                <span className="modal-body__text-description">{ storeToShow.address }</span>
            </div>
            
            <Pizzas pizzas={ storeToShow.products }/>
        </div>
    )
}

BodyModal.propTypes = {
    storeToShow: PropTypes.object.isRequired,
}

export default BodyModal;
