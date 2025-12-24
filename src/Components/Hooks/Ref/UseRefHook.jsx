import React, { useRef } from 'react'

function UseRefHook() {
    const inputReference = useRef(null);

    const handleReferenceEvent = () => {
        const inputValue = inputReference.current.value;

        alert(`Input Value: ${inputValue}`);
        console.log(`Input Value: ${inputValue}`);
    }

   
     
  return (
    <div>
      <h1>UseRef Hook in React!</h1>
      <input type="text" ref={inputReference }/>
      <button onClick={handleReferenceEvent}>Get Input Value</button>
    </div>
  )
}

export default UseRefHook
