import React from 'react'
import classNames from "classnames/bind";
import styles from "./post-list.module.scss";

import PostHeader from '../../pages/main-page/fragments/post-header';
import PostCard from '../post-card';


const PostList = ({ items, page, selctPost }) => {
    const ss = classNames.bind(styles);
    return (

        <div className={ss('wrapper')}>
            <PostHeader page={page} />
            < div className={ss('posts-container')} >
                {page === 'main' && items.map(item => (
                    <PostCard item={item} key={item.postTitle} selctPost={()=>selctPost()} />
                ))}
                {page === 'notice' && items.map(item => (
                    <PostCard item={item} key={item.postTitle} selctPost={()=>selctPost()} />
                ))}
            </div >
        </div >
    )
}

export default PostList