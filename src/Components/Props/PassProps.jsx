import React, {useState} from 'react'
import GetProps from './GetProps'

function PassProps() {
    
    const [name, setName] = useState("Mohammad Naweed");
    // const dumyData = [
    //     {name:'Mohammad Khalid', age:"35", email:"khalid.aminee@gamilcom"},
    //     {name:'Mohammad Nawee', age:"30", email:"naweed@gamilcom"},
    //     {name:'Ahsanullah', age:"35", email:"shahi@gamilcom"},
    //     {name:'Omar', age:"32", email:"omar@gamilcom"},
    // ];
    function restName() {
        setName("Mohammad Khalid");
    }
  return (
    <div className='text-center'>
        <h1>Props in React </h1> 
        <GetProps name={name} /> 
        <button className='btn btn-primary' onClick={restName}>Rest  Name </button>

      {/* <GetProps pro="Mohammad Khalid" /> */}

      {/* {
        dumyData.map((user, index) => ( 
        <GetProps 
        key={index}
        name={user.name}
        age={user.age} 
        email={user.email} />)
        )
      }    */}

       
    </div>
  )
}

export default PassProps
