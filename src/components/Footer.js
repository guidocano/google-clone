import React, {useContext} from 'react'
import "./Footer.css"
import {Link} from "react-router-dom";
import {TermContext} from "../api/TermContext"

function Footer(props) {

  const {themes} = useContext(TermContext)
  const [theme] = themes

  return (
    <footer className={props.class}>
        <div className={theme === "light"? "footerbox" : "footerbox-dark"}>
            <div className="left">
                <Link to=" ">About</Link>
                <Link to=" ">Advertising</Link>
                <Link to=" ">Business</Link>
                <Link to=" ">How Search works</Link>
            </div>

            <div className="right">
                <Link to=" ">Privacy</Link>
                <Link to=" ">Terms</Link>
                <Link to=" ">Settings</Link>
        </div>
        </div>

    </footer>
  )
}

export default Footer