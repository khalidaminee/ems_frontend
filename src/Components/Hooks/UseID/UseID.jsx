import React from 'react'
import UseIdChild from './UseIdChild'

function UseID() {
    return (
        <div>
            <h1>Practice of useId hook in react, to render a unique id.</h1>
            <UseIdChild name="email" />
            <UseIdChild name="name" />
        </div>
    )
}

export default UseID
