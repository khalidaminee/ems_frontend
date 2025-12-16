import React from 'react'
import ReusableButton from './ReusableButton'
import ReusableList from './ReusableList'

function ReusableComponents() {

  // example 1
    const handleButton = () => {
        console.log('Button Clicked.')
    }
  
  // Example 2
  const countries = ['Afghanistan', 'Pakistan', 'Iran', 'India', 'China']

  return (
    <div className='text-center'>
      {/* Example 1: use a reusable button */}
      <h1>Reusable Button</h1>
      <ReusableButton text="Click Me!" event={handleButton} />
      <ReusableButton text="Submit!" event={handleButton} />

      {/* Example 2: use a resuable list component */}
      <ReusableList items={countries}/>
    </div>
  )
}

export default ReusableComponents
