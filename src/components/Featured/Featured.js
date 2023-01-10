import classNames from 'classnames/bind';
import styles from './Featured.module.scss';

import image1 from 'assets/images/featured1.png';
import image2 from 'assets/images/featured2.png';
import image3 from 'assets/images/featured3.png';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function Featured() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Sản phẩm nổi bật</h2>
            <div className={cx('container')}>
                <button className={cx('scroll-left')}>&lsaquo;</button>
                <div className={cx('card')}>
                    <p className={cx('mark')}>ADIDAS</p>
                    <img src={image1} alt="" className={cx('img')} />
                    <div className={cx('data')}>
                        <h3 className={cx('title')}>Adidas 4DFWD 2</h3>
                        <span className={cx('price')}>$199</span>
                        <p className={cx('description')}>Giày chạy bộ 4DFWD 2</p>
                        <div className={cx('btn')}>
                            <Button>Buy</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('card')}>
                    <p className={cx('mark')}>ADIDAS</p>
                    <img src={image2} alt="" className={cx('img')} />
                    <div className={cx('data')}>
                        <h3 className={cx('title')}>Ultraboost 1.0</h3>
                        <span className={cx('price')}>$110</span>
                        <p className={cx('description')}>Giày chạy bộ 4DFWD 2</p>
                        <div className={cx('btn')}>
                            <Button>Buy</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('card')}>
                    <p className={cx('mark')}>ADIDAS</p>
                    <img src={image3} alt="" className={cx('img')} />
                    <div className={cx('data')}>
                        <h3 className={cx('title')}>Ultraboost 22</h3>
                        <span className={cx('price')}>$105</span>
                        <p className={cx('description')}>Giày chạy bộ ULTRABOOST</p>
                        <div className={cx('btn')}>
                            <Button>Buy</Button>
                        </div>
                    </div>
                </div>
                <button className={cx('scroll-right')}>&rsaquo;</button>
            </div>
        </div>
    );
}

export default Featured;
