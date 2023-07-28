import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostNotice from "./../../../services/post-notice/index";

const useLogic = () => {
  const postNotice = usePostNotice();
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContents, setBoardContents] = useState("");
  const [boardWriter, setBoardWriter] = useState("");
  const [boardPass, setBoardPass] = useState("");
  const [fileAttached, setFileAttached] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await postNotice({ boardTitle, boardWriter, boardContents, boardPass, fileAttached });
    navigate("/");
  };
  return {
    boardTitle,
    setBoardTitle,
    boardContents,
    setBoardContents,
    boardWriter,
    setBoardWriter,
    boardPass,
    setBoardPass,
    fileAttached,
    setFileAttached,
    onSubmit,
  };
};

export default useLogic;
