import React, { useEffect, useState } from 'react'

function WorkOnUseEffectHook() {
    // Example 1

    // useEffect(() => {
    //     alert("UseEffect Hook");
    //     console.log("UseEffect Hook");
    //     console.log("updating...");
    // });

    // Example 2
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("useEffect dependent to count");
    // }, [count]);

    // Example 3
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(100);


    useEffect(() => {
        console.log("After Render Count !");
    }, [count]);

    useEffect(() => {
        console.log("After Render Total !");
    }, [total]);

  return ( 
    <div className='text-center'>
      <h1> Work on Use Effect Hook</h1>

      {/* Example 2 */}
        {/* <h2> Count: {count} </h2>
        <button onClick={() => setCount(count + 1 )}>Update Count</button> */}

        {/* Example 3  */}
        <h2>use Effect with condition hook</h2>
            <h3> Count: { count } </h3>
            <button onClick={ () => setCount( count + 1 )}> Update Count </button>

            <h3> Total: { total } </h3>
            <button onClick={ () => setTotal( total + 1)}> Update Total </button>
    </div>
  )
}

export default WorkOnUseEffectHook
