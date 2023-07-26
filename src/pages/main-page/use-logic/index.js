import React from "react";
import { useState } from "react";
import data from "../../../data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogic = () => {
  const [noticeItem, setNoticeItem] = useState([]);
  const navigate= useNavigate();
  useEffect(() => {
    setNoticeItem(data);
   
  }, []);
  return {
    noticeItem,
    navigate
  };
};

export default useLogic;
