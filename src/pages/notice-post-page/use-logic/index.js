import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostNotice from "./../../../services/post-notice/index";

const useLogic = () => {
  const postNotice = usePostNotice();
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postPassword, setPostPassword] = useState("");
  const [postPhoto, setPostPhoto] = useState("");

  const onSubmit = async (e) => {
    console.log({ postTitle, postAuthor, postPassword, postPhoto });
    e.preventDefault();
    await postNotice({ postTitle, postAuthor, postPassword, postPhoto });
    navigate("/");
  };
  return {
    postTitle,
    postAuthor,
    postPassword,
    postPhoto,
    postDescription,
    onSubmit,
    setPostDescription,
    setPostTitle,
    setPostAuthor,
    setPostPassword,
    setPostPhoto,
  };
};

export default useLogic;
