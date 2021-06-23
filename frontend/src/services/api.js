import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8080/",
    Headers:{
        'Accept':'application/json'
    }
})