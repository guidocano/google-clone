import {useState, useEffect} from 'react'

// const CONTEXT_KEY = "efdab000014cfaabf"
// const API_KEY = "AIzaSyCvB-j8tvOgg5Mfj45PU9J0-1-gh9Ak8ZA"

const CONTEXT_KEY = "efdab000014cfaabf"
const API_KEY = "AIzaSyBCViAH0RIky7A6iThcbJeTzjC7dOKf3ps"

// const CONTEXT_KEY = "eeaf17c9da42d2505"
// const API_KEY = "AIzaSyB4XHUk1yAYe8z1OpJvXRP25kvAF4K_UD4"


const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect ( () => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => {
                if (response.ok) {
                    return response.json();
                } throw new Error('Something went wrong');
            })
            .then(responseJson => {
                setData(responseJson)
            
            })
            .catch(err => console.log(err))
        }

        fetchData()

    }, [term])

    return {data}
}

export default useGoogleSearch;