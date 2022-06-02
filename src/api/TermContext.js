import React, {useState, createContext} from "react";


export const TermContext = createContext();

export const TermProvider = (props) => {
    const [input, setInput] = useState("")
    const [activeInput, setActiveInput] = useState("")

    return (
        <TermContext.Provider value={{input: [input, setInput], active: [activeInput, setActiveInput]}}>
            {props.children}
        </TermContext.Provider>
    )
}