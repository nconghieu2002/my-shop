import classNames from 'classnames/bind';
import styles from './OnSale.module.scss';
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function OnSale() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Chương trình giảm giá</h2>
            <div className={cx('form')}>
                <div className={cx('container')}>
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
                <div className={cx('container')}>
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
                <div className={cx('container')}>
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
                <div className={cx('container')}>
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
                <div className={cx('container')}>
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
            </div>
            <div className={cx('wrapper-bootstrap')}>
                <Pagination aria-label="Page navigation example" size="sm">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" previous />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" last />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
}

export default OnSale;
