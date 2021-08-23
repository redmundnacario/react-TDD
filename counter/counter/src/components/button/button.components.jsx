import React from 'react'

const Button = ({onClick, dataTestName, text}) => {
    return (
        <button 
            data-test={dataTestName}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
