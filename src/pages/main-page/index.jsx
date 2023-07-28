import React from "react";
import NavMenu from "../../components/nav-menu";
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./main-page.module.scss";
import PostList from "../../components/post-list";
import MainBanner from "./fragments/main-banner";
import { useParams } from "react-router-dom";

const ss = classNames.bind(styles);

const MainPage = () => {
  const logic = useLogic();

  return (
    <div className={ss("wrapper")}>
      <NavMenu logic={logic} />
      <MainBanner />
      <PostList items={logic.noticeItems} page={'main'} />
    </div>
  );
};

export default MainPage;












{/* <div className={ss("main")}>
        <div>
          <img src="/image.jpeg" alt="Main" width="1000" height="800" />
        </div>
        <div>
          <div className={ss('post-btn')} onClick={() => logic.navigate('noticepost')}>게시글작성</div>
        </div>

      </div> */}