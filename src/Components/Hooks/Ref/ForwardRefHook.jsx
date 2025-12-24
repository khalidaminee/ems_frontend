import React, { useRef } from 'react'
import RefChildComponent from './RefChildComponent'

function ForwardRefHook() {
    // const inputRef = useRef();
    // const updateInput = () => {
    //     if(inputRef.current.value.length > 10){
    //          // inputRef.current.value = "1000";
    //     inputRef.current.style.color = "white";
    //     inputRef.current.style.background = "darkblue";
    //     }
    //     else {
    //         inputRef.current.style.color = "darkblue";
    //         inputRef.current.style.background = "red";
    //         inputRef.current.style.border= "purple 4px solid";
    //     }
       
    // };

    // Example 2
    const childRef = useRef();
    const handleButtonClick = () => {
        if(childRef.current){
            childRef.current.handleChildButtonClick();
        }
    }
  return (
    <div>
      <h1>Practice of forwardRef Hook in React!</h1>
      <div className="col-md-6 offset-md-3">
        {/* Example 1 */}
         {/* <RefChildComponent ref={ inputRef } />
        <button onClick={updateInput} className='btn btn-success'>Get Input Value</button> */}

        {/* Example 2 */}
        <RefChildComponent ref={childRef} />
        <button onClick={ handleButtonClick }>Click Child Button form Parent</button>
      </div>
     
    </div>
  )
}

export default ForwardRefHook
