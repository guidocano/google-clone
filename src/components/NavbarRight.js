import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import "../pages/SearchPage.css"
import ButtonBlue from "../components/ButtonBlue";
import Switch from '@mui/material/Switch';


function NavbarRight() {
  return (
    <div className="right-navbar">
      <Switch label="Dark Mode" color="info" />
      <div><AppsIcon className="apps-icon"/></div>
      <div><ButtonBlue text="Sign in"/></div>
    </div>
  )
}

export default NavbarRight