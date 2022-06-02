import React from "react";
import "../pages/SearchPage.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FeedIcon from '@mui/icons-material/Feed';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const SmallNavbar = (props) => {
    return(
        <React.Fragment>
            <div className='searchPage__optionsLeft'>
                <div className='searchPage__option'>
                    <Link className={props.optionAll} to="/google-clone/search">
                        <SearchIcon className="searchPage__optionsIcons"/>
                        All
                        </Link>
                </div>
                <div className='searchPage__option'>
                    <Link className={props.optionImages} to="/google-clone/images/search">
                        <ImageIcon className="searchPage__optionsIcons"/>
                        Images
                    </Link>
                </div>
                <div className='searchPage__option'>
                    <Link className={props.optionMaps} to="/google-clone/maps/search">
                        <PinDropIcon className="searchPage__optionsIcons"/>
                        Maps
                    </Link>
                </div>
                <div className='searchPage__option'>
                    <Link className={props.optionNews} to="/google-clone/news/search">
                        <FeedIcon className="searchPage__optionsIcons"/>
                        News
                    </Link>
                </div>
                <div className='searchPage__option'>
                    <Link className={props.optionVideos} to="/google-clone/videos/search">
                        <OndemandVideoIcon className="searchPage__optionsIcons"/>
                        Videos
                    </Link>
                </div>
                <div className='searchPage__option'>
                    <Link to=" ">
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
                    <Link to=" ">Tools</Link>
                </div>
            </div>
        </React.Fragment>        
    )
}

export default SmallNavbar;