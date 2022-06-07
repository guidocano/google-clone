import axios from "axios";

const KEY = "AIzaSyANGf9TnR7IGymoCTpgbk3olMcLcb3W5KU"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 10,
        key: KEY
    }

});
