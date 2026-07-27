
import Footer from "./footer"

import Welcome from "./Welcome"
// import WelcomeClass from "./WelcomeClass"
function SayHello() {
  return <h1> Hello Student (3x) </h1>
}

function App() {
  return (
    <div>
    <Welcome name="jit" course ="BCA" Year="2026"></Welcome>
    <Welcome name="prithvi" course ="BCA" Year="2027"></Welcome>
    <Welcome name="deepak" course ="BCA" Year="2028"></Welcome>
    </div>
  )
}

export default App
