import React from 'react'
import Nav from './components/Nav'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
const App = () => {
  const [mode,setMode]= useState('light');
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
    } 
    else {
    setMode('light');
    }
  }
  return (
    <div>

    <Nav title = "Textutils" mode ={mode} toggleMode= {toggleMode}/>
    <About/>
    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze"/> 
    
    </div>
    </div>
  )
}

export default App