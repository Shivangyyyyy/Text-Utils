import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //UpperCase
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Uppercase!", "Success");
  };

  const handleOnLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lowercase!", "Success");
  };

  const handleReverse = () => {
    const reversed = text.split('').reverse().join('');
    setText(reversed);
    props.showAlert("Text Reversed!", "Success");
  };

  const sentenceCase = () => {
    const formattedText = text
      .toLowerCase()
      .replace(/(^\s*|\.\s*)\w/g, (match) => match.toUpperCase());
    setText(formattedText);
    props.showAlert("Changed to Sentence Case!", "Success");
  };
  

  //Clear 
  const handleClear = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "Success");
  }
  //copy
  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}

  //remove space
  const removeSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra Spaces Removed !", "Success");
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
            props.showAlert("speaking the text!", "Success");

        }
        else {
            toogle.innerHTML = "Speak"
            if(toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
                props.showAlert("Listen the text !", "Success");

            }
        }
    }

    const removeSpecialCharacters = () => {
      const result = text.replace(/[^\w\s]/g, '');
      setText(result);
      props.showAlert("Special characters Removed!", "Success");
    };
  
    const handlePaste = async () => {
      try {
        const clipboardData = await navigator.clipboard.readText();
        setText(clipboardData);
      } catch (error) {
        console.error('Error reading from clipboard:', error);
      }
      props.showAlert("Pasted from clipboard!", "Success");
    };

  const vowels = ()=>{
    for (count=0; count <= text.length; count++){
        if (text.charAt(count).match (/[aeiouAEIOU]/)){
            countChar++;
            setCount(countChar);
            props.showAlert("Counting Vowels !", "Success");

        }
    }
  };
  const consonant = () => {
    for (count1 = 0; count1 <= text.length; count1++){
        if (text.charAt(count1).match (/[a-zA-z]/)){
            countCons++;
            setCount1(countCons);
            props.showAlert("Counting Consonant !", "Success");

        }
    }
  };
  
  const [text, setText] = useState("");

  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar=0,
  countCons=0;
  let myStyle = {
    background: props.mode ==='dark'? '#3b4c59' : 'white', 
      color : props.mode==='dark'? '#B2DFDB' : '#3b4c59'
  }
  let headingstyle = { 
    color: props.mode === "dark" ? "#03DAC6": "#3b4c59",
  }
  
  return (
    <>
      <div className="container" style={headingstyle}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          {/* <label className="form-label">Enter the Text</label> */}
          <textarea
            className="form-control" style={myStyle} value={text} onChange={handleOnChange} id="my-box" rows="9"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnLowerClick}>Convert to Lowercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlePaste}>Paste from Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeSpecialCharacters}>Remove Special Characters </button>
      
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remove Extra Spaces </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={sentenceCase}>Sentence </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " id="toggle" onClick={speak}>Speak </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={consonant}>Count Consonants </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={vowels}>Count Vowels </button>
      </div>
      <div className="container my-3 " style={headingstyle}>
        <h3> Your Text Summary</h3>
        <p style={headingstyle}>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words , {text.length} characters</p>
        <p style={headingstyle}>{0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Minutes taken to read , {text.length}{" "}characters</p>
        <h3>Preview</h3>
        <p style={headingstyle}>
        {text.length>0 ? text : "Nothing to preview !"}</p>
        <h3>You have entered:</h3>
        <p style={headingstyle}>{count} No. of Vowels</p>
        <p style={headingstyle}>{count1} No. of Consonants</p>
        
        
      </div>
    </>
  );
}
