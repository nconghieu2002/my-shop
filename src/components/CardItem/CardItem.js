import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardItem() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('link-detail')}>
                <img
                    className={cx('img')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d0fe8aff59b4e45866aaed801395e05_9366/4DFWD_2_Running_Shoes_White_HQ1039_01_standard.jpg"
                    alt=""
                />
            </Link>
            <div className={cx('data')}>
                <Link className={cx('name')}>Ultraboost Red</Link>
                <div className={cx('wrapper-price')}>
                    <div className={cx('price')}>$199</div>
                    <div className={cx('sale')}>$99</div>
                </div>
                <div className={cx('btn-click')}>
                    <button className={cx('btn')}></button>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
