import React from 'react'
import classNames from "classnames/bind";
import styles from './main-banner.module.scss';
import mainBanner from '../../../../assets/images/main.jpeg';
import ImageLoader from '../../../../components/image-loader';

const MainBanner = () => {
    const ss = classNames.bind(styles);

    return (
        <div>

            <img src={mainBanner} alt={mainBanner} className={ss('main-banner')} />

        </div>
    )
}

export default MainBanner