import React from 'react'
import ContextAPIChild2 from './ContextAPIChild2'

function ContextAPIChild1() {
    return (
        <div>
            <h2>Child1 of Context API</h2>

            <ContextAPIChild2 />
        </div>
    )
}

export default ContextAPIChild1
