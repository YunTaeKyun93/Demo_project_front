import axios from "axios";
import useApiAddress from "./../api-address/index";

const usePostNotice = () => {
  const apiAddress = useApiAddress();

  return async ({ boardTitle, boardWriter, boardPass, boardContents, fileAttached }) => {
    console.log({ boardTitle, boardWriter, boardPass, boardContents, fileAttached })
    await axios({
      method: "post",
      url: `${apiAddress}/board/write`,
      data: { boardTitle, boardWriter, boardContents, boardPass, fileAttached },
    })
  };
};

export default usePostNotice;


