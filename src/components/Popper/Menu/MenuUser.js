import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from 'components/Popper';
import logo from 'assets/images/logo.png';
import config from 'config';
import { useState } from 'react';

const cx = classNames.bind(styles);

// const currentUser = false;

function MenuUser({ children }) {
    const [currentUser, setCurrentUser] = useState(true);

    return (
        <Tippy
            interactive={true}
            // visible
            trigger="click"
            placement="bottom"
            render={(attrs) => (
                <div className={cx('menu-items', 'menu-items-user')} tabIndex="-1" {...attrs}>
                    {currentUser ? (
                        <PopperWrapper>
                            <div className={cx('wrapper-user')}>
                                <Link className={cx('item-logo')} to={config.routes.home}>
                                    <img src={logo} className={cx('logo')} />
                                </Link>
                                <p className={cx('title')}>Đăng ký tài khoản</p>
                                <div className={cx('login')}>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Tài khoản</p>
                                        <input className={cx('input')} type="text" placeholder="Tên đăng nhập" />
                                    </div>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Mật khẩu</p>
                                        <input className={cx('input')} type="password" placeholder="Mật khẩu" />
                                    </div>
                                    <button className={cx('signin')}>Đăng ký</button>
                                    <div className={cx('signup')}>
                                        <p>Bạn đã có tài khoản?</p>
                                        <Link onClick={() => setCurrentUser(false)} className={cx('link')} to="/">
                                            Đăng nhập
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PopperWrapper>
                    ) : (
                        <PopperWrapper>
                            <div className={cx('wrapper-user')}>
                                <Link className={cx('item-logo')} to="/">
                                    <img src={logo} className={cx('logo')} />
                                </Link>
                                <p className={cx('title')}>Đăng nhập tài khoản</p>
                                <div className={cx('login')}>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Tài khoản</p>
                                        <input className={cx('input')} type="text" placeholder="Tên đăng nhập" />
                                    </div>
                                    <div className={cx('account')}>
                                        <p className={cx('text')}>Mật khẩu</p>
                                        <input className={cx('input')} type="password" placeholder="Mật khẩu" />
                                    </div>
                                    <button className={cx('signin')}>Đăng nhập</button>
                                    <div className={cx('signup')}>
                                        <p>Bạn chưa có tài khoản?</p>
                                        <Link onClick={() => setCurrentUser(true)} className={cx('link')} to="/">
                                            Đăng ký
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PopperWrapper>
                    )}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuUser;
