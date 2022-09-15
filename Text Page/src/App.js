import "./App.css";
import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import ReactDOM from 'react-dom';
import Alert from "./Components/Alert";
// import About from "./Components/About";



function App() {
  const[mode,setmode]=useState('light')
  const[rmode,setrmod]=useState('light')
  const[Enable_color_mode_text,setEnable_color_mode_text]=useState('Enable Dark mode')
  
  const toggle_mode=()=>{
  
    if (mode=='light'){
      setmode('dark')
      document.body.style.backgroundColor='#2583db';
      // setrmod('light')
      // setEnable_color_mode_text('Enable Light mode')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      // setrmod('dark')
      // setEnable_color_mode_text('Enable Dark mode')
      
    }

  }
    
  return (
    <>
    <Navbar mode={mode} toggle_mode={toggle_mode} rmode={rmode} Enable_color_mode_text={Enable_color_mode_text}/>
    {/* <Alert alert="This is alert"/> */}
    <TextForms heading="Hello" mode={mode}/>
    {/* <About/> */}
    
    </>
  );
}
export default App;
