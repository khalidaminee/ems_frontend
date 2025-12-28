import React, { useContext } from 'react'

import { MyContext } from './UseContextHook';


function UseContextChild2() {
    const shareData = useContext(MyContext);
    console.log(shareData);
    return (
        <>
            <h2>Use Context Child 2 Component</h2>
            {/* Example 1 */}
            <p>{shareData}</p>

        </>
    )
}

export default UseContextChild2
