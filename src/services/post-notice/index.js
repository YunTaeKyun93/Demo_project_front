import axios from "axios";
import useApiAddress from "./../api-address/index";

const usePostNotice = () => {
  console.log('post호출')
  const apiAddress = useApiAddress();

  return async ({ boardTitle, boardWriter, boardPass, boardContents, fileAttached }) => {
    const axiosRes = await axios({
      method: "post",
      url: `${apiAddress}/board/write`,
      data: { boardTitle, boardWriter, boardContents, boardPass, fileAttached },
    });
  };
};

export default usePostNotice;


