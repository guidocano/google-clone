import React, {useContext} from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/logo.png"
import logodark from "../assets/logodark.png"
import Search from "../components/Search"
import Footer from "../components/Footer"
import ButtonBlue from "../components/ButtonBlue"
import DarkMode from "../components/DarkMode";
import {TermContext} from "../api/TermContext"


const Home = () => {

    const {themes} = useContext(TermContext)
    const [theme] = themes
    
    return (
        <div className={theme === "light" ? "home" : "home-dark"}>
            <div className="home__header">
                <div className={theme === "light"? "home__headerLeft" : "home__headerLeft-dark"}>
                    <Link className="header-small" to="/"><span>ALL</span></Link>
                    <Link to="/images">IMAGES</Link>
                </div>

                <div className="home__headerRight">
                    <DarkMode />
                    <Link to=" " className={theme === "light"? "home__headerToHide" : "home__headerToHide-dark"}>Gmail</Link>
                    <Link to="/images" className={theme === "light"? "home__headerToHide" : "home__headerToHide-dark"}>Images</Link>
                    <AppsIcon className={theme === "light"? "apps-icon" : "apps-icon-dark"}/>
                    <ButtonBlue text="Sign in"/>
                </div>
            </div>
                
            <div className="home__body"> 
                <img src={theme === "light" ? logo : logodark} className="logo" alt="google logo" />
                <div className="home__inputContainer">
                    {<Search route="search/" />}
                </div>
            </div>
            <Footer class="footer-fixed"/>
        </div>
    )

}

export default Home;