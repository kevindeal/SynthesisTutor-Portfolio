// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/hero'
import { ThreeCol } from './components/projectsGrid/threeCol'
import { TabChart } from './components/tabChart/tabChart'

function App() {

  return (
    <>
      <div>
        <h1>kd portfoli</h1>
        <Hero/>
        <ThreeCol/>
        <TabChart/>
      </div> 
    </>
  )
}

export default App
