import React from "react";

export default function About(props) {

let myStyle = {
    background: props.mode ==='dark'? '#3b4c59' : 'white', 
    color : props.mode==='dark'? '#B2DFDB' : '#3b4c59'
}
let headingstyle = { 
    color: props.mode === "dark" ? "#03DAC6": "#3b4c59",
}

  return (
    <div className="container">
      <h1
        className="my-3"
        style={headingstyle}
      >
        About Us
      </h1>
      <p className="container" style={{ color: props.mode==='dark'? '#B2DFDB' : 'black'}}>
        <b>TextUtils</b> is a ReactJs website built primarily to do various
        operations on regular typed text. You can safely use WordPad or NotePad
        for text drafting, and saving, but <i>TextUtils</i> offers much more
        than simple text drafting and formatting. TextUtils can convert your
        text to any case in just one simple click of a button. It has an improved property of reversal of your inputted text.You can even remove whitespaces
        from your scripted documents, and wear up your earphones to listen to
        it, instead of straining your eyes! It does a detailed analyzing of your
        text, and provides an output of words, and characters, along with
        reading time as well. <br />
        The most eminent features of the website are as follows :
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong style={headingstyle}>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count ,vowel count or consonant counter.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong style={headingstyle}>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a <b>Free</b> character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong style={headingstyle}>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

