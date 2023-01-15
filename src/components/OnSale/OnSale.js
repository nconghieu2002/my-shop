import classNames from 'classnames/bind';
import styles from './OnSale.module.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useEffect, useState } from 'react';

import CardItem from 'components/CardItem';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function OnSale() {
    const [listData, setListData] = useState([]);
    const [currentShow, setCurrentShow] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then((res) => res.json())
            .then((res) => {
                setListData(res);
            });
    }, []);

    const handleMore = () => {
        setCurrentShow(false);
    };

    const handleRemoveMore = () => {
        setCurrentShow(false);
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Chương trình giảm giá</h2>
            {currentShow ? (
                <div>
                    <div className={cx('form')}>
                        {listData
                            .filter((data) => data.sale)
                            .splice(0, 8)
                            .map((data) => (
                                <CardItem
                                    key={data.id}
                                    to={"/detail"+data.id}
                                    img={data.banner}
                                    name={data.name}
                                    price={data.price}
                                    sale={data.sale}
                                />
                            ))}
                    </div>
                    <div className={cx('wrapper-btn')}>
                        <Button primary to="/" onClick={handleMore}>
                            Xem Thêm
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={cx('form')}>
                        {listData
                            .filter((data) => data.sale)
                            .map((data) => (
                                <CardItem
                                    key={data.id}
                                    img={data.banner}
                                    name={data.name}
                                    price={data.price}
                                    sale={data.sale}
                                />
                            ))}
                    </div>
                    <div className={cx('wrapper-btn')}>
                        <Button primary to="/" onClick={handleRemoveMore}>
                            Thu gọn
                        </Button>
                    </div>
                </div>
            )}

            {/* <div className={cx('wrapper-bootstrap')}>
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
            </div> */}
        </div>
    );
}

export default OnSale;
