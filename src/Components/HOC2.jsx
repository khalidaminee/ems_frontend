import React, { useState } from 'react'

function HOC2() {
    // HOC
    const withCounter = (WrappedComponent) => {
        return function withCounter(props){
            const [count, setCount] = useState(0);
            const increment = ()=> {
                setCount(count+1);
            }
            return (
                <WrappedComponent {...props} count={count} increment={increment} />
            )
        }
    }

    // funcational component
    const Counter = ({count, increment}) => {
        return (
            <div>
                <p>Counter: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        )
    }

    // wrap functional compoennet (Counter) with Higher order compoenent (withCounter)

    const CounterWithEnhancement = withCounter(Counter);

  return (
    <div>
      <CounterWithEnhancement />
    </div>
  )
}

export default HOC2
