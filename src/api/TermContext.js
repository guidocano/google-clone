import React, {useState, createContext} from "react";


export const TermContext = createContext();

export const TermProvider = (props) => {
    const [input, setInput] = useState("")
    const [activeInput, setActiveInput] = useState("")
    const [theme, setTheme] = useState("light")

    return (
        <TermContext.Provider 
            value={{
                input: [input, setInput], 
                active: [activeInput, setActiveInput], 
                themes: [theme, setTheme]
                }}>
            {props.children}
        </TermContext.Provider>
    )
}