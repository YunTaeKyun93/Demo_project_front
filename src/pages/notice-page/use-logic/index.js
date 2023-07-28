import { useState } from "react";
import data from "../../../data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useLogic = () => {
  const [noticeItems, setNoticeItem] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setNoticeItem(data);

  }, []);
  const selctPost = ( id ) => {
    setSelectedPostId(id);
    console.log({selectedPostId});
  };
  useEffect(() => {
    navigate(`notice/${selectedPostId}`)
  }, [selectedPostId]);
  return {
    isNoticeItems: !noticeItems,
    noticeItems,
    navigate,
    selectedPostId,
    selctPost
  };
}

export default useLogic