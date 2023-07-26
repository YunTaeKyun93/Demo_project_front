import React from "react";
import NavMenu from "../../components/nav-menu";
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import NoticeList from "./fragements/notice-list/index";
const ss = classNames.bind(styles);

const MainPage = () => {
  const logic = useLogic();
  return (
    <div className={ss("wrapper")}>
      <NavMenu logic={logic} />
      <div className={ss("main")}>
        <div>
          <div className={ss('post-btn')} onClick={()=>logic.navigate('noticepost')}>게시글작성</div>
        </div>
        <NoticeList logic={logic} />
      </div>
    </div>
  );
};

export default MainPage;
