import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
function App() {
  let myobj = {
    id: 3215,
    age: 23,
  }
  let newArr = [1, 23, 354]
  return (
    <>
      <h1 className='bg-blue-800 text-black p-4 rounded-xl '>hello tailwind css</h1>
      <Card name="hemanth" obj={myobj} arr={newArr} />
    </>
  )
}

export default App
