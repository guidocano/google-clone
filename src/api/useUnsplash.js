import axios from "axios";
import {useState, useEffect} from 'react';

// export default axios.create({
//     baseURL: "https://api.unsplash.com",
//     headers: {
//         Authorization: "Client-ID 02I8FQ9uaVaAUS02-3etTBpDVaJtMtgolfRI1ikDFGo"
//     }
// })

const useUnsplash = (term) => {
    const [data, setData] = useState(null);

    useEffect ( () => {
        const fetchData = async() => {
            axios.get(
                "https://api.unsplash.com/search/photos", {
                    headers: {Authorization: "Client-ID 02I8FQ9uaVaAUS02-3etTBpDVaJtMtgolfRI1ikDFGo"},
                    params: {query: term, per_page: 20}})
            .then(response => {
                setData(response)
            })
            .catch(err => console.log(err))
        }

        fetchData()

    }, [term])

    return {data}
}

export default useUnsplash;