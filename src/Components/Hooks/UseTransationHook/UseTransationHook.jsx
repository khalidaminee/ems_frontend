import React, { useEffect, useState, useTransition } from 'react'

function UseTransationHook() {
    const [isPending, startTransation] = useTransition();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useSate Run!");
    }, [count]);

    const handleEvent = () => {
        startTransation(() => {

            setCount(count + 1);
            console.log("Handle Click Run!");
        })
    }

    // Example 2
    const [input, setInput] = useState('');
    const [dataList, setDataList] = useState([]);
    const dataSize = 1000;
    // function
    const handleChange = (e) => {
        setInput(e.target.value);
        startTransation(() => {
            const a = [];
            for (let i = 0; i < dataSize; i++) {
                a.push(e.target.value);
            }
            setDataList(a);

        })
    }
    return (
        <div>
            <h1>useTransation Hook in React.</h1>
            {/* Example 1 */}
            <p>Count: {count} </p>
            <button onClick={handleEvent}>Icrement</button>
            <br />
            <br />

            {/* Example 2 */}
            <input type="text" value={input} onChange={handleChange} />
            {
                isPending ? "Loading..." :
                    dataList.map((item, index) => {
                        return <div key={index}> {item} </div>
                    })
            }

        </div>
    )
}

export default UseTransationHook
