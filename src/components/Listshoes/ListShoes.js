import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ListShoes.module.scss';

const cx = classNames.bind(styles);

function ListShoes({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.banner} alt="" />
            <div className={cx('container-content')}>
                <div className={cx('content-title')}>{data.name}</div>
                <div className={cx('content-text')}>{data.sex}</div>
                {data.price &&
                    ((!data.sale && <div className={cx('content-price')}>${data.price}</div>) ||
                        (data.sale && (
                            <div className={cx('wrapper-price')}>
                                <div className={cx('content-price')}>${data.price}</div>
                                <div className={cx('content-sale')}>${data.sale}</div>
                            </div>
                        )))}
            </div>
        </div>
    );
}

ListShoes.propTypes = {
    data: PropTypes.object,
};

export default ListShoes;
