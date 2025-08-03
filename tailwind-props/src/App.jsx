import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline'>tailwind</h1>
      <Card uName = "learn react" />
      <Card uName = "another learn react"/>
    </>
  )
}

export default App
