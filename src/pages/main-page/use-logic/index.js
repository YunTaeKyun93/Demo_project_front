import React from "react";
import { useState } from "react";
import data from "../../../data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogic = () => {
  const [noticeItems, setNoticeItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setNoticeItems(data.slice(-3));
    
  }, []);

  return {
    noticeItems,
    navigate
  };
};

export default useLogic;
