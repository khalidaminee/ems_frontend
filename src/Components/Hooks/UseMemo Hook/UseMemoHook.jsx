import React, {useMemo, useState} from 'react'

function UseMemoHook() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [count, setCount] = useState(0);

    const sum = useMemo( () => {
        console.log("Calculation sum ... !" );
        return number1 + number2;
    }, [number1, number2]);


  return (
    <div>
      <h1> Use Memo Hook in React</h1>

      {/* Example 1 */}
        <input type='number' value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
        <input type='number' value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
       
        {/* Example 1 */}
        {/* <p>Sum: { sum() } </p> */}
        
        {/* Example 2 */}
        <p> { sum }</p>


        {/* Example 1 */}
        <h2> Count Number: { count } </h2>
        <button onClick={ () => setCount(count + 1)}>Count ++</button>
    </div>
  )
}

export default UseMemoHook
