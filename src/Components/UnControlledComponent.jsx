import React, { useRef } from 'react'

function UnControlledComponent() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        console.log("First Value: ", inputRef1.current.value);
        console.log("Second Value: ", inputRef2.current.value);
        let input3 = document.getElementById("input3").value;
        console.log("Third Value: ", input3);
    }
  return (
    <div>
      <h1>UnControlled Component in React</h1>

      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef1} />    
        <input type="text" ref={inputRef2} />
        <input type="text" id="input3" />
        <button>Submit Form</button>    
      </form>
    </div>
  )
}

export default UnControlledComponent
