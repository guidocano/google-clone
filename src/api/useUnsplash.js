import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 02I8FQ9uaVaAUS02-3etTBpDVaJtMtgolfRI1ikDFGo"
    }
})