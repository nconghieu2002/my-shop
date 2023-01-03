import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../../../assets/images/logo.png';
import ButtonIcon from '../../../ButtonIcon';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('big-logo')} to="/">
                    <img src={logo} className={cx('logo')} />
                </Link>
                <div className={cx('menu')}>
                    <Link className={cx('menu-men')} to="/sneakermen">
                        SNEAKER NAM
                    </Link>
                    <Link className={cx('menu-girl')} to="/sneakergirl">
                        SNEAKER NỮ
                    </Link>
                    <Link className={cx('menu-blog')} to="/blog">
                        BLOG GIÀY
                    </Link>
                </div>
                <Search />
                <ButtonIcon />
            </div>
        </header>
    );
}

export default Header;
