import React, { createContext } from 'react'
import UseContextChild1 from './UseContextChild1'

// Create, Provider, useContext
const MyContext = createContext();

function UseContextHook() {
    const shareData = "Hello from Parent !";
    return (
        <div>
            <MyContext.Provider value={shareData}>
                <h1> Practice of useContext Hook in React ! </h1>

                {/* ٍExample 1 */}
                <UseContextChild1 />

            </MyContext.Provider>

        </div>
    )
}

export default UseContextHook
export { MyContext };
