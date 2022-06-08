import React from 'react'
import "./UnderConstruction.css"
import logo from "../assets/logo.png"
import robot from "../assets/robot.png"

function UnderConstructionMaps() {
  return (
    <div className='row'>
        <div className='column'>
            <div><img className='google-logo2' src={logo} alt="google logo"></img></div>
            <div><p><span><b>📍 You are here. </b></span><span className='text-gray'>That's all we got for now.</span></p>
            <br/>
            <p>This page is still under construction.</p>
            <p>Meanwhile you can go check the rest of my portfolio <a href="https://guidocalciano.com.ar">here.</a> Come back soon!</p></div>
        </div>
        <div className='column'>
            <div><img className='robot' src={robot} alt="google logo"></img></div>
        </div>
    </div>
  )
}

export default UnderConstructionMaps