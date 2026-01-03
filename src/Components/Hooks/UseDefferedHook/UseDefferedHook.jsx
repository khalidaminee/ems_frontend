import React, { useDeferredValue, useEffect, useState } from 'react'
import List from './List';

function UseDefferedHook() {
    const [input, setInput] = useState();
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const [count, setCount] = useState(0);
    const deferedValue = useDeferredValue(count);


    useEffect(() => {
        console.log(`count: ${count} \n Deffered: ${deferedValue}`)
    })
    return (
        <div>
            <h1>
                useDeffered Hook in React.
            </h1>
            <input type="text" value={input} onChange={handleChange} />
            <List input={input} />
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseDefferedHook
