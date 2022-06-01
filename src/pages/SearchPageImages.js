import React, {useState, useContext} from 'react'
import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import SearchImages from "../components/SearchImages"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import useUnsplash from "../api/useUnsplash"
import ImageList from "../components/ImageList"

import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FeedIcon from '@mui/icons-material/Feed';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AppsIcon from '@mui/icons-material/Apps';
import ButtonBlue from "../components/ButtonBlue"


function SearchPageImages() {

    const [input] = useContext(TermContext)
    const [images, setImages] = useState([])

    const onSearchSubmit = async (term) => {
        const response = await useUnsplash.get("/search/photos", {
            params: {query: term, per_page: 20},
        });
        setImages(response.data.results)
    }

    onSearchSubmit(input)


    return (
        
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/google-clone">
                    <img className='searchPage__logo' src={logo} alt="google logo" />    
                </Link>
                
                <div className='searchPage__headerBody'>
                    <SearchImages hideButtons/>

                    <div className="right-navbar">
                        <AppsIcon className="apps-icon"/>
                        <ButtonBlue text="Sign in"/>
                    </div>

                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <Link to="/google-clone/search">
                                    <SearchIcon className="searchPage__optionsIcons"/>
                                    All
                                    </Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link className='icon-all' to="/google-clone/search">
                                    <ImageIcon className="searchPage__optionsIcons"/>
                                    Images
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/google-clone/search">
                                    <PinDropIcon className="searchPage__optionsIcons"/>
                                    Maps
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/google-clone/search">
                                    <FeedIcon className="searchPage__optionsIcons"/>
                                    News
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/google-clone/search">
                                    <OndemandVideoIcon className="searchPage__optionsIcons"/>
                                    Videos
                                </Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/google-clone/search">
                                    <MoreVertIcon className="searchPage__optionsIcons"/>
                                    More
                                </Link>
                            </div>
                        </div>

                        <div className='searchPage__optionsRight'>
                            {/* <div className='searchPage__option'>
                                <Link to="/settings">Settings</Link>
                            </div> */}
                            <div className='searchPage__option'>
                                <Link to="/google-clone/search">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className='searchPageImages__results'>
                <ImageList images={images} />
            </div>
            <Footer class="footer-static"/>            
        </div>
  )
}

export default SearchPageImages