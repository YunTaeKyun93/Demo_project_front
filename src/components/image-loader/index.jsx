import React from "react";

const ImageLoader = ({ name, width, height }) => {
  return <img src={name} alt={name} width={width} height={height} />;
};

export default ImageLoader;
