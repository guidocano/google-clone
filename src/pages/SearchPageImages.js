import React, {useContext} from 'react'
import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import SearchImages from "../components/SearchImages"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import useUnsplash from "../api/useUnsplash"
import ImageList from "../components/ImageList"
import SmallNavbar from "../components/SmallNavbar"

import AppsIcon from '@mui/icons-material/Apps';
import ButtonBlue from "../components/ButtonBlue"


function SearchPageImages() {

    const {active} = useContext(TermContext)
    const [activeInput] = active

    const {data} = useUnsplash(activeInput);
    // console.log(data?.data.results)


    return (
        
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/google-clone">
                    <img className='searchPage__logo' src={logo} alt="google logo" />    
                </Link>
                
                <div className='searchPage__headerBody'>
                    <SearchImages/>

                    <div className="right-navbar">
                        <AppsIcon className="apps-icon"/>
                        <ButtonBlue text="Sign in"/>
                    </div>

                    <div className='searchPage__options'>
                        <SmallNavbar  optionImages='icon-all'/>
                    </div>
                </div>
            </div>
            
            
            <div className='searchPageImages__results'>
                <ImageList images={data?.data.results} />
            </div>
            <Footer class="footer-static"/>            
        </div>
  )
}

export default SearchPageImages