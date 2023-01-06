import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Header';
import styles from './DefaultLayout.module.scss';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
