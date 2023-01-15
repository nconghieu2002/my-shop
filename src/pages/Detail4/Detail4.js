import classNames from 'classnames/bind';
import styles from './Detail4.module.scss';
import { useContext } from 'react';

import { Context } from 'Context';

const cx = classNames.bind(styles);

function Detail4() {
    const { handleBuy } = useContext(Context);
    // console.log(listData[0].images[0])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('images')}>
                <img
                    className={cx('img-item', 'img-banner')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d0fe8aff59b4e45866aaed801395e05_9366/4DFWD_2_Running_Shoes_White_HQ1039_01_standard.jpg"
                    alt=""
                />
                <img
                    className={cx('img-item')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2981463b243648ab8c8faed801396fa9_9366/4DFWD_2_Running_Shoes_White_HQ1039_02_standard_hover.jpg"
                    alt=""
                />
                <img
                    className={cx('img-item')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/568b3748bb964f01820daed8013978ff_9366/4DFWD_2_Running_Shoes_White_HQ1039_03_standard.jpg"
                    alt=""
                />
                <img
                    className={cx('img-item')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3eaf894c25743358cdaaed801398064_9366/4DFWD_2_Running_Shoes_White_HQ1039_04_standard.jpg"
                    alt=""
                />
            </div>
            <div className={cx('container')}>
                <div className={cx('name')}>4DFWD 2 RUNNING</div>
                <div className={cx('category')}>Giày Nam</div>
                <div className={cx('wrapper-price')}>
                    <div className={cx('price')}>$200</div>
                    <div className={cx('sale')}>$100</div>
                </div>
                <div className={cx('size-title')}>Chọn size</div>
                <div className={cx('list-size')}>
                    <div className={cx('size-card')}>Size 36</div>
                    <div className={cx('size-card')}>Size 37</div>
                    <div className={cx('size-card')}>Size 38</div>
                    <div className={cx('size-card')}>Size 39</div>
                    <div className={cx('size-card')}>Size 40</div>
                    <div className={cx('size-card')}>Size 41</div>
                    <div className={cx('size-card')}>Size 42</div>
                </div>
                <button className={cx('add-btn-bag')} onClick={handleBuy}>
                    Thêm vào túi
                </button>
                <button className={cx('add-btn-wish')}>Yêu thích</button>
                <div className={cx('description')}>Thông tin chi tiết</div>
                <div className={cx('description-content')}>
                    Đôi giày giúp bạn có năng lượng từ đầu đến cuối, và nó được uốn cong hỗ trợ bàn chân bạn với mỗi
                    bước. Chiếc giày này được làm bằng sợi hiệu suất cao, chứa ít nhất 50% chất thải nhựa được tái tạo,
                    bị dạt trên các hòn đảo xa xôi, bãi biển, cộng đồng ven biển và bờ biển, ngăn chặn nó gây ô nhiễm
                    đại dương của chúng ta. 50% sợi khác được tái chế polyester.
                </div>
            </div>
        </div>
    );
}

export default Detail4;
