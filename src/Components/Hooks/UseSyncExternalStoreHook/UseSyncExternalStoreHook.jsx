import React, { useSyncExternalStore } from 'react'

function UseSyncExternalStoreHook() {
    const width = useSyncExternalStore((listener) => {
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        }
    }, () => window.innerWidth);


    return (
        <div>
            <h1>useSyncExteranlStoreHook in React.</h1>
            {/* Example 1 */}
            <h2>Window Size: {width}</h2>

        </div>
    )
}

export default UseSyncExternalStoreHook
