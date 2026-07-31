
import Footer from "./footer"

import Welcome from "./Welcome"
import StudentCard from "./studentprofilecard"
// import WelcomeClass from "./WelcomeClass"
function SayHello() {
  return <h1> Hello Student (3x) </h1>
}


function App() {
  return (
    <div>
      <Welcome name="Aditya" course ="BCA" Year="2026"></Welcome>
      <Welcome name="prithvi" course ="BCA" Year="2027"></Welcome>
      <Welcome name="deepak" course ="BCA" Year="2028"></Welcome>

      <StudentCard name={"Prithvi"} course={'BCA'} />
      <StudentCard name={"Deepak"} course={'BCA'} />
      <StudentCard name={"Aditya"} />
    </div>
  )
}

export default App
