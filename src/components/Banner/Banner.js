import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function Banner({ image, title, text, homebtn, menbtn, womenbtn, primary }) {
    const classes = cx('wrapper', {
        primary,
    });

    return (
        <div className={classes}>
            <img className={cx('image')} src={image} alt="" />
            <div className={cx('container')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('text')}>{text}</p>
                {homebtn && (
                    <Button to="/" rightIcon={<FontAwesomeIcon icon={faRightLong} />}>
                        {homebtn}
                    </Button>
                )}
                <div className={cx('margin')}></div>
                {menbtn && (
                    <Button to="/men" rightIcon={<FontAwesomeIcon icon={faRightLong} />}>
                        {menbtn}
                    </Button>
                )}
                <div className={cx('margin')}></div>
                {womenbtn && (
                    <Button to="/women" rightIcon={<FontAwesomeIcon icon={faRightLong} />}>
                        {womenbtn}
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Banner;
