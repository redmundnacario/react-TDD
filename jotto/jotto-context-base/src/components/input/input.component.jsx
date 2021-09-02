import {useState} from 'react'

import PropTypes from 'prop-types'

const Input = (props) => {
    // const sample = React.useState
    const { success, secretWord } = props
    const [currentGuess, setCurrentGuess] = useState('')

    const handleChange = (e) => {
        setCurrentGuess(e.target.value)
    }

    // console.log("success", success)

    if (success) {
        return (
            <div data-test="input-component">
            </div>
        )
    }

    return (
        <div data-test="input-component">
            <form 
                data-test="input-box"
                className="mb-2 mx-sm-3"
                type="text"
                placeholder={""}
                value={currentGuess}
                onChange={handleChange}
            >
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={handleChange}
                >
                </button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord : PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired
}

export default Input
