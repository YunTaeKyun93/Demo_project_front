import React from "react";
import NoticeCard from "../notice-card";
const NoticeList = ({ logic }) => {
  console.log(logic.noticeItem);
  // const {title, description, userName, date, image} = logic.noticeList;
  return (
    <div>
      {logic.noticeItem.map((item) => (
        <NoticeCard title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default NoticeList;
