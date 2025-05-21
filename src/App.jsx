import { BrowserRouter } from "react-router-dom"
import Navbar from "./component/navbar"
import Intro from "./component/intro"

function App() {
 

  return (
 <>
 <BrowserRouter>
 <Navbar/>
 <Intro/>
 </BrowserRouter>
 
 </>
  )
}

export default App
