import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Section() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Bộ sưu tập</h2>
            <div className={cx('form')}>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d0fe8aff59b4e45866aaed801395e05_9366/4DFWD_2_Running_Shoes_White_HQ1039_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
                        <div className={cx('btn-click')}>
                            <button className={cx('btn')}></button>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87cd0b80e0434c758b15ae9801598eb2_9366/4DFWD_2_Running_Shoes_Grey_GX9250_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
                        <div className={cx('btn-click')}>
                            <button className={cx('btn')}></button>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87cd0b80e0434c758b15ae9801598eb2_9366/4DFWD_2_Running_Shoes_Grey_GX9250_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
                        <div className={cx('btn-click')}>
                            <button className={cx('btn')}></button>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/932db787a2b94b919aa5ae9900cecc55_9366/4DFWD_2_Running_Shoes_Orange_GY8421_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
                        <div className={cx('btn-click')}>
                            <button className={cx('btn')}></button>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/adc0c45127524d50ae68ae9801898d43_9366/4DFWD_2_Running_Shoes_Grey_GZ6943_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
                        <div className={cx('btn-click')}>
                            <button className={cx('btn')}></button>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/adc0c45127524d50ae68ae9801898d43_9366/4DFWD_2_Running_Shoes_Grey_GZ6943_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
                        <div className={cx('btn-click')}>
                            <button className={cx('btn')}></button>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <img
                        className={cx('img')}
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/adc0c45127524d50ae68ae9801898d43_9366/4DFWD_2_Running_Shoes_Grey_GZ6943_01_standard.jpg"
                        alt=""
                    />
                    <div className={cx('data')}>
                        <div className={cx('name')}>Ultraboost Red</div>
                        <div className={cx('sex')}>Giày nam</div>
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

export default Section;
