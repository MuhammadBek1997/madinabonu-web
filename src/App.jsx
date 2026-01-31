import { useEffect, useState } from 'react'
import './App.css'
import About from './pages/About'
import Teachers from './pages/Teachers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [theme,setTheme] = useState("light")
  


  document.getElementById("root").parentElement.setAttribute("data-theme",theme)
  
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
      <About/>
      <Teachers/>
      <Footer theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
