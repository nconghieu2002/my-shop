import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import { createContext } from 'react';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('image')}
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/hp-ss23-UBDNAALWAYSON-HR0063-mh-large-d_tcm221-977575.jpg"
                alt=""
            />
            <div className={cx('container')}>
                <h2 className={cx('title')}>GIÀY CHÍNH HÃNG</h2>
                <p className={cx('text')}>Phong cách tươi mới, mang đến sự thoải mái.</p>
                <Button rightIcon={<FontAwesomeIcon icon={faRightLong} />}>GIÀY NAM</Button>
                <div className={cx('margin')}></div>
                <Button rightIcon={<FontAwesomeIcon icon={faRightLong} />}>GIÀY NỮ</Button>
            </div>
        </div>
    );
}

export default Banner;
