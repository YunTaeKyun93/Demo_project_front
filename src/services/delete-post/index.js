import useApiAddress from '../api-address'
import axios from 'axios';
//id pw 
const useDeletePost = () => {
    const apiAdderess = useApiAddress();

    return async ({ postId,boardPw }) => {
        const axiosResult = await axios({
            method: "delete",
            url: `${apiAdderess}/board/delete/${postId}`
        })
        console.log(axiosResult);
        const result = axiosResult.data;
        return result;
    }
}

export default useDeletePost