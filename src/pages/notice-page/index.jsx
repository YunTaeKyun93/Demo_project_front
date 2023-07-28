import React from 'react'
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./notice-page.module.scss";
import PostList from '../../components/post-list';

const NoticePage = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();
  return (
    <div className={ss('wrapper')}>
      <PostList logic={logic} page={'notice'} />
    </div>
  )
}

export default NoticePage