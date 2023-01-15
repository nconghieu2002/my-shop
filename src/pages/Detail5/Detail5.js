import classNames from 'classnames/bind';
import styles from './Detail5.module.scss';
import { useContext } from 'react';

import { Context } from 'Context';

const cx = classNames.bind(styles);

function Detail5() {
    const { handleBuy } = useContext(Context);
    // console.log(listData[0].images[0])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('images')}>
                <img
                    className={cx('img-item', 'img-banner')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/932db787a2b94b919aa5ae9900cecc55_9366/4DFWD_2_Running_Shoes_Orange_GY8421_01_standard.jpg"
                    alt=""
                />
                <img
                    className={cx('img-item')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85c8d8edccc94997b3bfae9900cee14d_9366/4DFWD_2_Running_Shoes_Orange_GY8421_02_standard.jpg"
                    alt=""
                />
                <img
                    className={cx('img-item')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a3f73b40d9e4416b587ae9900ceed56_9366/4DFWD_2_Running_Shoes_Orange_GY8421_03_standard.jpg"
                    alt=""
                />
                <img
                    className={cx('img-item')}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fee5135759724df68271ae9900cef5de_9366/4DFWD_2_Running_Shoes_Orange_GY8421_04_standard.jpg"
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

export default Detail5;
