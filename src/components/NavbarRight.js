import React, {useContext} from "react";
import AppsIcon from '@mui/icons-material/Apps';
import "../pages/SearchPage.css"
import ButtonBlue from "../components/ButtonBlue";
import Switch from '@mui/material/Switch';
import {TermContext} from "../api/TermContext"


function NavbarRight() {

  const {themes} = useContext(TermContext)
  const [theme, setTheme] = themes

  console.log(theme)

  const switchHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="right-navbar">
      <Switch 
        label="Dark Mode" 
        color="info" 
        onChange={switchHandler}
        checked={theme === "light"}
        />
      <div><AppsIcon className="apps-icon"/></div>
      <div><ButtonBlue text="Sign in"/></div>
    </div>
  )
}

export default NavbarRight