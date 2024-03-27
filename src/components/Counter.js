import { useState } from "react"; 

const Counter = () => {
    const [count, Setcount] = useState(0)
    console.log(count)

    const addTwo = () => {
        Setcount(count + 2);
    }

    const resetCount = () => {
        Setcount (0)
    }

    return (
        <div>
            <h4>Count : {count}</h4>
            <button onClick={addTwo}>+2</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}

export default Counter