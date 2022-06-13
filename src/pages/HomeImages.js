import React, {useContext} from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logoi from "../assets/logoi.png"
import logoidark from "../assets/logoidark.png"
import Search from "../components/Search"
import Footer from "../components/Footer"
import ButtonBlue from "../components/ButtonBlue"
import DarkMode from "../components/DarkMode";
import {TermContext} from "../api/TermContext"

// 3.05min

const Home = () => {

    const {themes} = useContext(TermContext)
    const [theme] = themes

    return (
        <div className={theme === "light" ? "home" : "home-dark"}>
            <div className="home__header">
                <div className={theme === "light"? "home__headerLeft" : "home__headerLeft-dark"}>
                    <Link to="/google-clone">ALL</Link>
                    <Link className="header-all" to="/google-clone/images">IMAGES</Link>
                </div>

                <div className="home__headerRight">
                    <Link to="/google-clone" className="home__headerToHide"></Link>
                    <Link to="/google-clone/images" className="home__headerToHide"></Link>
                    <DarkMode />
                    <AppsIcon className={theme === "light"? "apps-icon" : "apps-icon-dark"}/>
                    <ButtonBlue text="Sign in"/>
                </div>
            </div>
                
            <div className="home__body"> 
                <img src={theme === "light" ? logoi : logoidark} className="logo" alt="google logo" />
                <div className="home__inputContainer">
                    <Search hideButtons route="images/search/" />
                </div>
            </div>
            <Footer class="footer-fixed"/>
        </div>
    )

}

export default Home;