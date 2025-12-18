import React from 'react'
import ReusableButton from '../ReusableComponents/ReusableButton'


export default function ChildComponentB( { sharedState, alert }) {
  return (
    <div> 
        <h3>Share State: { sharedState }</h3>
        <ReusableButton text="Click Me" onClick={ ()=> alert({ sharedState }) }/>
       
    </div>
  )
}
