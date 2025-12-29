import React, { createContext } from 'react'
import { MyContext, MyNewContext } from './ContextAPI'

function ContextAPIChild2() {
    // const shareData = createContext(MyContext);
    // console.log(shareData);
    return (
        <div>
            <h2>Child 2 of Context API</h2>
            <MyContext.Consumer>
                {
                    (shareData) => {
                        return (
                            <MyNewContext.Consumer>
                                {
                                    (shareNewData) => {
                                        return <p>{shareData} = {shareNewData}</p>
                                    }
                                }
                            </MyNewContext.Consumer>
                        )
                    }
                }
            </MyContext.Consumer>

        </div>
    )
}

export default ContextAPIChild2
