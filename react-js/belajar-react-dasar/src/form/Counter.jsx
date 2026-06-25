import {useState} from "react";

function Counter() {
    let [counter, setCounter] = useState(0);

    console.info(`Render Counter ${counter}`)

    function handleClick() {
        setCounter((counter) => counter +1);
        setCounter((counter) => counter +1);
        setCounter((counter) => counter +1);
        console.log(counter);
    }

    return (
        <div>
            <button onClick={handleClick}>Increment+3</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}

export default Counter;