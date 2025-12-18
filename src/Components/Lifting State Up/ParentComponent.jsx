import React, {useState} from 'react'
import ChildComponent from './ChildComponent'
import ChildComponentB from './ChildComponentB';

function ParentComponent() {
    // Example 1
    const [sharedState, setSharedState] = useState("");

    const handleChange = (newValue) => {
        console.log(newValue);
        setSharedState(newValue);
    }

    // Example 2
    const parentAlert = (data) => {
        alert(data);
    }

  return (
    <div className='text-center'>
        <h1> Lifting State Up in React !</h1>
        <ChildComponent sharedState={ sharedState } handleChange={ handleChange }/>
        <ChildComponentB sharedState={ sharedState } alert={ parentAlert } />
      
    </div>
  )
}

export default ParentComponent
