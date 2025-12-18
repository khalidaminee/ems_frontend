import React, { useState } from 'react'
import MemoChildComponent from './MemoChildComponent';

function MemoParent() {
    const [count, setCount] = useState(0);

    console.log("Parent Component!");

  return (
    <div>
        <h1>HOC Memo function </h1>
        <h3> Count: { count } </h3>
        <button onClick={ () => setCount(count + 1) }>Increment</button>

        <MemoChildComponent count={ count } />
    </div>
  )
}

export default MemoParent
