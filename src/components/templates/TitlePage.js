import React from 'react'
import PropTypes from 'prop-types'

export const TitlePage = ({ title, myStyle= "" }) => {
    return (
        <h1 className={` ${ myStyle }`}>
            { title }
        </h1>
    )
}

TitlePage.propTypes = {
    title: PropTypes.string.isRequired,
    myStyle: PropTypes.string
}