// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AboutMe } from './components/aboutMe/aboutMe'
import {Hero} from './components/hero/hero'
import { ThreeCol } from './components/projectsGrid/threeCol'
// import { TabChart } from './components/tabChart/tabChart'

function App() {

  return (
    <>
      <div className='hero-bg-overlays'>
        <Hero/>
        <ThreeCol/>
        <AboutMe/>
      </div> 
    </>
  )
}

export default App
