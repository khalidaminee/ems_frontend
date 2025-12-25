import React, { useCallback, useState } from 'react'
import UseCallbackChild from './UseCallbackChild';

function UseCallBackHook() {
    const [count1, setCount1] = useState(0);
    console.log("Parent Render")

    // Example 2
    const [count2, setCount2] = useState(0);
    const incrementCount = useCallback(() => {
        setCount2((prevCount) => prevCount +1);
        console.log("useCallback Hook");
    }, [])
  return (
    <div>
        <h1> useCallback Hook </h1>
        {/* Example 1 */}
        <p>Count1: {count1}</p>
        <button onClick={() => setCount1(count1+1)}>Increment</button>

        {/* Example 2 */}
        <br />
        <br />
        <p>Count1: {count2}</p>
        

        <UseCallbackChild increment={incrementCount} />
    </div>
  )
}

export default UseCallBackHook
