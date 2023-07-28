import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-list.module.scss";

import PostHeader from '../post-header';
import PostCard from '../post-card';
{/* <PostCard data={noticeItem}/> */ }

const PostList = ({ logic }) => {
    const ss = classNames.bind(styles);
    const previewItems = logic.noticeItem.slice(-3);
    return (
        <div className={ss('wrapper')}>
            <PostHeader />
            {previewItems.map(item => (
                <PostCard item={item} key={item.postTitle} />
            ))}
        </div>
    )
}

export default PostList