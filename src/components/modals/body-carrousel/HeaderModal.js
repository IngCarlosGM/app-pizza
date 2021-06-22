import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const HeaderModal = ({ currentItem= 1, storeToShow, history }) => {

    const params = queryString.parse(history.location.search);
    let q = (params.q) ? `?q=${params.q}`: '';        

    return (
        <div className="container__modal-header space-between">
            <h5 className="container__modal-header-title">{storeToShow.name}</h5>
            <img 
                className="modal-header__logo-store"
                src={`../assets/store/store-${ currentItem }.png`} 
                alt="Logo pizza" 
            />
            <Link 
                to={`/${ q }`}
                className="modal-header__close-modal pointer"
            >x</Link>
        </div>
    )
}

export default HeaderModal;
