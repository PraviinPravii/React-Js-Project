import React from "react";
import { useState } from "react";

export default function About() {
    const [setcolor,updatecolor]=useState({dark_style:{
        color: "white",
        backgroundColor: "black",
    }})
    const [text,setText]=useState('Enable Dark Mode')
  const dark_style = {
    color: "white",
    backgroundColor: "black",
  };
  const color_change=()=>{
    if(setcolor.color=='black'){
        updatecolor({
            color:'white',
            backgroundColor:'black',
            border:'2px solid white'
        })
        setText("Enable Light Mode")
    }
    else{
        updatecolor({
            color:'black',
            backgroundColor:'white',
            border:'2px solid black'
        })
        setText("Enable Dark Mode")

    }
  }
  return (
    <>
      <div className="container"  style={setcolor}  >
        <div className="accordion" id="accordionExample" style={setcolor}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne" >
              <button
                style={setcolor}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                
              >
                Accordion Item #1
              </button>
            </h2>
            <div
            style={setcolor}
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={setcolor}>
            <h2 className="accordion-header" id="headingTwo" style={setcolor}>
              <button
              style={setcolor}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
            style={setcolor}
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={setcolor}>
            <h2 className="accordion-header" id="headingThree" style={setcolor}>
              <button
              style={setcolor}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
            style={setcolor}
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button onClick={color_change} type="button" className="btn btn-primary my-3">{text}</button>
      </div>
    </>
  );
}
