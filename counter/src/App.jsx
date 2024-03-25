import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 2;
  let [counter, setCounter] = useState(17);
  const addValue = () => {

    //  counter = counter + 1;

    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
    //console.log("addValue", counter);
  }
  const removeValue = () => {
    // counter = counter -1;
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);

    //  console.log("removeValue", counter);
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter : {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  )
}
export default App
