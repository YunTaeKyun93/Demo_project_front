import React from 'react'
import classNames from "classnames/bind";
import styles from './main-banner.module.scss';
import mainBanner from '../../../../assets/images/main.jpeg';
import { useNavigate } from 'react-router-dom';

const MainBanner = () => {
    const ss = classNames.bind(styles);
    const navigate = useNavigate();
    return (
        <div className={ss('wrapper')}>
            <img src={mainBanner} alt={mainBanner} className={ss('main-banner')} />
            <div className={ss('post-btn')} onClick={() => navigate('/noticepost')}>게시글작성</div>
        </div>
    )
}

export default MainBanner