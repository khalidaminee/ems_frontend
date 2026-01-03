import React, { useId } from 'react'

function UseIdChild({ name }) {
    const id = useId();

    return (
        <div>
            <label htmlFor={`${id} - ${name}`}>{name}</label>
            <input type="text" id={`${id} - ${name}`} />
        </div>
    )
}

export default UseIdChild
