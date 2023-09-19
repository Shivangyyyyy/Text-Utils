import React from "react";
import { useState } from "react";
import App from './../App';

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleOnClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnLowerClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = ()=>{
    let newText = '';
    setText(newText);

  }
//   const copy = ()=>{
//     var text = document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
//   }

  
  const removeSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  //only for speak
  // const speak = () => {
  //     let msg = new SpeechSynthesisUtterance();
  
  //     msg.text = text;
  //     window.speechSynthesis.speak(msg);
  //   }

  //speak & stop
 const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

  const vowels = ()=>{
    for (count=0; count <= text.length; count++){
        if (text.charAt(count).match (/[aeiouAEIOU]/)){
            countChar++;
            setCount(countChar);
        }
    }
  };
  const consonant = () => {
    for (count1 = 0; count1 <= text.length; count1++){
        if (text.charAt(count1).match (/[a-zA-z]/)){
            countCons++;
            setCount1(countCons);
        }
    }
  };
  
  const [text, setText] = useState("Enter your text here");

  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar=0,
  countCons=0;
  
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label className="form-label">Enter the Text</label>
          <textarea
            className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="9"></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleOnLowerClick}>Convert to Lowercase </button>
        {/* <button className="btn btn-primary mx-1"id="my-box" onClick={copy}>Copy Text </button> */}
        <button className="btn btn-primary mx-1" onClick={clear}>Clear Text </button>
        <button className="btn btn-primary mx-1" onClick={removeSpace}>Remove Extra Spaces </button>
        <button className="btn btn-primary " id="toggle" onClick={speak}>Speak </button>
        
        
      </div>
      <div className="container my-3">
        <h3> Your Text Summary</h3>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes taken to read , {text.length}{" "}characters</p>
        <h3>Preview</h3>
        <p>{text}</p>

        <h3>You have entered:</h3>
        <button className="btn btn-primary" onClick={vowels}>Count Vowels </button>
        <p>{count} No. of Vowels</p>
        
        <button className="btn btn-primary " onClick={consonant}>Count Consonants </button>
        <p>{count1} No. of Consonants</p>
        
        
      </div>
    </>
  );
}
