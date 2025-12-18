import React, {memo } from 'react'

function MemoChildComponent( props ) {
    console.log("Child Component !")
  return (
    <>   
        <h2> Child Component: { props.count } </h2>
    </>
  )
}

export default memo(MemoChildComponent);
