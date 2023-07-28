import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-list.module.scss";

import PostHeader from '../../pages/main-page/fragments/post-header';
import PostCard from '../post-card';


const PostList = ({ items, page }) => {
    const ss = classNames.bind(styles);

    console.log({ page })
    return (

        <div className={ss('wrapper')}>
            <PostHeader />
            < div className={ss('posts-container')} >
                {page === 'main' && items.map(item => (
                    <PostCard item={item} key={item.postTitle} />
                ))}


                {page === 'notice' && items.map(item => (
                    <PostCard item={item} key={item.postTitle} />
                ))}

            </div >
        </div >
    )
}

export default PostList