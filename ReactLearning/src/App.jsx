import { useState, useRef } from "react"
import { useConsoleLogger, useToggle } from "./customHooks"

function App() {
  const [value, setvalue] = useState('')
  useConsoleLogger(value)
  const btnref = useRef()
  console.log(btnref.current)
  
  const [bgColortoggle, settoggle] = useToggle()

  return (
    <>
      <h1 className="h-10 bg-black text-white">Learning React js</h1>
      <input type="text" placeholder="Type anything" onChange={(e) => {setvalue(e.target.value)}}></input>
      <hr />
      <div className={`${bgColortoggle ? 'bg-gray-600' : 'bg-black'} h-20 w-full`}>
        <button ref={btnref} style={{fontSize: `${bgColortoggle ? 10 : 20}px`}} className="h-10 w-20 bg-white" onClick={() => settoggle()}>Change Bg color</button>
      </div>    
    </>
  )
}

export default App