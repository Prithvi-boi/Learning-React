import { useState } from "react"
import { useConsoleLogger, useToggle } from "./customHooks"

function App() {
  const [value, setvalue] = useState('')
  useConsoleLogger(value)
  
  const [bgColortoggle, settoggle] = useToggle()

  return (
    <>
      <h1 className="h-10 bg-black text-white">Learning React js</h1>
      <input type="text" placeholder="Type anything" onChange={(e) => {setvalue(e.target.value)}}></input>
      <hr />
      <div className={`${bgColortoggle ? 'bg-gray-600' : 'bg-black'} h-20 w-full`}>
        <button className="h-10 w-20 bg-white" onClick={() => settoggle()}>Change Bg color</button>
      </div>    
    </>
  )
}

export default App