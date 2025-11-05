import React from 'react'
import Navbar from './components/navbar'
import CaseStudies from './components/CaseStudies'
import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import Services from './components/Services'
import About from './components/About'


function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white pt-1'>
       
        <Navbar />
        <LandingPage />
        <Marquee />
        <CaseStudies/>
        <Services />
        <About />



    </div>
  )
}

export default App