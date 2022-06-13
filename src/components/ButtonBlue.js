import React, {useContext} from 'react'
import "./ButtonBlue.css"
import {TermContext} from "../api/TermContext"

function ButtonBlue(props) {
  const {themes} = useContext(TermContext)
  const [theme] = themes

  return (
    <div>
        <button className={theme === "light"? "blue-button" : "blue-button-dark"}>{props.text}</button>
    </div>
  )
}

export default ButtonBlue