import React from 'react'
import useCounter from './useCounter'

function CustomHook() {
    // const { count, increment, decrement } = useCounter();
    const { count, increment, decrement } = useCounter(10, 5);

    return (
        <div className='text-center'>
            <h1>Practice of custom hook in react, to encapsulate logic and share logic with different components</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CustomHook
