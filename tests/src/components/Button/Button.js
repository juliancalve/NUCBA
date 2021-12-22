import React from 'react'

const Button = ({ handleClick, title }) => {
    return (
        <div>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}

export default Button
