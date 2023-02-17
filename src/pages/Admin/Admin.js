import classNames from 'classnames/bind';
import styles from './Admin.module.scss';
import { useContext } from 'react';

import { Context } from 'Context';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function Admin() {
    const { listData } = useContext(Context);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Quản lý sản phẩm</h2>
            <div className={cx('add')}>
                <Button to="#" primary>
                    Thêm sản phẩm
                </Button>
            </div>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h5 className={cx('img')}>Ảnh</h5>
                    <h5 className={cx('name')}>Tên sản phẩm</h5>
                    <h5 className={cx('fix')}>Sửa</h5>
                    <h5 className={cx('delete')}>Xóa</h5>
                </div>
                <hr />
                {listData.map((data) => (
                    <div key={data.id} className={cx('content')}>
                        <img className={cx('img-detail')} src={data.banner} alt="" />
                        <div className={cx('name-detail')}>{data.name}</div>
                        <button className={cx('fix-detail')}>Sửa</button>
                        <button className={cx('delete-detail')}>Xóa</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
