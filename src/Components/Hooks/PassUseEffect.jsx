import React, { useEffect } from 'react'

function PassUseEffect(props) {
    useEffect(() => {
        console.log("Called with Props");
    })
    
    useEffect(() => {
        console.log("Count is: " + props.count);
    }, [props.count]);

    useEffect(() => {
        console.log("Total is: " + props.total);
    }, [props.total]);

    useEffect(() => {
        console.log("Count is:" + props.count + " And Total is: " + props.total);
    }, [props.count, props.total]);
  return (
    <div>
        <h3> Count: {props.count} </h3>
        <h3> Total: { props.total } </h3>
    </div>
  )
}

export default PassUseEffect
