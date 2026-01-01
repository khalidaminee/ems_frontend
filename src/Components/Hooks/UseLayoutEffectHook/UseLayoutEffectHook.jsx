import React, { useLayoutEffect, useRef, useState } from 'react'
import { use } from 'react';

function UseLayoutEffectHook() {
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);
    console.log(elementRef);
    useLayoutEffect(() => {
        if (elementRef.current) {
            setWidth(elementRef.current.getBoundingClientRect().width);
        }
    });

    return (
        <div className='text-center'>
            <h1>useLayoutEffect Hook in react.</h1>
            <div>
                <h2>Width Measurment Example</h2>

                <div
                    ref={elementRef}
                    style={{
                        width: "500px",
                        background: 'lightblue',
                        margin: "auto"
                    }}
                >
                    Element whose width is measure.
                </div>
                <p>Width: {width}px</p>

            </div>
        </div>
    )
}

export default UseLayoutEffectHook
