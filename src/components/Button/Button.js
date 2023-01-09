import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, to, href, primary, onClick }) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default Button;
