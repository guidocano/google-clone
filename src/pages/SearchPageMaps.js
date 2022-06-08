import React from 'react'
// import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import Search from "../components/Search"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import SmallNavbar from "../components/SmallNavbar"
import UnderConstructionMaps from "../components/UnderConstructionMaps"
import NavbarRight from "../components/NavbarRight"


function SearchPage() {

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
                    <Search hideButtons route="maps/search" />

                    <NavbarRight />

                    <div className='searchPage__options'>
                        <SmallNavbar  optionMaps='icon-all'/>
                    </div>
                </div>
            </div>
            
            
            <div className='searchPage__resultsUC'>
                <UnderConstructionMaps />
            </div>

            <Footer class="footer-fixed"/>            
        </div>
  )
}

export default SearchPage