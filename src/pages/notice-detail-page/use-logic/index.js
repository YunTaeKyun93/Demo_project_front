import React, { useEffect } from 'react'
import data from "../../../data";

const useLogic = () => {
    const [noticeItems, setNoticeItems] = useState([]);

  useEffect(() => {
    setNoticeItems(data);
    
  }, []);

  return {

  }
}

export default useLogic