import React, {memo} from 'react'

function UseCallbackChild({increment}) {
    console.log("Child Rendering.");
  return (
    <>
        <button onClick={increment}>Child Increment</button>
    </>
  )
}

export default memo(UseCallbackChild)
