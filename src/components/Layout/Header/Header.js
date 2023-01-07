import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';
import ButtonIcon from '../../ButtonIcon';
import Search from '../Search';
import config from '../../../config'

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('big-logo')} to={config.routes.home}>
                    <img src={logo} className={cx('logo')} />
                </Link>
                <div className={cx('menu')}>
                    <Link className={cx('menu-men')} to={config.routes.men}>
                        GIÀY NAM
                    </Link>
                    <Link className={cx('menu-girl')} to={config.routes.women}>
                        GIÀY NỮ
                    </Link>
                    <Link className={cx('menu-blog')} to={config.routes.blog}>
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
