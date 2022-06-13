import React, {useContext} from 'react'
import Switch from '@mui/material/Switch';
import {TermContext} from "../api/TermContext"
import "../pages/SearchPage.css"


function DarkMode() {

    const {themes} = useContext(TermContext)
    const [theme, setTheme] = themes

    // console.log(theme)

    const switchHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    }

  return (
    <React.Fragment>
        <div className={theme === "light" ? "label-dark-mode-hidden" : "label-dark-mode-dark-hidden"}>Mode:</div>
        <span>&nbsp;&nbsp;</span>
        <div className={theme === "light" ? "label-dark-mode" : "label-dark-mode-dark"}>{theme}</div>
        <Switch 
            label="Dark Mode" 
            color="info" 
            onChange={switchHandler}
            checked={theme === "light"}
        />
    </React.Fragment>
  )
}

export default DarkMode