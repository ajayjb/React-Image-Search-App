import axios from "axios";

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID 8rJB1pqgalqp8c9cOT2tstgcqgBAIjrdEMTSi333Yls"
       }
});