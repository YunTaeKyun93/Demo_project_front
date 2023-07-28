import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-header.module.scss";

import { BsFillEyeFill } from "react-icons/bs";
const PostHeader = () => {
    const ss = classNames.bind(styles);
  return (
    <div className={ss('wrapper')}>
    <div className={ss('container')}>
        <div className={ss('header')}>
            <div className={ss('header-contents')}>
                <h2>Team 6+7 Daily Post</h2>
                <p>Let's communicate!!
                </p>
            </div>
            <div className={ss('more-btn')}> <BsFillEyeFill /><span>See More</span></div>

        </div>
    </div>
</div>
  )
}

export default PostHeader