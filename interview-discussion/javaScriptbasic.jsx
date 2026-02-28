import { useState, useEffect } from "react";


function App(){
    console.log("App rendered", Math.random()) 
    // const [value, setValue] = useState(1);
     const [value, setValue] = useState({
        value: 0,
     })
    
     useEffect(() => {}, [value.value]) // individually going inside its object and checking with a value that if there is any change in it then re-render it, Otherwise not to do it.
    

    const clickme = () => {
        console.log("logged"); // only logged is write then not render
        setValue(value + 1); // value state then forcefully re-rendered
        setValue(1) // no change in state value. Its default value was one then setvalue is also one then no render.
        setValue(3) // you change you once and it got changed, the second time it saw that the value is same. After that react got to know that it has changed the value once frome usestate it. Changed it again, so it again re-rendered you from a safety point but nothing is happening.
        setValue({
            value: 0,
        })  // render because it is a object which is non-premitive data type(here concept of pass by value or pass by references)
    }
     

    return (
        <>
        {/* <h1>Main value: {value}</h1> */}
        <h1>Main value: {value.value}</h1>
        <button onClick={clickme}>MultiplybyFive</button>
        
        </>
    )
}

export default App