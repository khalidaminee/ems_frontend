import React from 'react'

// Example 2
import "./style.css";

// Example 4
import Style from "./style.module.css";

// Example 5 
import "./style.scss";

// Example 6 
import{ Button, Alert } from 'react-bootstrap'

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

        {/* Example 6- Using React Bootstrap  */}
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>

        {/* Types of Alert */}
        <Alert variant='success'>This is a success alert.</Alert>
          {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
    </div>
  )
}

export default WorkOnStyle
