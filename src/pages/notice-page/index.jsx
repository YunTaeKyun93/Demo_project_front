import React from 'react'
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./notice-page.module.scss";
import PostList from '../../components/post-list';
import {  useParams } from 'react-router-dom';

const NoticePage = () => {
  const ss = classNames.bind(styles);
  const logic = useLogic();
  const { id } = useParams();
console.log({id})
  return (
    <div className={ss('wrapper')}>
      <PostList items={logic.noticeItems} page={'notice'} />
    </div>
  )
}

export default NoticePage