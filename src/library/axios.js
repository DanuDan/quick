import _axios from "axios";

const axios = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false
})

export default axios