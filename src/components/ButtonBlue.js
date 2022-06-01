import React from 'react'
import "./ButtonBlue.css"

function ButtonBlue(props) {
  return (
    <div>
        <button className="blue-button">{props.text}</button>
    </div>
  )
}

export default ButtonBlue