import React, { useState } from 'react'
import Counter from './CounterForUseReducer';
import CounterForUseReducer from './CounterForUseReducer';

function UseReducerHook() {
  // Example 1
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Use Redcuer Hook</h1>
      {/* Example 1 */}
      <h2>Count: { count }</h2>
      <button onClick={() => setCount( count + 1 )}>Increment</button>
      <button onClick={() => setCount( count -1 )}>Decrement</button>
      {/* Example 2 */}
      <CounterForUseReducer />
    </>
  )
}

export default UseReducerHook
