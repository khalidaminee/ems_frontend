import React, { createContext } from 'react'
import ContextAPIChild1 from './ContextAPIChild1';

const MyContext = createContext();
const MyNewContext = createContext();

function ContextAPI() {
    const shareData = "Hello from Parent using Context API in React.";
    const shareNewData = "Multiple Entry";

    return (
        <div>
            <MyContext.Provider value={shareData}>
                <MyNewContext.Provider value={shareNewData}>
                    <h1>Practice of Context API in React!</h1>
                    <ContextAPIChild1 />

                </MyNewContext.Provider>
            </MyContext.Provider>

        </div>
    )
}

export default ContextAPI;
export { MyContext }
export { MyNewContext }

