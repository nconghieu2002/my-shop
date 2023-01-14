import classNames from 'classnames/bind';
import styles from './WomenShoes.module.scss';

import Banner from 'components/Banner';

const cx = classNames.bind(styles);

function WomenShoes() {
    return (
        <div className={cx('wrapper')}>
            <Banner
                primary
                image="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/ss23-originals-stan-smith-w-blueversion-dotcom-hp-mh-large-womens-v2-d_tcm221-982547.jpg"
                title="GIÀY NỮ"
                text="Mạnh mẽ nhưng đầy nữ tính."
                homebtn="TRANG CHỦ"
                menbtn="GIÀY NAM"
            />
        </div>
    );
}

export default WomenShoes;