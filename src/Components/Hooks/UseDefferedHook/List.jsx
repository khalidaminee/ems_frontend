import React, { useDeferredValue, useEffect, useMemo } from 'react'

export default function List({ input }) {
    const dataSize = 5000;
    const defferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        const a = [];
        for (let i = 0; i < dataSize; i++) {
            a.push(<div key={i}>{defferredInput}</div>)
        }
        return a;
    }, [defferredInput]);
    useEffect(() => {
        console.log(`Input: ${input} \n Deffered: ${defferredInput}`);
    })
    return list;
}
