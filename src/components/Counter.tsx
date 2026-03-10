import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <button onClick={updateCount}>Counter</button>
            Count: {count}
        </>
    );
}
