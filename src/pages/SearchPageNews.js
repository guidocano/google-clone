import React from 'react'
// import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import Search from "../components/Search"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import SmallNavbar from "../components/SmallNavbar"
import UnderConstruction from "../components/UnderConstruction"
// import Response from "../pages/Response"

import AppsIcon from '@mui/icons-material/Apps';
import ButtonBlue from "../components/ButtonBlue"


function SearchPageNews() {

    // const {active} = useContext(TermContext)
    // const [inputValue, setInputValue] = input
    // const [activeInput] = active
    
    // const { data } = useGoogleSearch(activeInput);


    // console.log(data?.data)


    return (
        
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/google-clone">
                    <img className='searchPage__logo' src={logo} alt="google logo" />    
                </Link>
                
                <div className='searchPage__headerBody'>
                    <Search hideButtons />

                    <div className="right-navbar">
                        <AppsIcon className="apps-icon"/>
                        <ButtonBlue text="Sign in"/>
                    </div>

                    <div className='searchPage__options'>
                        <SmallNavbar  optionNews='icon-all'/>
                    </div>
                </div>
            </div>
            
            
            <div className='searchPage__results'>
                <UnderConstruction />
            </div>

            <Footer class="footer-static"/>            
        </div>
  )
}

export default SearchPageNews