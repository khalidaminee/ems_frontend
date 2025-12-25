import React, { useState } from 'react'

function HOC() {
    // Example 1
    // const [count, setCount] = useState(0);

    // Example 2

    // Higher Order Component
    const withCounter = (WrappedComponent) => {
        return function withCounter(props) {
            const [count, setCount] = useState(0);
            const increment = () => {
                setCount( count + 1 );
            }
            return (
                <WrappedComponent {...props} count={count} increment={increment} />
            )
        }
    }

    // Functional Component
    const Counter = ({count, increment}) => {
        return (
            <div>
                <p>Count: { count }</p>
                <button onClick={increment}>Increment</button>
            </div>
        )
        
    }

    // Wrapp Counter Component with the withCounter HOC
    const CounterWithEnhancement = withCounter(Counter);



  return (
    <div>
      <h1>Higher Order Component</h1>

        {/* Example 1 */}
        {/* <p> Count: { count }</p>
        <button onClick={() => setCount(count +1)}>Increment</button>
        */}

        {/* Example 2 */}

        {/* <CounterWithEnhancement /> */}
        <CounterWithEnhancement />

    </div>
  )
}

export default HOC
