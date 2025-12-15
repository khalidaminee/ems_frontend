import React from 'react'

// Example 2
import "./style.css";

// Example 4
import Style from "./style.module.css";

// Example 5 
import "./style.scss";

function WorkOnStyle() {
    // Example 3
    const headline = { 
        color: '#fff',
        background: 'blue',

    };
  return (
    <div className='text-center'>
        <h1>Work on styels methods !</h1>

        {/* Examples 1 - Inline CSS*/}
        <h2 style={{ color: '#fff', background: 'green'}}>Inline Methods</h2>

        {/* /Example 2 - Normal CSS */}
        <h2 className='primary'>Normal CSS Method</h2>

        {/* Example 3 - CSS in JS Method */}
        <h2 style={headline}>CSS In JS Method</h2>

        {/* Example 4 work on css module */}
        <h2 className={Style.title}>CSS Module Method</h2>

        {/* Example 5 - Sass & Scss */}
        <h2 className='sass-primary'>Sass and <span>Scss</span> Methods</h2>
    </div>
  )
}

export default WorkOnStyle
