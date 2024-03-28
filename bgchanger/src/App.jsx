import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      </div>
      <div className='fixed flex flex-wrap justify-center top-14 inset-x-0 px-3'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-l'>
          <button onClick={() => setColor("red")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "red" }}>
            Red</button>
          <button onClick={() => setColor("gray")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "gray" }}>
            Gray</button>
          <button onClick={() => setColor("yellow")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "yellow" }}>
            Yellow</button>
          <button onClick={() => setColor("violet")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "violet" }}>
            Violet</button>
          <button onClick={() => setColor("pink")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "pink" }}>
            Pink</button>
          <button onClick={() => setColor("blue")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "blue" }}>
            Blue</button>
          <button onClick={() => setColor("olive")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "olive" }}>
            Olive</button>
          <button onClick={() => setColor("lavender")}
            className='outline-none px-3 py-1 rounded shadow-lg bg-white' style={{ backgroundColor: "lavender" }}>
            Lavender</button>
        </div>
      </div>
    </>
  )
}
export default App
