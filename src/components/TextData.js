import React, { useState } from 'react'

export default function TextData(props) {

    const [text, setText] = useState('');
    // text is our state: means text yeh 1 variable hai jisko hum directly value assign nai kr sakte
    //text = "Farha" wrong syntax in react
    //setText("Farha"); this is correct in react


    const uppercase = () => {
        //console.log("Uppercase wnated "+text); // this text variable fetches text whatever you wrote in texarea
        let newText = text.toUpperCase(); // convert text to upper case and assign to newText variable
        setText(newText)//used for updation in text area
    }

    const lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const copyclipboard = () => {
        navigator.clipboard.writeText(text);
    };
    const removeExtraSpace = () =>
    {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
    }
    const cleartext = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        //console.log("Handle on change");// using only this i am not able to write my text in textarea
        setText(event.target.value) // this is function,with using this i can write text in text are.
        //This method get textarea value
    }

    return (
        <>

            <div className='container mx-5 my-3' style={{color: props.mode==='dark'? 'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" 
                    style={{backgroundColor: props.mode==='dark'? 'grey':'white',color: props.mode==='dark'? 'white':'black'}}></textarea>
                    {/* to get this props.mode we need 2 previous actions 1. props name should be in starting function 2.mode should be send from rendering in app.js file definig component*/}
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={uppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={lowercase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copyclipboard}>Copy-To-Clipboard</button>
                <button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpace}>Remove-Extra-Space</button>
                <button className="btn btn-primary mx-2 my-2" onClick={cleartext}>Clear-Text</button>
            </div>

            <div className="container my-2 mx-5" style={{color: props.mode==='dark'? 'white':'black'}}>
                <h2>Your Text Summary...</h2>
                <p>{text.trim().length} characters, {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
                <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p align="justify" >{text.length>0?text:"Enter something in Text-Box to preview"}</p>
            </div>

        </>
    )
}
