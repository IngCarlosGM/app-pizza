import React from 'react'
import PropTypes from 'prop-types'

export const FormSearch = ({ history, searchText, handleInputChange }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        localStorage.setItem('lastPath', JSON.stringify(`?q=${ searchText }`) );
        history.push(`?q=${ searchText }`);
    }

    const handleKeyUp = (e) => {
        e.preventDefault();
        if( e.target.value === '') {
            history.push('/');
        }
    }

    return (
        <form onSubmit={ handleSearch }>
            <input 
                type="text"
                className="input-search input--block mt-third"
                placeholder="Buscar una tienda"
                name="searchText"
                value={ searchText }
                onChange={ handleInputChange }
                onKeyUp= { handleKeyUp }
            />

            <button
                id="btn_search"
                type="submit"
                className="btn__primary btn-block btn-responsive"
            >Buscar</button>
        </form>
    )
}

FormSearch.propTypes = {
    history: PropTypes.object.isRequired,
    searchText: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
}