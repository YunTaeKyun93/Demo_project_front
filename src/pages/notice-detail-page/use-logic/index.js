import React, { useEffect } from 'react'
import data from "../../../data";

const useLogic = () => {

  useEffect(() => {
    setNoticeItems(data);
    
  }, []);

  return {

  }
}

export default useLogic