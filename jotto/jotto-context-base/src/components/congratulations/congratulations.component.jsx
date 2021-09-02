import React from 'react'
import PropTypes from 'prop-types'

const Congratulations = (props) => {
    if (props.success){
        return (
            <div data-test="congratulations" className="alert alert-success">
                <span data-test="congrats-message">Congratulations!</span>
            </div>
        )
    } else {
        return (
            <div data-test="congratulations" className="alert alert-info">
                <span data-test="congrats-message">Try to guess the word.</span>
            </div>
        )
    }
    
}

Congratulations.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congratulations
