import classNames from 'classnames/bind';
import styles from './OnSale.module.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import CardItem from 'components/CardItem';

const cx = classNames.bind(styles);

function OnSale() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Chương trình giảm giá</h2>
            <div className={cx('form')}>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
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
