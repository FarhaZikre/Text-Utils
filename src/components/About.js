//import React, { useState } from 'react'
import React from 'react'
export default function About(props) {
    /*
    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: '#f0faf7'
        }
    )
    */
    /*
    const [btnText, setBtnText] = useState('Dark-Mode')

    const toggleMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: '#042743', //dark color
                border: '2px solid whitesmoke'
            })
            setBtnText('Light-Mode')
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: '#f0faf7' // light color
            })
            setBtnText('Dark-Mode')
        }
    }
    */
    return (
        <>
            <div className='container2 my-3' style={{color: props.mode==='dark'? 'white':'black'}}>
                
                <div className="card mx-4 my-4" style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode==='dark'? '#042743':'#f0faf7'}} >
                        <h4>Uppercase</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Convert Your Text to UPPERCASE</h5>
                        <p className="card-text">Discover the power of our Uppercase functionality, allowing you to effortlessly convert text to uppercase for a impactful online presence. Explore the benefits and possibilities of this exciting feature now.</p>
                    </div>
                </div>

                <div className="card mx-4 my-4" style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode==='dark'? '#042743':'#f0faf7'}}>
                        <h4>Lowercase</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Convert Your Text to lowercase</h5>
                        <p className="card-text">Discover the power of our lowercase functionality, allowing you to effortlessly convert text to lowercase for a impactful online presence. Explore the benefits and possibilities of this exciting feature now.</p>
                    </div>
                </div>

                <div className="card mx-4 my-4" style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode==='dark'? '#042743':'#f0faf7'}}>
                        <h4>Speak</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Text-to-Speech</h5>
                        <p className="card-text">Experience the future of accessibility and user engagement with our Text-to-Speech functionality. Transform written content into lifelike spoken words.</p>
                    </div>
                </div>

                <div className="card mx-4 my-4" style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode==='dark'? '#042743':'#f0faf7'}}>
                        <h4>Copy-To-Clipboard</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Copy and Paste</h5>
                        <p className="card-text">Easily copy your transformed text and paste anywhere you want.</p>
                    </div>
                </div>

                <div className="card mx-4 my-4" style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode==='dark'? '#042743':'#f0faf7'}}>
                        <h4>Removes Extra-Space</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Removes Extra space from your text</h5>
                        <p className="card-text">Elevate the cleanliness and readability of your content with our 'Remove Extra Space' functionality. Say goodbye to unsightly gaps and unnecessary spaces, ensuring your text appears sleek and professional.</p>
                    </div>
                </div>

                <div className="card mx-4 my-4" style={{backgroundColor: props.mode==='dark'? 'grey':'white'}}>
                    <div className="card-header" style={{backgroundColor: props.mode==='dark'? '#042743':'#f0faf7'}}>
                        <h4>Clear-Text</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Delete your written text</h5>
                        <p className="card-text">Clear your written text easily by one click without selecting text.</p>
                    </div>
                </div>

            </div>
            {/* <button className="btn btn-primary mx-2 my-2" onClick={toggleMode}>{btnText}</button> */}
        </>
    )
}
