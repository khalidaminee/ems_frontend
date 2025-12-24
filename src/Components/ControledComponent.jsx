import React, { useState } from 'react'

function ControledComponent() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }
  return (
    <div>
        <h1> Controlled Component in React</h1>
        <input type="text" value={inputValue} onChange={handleChange}/>
        <p>Current Value: { inputValue } </p>
    </div>
  )
}

export default ControledComponent
