import React, {useContext} from "react";
import useGoogleSearch from "../api/useGoogleSearch"
import {TermContext} from "../api/TermContext"

function LuckySearch() {
    const [input] = useContext(TermContext)
    const { data } = useGoogleSearch(input);
    const link = `${data?.items[0].link}`

    return (
        data?.items.length ? window.open(link,"_self") : <div>Loading...</div>
    )
}

export default LuckySearch