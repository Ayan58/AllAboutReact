import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)


  const in_value = () => {
    if(counter<20){
      setCount(counter+1)
    }else{return}
    
  }
  const de_value = () => {
    if(counter>0){
      setCount(counter-1)
    }else{return}
  }

  return (
    <>
      <h1>count : {counter}</h1>
      <button onClick={in_value}>Increase by 1</button>
      <button onClick={de_value}>decrease by 1</button>
      <p>first: {counter}</p>
      <h3>second: {counter}</h3>
    </>
  )
}

export default App
