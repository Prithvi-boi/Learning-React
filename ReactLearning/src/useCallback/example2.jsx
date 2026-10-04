
// 2. Updating state from a memoized callback

import { useState, useCallback } from "react"

function Updating() {

    const [count, setCount] = useState(0)

    const increaseCount = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={increaseCount}>
                Increase
            </button>
        </div>
    )
}

export default Updating