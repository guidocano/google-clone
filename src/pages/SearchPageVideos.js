import React, {useContext, useEffect, useState} from 'react'
import {TermContext} from "../api/TermContext"
import "./SearchPage.css"
import Search from "../components/Search"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import SmallNavbar from "../components/SmallNavbar"
import useYoutube from "../api/useYoutube";
import VideoList from "../components/video/VideoList"
// import VideoDetail from "../components/VideoDetail"


import AppsIcon from '@mui/icons-material/Apps';
import ButtonBlue from "../components/ButtonBlue"


function SearchPageVideos() {

    const {active} = useContext(TermContext)
    const [activeInput] = active
    
    // const { data } = useGoogleSearch(activeInput);
    
    const [videos, setVideos] = useState([]);
    // const [selectedVideo, setSelectedVideo] = useState(null);


    useEffect(() => {
        onTermSubmit(activeInput);
    }, [activeInput]);

    const onTermSubmit = async term => {

        const response = await useYoutube.get("/search", {
            params: {
                q: term
            }
        });


        setVideos(response.data.items)
        // setSelectedVideo(response.data.items[0])
    };





    return (
        
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/google-clone">
                    <img className='searchPage__logo' src={logo} alt="google logo" />    
                </Link>
                
                <div className='searchPage__headerBody'>
                    <Search hideButtons route="videos/search" />

                    <div className="right-navbar">
                        <AppsIcon className="apps-icon"/>
                        <ButtonBlue text="Sign in"/>
                    </div>

                    <div className='searchPage__options'>
                        <SmallNavbar optionVideos='icon-all'/>
                    </div>
                </div>
            </div>
            
            
            <div className='searchPage__results'>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="five wide column">
                            <VideoList 
                                // onVideoSelect={setSelectedVideo}
                                videos={videos}
                            />
                        </div>
                            {/* <div className="eleven wide column">
                                <VideoDetail video={selectedVideo} />
                            </div> */}

                    </div>
                </div>

            </div>

            <Footer class="footer-static"/>            
        </div>
  )
}

export default SearchPageVideos