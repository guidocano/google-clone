import React, {useContext} from "react";
import useGoogleSearch from "../api/useGoogleSearch"
import {TermContext} from "../api/TermContext"
import {useNavigate} from "react-router-dom"

function LuckySearch() {
    const navigate = useNavigate()  
    const {active} = useContext(TermContext)
    const [activeInput] = active

    
    const { data } = useGoogleSearch(activeInput? activeInput : "programming");
    const link = `${data?.data.items[0].link}`

    return ( activeInput === "" ? navigate("/google-clone") :
        data?.data.items.length ? window.open(link,"_self") : <div>Loading...</div>
    )
}

export default LuckySearch