import React, {useContext} from 'react'
import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import Search from "../components/Search"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import useUnsplash from "../api/useUnsplash"
import ImageList from "../components/ImageList"
import SmallNavbar from "../components/SmallNavbar"
import NavbarRight from "../components/NavbarRight"



function SearchPageImages() {

    const {active, themes} = useContext(TermContext)
    const [activeInput] = active
    const [, setTheme] = themes
    setTheme("light")

    const {data} = useUnsplash(activeInput);

    return (
        
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/">
                    <img className='searchPage__logo' src={logo} alt="google logo" />    
                </Link>
                
                <div className='searchPage__headerBody'>
                    <Search hideButtons route="images/search/" />

                    <NavbarRight />

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