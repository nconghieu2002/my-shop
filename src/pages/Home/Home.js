import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Banner from 'components/Banner';
import Featured from 'components/Featured';
import Section from 'components/Section';
import OnSale from 'components/OnSale';


const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Featured />
            <OnSale />
            <Section />
        </div>
    );
}

export default Home;
