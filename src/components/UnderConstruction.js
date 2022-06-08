import React from 'react'
import "./UnderConstruction.css"
import logo from "../assets/logo.png"
import robot from "../assets/robot.png"

function UnderConstruction() {
  return (
    <div className='row'>
        <div className='column'>
            <div><img className='google-logo2' src={logo} alt="google logo"></img></div>
            <div><p><span><b>📰 Good News! </b></span><span className='text-gray'>We are currently developing this page.</span></p>
            <br/>
            <p>Check your local newspaper or come back later for the last updates!</p>
            {/* <p>Meanwhile you can go see the rest of my portfolio <a href="https://guidocalciano.com.ar">here.</a></p> */}
            </div>
        </div>
        <div className='column'>
            <div><img className='robot' src={robot} alt="google logo"></img></div>
        </div>
    </div>
  )
}

export default UnderConstruction