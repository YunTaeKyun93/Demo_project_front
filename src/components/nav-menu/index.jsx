import React from "react";
import ImageLoader from "../image-loader";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./nav.module.scss";
import logo from '../../assets/logo/logo.png'

const ss = classNames.bind(styles);

const NavMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={ss("wrapper")}>
      <div className={ss("logo-container")} onClick={() => navigate("/")}>
        <ImageLoader
          name={logo}
          width={80}
          height={80}
        />
      </div>
      <div className={ss("menu")}>

      </div>
    </div>
  );
};

export default NavMenu;
