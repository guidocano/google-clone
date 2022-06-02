import React, {useContext} from "react";
import useGoogleSearch from "../api/useGoogleSearch"
import {TermContext} from "../api/TermContext"

function LuckySearch() {

    const {active} = useContext(TermContext)
    const [activeInput] = active

    const { data } = useGoogleSearch(activeInput);
    const link = `${data?.data.items[0].link}`

    return (
        data?.data.items.length ? window.open(link,"_self") : <div>Loading...</div>
    )
}

export default LuckySearch