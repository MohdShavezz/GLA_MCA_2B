import { useState } from "react"
import Counter from "./Counter"
import CounterFn from "./CounterFn"

function App() {

  const [show,setShow]=useState(true)

  return (
    <>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {show&&<CounterFn/>}
      <button onClick={()=>setShow(false)}>HIDE</button>
    </>
  )
}

export default App
