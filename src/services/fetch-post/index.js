import axios from 'axios'
import React from 'react'
import useApiAddress from '../api-address'
//pw id contents
const useFetchPost = () => {
    const apiAddress = useApiAddress();
    return async () => {
        const axiosResult = await axios({
            method: "fetch",
            url: `${apiAddress}`
        })
    }
}

export default useFetchPost
