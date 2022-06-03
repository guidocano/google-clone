import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/logo.png"
import Search from "../components/Search"
import Footer from "../components/Footer"
import ButtonBlue from "../components/ButtonBlue"

// 3.05min

const Home = () => {
    
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link className="header-small" to="/google-clone"><span>ALL</span></Link>
                    <Link to="/google-clone/images">IMAGES</Link>
                </div>

                <div className="home__headerRight">
                    <Link to="/" className="home__headerToHide">Gmail</Link>
                    <Link to="/google-clone/images" className="home__headerToHide">Images</Link>
                    <AppsIcon className="apps-icon"/>
                    <ButtonBlue text="Sign in"/>
                </div>
            </div>
                
            <div className="home__body"> 
                <img src={logo} className="logo" alt="google logo" />
                <div className="home__inputContainer">
                    {<Search />}
                </div>
            </div>
            <Footer class="footer-fixed"/>
        </div>
    )

}

export default Home;