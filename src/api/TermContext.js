import React, {useState, createContext} from "react";


export const TermContext = createContext();

export const TermProvider = (props) => {
    const [input, setInput] = useState("")

    return (
        <TermContext.Provider value={[input, setInput]}>
            {props.children}
        </TermContext.Provider>
    )
}