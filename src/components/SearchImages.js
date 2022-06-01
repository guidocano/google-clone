import React, {useState, useContext} from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from "@mui/icons-material/Mic";
import Button from "./Button";
import {TermContext} from "../api/TermContext"
import {useNavigate} from "react-router-dom"

function SearchImages ({hideButtons = false,}) {

    const [input, setInput] = useContext(TermContext)
    const [localInput, setLocalInput] = useState(input)
    const navigate = useNavigate()
        
    const search = (e) => {
        e.preventDefault();
        if (localInput !== "") {
            setInput(localInput)
            navigate("/google-clone/images/search")
        }
    }

    function searchLucky (e) {
        e.preventDefault();
        if (localInput !== "") {
            setInput(localInput)
            navigate("/google-clone/images/lucky")
        }
    }

    return (
        <form onSubmit={search} className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={localInput} onChange={e => setLocalInput(e.target.value)} />
                <MicIcon className="mic-icon"/>
            </div>
            

            {!hideButtons ? (
                <div className="search__buttons ">
                    <Button onPressed={search} text="Google Search" />
                    <Button onPressed={searchLucky} text="I'm Feeling Lucky"/>
                </div>

            ): (
                <div className="search__buttonsHidden">
                    <Button class="search__buttonsHidden" text="Google Search" />
                    <Button class="search__buttonsHidden" text="I'm Feeling Lucky"/>
                </div>
            )}
            
        </form>
    )
};

export default SearchImages;