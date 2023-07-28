import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-card.module.scss";
import ImageLoader from '../../../../components/image-loader';

const PostCard = ({ item }) => {
    const ss = classNames.bind(styles);
    return (
        <div className={ss("wrapper")}>
            <img src={item?.postPhoto} alt={item?.postPhoto} />
            <div className={ss('post-info', 'post-contents')}>
                <h3>{item.postTitle}</h3>
                <p>{item.postAuthor}</p>
            </div>
            <div className={ss('post-footer', 'post-contents')}>
                <div className={ss('post-footer-date')}>
                    <p>Date</p>
                    <span>{item.postDate}</span>
                </div>
                <div className={ss('post-footer-date')}>
                    <p>Date</p>
                    <span>{item.postDate}</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard