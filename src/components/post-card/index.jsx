import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-card.module.scss";

const PostCard = ({ item, selctPost }) => {
    const ss = classNames.bind(styles);
    return (
        <div className={ss("wrapper")}
            onClick={() => selctPost(item.postId)}>
            <img src={item?.postPhoto} alt={item?.postPhoto} />
            <div className={ss('post-info', 'post-contents')}>
                <h3>{item.postTitle}</h3>
            </div>
            <div className={ss('post-footer', 'post-contents')}>
                <div className={ss('post-footer-date')}>
                    <p>Date</p>
                    <span>{item.postDate}</span>
                </div>
                <div className={ss('post-footer-date')}>
                    <p>Post ID</p>
                    <span>{item.postId}</span>


                </div>
            </div>
        </div>
    )
}

export default PostCard