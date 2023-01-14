import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import CardItem from 'components/CardItem';

const cx = classNames.bind(styles);

function Section() {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Bộ sưu tập</h2>
            <div className={cx('form')}>
                {listData.map((data) => (
                    <CardItem key={data.id} img={data.banner} name={data.name} sex={data.sex} />
                ))}
            </div>
            <div className={cx('wrapper-btn')}>
                <Button primary to="/">
                    Xem Thêm
                </Button>
            </div>
        </div>
    );
}

export default Section;
