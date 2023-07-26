import React from "react";
import ImageLoader from "../image-loader";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./nav.module.scss";
const ss = classNames.bind(styles);

const NavMenu = ({ logic }) => {
  const logo = "";
  const navigator = useNavigate();
  return (
    <div className={ss("wrapper")}>
      <div className={ss("logo")}>
        <ImageLoader
          name={logo}
          width={50}
          height={50}
          onClick={() => navigator("/")}
        />
        <span>Team 6+7</span>
      </div>
      <div className={ss("menu")}>
        {logic.isLoggedin ? (
          <span onClick={() => navigator("/mypage")}>My Page</span>
        ) : (
          <>
            <span onClick={() => navigator("/signup")}>Sign Up</span>
            <span onClick={() => navigator("/signin")}>Sign In</span>
          </>
        )}
        <span onClick={() => navigator("/about")}>About</span>
        <span onClick={() => navigator("/notice")}>Notice</span>
      </div>
    </div>
  );
};

export default NavMenu;
