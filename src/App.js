import React from 'react'
import Nav from './components/Nav'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';
import Fotter from './components/Fotter';
const App = () => {
    const [mode,setMode]= useState('light');
    const [alert, setAlert] = useState(null)


    const toggleMode = ()=>{
      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(4, 39, 67)';
        showAlert("Dark mode has been enabled" , "Sucess !")
      } 
      else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled" , "Sucess !")
      }
    }


    const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        Type: type,
      })
        setTimeout(() => {
          setAlert(null);
      }, 1500);
    }
    
  return (
    <>
    <Router>
        
    <Nav title = "Textutils" mode ={mode} toggleMode= {toggleMode} key={new Date()}/>
    <Alert  alert = {alert}/>
      <div className="container my-3">
      <Routes>
          {/* /users --> Component 1
          /users/home --> Component 2
          Always use "exact" keyword to match the exact path */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode} />} />
        
          </Routes>
          </div>
        
      </Router>
      
    <Fotter/>
    </>
  );
        }

export default App;

