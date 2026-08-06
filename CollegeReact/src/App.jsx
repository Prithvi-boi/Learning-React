import Card from "./Components/card" 
import cardmodule from "./CssModules/Card.module.css"

function App() {
  return (
    <div>
      <Card></Card>
      
      <div className={cardmodule.card}>
        <p>I am inside Css card module</p>
      </div>
    </div>
  )
}

export default App
