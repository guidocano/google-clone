import React, {useContext} from 'react'
import "./Button.css"
import {TermContext} from "../api/TermContext"

const Button = (props) => {
    const {themes} = useContext(TermContext)
    const [theme] = themes

    return(
        <button 
            type="button"
            onClick={props.onPressed} 
            className={theme === "light"? "search-button" : "search-button-dark"}
        >
            {props.text}
        </button>
    )
}

export default Button;