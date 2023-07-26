import React from "react";
import ImageLoader from "./../../../../components/image-loader/index";

const NoticeCard = ({ title, description, userName, date, image }) => {
  return (
    <div>
      {/* <ImageLoader name={image} width={150} height={150} /> */}
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {/* <span>{userName}</span>
        <span>{date}</span> */}
      </div>
    </div>
  );
};

export default NoticeCard;
