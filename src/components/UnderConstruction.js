import React from 'react'
import "./UnderConstruction.css"
import logo from "../assets/logo.png"
import robot from "../assets/robot.png"

function UnderConstruction() {
  return (
    <div className='row'>
        <div className='column'>
            <div><img className='google-logo2' src={logo} alt="google logo"></img></div>
            <div><p><span><b>Hi! </b></span><span className='text-gray'>Nothing to see here.</span></p>
            <br/>
            <p>This page is currently under construction.</p>
            <p>Come back soon!</p></div>
        </div>
        <div className='column'>
            <div><img className='robot' src={robot} alt="google logo"></img></div>
        </div>
    </div>
  )
}

export default UnderConstruction