import axios from "axios";
import useApiAddress from "./../api-address/index";

const usePostNotice = () => {
  const apiAddress = useApiAddress();

  return async ({ boardTitle, boardWriter, boardPass, boardContents, fileAttached }) => {
    const data = { boardTitle, boardWriter, boardPass, boardContents, fileAttached };
    console.log(data);
    await axios({
      method: "post",
      url: `${apiAddress}/board/write`,
      data: JSON.stringify(data), 
      headers: {
        "Content-Type": "application/json" 
      }
    });
  };
};

export default usePostNotice;