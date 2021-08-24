import React from 'react'
import PropTypes from 'prop-types'

const Congratulations = (props) => {
    if (props.success){
        return (
            <div data-test="congratulations">
                <h2 data-test="congrats-message">Congratulations!</h2>
            </div>
        )
    } else {
        return (
            <div data-test="congratulations">
                <h2 data-test="congrats-message"></h2>
            </div>
        )
    }
    
}

Congratulations.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congratulations
