import {useState, useEffect} from 'react';
import axios from "axios";


// published and run out
// const CONTEXT_KEY = "5bbe60d8333c92627"
// const API_KEY = "AIzaSyCnCMg5PX5y_m2mhwc3UPF6TNgwauXUv6U"

const CONTEXT_KEY = "efdab000014cfaabf"
const API_KEY = "AIzaSyCvB-j8tvOgg5Mfj45PU9J0-1-gh9Ak8ZA"

// 
// const CONTEXT_KEY = "eeaf17c9da42d2505"
// const API_KEY = "AIzaSyB4XHUk1yAYe8z1OpJvXRP25kvAF4K_UD4"

//
// const CONTEXT_KEY = "efdab000014cfaabf"
// const API_KEY = "AIzaSyBCViAH0RIky7A6iThcbJeTzjC7dOKf3ps"


const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect ( () => {
        const fetchData = async() => {
            axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => {
                setData(response)
            })
            .catch(err => console.log(err))
        }

        fetchData()

    }, [term])

    return {data}
}

export default useGoogleSearch;