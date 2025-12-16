import React from 'react'

function MapMethod() {
    // Example 1
    const names = ['Khalid', 'Ahmmad', 'Mehmood'];

    // Example 2
    const items = [
        {
            id: 1,
            name: 'Product 1',
            price: 22
            
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20
            
        },
        {
            id: 3,
            name: 'Product 3',
            price: 50
            
        },
        {
            id: 4,
            name: 'Product 4',
            price: 30
            
        },
    ]

    // Example 3
    const fruits = ['apple', 'banana', 'organe', 'mongo', ];
    //convert array to react eleent using map method

    const fruitItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
    
  return (
    <div className='text-center'>
        <h1>Example -1: Array with Map Method !</h1>

        {/* Example 1 */}
        <ul>
            {
                names.map( (name, index) => (
                    <li key={index}>{ name }</li>
                ))
            }
        </ul>

        {/* Example 2 */}
        <h1>Example 2: Map method with array of objects</h1>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name} - ${item.price} </li>
            ))}
        </ul>
        {/* Example 3 */}
        <h1> Example 3 - Convert array to react element using map method.</h1>
        <ul>{ fruitItems }</ul>
    </div>
  )
}

export default MapMethod
