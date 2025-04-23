import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Devlog from './components/Devlog'
import Contact from './components/Contact'
import Footer from './components/Footer'


import './App.css'

function App() {


  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Devlog />
      <Contact />
      <Footer />


    </div>



  )
}

export default App
