import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Alert from "./Alert";
export default function TextForms(props) {
  
  const handle_on_change = (event) => {
    setText(event.target.value);
    
  };
  const [alert,setalern]=useState(null)

  const show_alert=(message,type)=>{
    setalern({
      msg:message,
      type:type
    })
    

  }
  
  const handle_click = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handle_click_lower_case = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
    
        <div className="mb-3">
          <h1 id="text_area"></h1>
          <textarea
            style={{backgroundColor:props.mode=='light'?'white':'grey',
            color:props.mode=='light'?'black':'white'}}
            onChange={handle_on_change}
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button className={`btn ${props.mode!=='dark'?'btn-primary':'btn-light'} my-2 mx-2`}  onClick={handle_click} >
            Convert to Uppercase
          </button>
          <button className={`btn ${props.mode!=='dark'?'btn-primary':'btn-light'} my-2 mx-2`} onClick={handle_click_lower_case}>
            Convert to LowerCase
          </button>
        </div>
      </div>
      <div className="container my-3"
      style={{color:props.mode=='light'?'black':'white'}}>
        <h1>text</h1>
        <p>{text.split(' ').length} words,{text.length} chars</p>
        <p>{0.008*(text.split(' ').length+text.split(',').length)} minutes takes to read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Text to Preview Here"}</p>
      </div>
    </>
  );
}