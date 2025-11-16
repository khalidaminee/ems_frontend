import React from 'react'

function GetProps(props) {
    console.log(props);
const {name, age, email} = props;
  return (
    <div>
      {/* <h1>{props.pro}</h1> */}

    {/* <h1>Name: {props.name}</h1> 
    <h2>Age: {props.age}</h2>
    <h3>Email: {props.email}</h3> */}

    <h1>Name: {name}</h1>
    {/* <h2>Name: {age}</h2>
    <h3>Name: {email}</h3>
       */}
     
    </div>
  )
}

export default GetProps
