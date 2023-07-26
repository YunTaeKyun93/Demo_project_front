import axios from "axios";
import useApiAddress from "./../api-address/index";

const usePostNotice = () => {
    console.log('post호출')
  const apiAddress = useApiAddress();
  const postDate = new Date();
  return async ({ postTitle, postAuthor, postPassword, postPhoto }) => {
    const axiosRes = await axios({
      method: "post",
      url: `${apiAddress}/article/write`,
      data: { postTitle, postAuthor, postPassword, postPhoto, postDate },
    });
  };
};

export default usePostNotice;

// const postNotice = ({ postTitle, postAuthor, postPassword, postPhoto }) => {
//   const apiAddress = useApiAddress();

//   return async () => {
//     const axiosRes = await axios({
//       method: "post",
//       url: `${apiAddress}/article/write`,
//       data: { postTitle, postAuthor, postPassword, postPhoto },
//     });
//   };
// };

// export default postNotice();
