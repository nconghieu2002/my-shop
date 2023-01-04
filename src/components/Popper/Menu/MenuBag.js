import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../Popper';

const cx = classNames.bind(styles);

function MenuBag({ children }) {
    return (
        <Tippy
            interactive={true}
            // visible
            trigger="click"
            render={(attrs) => (
                <div className={cx('menu-items', 'menu-items-bag')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('wrapper-bag')}>
                            <div className={cx('bag-header')}>
                                <div className={cx('bag-header-check')}>
                                    <FontAwesomeIcon className={cx('check-color')} icon={faCheck} />
                                    <p className={cx('header-check-text')}>Đã thêm vào túi</p>
                                </div>
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className={cx('wrapper-scrool')}>
                                <div className={cx('container')}>
                                    <img
                                        className={cx('image-shoes')}
                                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/113ed7bfedf242489d79aed7016d10b6_9366/GV8697_700_GV8697_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
                                    />
                                    <div className={cx('container-content')}>
                                        <div className={cx('content-title')}>Nike Free Metcon 4</div>
                                        <div className={cx('content-sex')}>Giày Nam</div>
                                        <div className={cx('content-size')}>Size EU 44.5</div>
                                        <div className={cx('content-price')}>2000$</div>
                                    </div>
                                </div>
                                <div className={cx('container')}>
                                    <img
                                        className={cx('image-shoes')}
                                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/113ed7bfedf242489d79aed7016d10b6_9366/GV8697_700_GV8697_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
                                    />
                                    <div className={cx('container-content')}>
                                        <div className={cx('content-title')}>Nike Free Metcon 4</div>
                                        <div className={cx('content-sex')}>Giày Nam</div>
                                        <div className={cx('content-size')}>Size EU 44.5</div>
                                        <div className={cx('content-price')}>2000$</div>
                                    </div>
                                </div>
                                <div className={cx('container')}>
                                    <img
                                        className={cx('image-shoes')}
                                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/113ed7bfedf242489d79aed7016d10b6_9366/GV8697_700_GV8697_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
                                    />
                                    <div className={cx('container-content')}>
                                        <div className={cx('content-title')}>Nike Free Metcon 4</div>
                                        <div className={cx('content-sex')}>Giày Nam</div>
                                        <div className={cx('content-size')}>Size EU 44.5</div>
                                        <div className={cx('content-price')}>2000$</div>
                                    </div>
                                </div>
                                <div className={cx('container')}>
                                    <img
                                        className={cx('image-shoes')}
                                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/113ed7bfedf242489d79aed7016d10b6_9366/GV8697_700_GV8697_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
                                    />
                                    <div className={cx('container-content')}>
                                        <div className={cx('content-title')}>Nike Free Metcon 4</div>
                                        <div className={cx('content-sex')}>Giày Nam</div>
                                        <div className={cx('content-size')}>Size EU 44.5</div>
                                        <div className={cx('content-price')}>2000$</div>
                                    </div>
                                </div>
                                <div className={cx('container')}>
                                    <img
                                        className={cx('image-shoes')}
                                        src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/113ed7bfedf242489d79aed7016d10b6_9366/GV8697_700_GV8697_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
                                    />
                                    <div className={cx('container-content')}>
                                        <div className={cx('content-title')}>Nike Free Metcon 4</div>
                                        <div className={cx('content-sex')}>Giày Nam</div>
                                        <div className={cx('content-size')}>Size EU 44.5</div>
                                        <div className={cx('content-price')}>2000$</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('bag-btn')}>
                                <button className={cx('bag-btn-view', 'bag-btn-all')}>View Bag (2)</button>
                                <button className={cx('bag-btn-check', 'bag-btn-all')}>Checkout</button>
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuBag;
