import React, { useState } from "react";





function App() {

    const [count,setCount] = useState(0);

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrements() {
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
    }

    function increments() {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    return(
    <div className="appcontainer">
        <button className="decrement" onClick={decrements}>
            <h1>--</h1>
        </button>
        <button className="decrement" onClick={decrement}>
            <h1>-</h1>
        </button>
        <div className="number">{count}</div>
        <button className="increment" onClick={increment}>
            <h1>+</h1>
        </button>
        <button className="increment" onClick={increments}>
            <h1>++</h1>
        </button>
    </div>
    )
}

export default App