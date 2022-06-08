import React, {useContext} from 'react'
import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import Search from "../components/Search"
import Footer from "../components/Footer"
import useGoogleSearch from "../api/useGoogleSearch"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import SmallNavbar from "../components/SmallNavbar"
import NavbarRight from "../components/NavbarRight"

// import Response from "../pages/Response"



function SearchPage() {

    const {active} = useContext(TermContext)
    // const [inputValue, setInputValue] = input
    const [activeInput] = active
    
    const { data } = useGoogleSearch(activeInput);


    // console.log(data?.data)


    return (
        
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/google-clone">
                    <img className='searchPage__logo' src={logo} alt="google logo" />    
                </Link>
                
                <div className='searchPage__headerBody'>
                    <Search hideButtons route="search/" />

                    <NavbarRight />

                    <div className='searchPage__options'>
                        <SmallNavbar  optionAll='icon-small'/>
                    </div>
                </div>
            </div>
            
            
            <div className='searchPage__results'>
                <p className='searchPage__resultCount'>
                    About {(data)? data?.data.searchInformation.formattedTotalResults : 0} results ({(data)? data?.data.searchInformation.formattedSearchTime: 0} seconds) 
                </p>

                {data?.data.items.map(item => (
                    <div className='searchPage__result' key={item.cacheId? item.cacheId : item.formattedUrl }>
                        <a className='searchPage__resultLink'href={item.link}>
                            {item.displayLink}
                        </a>
                        <a className='searchPage__resultTitle' href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage__resultSnippet">{item.snippet}</p>
                    </div>
                ))}
            </div>
            <Footer class="footer-static"/>            
        </div>
  )
}

export default SearchPage