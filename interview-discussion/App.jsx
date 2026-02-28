import { useEffect } from "react";
import { useState } from "react";

function App(){
    const [value, setValue] = useState(1);
    // const [multipliedValue, setMultipliedValue] = useState(1);

    // main function of react is that if there a change in state or a props, then an entire component get rendered or re-rendered. Many time we have to do it forcefully. We use all these things like useEffect, etc.

    let multipliedValue = value * 5
    //  we have a state the value here. Now if anything changes in this state then what happens is that our component gets remounted. Now which component is getting remounted hereis App. Means all line of code will run again by line.

    const multiplybyfive = () => {
        // setMultipliedValue(value * 5)
        setValue(value + 1)
    }

    // useEffect(() => {     -----> this is not good practice
    //     multipliedValue()
    // }, [value])      

    return (
        <>
        <h1>Main value: {value}</h1>
        <button onClick={multiplybyfive}>MultiplybyFive</button>
        <h2>Multiplied value: {multipliedValue}</h2>
        </>
    )
}

export default App