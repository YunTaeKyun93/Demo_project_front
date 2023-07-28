import { useState } from "react";
import data from "../../../data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useLogic = () => {
  const [noticeItems, setNoticeItem] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setNoticeItem(data);

  }, []);
  return {
    noticeItems,
    navigate
  };
}

export default useLogic