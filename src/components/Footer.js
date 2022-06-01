import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom";

function Footer(props) {
  return (
    <footer className={props.class}>
        <div className="footerbox">
            <div className="left">
                <Link to="/google-clone">About</Link>
                <Link to="/google-clone">Advertising</Link>
                <Link to="/google-clone">Business</Link>
                <Link to="/google-clone">How Search works</Link>
            </div>

            <div className="right">
                <Link to="/google-clone">Privacy</Link>
                <Link to="/google-clone">Terms</Link>
                <Link to="/google-clone">Settings</Link>
        </div>
        </div>

    </footer>
  )
}

export default Footer