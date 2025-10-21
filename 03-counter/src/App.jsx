import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // why need hooks - one variable update karte hi react har jaghe update kar ta he apne ap
  // for UI controling react use hooks to do that
  // let counter =5

  const addValue = () => {
    // counter = counter +1
    // console.log("clicked ", counter);
    if(counter>=20){
      return;
    }else{
      setCounter(counter + 1)
    }
  }

  const removeValue = () =>{
    if(counter<=0){
      return;
    }else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>

      <button
      onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
