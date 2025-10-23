import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "Shivam",
    age: 20
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-amber-400 text-white p-4 rounded-xl mb-4'>Tailwindcss Test</h1>

      <Card username="ChaiaurCode" someObj={myObj}/>
      <Card username="Kant" btnText="click me"/>
      
    </>
  )
}

export default App
