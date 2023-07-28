import React from 'react'
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./notice-page.module.scss";
import PostList from '../../components/post-list';
import NavMenu from '../../components/nav-menu';
import ClipLoader from "react-spinners/ClipLoader";

const NoticePage = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();
if(logic.isNoticeItems){
  return <ClipLoader color='red' loading={logic.isNoticeItems} size={350}/>
}
  return (
    <div className={ss('wrapper')}>
       <NavMenu/>
      <PostList items={logic.noticeItems} page={'notice'} />
    </div>
  )
}

export default NoticePage