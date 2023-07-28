import React from 'react'
import useApiAddress from '../api-address'
import axios from 'axios';

const useDeletePost = () => {
    const apiAdderess = useApiAddress();

    return async ({ postId }) => {
        const axiosResult = await axios({
            method: "delete",
            url: `${apiAdderess}/board/delete/${postId}`
        })
        const result = axiosResult.data;
        return result;
    }
}

export default useDeletePost