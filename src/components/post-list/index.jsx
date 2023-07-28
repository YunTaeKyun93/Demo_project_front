import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-list.module.scss";

import PostHeader from '../../pages/main-page/fragments/post-header';
import PostCard from '../post-card';


const PostList = ({ logic, page }) => {
    const ss = classNames.bind(styles);
    const previewItems = logic.noticeItem.slice(-3);
    return (

        <div className={ss('wrapper')}>
            <PostHeader logic={logic} />
            < div className={ss('posts-container')} >
                {page === 'notice' && previewItems.map(item => (
                    <PostCard item={item} key={item.postTitle} />
                ))}


                {page === 'main' && previewItems.map(item => (
                    <PostCard item={item} key={item.postTitle} />
                ))}

            </div >
        </div >
    )
}

export default PostList