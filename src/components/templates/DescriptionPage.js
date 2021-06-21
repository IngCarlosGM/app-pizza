import React from 'react'
import PropTypes from 'prop-types'

export const DescriptionPage = ({ description, myStyle= "" }) => {
    return (
        <div className={`description-page ${ myStyle }`}>
            { description }
        </div>
    )
}

DescriptionPage.propTypes = {
    description: PropTypes.string.isRequired,
    myStyle: PropTypes.string
}
