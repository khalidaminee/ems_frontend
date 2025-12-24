import React, { useImperativeHandle, useRef } from 'react'

export default function RefChildComponent({ref}) {

    // Example 2
    const childRef = useRef();
    const handleChildButtonClick = () => {
        console.log("child button clicked");
    }
    
    useImperativeHandle(ref, () => ({
        handleChildButtonClick,
    }));

    
  return (
    <>
        {/* Example 1 */}
        {/* <div className="form-group">
                <input type="text" className="form-control" ref={props.ref} />
        </div> */}

        {/* Example 2 */}
        
        <button ref={childRef} className='btn btn-primary'>Child Button</button>
    </>
  )
}
